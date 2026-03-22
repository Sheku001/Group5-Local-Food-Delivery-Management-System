/* ================================================================
   app.js — Single shared JavaScript file
   Handles: state, cart, auth, menu data, orders, toasts
   All pages must load this file
   ================================================================ */


/* ── App state (stored in localStorage) ───────────────────────── */

const App = {

  get user()   { return JSON.parse(localStorage.getItem('fms_user')   || 'null'); },
  get cart()   { return JSON.parse(localStorage.getItem('fms_cart')   || '[]'); },
  get orders() { return JSON.parse(localStorage.getItem('fms_orders') || '[]'); },

  setUser(u)   { localStorage.setItem('fms_user', JSON.stringify(u)); },
  setCart(c)   { localStorage.setItem('fms_cart', JSON.stringify(c)); refreshBadge(); },
  setOrders(o) { localStorage.setItem('fms_orders', JSON.stringify(o)); },

  logout() {
    localStorage.removeItem('fms_user');
    window.location.href = "auth.html";
  }

};


/* ── Menu data ────────────────────────────────────────────────── */

const MENU = [

  { id:1,  name:'Cassava Leaves', price:40, prep:20, img:'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:2,  name:'Jollof Rice', price:50, prep:25, img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:3,  name:'Fufu & Groundnut Soup', price:45, prep:30, img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop', vendor:'Green Chop House' },
  { id:4,  name:'Fried Fish & Rice', price:50, prep:25, img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=200&fit=crop', vendor:'Green Chop House' },
  { id:5,  name:'Rice & Beans', price:35, prep:15, img:'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:6,  name:'Pepper Soup', price:40, prep:20, img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:7,  name:'Egusi Soup & Eba', price:48, prep:25, img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:8,  name:'Chicken Stew & Rice', price:60, prep:20, img:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=200&h=200&fit=crop', vendor:'Green Chop House' },
  { id:9,  name:'Groundnut Soup & Rice', price:45, prep:22, img:'https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:10, name:'Okra Soup & Fufu', price:42, prep:25, img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop', vendor:'Mama Sia Kitchen' },
  { id:11, name:'Plantain & Beans', price:30, prep:15, img:'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=200&h=200&fit=crop', vendor:'Campus Bites' },
  { id:12, name:'Bread & Egg Sauce', price:25, prep:10, img:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=200&h=200&fit=crop', vendor:'Campus Bites' }

];


/* ── Delivery Locations ─────────────────────────────────────── */

const LOCATIONS = [
  'Hostel 1 – Block A',
  'Hostel 1 – Block B',
  'Hostel 2',
  'Lecture Hall 1',
  'Lecture Hall 2',
  'Library',
  'Student Centre',
  'Admin Block'
];


/* ── Users (Mock database) ───────────────────────────────────── */

function getUsers() {

  const stored = localStorage.getItem("fms_users");

  if (stored) return JSON.parse(stored);

  const defaults = [

    { id:'c1', name:'Amadu Student', email:'student@unimak.edu.sl', password:'student123', role:'customer' },

    { id:'v1', name:'Mama Sia', email:'vendor@unimak.edu.sl', password:'vendor123', role:'vendor' },

    { id:'r1', name:'Ibrahim Kamara', email:'rider@unimak.edu.sl', password:'rider123', role:'rider' },

    { id:'a1', name:'Admin UniMak', email:'admin@unimak.edu.sl', password:'admin123', role:'admin' }

  ];

  localStorage.setItem("fms_users", JSON.stringify(defaults));

  return defaults;

}


/* ── Login Function ─────────────────────────────────────────── */

function doLogin(e) {

  e.preventDefault();

  const email = document.getElementById("l-email").value.trim().toLowerCase();
  const pass  = document.getElementById("l-pass").value;

  const user = getUsers().find(
    u => u.email.toLowerCase() === email && u.password === pass
  );

  if (!user) {
    toast("Invalid email or password ❌");
    return;
  }

  App.setUser(user);

  toast("Login successful ✅");

  setTimeout(() => redirectByRole(user.role), 800);

}


/* ── Redirect Based on Role ─────────────────────────────────── */

function redirectByRole(role) {

  const map = {

    customer : "menu.html",
    vendor   : "vendor.html",
    rider    : "rider.html",
    admin    : "admin.html"

  };

  window.location.href = map[role] || "menu.html";

}


/* ── Cart Functions ─────────────────────────────────────────── */

function addToCart(id) {

  const item = MENU.find(m => m.id === id);
  if (!item) return;

  const cart = App.cart;
  const ex = cart.find(c => c.id === id);

  if (ex) ex.qty++;
  else cart.push({...item, qty:1});

  App.setCart(cart);

  toast(item.name + " added to cart 🛒");

}

function cartTotal() {
  return App.cart.reduce((sum,i)=> sum + i.price*i.qty,0);
}

function cartCount() {
  return App.cart.reduce((sum,i)=> sum + i.qty,0);
}


/* ── Cart Badge ────────────────────────────────────────────── */

function refreshBadge(){

  const badge = document.getElementById("cart-badge");

  if(!badge) return;

  const n = cartCount();

  badge.textContent = n;

  badge.style.display = n > 0 ? "flex" : "none";

}


/* ── Toast Notification ────────────────────────────────────── */

function toast(msg, ms=2500){

  let t = document.getElementById("toast");

  if(!t){

    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);

  }

  t.textContent = msg;

  t.classList.add("show");

  clearTimeout(t._timer);

  t._timer = setTimeout(()=>{

    t.classList.remove("show");

  }, ms);

}


/* ── Order System ───────────────────────────────────────────── */

function newOrderId(){

  return "#" + (1000 + App.orders.length + 1);

}

function placeOrder(location,payment){

  const order = {

    id:newOrderId(),
    items:[...App.cart],
    subtotal:cartTotal(),
    delivery:5,
    total:cartTotal()+5,
    location,
    payment,
    status:"pending",
    userId:App.user ? App.user.id : "guest",
    placedAt:new Date().toISOString()

  };

  const orders = App.orders;

  orders.unshift(order);

  App.setOrders(orders);

  App.setCart([]);

  return order;

}


/* ── Status Flow ───────────────────────────────────────────── */

const STATUS = {

  pending:{label:"Order Placed", icon:"📋"},
  preparing:{label:"Preparing", icon:"👨‍🍳"},
  transit:{label:"Out for Delivery", icon:"🛵"},
  delivered:{label:"Delivered", icon:"✅"}

};


/* ── Highlight Active Nav ──────────────────────────────────── */

function setActiveNav(page){

  document.querySelectorAll(".nav-item[data-page]").forEach(el => {

    el.classList.toggle("active", el.dataset.page === page);

  });

}


/* ── Initialize Badge ──────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", refreshBadge);