/* ================================================================
   app.js — Single shared JavaScript file
   Local Food Menu & Delivery System — UniMak, Yoni Campus
================================================================ */

/* ── App state ──────────────────────────────────────────────── */
const App = {
  get user()   { return JSON.parse(localStorage.getItem('fms_user')   || 'null'); },
  get cart()   { return JSON.parse(localStorage.getItem('fms_cart')   || '[]');  },
  get orders() { return JSON.parse(localStorage.getItem('fms_orders') || '[]');  },
  setUser(u)   { localStorage.setItem('fms_user',   JSON.stringify(u)); },
  setCart(c)   { localStorage.setItem('fms_cart',   JSON.stringify(c)); refreshBadge(); },
  setOrders(o) { localStorage.setItem('fms_orders', JSON.stringify(o)); },
  logout() {
    localStorage.removeItem('fms_user');
    window.location.href = 'auth.html';
  }
};

/* ── Menu data ───────────────────────────────────────────────── */
const MENU = [
  { id:1,  name:'Cassava Leaves',        price:40, prep:20, img:'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:2,  name:'Jollof Rice',           price:50, prep:25, img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:3,  name:'Fufu & Groundnut Soup', price:45, prep:30, img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop', vendor:'Green Chop House' },
  { id:4,  name:'Fried Fish & Rice',     price:50, prep:25, img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=200&fit=crop', vendor:'Green Chop House' },
  { id:5,  name:'Rice & Beans',          price:35, prep:15, img:'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:6,  name:'Pepper Soup',           price:40, prep:20, img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:7,  name:'Egusi Soup & Eba',      price:48, prep:25, img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:8,  name:'Chicken Stew & Rice',   price:60, prep:20, img:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=200&h=200&fit=crop', vendor:'Green Chop House' },
  { id:9,  name:'Groundnut Soup & Rice', price:45, prep:22, img:'https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:10, name:'Okra Soup & Fufu',      price:42, prep:25, img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:11, name:'Plantain & Beans',      price:30, prep:15, img:'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:12, name:'Bread & Egg Sauce',     price:25, prep:10, img:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=200&h=200&fit=crop', vendor:'Campus Bites' },
];

/* ── Delivery locations ─────────────────────────────────────── */
const LOCATIONS = [
  'Hostel 1 – Block A', 'Hostel 1 – Block B', 'Hostel 2',
  'Lecture Hall 1', 'Lecture Hall 2', 'Library',
  'Student Centre', 'Admin Block',
];

/* ── Users (mock DB) ─────────────────────────────────────────── */
function getUsers() {
  const stored = localStorage.getItem('fms_users');
  if (stored) return JSON.parse(stored);
  const defaults = [
    { id:'c1', name:'Amadu Student',  email:'student@unimak.edu.sl', phone:'076111001', address:'Hostel 1 – Block A', password:'student123', role:'customer' },
    { id:'v1', name:'Mama Sia',       email:'vendor@unimak.edu.sl',  phone:'076111002', address:'Block A Canteen',    password:'vendor123',  role:'vendor'   },
    { id:'r1', name:'Ibrahim Kamara', email:'rider@unimak.edu.sl',   phone:'076111003', address:'Campus Gate',        password:'rider123',   role:'rider'    },
    { id:'a1', name:'Admin UniMak',   email:'admin@unimak.edu.sl',   phone:'076111004', address:'Admin Block',        password:'admin123',   role:'admin'    },
  ];
  localStorage.setItem('fms_users', JSON.stringify(defaults));
  return defaults;
}
function saveUsers(u) { localStorage.setItem('fms_users', JSON.stringify(u)); }

/* ── Auth guard ──────────────────────────────────────────────── */
function requireAuth() {
  if (!App.user) window.location.href = 'auth.html';
}

/* ── Role redirect ───────────────────────────────────────────── */
function redirectByRole(role) {
  const map = { customer:'menu.html', vendor:'vendor.html', rider:'rider.html', admin:'admin.html' };
  window.location.href = map[role] || 'menu.html';
}

/* ── Get all meals (hardcoded + vendor-uploaded) ─────────────── */
/* Merges the default MENU with any meals vendors have uploaded.
   This makes vendor meals visible to customers on the menu page. */
function getAllMeals() {
  const users       = getUsers();
  const vendors     = users.filter(u => u.role === 'vendor');
  let   allMeals    = [...MENU];                     // start with defaults

  vendors.forEach(vendor => {
    const key          = 'fms_vendor_meals_' + vendor.id;
    const vendorMeals  = JSON.parse(localStorage.getItem(key) || '[]');
    vendorMeals.forEach(m => {
      allMeals.push({
        id:         m.id,
        name:       m.name,
        price:      m.price,
        prep:       m.prep,
        img:        m.img || '',
        vendor:     vendor.name,
        vendorName: vendor.name,
        desc:       m.desc || '',
        category:   m.category || '',
        isVendor:   true,           // flag so addToCartById can handle it
      });
    });
  });

  return allMeals;
}

/* addToCartById — used by menu.html to support both numeric MENU
   ids and string vendor meal ids (e.g. "meal_1718000000000")      */
function addToCartById(id, index) {
  /* Try numeric id first (default MENU items) */
  const numId = parseInt(id);
  if (!isNaN(numId) && MENU.find(m => m.id === numId)) {
    addToCart(numId);
    return;
  }
  /* Otherwise it's a vendor meal — look it up from getAllMeals */
  const meal = getAllMeals().find(m => String(m.id) === String(id));
  if (!meal) return;
  const cart = App.cart;
  const ex   = cart.find(c => String(c.id) === String(id));
  if (ex) { ex.qty++; } else { cart.push({ ...meal, qty: 1 }); }
  App.setCart(cart);
  toast(meal.name + ' added to cart 🛒');
}

/* ── Cart helpers ───────────────────────────────────────────── */
function cartTotal() { return App.cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount() { return App.cart.reduce((s, i) => s + i.qty, 0); }

function addToCart(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;
  const cart = App.cart;
  const ex   = cart.find(c => c.id === id);
  if (ex) { ex.qty++; } else { cart.push({...item, qty: 1}); }
  App.setCart(cart);
  toast(item.name + ' added to cart 🛒');
}

function removeFromCart(id) {
  App.setCart(App.cart.filter(c => c.id !== id));
}

function updateQty(id, delta) {
  const cart = App.cart;
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) App.setCart(cart.filter(c => c.id !== id));
  else App.setCart(cart);
}

/* ── Cart badge ─────────────────────────────────────────────── */
function refreshBadge() {
  const b = document.getElementById('cart-badge');
  if (!b) return;
  const n = cartCount();
  b.textContent   = n;
  b.style.display = n > 0 ? 'flex' : 'none';
}

/* ── Toast ──────────────────────────────────────────────────── */
function toast(msg, ms = 2500) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), ms);
}

