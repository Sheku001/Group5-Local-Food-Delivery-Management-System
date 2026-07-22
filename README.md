# 🍛 Local Food Menu & Delivery System
### UniMak — University of Makeni, Yoni Campus · Sierra Leone 🇸🇱

> A fully functional, mobile-first web application for ordering and delivering local food on campus. Built with plain HTML, CSS, and JavaScript — no frameworks, no backend, no installation required.

---

## 📱 How to Run

1. Download all project files into **one single folder**
2. Double-click **`index.html`** to open in your browser
3. That's it — no server, no installation, no internet required after first load

> **Tip:** Use Google Chrome or Microsoft Edge for the best experience.

---

## 🔐 Demo Accounts

Log in instantly using any of these pre-loaded accounts from the Login page:

| Role | Email | Password |
|------|-------|----------|
| 🎓 Customer | student@unimak.edu.sl | student123 |
| 🍳 Vendor | vendor@unimak.edu.sl | vendor123 |
| 🛵 Delivery Rider | rider@unimak.edu.sl | rider123 |
| ⚙️ Admin | admin@unimak.edu.sl | admin123 |

> You can also register a new account from the Login / Register page.

---

## 🗂️ Project Files

All **22 files** live flat in one folder — no subfolders needed.

### Customer-Facing Pages
| File | Purpose |
|------|---------|
| `index.html` | Landing page with food photos and CTA buttons |
| `auth.html` | Login and registration with organised demo account cards |
| `menu.html` | Browse all food items — includes vendor-uploaded meals |
| `cart.html` | View cart, adjust quantities, proceed to checkout |
| `checkout.html` | Select delivery location, payment method, place order |
| `track.html` | Order tracking with ETA, placed time, rider info, and share button |
| `orders.html` | Full order history with All / Active / Delivered filters |
| `customer.html` | Customer dashboard with greeting, featured meal, and reorder button |
| `profile.html` | Editable profile for all roles — photo upload, name, phone, address |

### Vendor Pages
| File | Purpose |
|------|---------|
| `vendor.html` | Vendor dashboard with action grid and new order preview |
| `vendor-orders.html` | All customer orders with filter tabs and detail modal |
| `vendor-menu.html` | Add, edit, and delete meals with image upload and custom confirm |
| `vendor-earnings.html` | Earnings with period filter (Today/Week/Month), avg order value, withdrawal button |

### Rider Pages
| File | Purpose |
|------|---------|
| `rider.html` | Rider dashboard with time-based greeting, today's summary, search filter, and delivery modal |

### Admin Pages
| File | Purpose |
|------|---------|
| `admin.html` | Admin dashboard with action grid, SVG earnings chart, and recent orders |
| `admin-orders.html` | All platform orders with status filters |
| `admin-deliveries.html` | All deliveries with real-time status tracking |
| `admin-users.html` | Full user management — view, add, and delete users by role |

### Shared Files
| File | Purpose |
|------|---------|
| `app.js` | All shared JavaScript — state, cart, auth, orders, dark mode, back navigation |
| `style.css` | Responsive stylesheet with design tokens, animations, and dark mode |
| `README.md` | Project documentation |
| `LocalFoodDelivery.pptx` | Project presentation (10 slides) |

---

## 👥 User Roles & Features

### 🎓 Customer
- Time-based greeting (Good Morning / Afternoon / Evening)
- Featured Meal of the Day banner on dashboard
- Browse all 12 default meals plus vendor-uploaded meals
- Add to cart and checkout with location and payment selection
- Track orders with estimated delivery time and share status
- One-tap **Reorder** button on past delivered orders
- View full order history with status filters
- Edit profile — name, phone, address, password, and profile photo

### 🍳 Vendor
- Dashboard with 4-button action grid
- Accept or reject orders with full detail modal
- Mark orders as ready for rider pickup
- Upload and manage custom meals (photo, name, description, price, prep time, category)
- Meals automatically appear on the customer-facing menu
- Earnings with **period filter** (All Time / Month / Week / Today)
- Average order value and request withdrawal button
- SVG line chart showing weekly earnings overview

### 🛵 Delivery Rider
- Time-based greeting and today's summary card in hero
- **Search deliveries** by order ID or location
- New Deliveries / Past Deliveries tab panels
- Tap any order card for full delivery details modal
- Call Customer and Mark Delivered buttons
- Rider info card shown on customer tracking page when order is in transit
- Profile page accessible from dashboard avatar

### ⚙️ Admin
- Dashboard with management action grid (Vendors / Users / Riders / Orders)
- SVG line chart for weekly earnings overview
- Summary cards: Today's Earnings, Total Orders, Pending, In Delivery
- **Full user management** — view all users by role, add new users, delete users
- All orders with status filter tabs
- All deliveries with filter tabs and status badges
- Profile accessible from top-right avatar

---

## ✨ Recent Updates

| Feature | File(s) Changed |
|---------|----------------|
| Time-based greeting (Morning / Afternoon / Evening) | `customer.html`, `rider.html` |
| Featured Meal of the Day banner | `customer.html` |
| Reorder button on past orders | `customer.html` |
| Today's summary card in rider hero | `rider.html` |
| Delivery search filter | `rider.html` |
| Estimated delivery time (ETA) on tracking | `track.html` |
| Order placed time and item count on tracking | `track.html` |
| Rider info card when order is in transit | `track.html` |
| Share Order Status button | `track.html` |
| Delivery success celebration card | `track.html` |
| Period filter (Today / Week / Month / All) on earnings | `vendor-earnings.html` |
| Average order value stat | `vendor-earnings.html` |
| Request Withdrawal button | `vendor-earnings.html` |
| Admin user management (add/delete by role) | `admin-users.html` *(new)* |
| Vendor meals visible on customer menu | `app.js`, `menu.html` |
| Dark / Light mode toggle | `app.js`, `style.css` |
| Auto back arrow on all pages | `app.js` |
| Fully responsive layout (mobile → desktop) | `style.css` |
| Pulse animation on pending badges | `style.css` |
| Fade-in card animations | `style.css` |
| Dark mode fix for logout buttons | `style.css` |

