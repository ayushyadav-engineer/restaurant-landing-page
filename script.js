/*====================================================
SAVORIA RESTAURANT WEBSITE
script.js (Part 1)

Features
✔ Preloader
✔ Scroll Progress Bar
✔ Sticky Navbar
✔ Mobile Menu
✔ Dark Mode
✔ Smooth Scroll
✔ Active Navigation
====================================================*/

/*==========================
PRELOADER
==========================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.style.opacity = "0";

            preloader.style.visibility = "hidden";

        }, 600);

    }

});

/*==========================
SCROLL PROGRESS BAR
==========================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }

});

/*==========================
STICKY HEADER
==========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

/*==========================
MOBILE MENU
==========================*/

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");

                navLinks.classList.remove("active");

            });

        });

}

/*==========================
DARK MODE
==========================*/

const themeToggle =
    document.getElementById("theme-toggle");

function setTheme(theme){

    if(theme==="dark"){

        document.body.classList.add("dark");

        if(themeToggle){

            themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        }

    }

    else{

        document.body.classList.remove("dark");

        if(themeToggle){

            themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        }

    }

}

const savedTheme =
    localStorage.getItem("theme") || "light";

setTheme(savedTheme);

if(themeToggle){

    themeToggle.addEventListener("click",()=>{

        const newTheme =
            document.body.classList.contains("dark")
            ? "light"
            : "dark";

        localStorage.setItem("theme",newTheme);

        setTheme(newTheme);

    });

}

/*==========================
SMOOTH SCROLL
==========================*/

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});

/*==========================
ACTIVE NAVIGATION
==========================*/

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

function activeMenu(){

    let current = "";

    sections.forEach(section=>{

        const top =
            section.offsetTop - 140;

        const height =
            section.offsetHeight;

        if(

            window.pageYOffset >= top &&
            window.pageYOffset < top + height

        ){

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href") ===
            "#" + current

        ){

            link.classList.add("active");

        }

    });

}

window.addEventListener(

    "scroll",

    activeMenu

);

/*==========================
NAVBAR SHADOW
==========================*/

window.addEventListener(

    "scroll",

    ()=>{

        if(header){

            header.style.transition=".35s";

        }

    }

);

/*==========================
ESC CLOSE MENU
==========================*/

document.addEventListener(

    "keydown",

    (e)=>{

        if(

            e.key==="Escape"

        ){

            navLinks?.classList.remove("active");

            hamburger?.classList.remove("active");

        }

    }

);

/*==========================
CLICK OUTSIDE MENU
==========================*/

document.addEventListener(

    "click",

    (e)=>{

        if(

            !hamburger?.contains(e.target) &&

            !navLinks?.contains(e.target)

        ){

            navLinks?.classList.remove("active");

            hamburger?.classList.remove("active");

        }

    }

);

/*==========================
CONSOLE MESSAGE
==========================*/

console.log(

"%c🍽 Welcome to Savoria",

"color:#D4A017;font-size:18px;font-weight:bold;"

);

console.log(

"Website Loaded Successfully."

);

/*====================================================
SAVORIA RESTAURANT WEBSITE
script.js (Part 2)

Features
✔ Scroll Reveal
✔ Animated Counters
✔ Gallery Lightbox
✔ Back To Top
✔ Reservation Form
✔ Newsletter Form
✔ Ripple Effect
✔ Lazy Loading
✔ Utility Functions
====================================================*/

/*==========================
SCROLL REVEAL
==========================*/

const revealElements = document.querySelectorAll(
    ".section, .menu-card, .featured-card, .chef-card, .gallery-item, .testimonial-card, .stat-card, .why-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/*==========================
ANIMATED COUNTERS
==========================*/

const counters = document.querySelectorAll(".counter");

function animateCounters() {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if (current < target) {

                counter.innerText = current + increment;

                requestAnimationFrame(updateCounter);

            }

            else {

                counter.innerText = target.toLocaleString();

            }

        };

        updateCounter();

    });

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".statistics");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight && !counterStarted) {

        counterStarted = true;

        animateCounters();

    }

});

/*==========================
BACK TO TOP
==========================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================
GALLERY LIGHTBOX
==========================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

    <span id="closeLightbox">&times;</span>

    <img id="lightboxImage">

`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

    });

});

document.getElementById("closeLightbox").onclick = () => {

    lightbox.style.display = "none";

};

lightbox.onclick = (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

};

/*==========================
LIGHTBOX STYLES
==========================*/

const lightboxStyle = document.createElement("style");

lightboxStyle.innerHTML = `

#lightbox{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

display:none;

justify-content:center;

align-items:center;

background:rgba(0,0,0,.92);

z-index:99999;

}

#lightbox img{

max-width:90%;

max-height:85%;

border-radius:15px;

box-shadow:0 20px 60px rgba(0,0,0,.4);

}

#closeLightbox{

position:absolute;

top:25px;

right:40px;

font-size:50px;

color:#fff;

cursor:pointer;

}

`;

document.head.appendChild(lightboxStyle);

/*==========================
RESERVATION FORM
==========================*/

const reservationForm = document.querySelector(".reservation-form");

reservationForm?.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs = reservationForm.querySelectorAll("input[required]");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

            input.style.borderColor = "red";

        }

        else {

            input.style.borderColor = "#4CAF50";

        }

    });

    if (valid) {

        alert("🎉 Reservation submitted successfully!");

        reservationForm.reset();

    }

});

/*==========================
NEWSLETTER
==========================*/

const newsletter = document.querySelector(".newsletter form");

newsletter?.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = newsletter.querySelector("input").value;

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    alert("📧 Thanks for subscribing!");

    newsletter.reset();

});

/*==========================
BUTTON RIPPLE EFFECT
==========================*/

document.querySelectorAll(".btn,.btn-small").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;

        circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

/*==========================
RIPPLE STYLE
==========================*/

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

.btn,

.btn-small{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

transform:scale(0);

background:rgba(255,255,255,.6);

animation:ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

/*==========================
LAZY LOADING
==========================*/

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});

/*==========================
CURRENT YEAR
==========================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*==========================
UTILITY
==========================*/

window.scrollToSection = function (id) {

    document.getElementById(id)?.scrollIntoView({

        behavior: "smooth"

    });

};

console.log("%c🚀 Savoria Premium Website Ready",
"color:#D4A017;font-size:16px;font-weight:bold;");