/* ── Order helpers ──────────────────────────────────────────── */
function newOrderId() { return '#' + (1000 + App.orders.length + 1); }

function placeOrder(location, payment) {
  const order = {
    id:       newOrderId(),
    items:    [...App.cart],
    subtotal: cartTotal(),
    delivery: 5,
    total:    cartTotal() + 5,
    location, payment,
    status:   'pending',
    userId:   App.user ? App.user.id : 'guest',
    placedAt: new Date().toISOString(),
  };
  const orders = App.orders;
  orders.unshift(order);
  App.setOrders(orders);
  App.setCart([]);
  return order;
}

/* ── Status config ──────────────────────────────────────────── */
const STATUS = {
  pending:   { label:'Order Placed',     cls:'s-pending',   icon:'🧾', step:0 },
  preparing: { label:'Being Prepared',   cls:'s-preparing', icon:'👨‍🍳', step:1 },
  transit:   { label:'Out for Delivery', cls:'s-transit',   icon:'🛵', step:2 },
  delivered: { label:'Delivered',        cls:'s-delivered', icon:'✅', step:3 },
  cancelled: { label:'Cancelled',        cls:'s-pending',   icon:'❌', step:0 },
};
const STATUS_KEYS = ['pending', 'preparing', 'transit', 'delivered'];

