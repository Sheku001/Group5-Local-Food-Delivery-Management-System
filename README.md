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

Log in instantly using any of these pre-loaded accounts:

| Role             | Email                        | Password     |
|------------------|------------------------------|--------------|
| 🎓 Customer      | student@unimak.edu.sl        | student123   |
| 🍳 Vendor        | vendor@unimak.edu.sl         | vendor123    |
| 🛵 Delivery Rider | rider@unimak.edu.sl         | rider123     |
| ⚙️ Admin          | admin@unimak.edu.sl         | admin123     |

> You can also register a new account from the Login / Register page.

---

## 🗂️ Project Files

All 18 files live flat in one folder — no subfolders needed.

### Customer-Facing Pages
| File | Purpose |
|------|---------|
| `index.html` | Landing page with food photos and CTA buttons |
| `auth.html` | Login and registration with demo account shortcuts |
| `menu.html` | Browse all 12 available food items and add to cart |
| `cart.html` | View cart, adjust quantities, proceed to checkout |
| `checkout.html` | Select delivery location, payment method, place order |
| `track.html` | Real-time vertical order tracking with status steps |
| `orders.html` | Full order history with All / Active / Delivered filters |
| `customer.html` | Customer dashboard with stats and recent orders |
| `profile.html` | Editable profile for all roles — photo, name, phone, address |

### Vendor Pages
| File | Purpose |
|------|---------|
| `vendor.html` | Vendor dashboard with quick action buttons and new orders |
| `vendor-orders.html` | All customer orders with filter tabs and detail modal |
| `vendor-menu.html` | Add, edit, and delete meals with photo upload |
| `vendor-earnings.html` | Earnings overview with SVG line chart and order history |

### Rider Pages
| File | Purpose |
|------|---------|
| `rider.html` | Rider dashboard with New Deliveries and Past Deliveries tabs |

### Admin Pages
| File | Purpose |
|------|---------|
| `admin.html` | Admin dashboard with management buttons and earnings chart |
| `admin-orders.html` | All platform orders with status filters |
| `admin-deliveries.html` | All deliveries with real-time status tracking |

### Shared Files
| File | Purpose |
|------|---------|
| `app.js` | All shared JavaScript — state, cart, auth, orders, toasts |
| `style.css` | Complete shared stylesheet with design tokens |

---

## 👥 User Roles & Features

### 🎓 Customer
- Browse menu and add items to cart
- Place orders with delivery location and payment method
- Track orders through a vertical step-by-step timeline
- View full order history with filters
- Edit profile — name, phone, address, password, photo

### 🍳 Vendor
- Dashboard with new order alerts
- Accept or reject individual orders with full detail view
- Mark accepted orders as ready for pickup
- Add, edit, and delete meals with photo upload
- View weekly earnings with a line chart

### 🛵 Delivery Rider
- See new deliveries ready for pickup
- Tap any delivery card to view full details
- Mark orders as delivered
- View past delivery history and earnings
- Sierra Leone flag displayed on dashboard

### ⚙️ Admin
- Overview of all orders, revenue, and users
- Earnings line chart with weekly breakdown
- View all deliveries with status filters
- Access to order management and reports
- Management shortcuts for vendors, users, and riders

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

> Delivery fee: **SLE 5** on all orders.

---

## 📦 Order Status Flow

```
Order Placed  →  Being Prepared  →  Out for Delivery  →  Delivered
   (Vendor receives)   (Vendor accepts)    (Rider picks up)     (Rider completes)
```

---

## 📍 Delivery Locations

Orders can be delivered to any of these campus locations:

- Hostel 1 – Block A
- Hostel 1 – Block B
- Hostel 2
- Lecture Hall 1
- Lecture Hall 2
- Library
- Student Centre
- Admin Block

---

## 💳 Payment Methods

- 💳 Credit / Debit Card
- 📱 Mobile Money (Orange / Afrimoney)
- 💵 Cash on Delivery

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and layout |
| CSS3 | Styling with CSS custom properties (design tokens) |
| Vanilla JavaScript | All app logic, state, and interactions |
| LocalStorage | Persists users, orders, cart, and profile data |
| Google Fonts | Poppins (headings) + Nunito (body text) |
| Unsplash | Placeholder food photography |
| ui-avatars.com | Auto-generated profile avatars |
| Inline SVG | Sierra Leone flag, icons, line charts |

---

## 🏗️ Architecture Notes

- **Single shared `app.js`** — All pages load one script file that handles state, cart, auth, orders, and toasts
- **Single shared `style.css`** — All pages share one stylesheet with CSS variables for consistent theming
- **LocalStorage as database** — All data (users, orders, cart, meals, avatars) is stored in the browser's LocalStorage
- **No backend required** — The entire app runs client-side in the browser
- **Mobile-first design** — Simulates a 420px phone width, centred on desktop with a shadow frame
- **Role-based routing** — After login, users are automatically redirected to their role-specific dashboard

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--green` | `#2A7A2E` | Primary brand colour — buttons, active nav |
| `--green-dark` | `#1B5220` | Hover states |
| `--orange` | `#D95F02` | CTA buttons, delivery status |
| `--font-h` | Poppins | All headings and labels |
| `--font-b` | Nunito | Body text and inputs |
| `--app-w` | 420px | Simulated phone width |
| `--nav-h` | 62px | Bottom navigation height |

---

## 🔄 How Data Persists

All data is saved to the browser's **LocalStorage** under these keys:

| Key | Data |
|-----|------|
| `fms_user` | Currently logged-in user |
| `fms_users` | All registered users |
| `fms_cart` | Current cart items |
| `fms_orders` | All placed orders |
| `fms_avatar_{userId}` | Profile photo (base64) |
| `fms_vendor_meals_{userId}` | Vendor's uploaded meals |

> **Note:** Data is stored per browser. Clearing browser data or cache will reset the app to default demo accounts.

---

## 🚀 Future Improvements

- [ ] Real backend with a database (e.g. Firebase or Node.js + MongoDB)
- [ ] Push notifications for order status updates
- [ ] Live chat between customer and vendor
- [ ] Google Maps integration for delivery tracking
- [ ] Online payment gateway integration (Orange Money API)
- [ ] Admin vendor approval system
- [ ] Print receipts / order invoices
- [ ] Multi-language support (Krio, Temne, Mende)

---

## 👨‍💻 Developer

**Project:** Local Food Menu & Delivery System  
**Institution:** University of Makeni (UniMak), Yoni Campus  
**Country:** Sierra Leone 🇸🇱  
**Course:** Web Programming  
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