---

## 🍽️ Available Menu Items

| # | Meal | Price | Prep Time | Vendor |
|---|------|-------|-----------|--------|
| 1 | Cassava Leaves | SLE 40 | 20 mins | Mama Sia Kitchen |
| 2 | Jollof Rice | SLE 50 | 25 mins | Mama Sia Kitchen |
| 3 | Fufu & Groundnut Soup | SLE 45 | 30 mins | Green Chop House |
| 4 | Fried Fish & Rice | SLE 50 | 25 mins | Green Chop House |
| 5 | Rice & Beans | SLE 35 | 15 mins | Campus Bites |
| 6 | Pepper Soup | SLE 40 | 20 mins | Campus Bites |
| 7 | Egusi Soup & Eba | SLE 48 | 25 mins | Mama Sia Kitchen |
| 8 | Chicken Stew & Rice | SLE 60 | 20 mins | Green Chop House |
| 9 | Groundnut Soup & Rice | SLE 45 | 22 mins | Campus Bites |
| 10 | Okra Soup & Fufu | SLE 42 | 25 mins | Mama Sia Kitchen |
| 11 | Plantain & Beans | SLE 30 | 15 mins | Campus Bites |
| 12 | Bread & Egg Sauce | SLE 25 | 10 mins | Campus Bites |

> Delivery fee: **SLE 5** on all orders. Vendors can also add their own meals which appear alongside the default menu.

---

## 📦 Order Status Flow

```
Order Placed  →  Being Prepared  →  Out for Delivery  →  Delivered
  (Customer)      (Vendor accepts)     (Rider picks up)    (Rider completes)
```

Each step shows on the customer's tracking page with an estimated time remaining (ETA).

---

## 📍 Delivery Locations

| Location |
|----------|
| Hostel 1 – Block A |
| Hostel 1 – Block B |
| Hostel 2 |
| Lecture Hall 1 |
| Lecture Hall 2 |
| Library |
| Student Centre |
| Admin Block |

---

## 💳 Payment Methods

- 💳 Credit / Debit Card
- 📱 Mobile Money (Orange / Afrimoney)
- 💵 Cash on Delivery

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure, forms, semantic layout |
| CSS3 | Design tokens, responsive breakpoints, animations, dark mode |
| Vanilla JavaScript | Auth, cart, orders, state management, LocalStorage |
| LocalStorage | Client-side data persistence (no backend needed) |
| Google Fonts | Poppins (headings) + Nunito (body text) |
| Inline SVG | Sierra Leone flag, icons, line charts |
| GitHub Pages | Free hosting and deployment |

---

## 🏗️ Architecture

- **Single `app.js`** — all pages share one script for auth, cart, orders, dark mode, and back navigation
- **Single `style.css`** — all pages share one stylesheet with CSS custom properties
- **LocalStorage as database** — all data persists in the browser with no server
- **Mobile-first design** — fluid layout from 320px phones to 1440px+ desktops
- **Role-based routing** — users are redirected to their dashboard after login
- **Vendor meals on customer menu** — `getAllMeals()` merges hardcoded and vendor-uploaded items

---

## 🔄 How Data Persists

| Key | Data |
|-----|------|
| `fms_user` | Currently logged-in user |
| `fms_users` | All registered users |
| `fms_cart` | Current cart items |
| `fms_orders` | All placed orders |
| `fms_dark_mode` | User's dark / light mode preference |
| `fms_avatar_{userId}` | Profile photo (base64) |
| `fms_vendor_meals_{userId}` | Vendor's uploaded meals |

> **Note:** Data is stored per browser. Clearing browser data resets the app to default demo accounts.

---

## 🚀 Future Improvements

- [ ] Real backend with Firebase or Node.js + MongoDB
- [ ] Push notifications for order status updates
- [ ] Live chat between customer and vendor
- [ ] Google Maps integration for live delivery tracking
- [ ] Online payment gateway (Orange Money API)
- [ ] Admin vendor approval and verification system
- [ ] Print receipts and downloadable order invoices
- [ ] Multi-language support (Krio, Temne, Mende)
- [ ] Customer meal ratings and reviews
- [ ] Rider earnings withdrawal to mobile money

---

## 👨‍💻 Developer

**Project:** Local Food Menu & Delivery System  
**Institution:** University of Makeni (UniMak), Yoni Campus  
**Country:** Sierra Leone 🇸🇱  
**Course:** Web Programming  
**GitHub:** [Sheku001](https://github.com/Sheku001)  
**Built with:** HTML · CSS · JavaScript  

## 🔗 Repository

| | Link |
|--|------|
| 📁 **GitHub Repository** | [https://github.com/Sheku001/Local-Food-Delivery-Management-System](https://github.com/Sheku001/Local-Food-Delivery-Management-System) |
| 🌐 **Live Demo** | [https://sheku001.github.io/Local-Food-Delivery-Management-System](https://sheku001.github.io/Local-Food-Delivery-Management-System) |

> To clone and run locally:
> ```bash
> git clone https://github.com/Sheku001/Local-Food-Delivery-Management-System.git
> ```
> Then open `index.html` in your browser.

---

*© 2025 UniMak Local Food Delivery — All rights reserved*