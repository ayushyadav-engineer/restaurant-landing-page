<div align="center">

<!-- LOGO PLACEHOLDER -->
<img src="logo.png" alt="Savoria Logo" width="120" />

# 🍷 Savoria — Premium Luxury Restaurant Website

### *Where Fine Dining Meets Modern Web Design*

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


</div>

---

## 🌐 Live Demo

<div align="center">

### 👉 [**View Live Website**](https://restaurant-landing-page-prh9.onrender.com) 👈

</div>

| Environment | Link | Status |
|---|---|---|
| 🟢 Production | [https://restaurant-landing-page-prh9.onrender.com](https://savoria-restaurant.netlify.app) | Active |
| 🔵 GitHub Pages | [https://ayushyadav-engineer.github.io/Restaurant-Landing-Page/](https://ayushyadav.github.io/savoria) | Active |

---

## 📸 Screenshots

<div align="center">

| Home Page | Menu Page |
|:---:|:---:|
| <img src="screenshots/Home.jpg" width="400"/> | <img src="screenshots/Menu.jpg" width="400"/> |

| Gallery Page | Reservation Page |
|:---:|:---:|
| <img src="screenshots/Gallery.jpg" width="400"/> | <img src="screenshots/Reservation.jpg" width="400"/> |

</div>

<details>
<summary><b>📱 View Mobile Screenshots</b></summary>

<div align="center">
<img src="screenshots/mobile-home.jpeg" width="220"/>
<img src="screenshots/mobile-menu.jpeg" width="220"/>
<img src="screenshots/mobile-gallery.jpeg" width="220"/>
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
Restaurant Landing Page
├── screenshots/          
├── css/
│   ├── style.css             
│   ├── animations.css        
│   └── responsive.css        
├── js/
│   ├── data.js                
│   ├── gallery.js              
│   ├── main.js          
│   ├── menu.js               
│   └── reservation.js        
├── index.html                  
├── about.html                  
├── menu.html                   
├── gallery.html                 
├── reservation.html             
├── contact.html                  
├── .gitignore                      
├── LICENSE
├── logo.png
└── README.md
```

---

## ⚡ Installation

```bash
# 1. Clone the repository
git clone https://github.com/ayushyadav-engineer/Restaurant-Landing-Page

# 2. Navigate into the project directory
cd Restaurant Landing Page

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
|:------|:---:|:-------:|
| Onyx Black | `#0D0D0D` | <img src="screenshots/0D0D0D.jpg" width="35" height="35"> |
| Royal Gold | `#D4AF37` | <img src="screenshots/D4AF37.jpg" width="35" height="35"> |
| Champagne | `#F5F5F0` | <img src="screenshots/F5F5F0.jpg" width="35" height="35"> |
| Charcoal | `#1A1A1A` | <img src="screenshots/1A1A1A.jpg" width="35" height="35"> |

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
