<div align="center">

<!-- LOGO PLACEHOLDER -->
<img src="./assets/logo.png" alt="Savoria Logo" width="120" />

# 🍷 Savoria — Premium Luxury Restaurant Website

### *Where Fine Dining Meets Modern Web Design*

<p>
  <img src="https://img.shields.io/github/stars/ayushyadav/savoria?style=for-the-badge&color=gold" alt="GitHub Stars" />
  <img src="https://img.shields.io/github/forks/ayushyadav/savoria?style=for-the-badge&color=black" alt="GitHub Forks" />
  <img src="https://img.shields.io/github/license/ayushyadav/savoria?style=for-the-badge&color=blueviolet" alt="License" />
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

<p>
  <img src="https://img.shields.io/badge/Responsive-Yes-success?style=for-the-badge" alt="Responsive" />
  <img src="https://img.shields.io/badge/MIT-License-yellow?style=for-the-badge" alt="MIT License" />
  <img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge" alt="Open Source" />
  <img src="https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge" alt="Made with Love" />
</p>

**Savoria** is a fully responsive, animation-rich, multi-page luxury restaurant website built with pure **HTML5, CSS3, and Vanilla JavaScript** — featuring a refined **Black & Gold** design language, glassmorphism UI components, and buttery-smooth micro-interactions.

