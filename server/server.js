const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Data storage paths
const DATA_DIR = path.join(__dirname, 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory and files exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(BOOKINGS_FILE)) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2));
}

if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2));
}

// Helpers
const readJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeJSON = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Garage Details
const garageInfo = {
  name: "MK CAR AC & ACCESSORIES",
  tagline: "Ahmedabad's Trusted Car AC Specialists & Complete Car Care Workshop",
  phone: "088660 51412",
  phoneFormatted: "+91 88660 51412",
  whatsapp: "918866051412",
  address: "Shop no.2, Star Elegance, near THE CBD MALL, near Sardar Patel Ring Road, Tragad, Zundal, Ahmedabad, Gujarat 382424",
  plusCode: "4HJC+FH Ahmedabad, Gujarat",
  hours: "Open 24 Hours (24x7 Roadside & Emergency AC Support)",
  coordinates: {
    lat: 23.1311656,
    lng: 72.5714197
  },
  mapUrl: "https://www.google.com/maps/place/MK+CAR+AC+%26+ACCESSORIES/@23.1310868,72.5695696,16.59z/data=!4m6!3m5!1s0x395e83babafa6a67:0x222e10636ce3aaab!8m2!3d23.1311656!4d72.5714197!16s%2Fg%2F11njr3l62t?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEyMi4wIKXMDSoASAFQAw%3D%3D",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.756782559795!2d72.5688448!3d23.1311656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83babafa6a67%3A0x222e10636ce3aaab!2sMK%20CAR%20AC%20%26%20ACCESSORIES!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
};

// Services Data
const services = [
  {
    id: "car-ac-service",
    title: "Car AC Complete Service & Gas Refill",
    category: "AC Specialist",
    description: "Full system vacuuming, leak detection with pressure test, 100% pure R134a/R1234yf refrigerant recharge, compressor oil replacement, and ice-cold vent temperature calibration.",
    priceStartingAt: "Reach Out for Rates",
    image: "/images/ac-gas-manifold-recharge.jpg",
    features: [
      "High precision R134a Gas top-up",
      "Nitrogen leak pressure test",
      "Condenser & radiator deep coil wash",
      "Cabin AC filter cleaning / replacement",
      "Vent temperature drop inspection"
    ],
    popular: true,
    icon: "Snowflake"
  },
  {
    id: "ac-compressor-repair",
    title: "AC Compressor & Cooling Coil Repair",
    category: "AC Specialist",
    description: "Expert diagnosis and repair for noisy compressors, clutch slippage, valve failures, and dashboard cooling coil replacements with zero rattle warranty.",
    priceStartingAt: "Reach Out for Rates",
    image: "/images/ac-compressor-evaporator.jpg",
    features: [
      "Clutch coil & bearing overhaul",
      "Expansion valve replacement",
      "Evaporator (cooling coil) replacement",
      "Electrical wiring & thermostat sensors check",
      "Full warranty on fitted spares"
    ],
    popular: true,
    icon: "Wrench"
  },
  {
    id: "car-accessories",
    title: "Premium Android Screens & Audio",
    category: "Accessories",
    description: "Upgrade your car with latest 4K IPS Android touchscreens, Apple CarPlay, wireless Android Auto, subwoofers, component speakers, and DSP sound processors.",
    priceStartingAt: "Reach Out for Rates",
    image: "/images/carplay-android-display.jpg",
    features: [
      "Wireless Apple CarPlay & Android Auto",
      "Coupler to coupler fitting (Warranty safe)",
      "High-output components & amplifiers",
      "Reverse AHD Night Vision Cameras",
      "Steering wheel controls integration"
    ],
    popular: true,
    icon: "Music"
  },
  {
    id: "car-lighting-styling",
    title: "LED / HID Headlights & Ambient Lighting",
    category: "Accessories",
    description: "Super bright multi-wattage LED headlight bulbs, bi-LED projector fog lights, and 64-color app-controlled interior ambient lighting suites.",
    priceStartingAt: "Reach Out for Rates",
    image: "/images/biled-projector-headlamp.jpg",
    features: [
      "Ultra-throw high power LED beams",
      "Waterproof projector fog lights",
      "App-controlled symphony ambient light",
      "Illuminated scuff plates & footwell lights",
      "Zero wire cutting guarantee"
    ],
    popular: false,
    icon: "Sparkles"
  },
  {
    id: "interior-accessories",
    title: "Custom 7D Mats & Luxury Seat Covers",
    category: "Accessories",
    description: "Tailor-made bucket fit seat covers in high-grade leatherette, ultra-durable all-weather 7D mats, steering wraps, and interior soundproofing.",
    priceStartingAt: "Reach Out for Rates",
    image: "/images/luxury-seatcovers-7dmats.jpg",
    features: [
      "Custom stitching & breathable designs",
      "Waterproof & dust-resistant 7D footmats",
      "Hand-stitched leather steering wrap",
      "Car covers & sun blinds",
      "Perfumes & premium detailing kits"
    ],
    popular: false,
    icon: "ShieldCheck"
  },
  {
    id: "mechanical-pms",
    title: "Periodic Maintenance Service (PMS)",
    category: "Mechanical",
    description: "Comprehensive 40-point inspection, synthetic engine oil change, oil filter, air filter, spark plugs inspection, brake pads servicing, and fluid top-ups.",
    priceStartingAt: "Reach Out for Rates",
    image: "/images/engine-oil-synthetic-pms.jpg",
    features: [
      "Castrol / Mobil 1 synthetic engine oils",
      "OE quality oil and air filters",
      "4-wheel brake cleaning & caliper greasing",
      "Coolant, brake fluid & wiper wash top-up",
      "Full underbody & suspension check"
    ],
    popular: true,
    icon: "Settings"
  },
  {
    id: "electrical-diagnostics",
    title: "Computerized Scanning & Battery Care",
    category: "Mechanical",
    description: "Advanced OBD-II computer diagnostic scanner to diagnose check engine lights, ABS, airbag, ECM faults, and on-spot battery jumpstart & replacement.",
    priceStartingAt: "Reach Out for Rates",
    image: "/images/obd2-scanner-diagnostics.jpg",
    features: [
      "Full ECU diagnostic report",
      "Alternator & starter motor testing",
      "Amaron & Exide authorized battery sales",
      "Power window & central lock repairs",
      "Wiring harness rectification"
    ],
    popular: false,
    icon: "Cpu"
  },
  {
    id: "breakdown-emergency",
    title: "24x7 Roadside Breakdown & AC Support",
    category: "Emergency",
    description: "Stranded on SP Ring Road, Tragad, Chandkheda, or anywhere in Ahmedabad? Call our rapid response mobile team 24 hours a day.",
    priceStartingAt: "Reach Out 24/7",
    image: "/images/roadside-emergency-jumpstart.jpg",
    features: [
      "24 hours round-the-clock availability",
      "Rapid dispatch to SP Ring Road & Zundal",
      "Battery jumpstart on site",
      "Flat tyre & puncture assistance",
      "Emergency towing & onsite AC fix"
    ],
    popular: true,
    icon: "PhoneCall"
  }
];