/* ── Active nav highlight ───────────────────────────────────── */
function setActiveNav(page) {
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
}

/* ── Auto back arrow injection ──────────────────────────────── */
/* Injects a back arrow on pages missing one — no HTML changes needed */
function injectBackButton() {
  const page = location.pathname.split('/').pop() || 'index.html';

  /* Skip landing and auth — they manage their own navigation */
  if (page === 'index.html' || page === '' || page === 'auth.html') return;

  /* Case 1: page has a .top-bar but no .back button (e.g. profile.html) */
  const topBar = document.querySelector('.top-bar');
  if (topBar && !topBar.querySelector('.back')) {
    const btn = document.createElement('button');
    btn.className = 'back';
    btn.innerHTML = '&#8249;';
    btn.setAttribute('aria-label', 'Go back');
    btn.onclick = () => history.back();
    topBar.insertBefore(btn, topBar.firstChild);
    return;
  }

  /* Case 2: dashboard pages with hero banners and no top-bar
     (customer.html, vendor.html, rider.html, admin.html)       */
  const hero = document.querySelector(
    '.dash-hero, .vendor-hero, .rider-hero, .admin-hero, .earn-hero'
  );
  if (hero && !document.querySelector('.hero-back-btn')) {
    const btn = document.createElement('button');
    btn.className   = 'hero-back-btn';
    btn.innerHTML   = '&#8249;';
    btn.setAttribute('aria-label', 'Go back');
    btn.setAttribute('title', 'Go back');
    btn.onclick     = () => history.back();

    /* Inline styles so no CSS file change is needed */
    Object.assign(btn.style, {
      position:   'absolute',
      top:        '14px',
      left:       '14px',
      width:      '34px',
      height:     '34px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.18)',
      border:     '1.5px solid rgba(255,255,255,0.35)',
      color:      '#fff',
      fontSize:   '24px',
      lineHeight: '1',
      display:    'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor:     'pointer',
      zIndex:     '10',
      fontFamily: 'var(--font-h)',
    });

    /* Hero must be position:relative for the absolute button to anchor */
    if (getComputedStyle(hero).position === 'static') {
      hero.style.position = 'relative';
    }

    hero.insertBefore(btn, hero.firstChild);
  }
}

/* ── Dark mode ──────────────────────────────────────────────── */
/* Reads saved preference from localStorage and applies it.
   A floating button is injected into every page automatically. */

function applyDarkMode(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  const btn = document.getElementById('dark-toggle');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

function toggleDarkMode() {
  const isDark = !document.documentElement.classList.contains('dark');
  localStorage.setItem('fms_dark_mode', isDark ? '1' : '0');
  applyDarkMode(isDark);
  toast(isDark ? '🌙 Dark mode on' : '☀️ Light mode on');
}

function injectDarkToggle() {
  if (document.getElementById('dark-toggle')) return;
  const btn = document.createElement('button');
  btn.id        = 'dark-toggle';
  btn.title     = 'Toggle dark / light mode';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.onclick   = toggleDarkMode;
  document.body.appendChild(btn);
}

/* ── Run on every page load ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  refreshBadge();
  /* Apply saved dark mode preference */
  const savedDark = localStorage.getItem('fms_dark_mode') === '1';
  applyDarkMode(savedDark);
  /* Inject the floating dark/light toggle button */
  injectDarkToggle();
  /* Inject back arrow on pages that need it */
  injectBackButton();
});