[🌐 Live Demo](#-live-demo) • [📸 Screenshots](#-screenshots) • [✨ Features](#-features) • [🚀 Deployment](#-deployment-guide) • [🤝 Contributing](#-contributing)

</div>

---

## 🌐 Live Demo

<div align="center">

### 👉 [**View Live Website**](https://savoria-restaurant.netlify.app) 👈

</div>

| Environment | Link | Status |
|---|---|---|
| 🟢 Production | [savoria-restaurant.netlify.app](https://savoria-restaurant.netlify.app) | ![Status](https://img.shields.io/website?url=https%3A%2F%2Fsavoria-restaurant.netlify.app) |
| 🔵 GitHub Pages | [ayushyadav.github.io/savoria](https://ayushyadav.github.io/savoria) | Active |

---

## 📸 Screenshots

<div align="center">

| Home Page | Menu Page |
|:---:|:---:|
| <img src="./assets/screenshots/home.png" width="400"/> | <img src="./assets/screenshots/menu.png" width="400"/> |

| Gallery Page | Reservation Page |
|:---:|:---:|
| <img src="./assets/screenshots/gallery.png" width="400"/> | <img src="./assets/screenshots/reservation.png" width="400"/> |

</div>

<details>
<summary><b>📱 View Mobile Screenshots</b></summary>

<div align="center">
<img src="./assets/screenshots/mobile-home.png" width="220"/>
<img src="./assets/screenshots/mobile-menu.png" width="220"/>
<img src="./assets/screenshots/mobile-gallery.png" width="220"/>
</div>

</details>

---

## ✨ Features

<table>
<tr>
<td valign="top" width="50%">

### 🎨 UI / UX
- 🖤 Premium Black & Gold theme
- 🧊 Glassmorphism components
- ✍️ Elegant premium typography
- 🌊 Smooth scroll & scroll-triggered animations
- 🖱️ Rich hover & interactive states
- 📱 Fully responsive across all breakpoints

</td>
<td valign="top" width="50%">

### ⚙️ Functionality
- ⏳ Custom page loader
- 📊 Scroll progress bar
- ⬆️ Back-to-top button
- 🧭 Active navigation highlighting
- 🔢 Animated statistic counters
- 🍽️ Menu category filtering
- 🖼️ Gallery filtering + lightbox
- 📅 Reservation form with validation
- ✉️ Contact form with validation
- 💾 LocalStorage persistence

</td>
</tr>
</table>

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) | Semantic page structure |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) | Styling, animations, Grid/Flexbox layout |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) | DOM interactivity & app logic |
| ![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?logo=googlefonts&logoColor=white) | Premium typography |
| ![Font Awesome](https://img.shields.io/badge/-Font%20Awesome-528DD7?logo=fontawesome&logoColor=white) | Iconography |

---

## 📁 Folder Structure

```bash
savoria/
├── assets/
│   ├── images/              # Hero, menu, gallery images
│   ├── icons/                # SVG / icon assets
│   └── screenshots/          # README screenshots
├── css/
│   ├── style.css             # Base styles & variables
│   ├── animations.css        # Keyframes & scroll animations
│   └── responsive.css        # Media queries
├── js/
│   ├── main.js                # App entry point
│   ├── loader.js              # Page loader logic
│   ├── navigation.js          # Nav + mobile menu + active link
│   ├── scroll.js               # Scroll progress + back-to-top
│   ├── counters.js            # Animated counters
│   ├── gallery.js             # Gallery filter + lightbox
│   ├── menu.js                 # Menu category filtering
│   ├── forms.js                # Reservation & contact validation
│   └── storage.js             # LocalStorage utilities
├── index.html                  # Home
├── about.html                  # About
├── menu.html                   # Menu
├── gallery.html                # Gallery
├── reservation.html            # Reservation
├── contact.html                 # Contact
├── .github/                     # Issue/PR templates & workflows
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
├── SUPPORT.md
└── README.md
```

---

## ⚡ Installation

```bash
# 1. Clone the repository
git clone https://github.com/ayushyadav/savoria.git

# 2. Navigate into the project directory
cd savoria

# 3. Open with a live server (recommended)
# Using VS Code Live Server extension, or:
npx live-server
```

No build tools, package managers, or dependencies required — it's 100% vanilla.

---

## 🖥️ Usage

Simply open `index.html` in your browser, or serve the folder with any static file server. Navigate through **Home → About → Menu → Gallery → Reservation → Contact** using the responsive navigation bar.

---

## 🎨 Customization

<details>
<summary><b>Change Color Palette</b></summary>

Edit the CSS custom properties in `css/style.css`:

```css
:root {
  --color-primary: #0d0d0d;
  --color-accent: #d4af37;
  --color-text: #f5f5f5;
  --color-surface: rgba(255, 255, 255, 0.05);
}
```

</details>

<details>
<summary><b>Change Typography</b></summary>

Swap the Google Fonts import in the `<head>` of each HTML file and update the `--font-heading` / `--font-body` variables.

</details>

<details>
<summary><b>Update Content</b></summary>

Menu items, gallery images, and text content live directly in each page's HTML — no CMS or database required.

</details>

---

## 📱 Responsive Design

Built mobile-first with fluid breakpoints:

| Device | Breakpoint |
|---|---|
| 📱 Mobile | `< 576px` |
| 📱 Large Mobile | `576px – 768px` |
| 💻 Tablet | `768px – 992px` |
| 🖥️ Laptop | `992px – 1200px` |
| 🖥️ Desktop | `> 1200px` |

---

## 🚀 Performance

- ⚡ Zero external JS frameworks — pure vanilla for minimal payload
- 🖼️ Lazy-loaded images for faster initial paint
- 🎯 Optimized CSS with reusable custom properties
- 📦 Minimal HTTP requests

---

## 🌍 Browser Compatibility

| Chrome | Firefox | Safari | Edge | Opera |
|:---:|:---:|:---:|:---:|:---:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 🎞️ Animations Used

- Fade-in / slide-up on scroll (Intersection Observer)
- Staggered card reveal animations
- Smooth hover transforms & glow effects
- Animated number counters
- Page loader transition
- Lightbox fade/zoom transitions

---

## 🧩 JavaScript Modules

| Module | Responsibility |
|---|---|
| `loader.js` | Handles initial page loader & fade-out |
| `navigation.js` | Mobile menu toggle, active link highlight |
| `scroll.js` | Scroll progress bar, back-to-top button |
| `counters.js` | Animates statistic counters on view |
| `gallery.js` | Gallery filtering & lightbox modal |
| `menu.js` | Menu category filtering |
| `forms.js` | Reservation & contact form validation |
| `storage.js` | LocalStorage read/write utilities |

---

## 📄 Pages Overview

| Page | Description |
|---|---|
| 🏠 **Home** | Hero section, highlights, animated counters, CTA |
| ℹ️ **About** | Restaurant story, chef profiles, philosophy |
| 🍽️ **Menu** | Filterable menu categories with pricing |
| 🖼️ **Gallery** | Filterable image gallery with lightbox |
| 📅 **Reservation** | Table booking form with validation |
| ✉️ **Contact** | Contact form, location map, business info |

---

## 🎨 Color Palette

<div align="center">

| Color | Hex | Preview |
|---|---|---|
| Onyx Black | `#0D0D0D` | ![#0D0D0D](https://via.placeholder.com/15/0D0D0D/0D0D0D.png) |
| Royal Gold | `#D4AF37` | ![#D4AF37](https://via.placeholder.com/15/D4AF37/D4AF37.png) |
| Champagne | `#F5F5F0` | ![#F5F5F0](https://via.placeholder.com/15/F5F5F0/F5F5F0.png) |
| Charcoal | `#1A1A1A` | ![#1A1A1A](https://via.placeholder.com/15/1A1A1A/1A1A1A.png) |

</div>

## ✒️ Typography

| Role | Font | Usage |
|---|---|---|
| Headings | `Playfair Display` | Elegant serif for luxury feel |
| Body | `Poppins` | Clean modern sans-serif for readability |

---

## 🧭 Future Improvements

- [ ] Online ordering integration
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] CMS-based menu management
- [ ] Payment gateway for reservations
- [ ] PWA support

---

## ♿ Accessibility

- Semantic HTML5 landmarks
- ARIA labels on interactive elements
- Keyboard-navigable menus & forms
- Sufficient color contrast (WCAG AA)
- Focus-visible states throughout

---

## 🔍 SEO Improvements

- Semantic heading hierarchy
- Descriptive meta titles & descriptions per page
- Open Graph & Twitter Card meta tags
- Alt text on all images
- Clean, crawlable URL structure

---

## 🚀 Deployment Guide

<details>
<summary><b>📘 GitHub Pages</b></summary>

```bash
# From repository settings:
Settings → Pages → Source → main branch → / (root) → Save
```

Your site will be live at `https://<username>.github.io/savoria/`

</details>

<details>
<summary><b>🌐 Netlify</b></summary>

1. Push your project to GitHub
2. Go to [Netlify](https://app.netlify.com) → **Add New Site → Import from Git**
3. Select the `savoria` repository
4. Build command: *(leave blank)* — Publish directory: `/`
5. Click **Deploy Site**

</details>

<details>
<summary><b>▲ Vercel</b></summary>

```bash
npm i -g vercel
vercel login
vercel
```

Follow the CLI prompts and select the project root as the deployment directory.

</details>

<details>
<summary><b>🎨 Render</b></summary>

1. Go to [Render](https://render.com) → **New → Static Site**
2. Connect the `savoria` GitHub repository
3. Build command: *(leave blank)* — Publish directory: `/`
4. Click **Create Static Site**

</details>

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

```bash
1. Fork the repository
2. Create your feature branch   →  git checkout -b feature/AmazingFeature
3. Commit your changes          →  git commit -m 'feat: add AmazingFeature'
4. Push to the branch           →  git push origin feature/AmazingFeature
5. Open a Pull Request
```

## 🧹 Code Style

- 2-space indentation
- BEM-style CSS class naming
- `camelCase` for JavaScript variables/functions
- Semantic HTML5 elements

## 🔀 Git Workflow

We follow a simplified **GitHub Flow**: `main` is always deployable, feature work happens on `feature/*` branches, and merges into `main` are made via reviewed pull requests.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

---

## 👤 Author

**Ayush Yadav**

<p>
  <a href="https://github.com/ayushyadav"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://linkedin.com/in/ayushyadav"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:ayush@example.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
</p>

## 🌟 Connect With Me

Feel free to reach out for collaborations, feedback, or just to say hi! 👋

## 🙏 Acknowledgements

- [Font Awesome](https://fontawesome.com) — Icons
- [Google Fonts](https://fonts.google.com) — Typography
- [Unsplash](https://unsplash.com) — Placeholder photography
- The open-source community ❤️

---

<div align="center">

## ⭐ Show Your Support

If you found this project helpful or inspiring, please consider giving it a **star** — it helps the project reach more developers!

**[⭐ Star this repository](https://github.com/ayushyadav/savoria)**

<sub>Built with 🖤 and 🥂 by Ayush Yadav</sub>

</div>
