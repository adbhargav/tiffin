# TastyTiffins - Static Tiffin Service Website

A modern, responsive static website for a South Indian tiffin service built with React (Vite) and Tailwind CSS.

## 🍛 Project Overview

TastyTiffins is a fully static website that showcases a traditional South Indian tiffin service. The website allows customers to:

- View the daily tiffin menu
- Learn about the service and its values
- Place orders via WhatsApp
- Contact the service for inquiries

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
client/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Menu.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Color Palette

The website uses a vibrant South Indian-inspired color palette:

- Primary Teal: `#0C9A86`
- Secondary Green: `#1E3E36`
- Accent Aqua: `#34C3A7`
- Primary Orange: `#F26A21`
- Secondary Red: `#D6451B`
- Accent Yellow: `#F7C325`
- Light: `#FFFFFF`

## 🖼️ Pages

### 1. Home Page (`/`)

Features:
- Hero banner with call-to-action buttons
- Daily specials showcase
- Why choose us section with value propositions

### 2. About Page (`/about`)

Features:
- Company story and history
- Vision and mission statements
- Hygiene and quality assurance information
- Why choose us section

### 3. Menu Page (`/menu`)

Features:
- Comprehensive menu organized by categories:
  - Dosa Varieties
  - Idli Varieties
  - Vada
  - Upma/Uggani
  - Other Tiffins
- Detailed descriptions of each item
- WhatsApp ordering option

### 4. Contact Page (`/contact`)

Features:
- Contact information (phone, email, address)
- Service hours
- Social media links
- WhatsApp ordering integration
- Order instructions

## 🧭 Components

### Navbar

- Responsive navigation with mobile hamburger menu
- Logo and navigation links
- WhatsApp "Order Now" button
- Active link highlighting

### Footer

- Company information
- Quick links to all pages
- Contact information
- Service hours
- WhatsApp ordering button
- Copyright information

## 📱 Responsive Design

The website is fully responsive and works on:
- Mobile devices
- Tablets
- Desktop computers

## 📞 WhatsApp Integration

All ordering is handled through WhatsApp:
- Direct links to WhatsApp with pre-filled messages
- Clear ordering instructions
- Two distinct WhatsApp buttons for different actions

## 🚀 Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 License

This project is proprietary to TastyTiffins and should not be distributed without permission.

## 🙋 Support

For support, contact info@tastytiffins.com or use the WhatsApp links on the website.