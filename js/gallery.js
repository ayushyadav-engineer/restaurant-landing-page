// ============================================================
// gallery.js — masonry grid, category filter, lightbox viewer
// Renders the full gallery on gallery.html. On the home page the
// gallery preview is static HTML (no JS needed).
// ============================================================
import { galleryImages } from './data.js'

const masonry = document.querySelector('[data-masonry]')
if (masonry) {
  render(galleryImages)

  const filters = document.querySelector('[data-gallery-filters]')
  if (filters) {
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn')
      if (!btn) return
      filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'))
      btn.classList.add('is-active')
      const f = btn.dataset.filter
      render(f === 'all' ? galleryImages : galleryImages.filter(g => g.cat === f))
    })
  }

  function render(items) {
    masonry.innerHTML = items.map((g, i) => `
      <figure class="masonry-item" data-index="${i}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" />
      </figure>`).join('')
    masonry.querySelectorAll('.masonry-item').forEach(el => {
      el.addEventListener('click', () => openLightbox(+el.dataset.index, items))
    })
  }
}

/* ---------- Lightbox ---------- */
let lbEl, lbImg, lbCap, lbState = { items: [], idx: 0 }

function ensureLightbox() {
  if (lbEl) return
  lbEl = document.createElement('div')
  lbEl.className = 'lightbox'
  lbEl.innerHTML = `
    <button class="lightbox-close" aria-label="Close">×</button>
    <button class="lightbox-nav prev" aria-label="Previous">‹</button>
    <img alt="" />
    <button class="lightbox-nav next" aria-label="Next">›</button>
    <p class="lightbox-caption"></p>`
  document.body.appendChild(lbEl)
  lbImg = lbEl.querySelector('img')
  lbCap = lbEl.querySelector('.lightbox-caption')
  lbEl.querySelector('.lightbox-close').addEventListener('click', closeLightbox)
  lbEl.querySelector('.lightbox-nav.prev').addEventListener('click', () => navLightbox(-1))
  lbEl.querySelector('.lightbox-nav.next').addEventListener('click', () => navLightbox(1))
  lbEl.addEventListener('click', (e) => { if (e.target === lbEl) closeLightbox() })
  document.addEventListener('keydown', (e) => {
    if (!lbEl.classList.contains('is-open')) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navLightbox(-1)
    if (e.key === 'ArrowRight') navLightbox(1)
  })
}

function openLightbox(idx, items) {
  ensureLightbox()
  lbState.items = items
  lbState.idx = idx
  updateLightbox()
  lbEl.classList.add('is-open')
}

function navLightbox(dir) {
  lbState.idx = (lbState.idx + dir + lbState.items.length) % lbState.items.length
  updateLightbox()
}

function updateLightbox() {
  const item = lbState.items[lbState.idx]
  lbImg.src = item.src
  lbImg.alt = item.alt
  lbCap.textContent = `${lbState.idx + 1} / ${lbState.items.length} — ${item.alt}`
}

function closeLightbox() {
  if (lbEl) lbEl.classList.remove('is-open')
}