// Customer Reviews
const reviews = [
  {
    id: 1,
    name: "Hardik Patel",
    location: "Tragad, Ahmedabad",
    rating: 5,
    car: "Hyundai Creta",
    comment: "My Creta AC stopped blowing cold air in 44°C Ahmedabad summer. Went to MK CAR AC near CBD Mall. They diagnosed a condenser leak, repaired it, and recharged the gas in 2 hours. Chilling performance now! Very honest rates.",
    date: "1 week ago"
  },
  {
    id: 2,
    name: "Rajesh Sharma",
    location: "Zundal Circle",
    rating: 5,
    car: "Maruti Suzuki Baleno",
    comment: "Best car accessories shop around SP Ring Road! Got a 9-inch Android screen with 360 camera and ambient lights fitted. Wire fitting was completely coupler to coupler without any cut. Excellent workmanship.",
    date: "2 weeks ago"
  },
  {
    id: 3,
    name: "Jignesh Desai",
    location: "Chandkheda",
    rating: 5,
    car: "Kia Seltos",
    comment: "They are open 24 hours which was a lifesaver for me when my car alternator acted up late night near SP Ring Road. The mechanic reached quickly and resolved the issue. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: 4,
    name: "Amit Vaghela",
    location: "Motera",
    rating: 5,
    car: "Tata Nexon",
    comment: "Honest and transparent service. Other workshops quoted an exorbitant price for full AC compressor replacement. MK Car diagnosed it was just a valve and magnetic clutch issue, solved it at a fraction of the cost. True specialists!",
    date: "1 month ago"
  }
];

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'MK CAR AC & ACCESSORIES API', time: new Date() });
});

app.get('/api/garage-info', (req, res) => {
  res.json(garageInfo);
});

app.get('/api/services', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    return res.json(services.filter(s => s.category.toLowerCase() === category.toLowerCase()));
  }
  res.json(services);
});

app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

// Bookings
app.get('/api/bookings', (req, res) => {
  const bookings = readJSON(BOOKINGS_FILE);
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const { name, phone, carMakeModel, serviceType, preferredDate, preferredTime, notes } = req.body;

  if (!name || !phone || !serviceType) {
    return res.status(400).json({ error: 'Name, phone number, and service type are required.' });
  }

  const bookings = readJSON(BOOKINGS_FILE);
  const newBooking = {
    id: `MK-${Date.now().toString().slice(-6)}`,
    name,
    phone,
    carMakeModel: carMakeModel || 'Not Specified',
    serviceType,
    preferredDate: preferredDate || new Date().toISOString().split('T')[0],
    preferredTime: preferredTime || 'Flexible',
    notes: notes || '',
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };

  bookings.unshift(newBooking);
  writeJSON(BOOKINGS_FILE, bookings);

  res.status(201).json({
    success: true,
    message: 'Booking confirmed! Our service advisor will call you shortly.',
    booking: newBooking
  });
});

// Contact Inquiries
app.get('/api/inquiries', (req, res) => {
  const inquiries = readJSON(INQUIRIES_FILE);
  res.json(inquiries);
});

app.post('/api/contact', (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Name, phone number, and message are required.' });
  }

  const inquiries = readJSON(INQUIRIES_FILE);
  const newInquiry = {
    id: `INQ-${Date.now().toString().slice(-6)}`,
    name,
    phone,
    email: email || '',
    subject: subject || 'General Inquiry',
    message,
    createdAt: new Date().toISOString()
  };

  inquiries.unshift(newInquiry);
  writeJSON(INQUIRIES_FILE, inquiries);

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out to MK CAR AC & ACCESSORIES. We will contact you shortly.',
    inquiry: newInquiry
  });
});

// Serve frontend build in production if available
const clientBuildPath = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`MK CAR AC & ACCESSORIES API running on port ${PORT}`);
});
