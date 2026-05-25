# React Router Starter

A clean React app with **React Router DOM v6** and **separate CSS files** per component/page.

## 📁 Project Structure

```
src/
├── index.css            ← Global CSS variables & resets
├── index.js             ← App entry point
├── App.jsx              ← Router setup (BrowserRouter + Routes)
├── components/
│   ├── Navbar.jsx       ← Navigation with NavLink active states
│   └── Navbar.css       ← Navbar styles
└── pages/
    ├── Home.jsx / Home.css
    ├── About.jsx / About.css
    ├── Services.jsx / Services.css
    ├── Contact.jsx / Contact.css
    └── NotFound.jsx / NotFound.css
```

## 🚀 Getting Started

```bash
npm install
npm start
```

## 📦 Key Dependencies

- `react` & `react-dom` — v18
- `react-router-dom` — v6 (BrowserRouter, Routes, Route, NavLink, Link)

## 🎨 Theming

All design tokens live in `src/index.css` as CSS custom properties:

```css
:root {
  --accent: #7c6dfa;
  --bg: #0a0a0f;
  --text-primary: #f0eeff;
  /* ... */
}
```

Change them once, update everywhere.

## 📄 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/contact` | Contact |
| `*` | 404 Not Found |
