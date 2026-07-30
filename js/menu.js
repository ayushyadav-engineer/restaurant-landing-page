// ============================================================
// menu.js — renders signature dishes + category filtering
// Works on both home (preview) and menu page (full grid).
// ============================================================
import { dishes } from './data.js'

const grid = document.querySelector('[data-menu-grid]')
if (grid) {
  const isFullPage = document.body.dataset.page === 'menu'
  const list = isFullPage ? dishes : dishes.slice(0, 6)
  render(list)

  const filters = document.querySelector('[data-menu-filters]')
  if (filters) {
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn')
      if (!btn) return
      filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'))
      btn.classList.add('is-active')
      const f = btn.dataset.filter
      const filtered = f === 'all' ? (isFullPage ? dishes : dishes.slice(0, 6)) : dishes.filter(d => d.cat === f || d.tags.includes(f))
      render(filtered)
    })
  }

  function render(items) {
    grid.innerHTML = items.map(d => `
      <article class="menu-card">
        <div class="menu-card-img">
          <img src="${d.img}" alt="${d.name}" loading="lazy" />
          ${d.chef ? '<span class="menu-card-badge">Chef Special</span>' : ''}
        </div>
        <div class="menu-card-body">
          <span class="menu-card-cat">${d.cat}</span>
          <h3>${d.name}</h3>
          <p>${d.desc}</p>
        </div>
      </article>`).join('')
    if (items.length === 0) grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--grey-dim);padding:2rem">No dishes in this category.</p>'
  }
}
