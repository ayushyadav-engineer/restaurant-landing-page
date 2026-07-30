// ============================================================
// main.js — shared site behaviour
// Loader, navbar, scroll progress, back-to-top, reveal observer,
// counters, mouse glow, ripple, newsletter, year, active nav,
// reviews slider, popup.
// ============================================================

const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

/* ---------- Page loader ---------- */
window.addEventListener('load', () => {
  const loader = $('#page-loader')
  if (loader) setTimeout(() => loader.classList.add('is-hidden'), 500)
})

/* ---------- Year ---------- */
$$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear() })

/* ---------- Navbar scroll state + scroll progress + back-to-top ---------- */
const navbar = $('#navbar')
const progress = $('#scroll-progress')
const backTop = $('#back-to-top')

function onScroll() {
  const y = window.scrollY
  if (navbar) navbar.classList.toggle('is-scrolled', y > 40)
  if (backTop) backTop.classList.toggle('is-visible', y > 600)
  if (progress) {
    const h = document.documentElement.scrollHeight - window.innerHeight
    progress.style.width = h > 0 ? `${(y / h) * 100}%` : '0%'
  }
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

/* ---------- Mobile nav toggle ---------- */
const navToggle = $('#nav-toggle')
const navMenu = $('#nav-menu')
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open')
    navToggle.classList.toggle('is-open', open)
    navToggle.setAttribute('aria-expanded', String(open))
  })
  navMenu.addEventListener('click', e => {
    if (e.target.closest('a')) {
      navMenu.classList.remove('is-open')
      navToggle.classList.remove('is-open')
      navToggle.setAttribute('aria-expanded', 'false')
    }
  })
}

/* ---------- Active nav highlight (by data-page on body or path) ---------- */
const currentPage = document.body.dataset.page || location.pathname.split('/').pop().replace('.html', '') || 'home'
$$('.nav-link').forEach(link => {
  if (link.dataset.page === currentPage) link.classList.add('is-active')
})

/* ---------- Reveal on scroll (IntersectionObserver) ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
$$('.reveal').forEach(el => revealObserver.observe(el))

/* ---------- Counter animation ---------- */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10)
  const duration = 1800
  const start = performance.now()
  function tick(now) {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    const val = Math.floor(eased * target)
    el.textContent = val.toLocaleString()
    if (p < 1) requestAnimationFrame(tick)
    else el.textContent = target.toLocaleString()
  }
  requestAnimationFrame(tick)
}
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target)
      countObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })
$$('[data-count]').forEach(el => countObserver.observe(el))

/* ---------- Mouse glow ---------- */
const glow = $('#mouse-glow')
if (glow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    glow.style.opacity = '1'
    glow.style.left = e.clientX + 'px'
    glow.style.top = e.clientY + 'px'
  })
  window.addEventListener('mouseleave', () => { glow.style.opacity = '0' })
}

/* ---------- Button ripple effect ---------- */
$$('.btn-ripple').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span')
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    circle.style.width = circle.style.height = size + 'px'
    circle.style.left = (e.clientX - rect.left - size / 2) + 'px'
    circle.style.top = (e.clientY - rect.top - size / 2) + 'px'
    circle.classList.add('ripple')
    this.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
  })
})

/* ---------- Newsletter (local storage) ---------- */
const newsletter = $('[data-newsletter]')
if (newsletter) {
  const msg = $('[data-newsletter-msg]')
  newsletter.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = newsletter.email.value.trim()
    if (!email) return
    const list = JSON.parse(localStorage.getItem('lcr_newsletter') || '[]')
    list.push({ email, date: new Date().toISOString() })
    localStorage.setItem('lcr_newsletter', JSON.stringify(list))
    msg.textContent = 'Thank you — you are subscribed.'
    newsletter.reset()
    setTimeout(() => { msg.textContent = '' }, 4000)
  })
}

/* ---------- Reviews slider ---------- */
function initSlider() {
  const slider = $('[data-slider]')
  if (!slider) return
  const track = $('[data-slider-track]', slider)
  const prev = $('[data-slider-prev]', slider)
  const next = $('[data-slider-next]', slider)
  const dotsWrap = $('[data-slider-dots]', slider)
  import('/js/data.js').then(({ reviews }) => {
    const items = reviews
    track.innerHTML = items.map(r => `
      <div class="review-card glass">
        <div class="review-stars">${'★'.repeat(r.rating)}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-author">
          <img src="${r.img}" alt="${r.name}" loading="lazy" />
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-role">${r.role}</div>
          </div>
        </div>
      </div>`).join('')
    let idx = 0
    dotsWrap.innerHTML = items.map((_, i) => `<button class="slider-dot ${i === 0 ? 'is-active' : ''}" data-i="${i}" aria-label="Go to review ${i + 1}"></button>`).join('')
    const dots = $$('.slider-dot', dotsWrap)
    function go(n) {
      idx = (n + items.length) % items.length
      track.style.transform = `translateX(-${idx * 100}%)`
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx))
    }
    prev.addEventListener('click', () => go(idx - 1))
    next.addEventListener('click', () => go(idx + 1))
    dotsWrap.addEventListener('click', e => { const d = e.target.closest('.slider-dot'); if (d) go(+d.dataset.i) })
    let timer = setInterval(() => go(idx + 1), 6000)
    slider.addEventListener('mouseenter', () => clearInterval(timer))
    slider.addEventListener('mouseleave', () => { timer = setInterval(() => go(idx + 1), 6000) })
  })
}
initSlider()

/* ---------- Popup helper (exported globally for reservation.js) ---------- */
window.LCR = window.LCR || {}
window.LCR.showPopup = function (message) {
  const popup = $('#popup')
  const msg = $('[data-popup-msg]')
  if (msg) msg.textContent = message || 'We look forward to welcoming you.'
  if (!popup) return
  popup.classList.add('is-open')
  popup.setAttribute('aria-hidden', 'false')
}
window.addEventListener('click', (e) => {
  const popup = $('#popup')
  if (!popup) return
  if (e.target.closest('[data-popup-close]') || e.target === popup) {
    popup.classList.remove('is-open')
    popup.setAttribute('aria-hidden', 'true')
  }
})
document.addEventListener('keydown', (e) => {
  const popup = $('#popup')
  if (e.key === 'Escape' && popup && popup.classList.contains('is-open')) {
    popup.classList.remove('is-open')
    popup.setAttribute('aria-hidden', 'true')
  }
})

export { $, $$ }
