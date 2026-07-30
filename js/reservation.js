// ============================================================
// reservation.js — booking form validation + Local Storage
// Also handles the contact form when present on a page.
// ============================================================

function setupForm(form, { storageKey, popupMessage, fields }) {
  if (!form) return
  const successMsg = form.querySelector('[data-form-success]')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let valid = true
    fields.forEach(({ name, required = true }) => {
      const input = form.elements[name]
      const field = input?.closest('.form-field')
      const errEl = field?.querySelector('.field-error')
      if (!input) return
      const val = (input.value || '').trim()
      if (required && !val) {
        valid = false
        field?.classList.add('invalid')
        if (errEl) errEl.textContent = 'This field is required.'
      } else if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        valid = false
        field?.classList.add('invalid')
        if (errEl) errEl.textContent = 'Please enter a valid email.'
      } else if (input.type === 'tel' && val && !/^[0-9 +()\-]{7,}$/.test(val)) {
        valid = false
        field?.classList.add('invalid')
        if (errEl) errEl.textContent = 'Please enter a valid phone number.'
      } else {
        field?.classList.remove('invalid')
        if (errEl) errEl.textContent = ''
      }
    })

    if (!valid) {
      form.querySelector('.invalid input, .invalid select, .invalid textarea')?.focus()
      return
    }

    const data = {}
    fields.forEach(({ name }) => { data[name] = (form.elements[name]?.value || '').trim() })
    data.submittedAt = new Date().toISOString()
    const list = JSON.parse(localStorage.getItem(storageKey) || '[]')
    list.push(data)
    localStorage.setItem(storageKey, JSON.stringify(list))

    form.reset()
    if (successMsg) {
      successMsg.textContent = 'Thank you — your request has been received.'
      setTimeout(() => { successMsg.textContent = '' }, 5000)
    }
    if (popupMessage && window.LCR?.showPopup) window.LCR.showPopup(popupMessage)
  })

  // clear field error on input
  form.addEventListener('input', (e) => {
    const field = e.target.closest('.form-field')
    if (field && field.classList.contains('invalid')) {
      field.classList.remove('invalid')
      field.querySelector('.field-error').textContent = ''
    }
  })
}

/* Reservation form */
setupForm(document.querySelector('[data-reservation-form]'), {
  storageKey: 'lcr_reservations',
  popupMessage: 'Your table is reserved. We look forward to welcoming you.',
  fields: [
    { name: 'name' }, { name: 'email' }, { name: 'phone' },
    { name: 'date' }, { name: 'time' }, { name: 'guests' },
    { name: 'request', required: false },
  ],
})

/* Contact form */
setupForm(document.querySelector('[data-contact-form]'), {
  storageKey: 'lcr_messages',
  fields: [{ name: 'name' }, { name: 'email' }, { name: 'message' }],
})
