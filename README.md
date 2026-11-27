# MK CAR AC & ACCESSORIES - Official Website

A modern, high-performance web platform built from scratch for **MK CAR AC & ACCESSORIES** using **React** and **Node.js**.

---

## 🚗 Business Profile & Contact Details

- **Business Name:** MK CAR AC & ACCESSORIES
- **Specialization:** Complete Car AC Specialists & Premium Car Accessories, Periodic Maintenance & 24/7 Roadside Assistance
- **Workshop Address:** Shop no.2, Star Elegance, near THE CBD MALL, near Sardar Patel Ring Road, Tragad, Zundal, Ahmedabad, Gujarat 382424
- **Working Hours:** **Open 24 Hours (24x7 Every Day)**
- **Helpline / Phone:** `088660 51412` / `+91 88660 51412`
- **Google Plus Code:** `4HJC+FH Ahmedabad, Gujarat`
- **Google Maps Link:** [View on Google Maps](https://www.google.com/maps/place/MK+CAR+AC+%26+ACCESSORIES/@23.1310868,72.5695696,16.59z/data=!4m6!3m5!1s0x395e83babafa6a67:0x222e10636ce3aaab!8m2!3d23.1311656!4d72.5714197!16s%2Fg%2F11njr3l62t)

---

## ⚡ Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Lucide React (feather-light modern icons)
- **Backend:** Node.js, Express, CORS, Persistent JSON File Store (bookings & inquiries)
- **Design:** Modern dark automotive aesthetic with neon cyan & ice-blue accents, fully responsive for smartphones, tablets, and desktops.

---

## 🌟 Key Features

1. **Car AC Super Specialists Showcase:**
   - 4-step diagnostic workflow: Computerized scan, Nitrogen pressure leak test, Vacuum evacuation, 100% pure R134a gas & synthetic PAG oil recharge.
   - Interactive AC symptoms guide (Warm air, foul smell, rattling compressor, water leakage inside cabin).

2. **Custom Car Accessories & Upgrades:**
   - Branded Android touchscreens with wireless Apple CarPlay & Android Auto.
   - 64-color Symphony ambient lighting suites.
   - High-throw LED headlights & Bi-LED projector fog lights.
   - Custom tailored leatherette bucket seat covers & waterproof 7D mats.
   - **Zero Wire-Cutting Guarantee:** Coupler-to-coupler fitment to preserve new car warranties.

3. **Interactive Instant Cost & Service Estimator:**
   - Vehicle category selection (Hatchback, Sedan, Compact SUV, Luxury / Full SUV).
   - Multi-service selection with dynamic real-time price & duration computation.
   - 1-click **"Lock in this Estimate"** button that pre-populates the booking modal.

4. **Online Appointment & Priority Bay Booking System:**
   - Customers can book services online specifying date, time slot, vehicle model, and custom notes.
   - Generates unique reference code (e.g., `MK-159683`).
   - Stores persistently in `server/data/bookings.json`.
   - 1-tap button to forward booking confirmation directly to the garage's WhatsApp.

5. **24/7 Emergency Assistance & Rapid Roadside Support:**
   - Top emergency bar with 24-hour hotline `088660 51412`.
   - Rapid response across SP Ring Road, Tragad, Zundal, Chandkheda, Motera, and Ahmedabad.

6. **Location & Interactive Google Map:**
   - Embedded Google Map centered on coordinates `(23.1311656, 72.5714197)`.
   - One-click navigation button taking customers directly to the exact Google Maps location.

7. **Floating Quick Actions:**
   - Instant WhatsApp Chat button.
   - Direct 24-hour calling button.

---

## 🚀 How to Run the Website

### Option 1: Start Full Stack (Recommended)

1. Make sure packages are installed (already installed in workspace):
   ```bash
   npm run install:all
   ```

2. Build the React frontend:
   ```bash
   npm run build
   ```

3. Start the Node.js production server (serves both API & React client):
   ```bash
   npm start
   ```
   Open your browser at: **`http://localhost:5000`**

---

### Option 2: Development Mode (Hot Reload)

1. **Start Backend API (Terminal 1):**
   ```bash
   cd server
   npm run dev
   ```
   *Runs on `http://localhost:5000`*

2. **Start Frontend Dev Server (Terminal 2):**
   ```bash
   cd client
   npm run dev
   ```
   *Runs on `http://localhost:3000` with automatic API proxying to port 5000.*

---

## 📁 Project Structure

```
MK Car/
├── package.json               # Root scripts for easy multi-tier management
├── README.md                  # Documentation and quickstart
├── client/                    # React + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx              # Responsive header with 24/7 hotline banner
│   │   │   ├── Hero.jsx                # High impact hero with badges and CTAs
│   │   │   ├── AcSpecialistShowcase.jsx# Deep-dive AC diagnostic & common problems
│   │   │   ├── ServicesSection.jsx     # Comprehensive auto workshop catalog
│   │   │   ├── AccessoriesShowcase.jsx # Android screens, ambient lights, audio
│   │   │   ├── CostCalculator.jsx      # Interactive vehicle service estimator
│   │   │   ├── WhyChooseUs.jsx         # 24 hours, coupler fitting, 10k+ cars
│   │   │   ├── ReviewsSection.jsx      # Google reviews with 4.9 star ratings
│   │   │   ├── LocationAndHours.jsx    # Interactive map, address & hours
│   │   │   ├── ContactSection.jsx      # Direct inquiry form & WhatsApp link
│   │   │   ├── BookingModal.jsx        # Online service slot reservation modal
│   │   │   ├── FloatingActions.jsx     # Sticky mobile WhatsApp & call buttons
│   │   │   └── Footer.jsx              # Footer with links, copyright & plus code
│   │   ├── App.jsx            # Main app orchestrator & API state
│   │   ├── index.css          # Tailwind CSS directives & custom glow styles
│   │   └── main.jsx           # React DOM root
│   ├── index.html             # HTML5 template with SEO tags & Google font
│   ├── tailwind.config.js     # Tailwind design system configuration
│   └── vite.config.js         # Vite configuration with API reverse proxy
└── server/                    # Node.js + Express Backend
    ├── server.js              # Express REST API & static build server
    ├── package.json           # Backend dependencies
    └── data/                  # Persistent data storage
        ├── bookings.json      # Confirmed service appointments
        └── inquiries.json     # Contact inquiries & messages
```
