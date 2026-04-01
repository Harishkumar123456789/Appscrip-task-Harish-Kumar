# Appscrip Task — E-Commerce Landing Page

**Live Demo:** [https://appscripetask.netlify.app](https://appscripetask.netlify.app)

A responsive e-commerce landing page built with **Next.js 14** and **React 18**. It fetches live product data from a public API and displays a fully functional product listing with filtering, sorting, and a favorites/wishlist system.

---

## Features

- **Product Listing** — Fetches products from the [Escuela JS API](https://api.escuelajs.co/api/v1/products) using Axios
- **Filtering** — Left-side category filters (Men / Women / Kids) with a reset option
- **Sorting** — Right-side dropdown to sort products (e.g., Recommended, Newest First, Popular, Price: High to Low, Price: Low to High)
- **Favorites / Wishlist** — Add or remove products from a favorites list via React Context; favorites count badge on the heart icon in the header
- **Responsive Navbar** — Mobile hamburger menu with smooth open/close animations and scroll lock
- **Smooth Scroll Navigation** — Navbar links scroll to page sections smoothly
- **Footer** — Newsletter signup, contact details, currency selector (USD), social links (Instagram, LinkedIn), and accepted payment methods (GPay, Mastercard, PayPal, Amex)
- **Google Fonts** — Inter and Roboto via `next/font`
- **FontAwesome Icons** — Solid and brand icon support

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 14.2.14 |
| React | 18 |
| Axios | ^1.7.7 |
| FontAwesome | ^6.6.0 |
| Sharp | ^0.33.5 |

---

## Project Structure

```
src/
├── app/
│   ├── page.js                    # Root page — renders landing page
│   ├── layout.js                  # Root layout
│   ├── globals.css
│   ├── context/
│   │   └── FavoritesContext.js    # Global favorites state (React Context)
│   └── ladingpage/
│       ├── page.js                # Fetches products from API, composes layout
│       ├── Header.js              # Navbar with logo, search, favorites, profile
│       ├── Section.js             # Product grid with filters and sorting
│       └── Footer.js              # Footer with links, newsletter, payments
├── Images/
│   └── landingpage/               # Static image assets
└── styles/
    ├── Typography.css / .scss
    └── landingpage/
        ├── landingpage.css
        └── landingpage.scss
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Harishkumar123456789/Appscrip-task-Harish-Kumar.git
cd appscrip-task

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## API

Products are fetched server-side from:

```
GET https://api.escuelajs.co/api/v1/products
```

The fetch is performed in the `Page` server component (`src/app/ladingpage/page.js`), so no loading spinner is needed on initial page load.

---

## License

This project is for assignment/task purposes.






