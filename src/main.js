import './style.css'
import { categories, menu, testimonials } from './data/menu.js'
import { icon, dishes } from './icons.js'

const price = (n) => n.toFixed(2).replace('.', ',')

const catLabel = (id) => (categories.find((c) => c.id === id) || {}).label || id

const timeOptions = () => {
  const times = []
  for (let h = 12; h < 23; h++) {
    for (const m of ['00', '30']) {
      times.push(`${String(h).padStart(2, '0')}:${m}`)
    }
  }
  times.push('23:00')
  return times.map((t) => `<option value="${t}">${t}</option>`).join('')
}

const peopleOptions = () => {
  let out = '<option value="">¿Cuántos son?</option>'
  for (let i = 1; i <= 10; i++) out += `<option value="${i}">${i} ${i === 1 ? 'persona' : 'personas'}</option>`
  out += '<option value="10+">Más de 10</option>'
  return out
}

const dishCard = (item) => `
  <article class="dish-card">
    <div class="dish-img">
      ${item.badge ? `<span class="dish-badge">${item.badge}</span>` : ''}
      ${dishes[item.img] || dishes.burger}
    </div>
    <div class="dish-info">
      <h3 class="dish-name">${item.name}</h3>
      <p class="dish-desc">${item.desc}</p>
      <div class="dish-foot">
        <span class="dish-price">${price(item.price)}</span>
        <span class="dish-cat">${catLabel(item.cat)}</span>
      </div>
    </div>
  </article>`

const stats = [
  { n: 11, suffix: '', label: 'años de fuego' },
  { n: 120, suffix: 'K+', label: 'clientes felices' },
  { n: 2, suffix: '', label: 'sedes' },
  { n: 40, suffix: '', label: 'recetas únicas' },
]

const features = [
  { ic: 'leaf', title: 'Ingredientes frescos', text: 'Carne Angus 100%, pan brioche horneado a diario y produce de productores locales.' },
  { ic: 'flame', title: 'Cocina de fuego', text: 'Brasas de roble reales. Cada burger se sella al momento, sin planchas ni congelados.' },
  { ic: 'bolt', title: 'Delivery 40 min', text: 'Del fuego a tu puerta en 40 minutos. Tu pedido llega caliente y con la salsa aparte.' },
  { ic: 'tag', title: 'Precio justo', text: 'Alta calidad sin sorpresas ni cargos ocultos. El buen sabor se paga una sola vez.' },
]

const testimonialsMarkup = testimonials
  .map(
    (t) => `
  <article class="t-card">
    <div class="t-stars">${Array.from({ length: 5 }, () => icon('star')).join('')}</div>
    <p class="t-text">“${t.text}”</p>
    <div class="t-author">
      <span class="t-ava">${t.name.split(' ')[0].charAt(0)}${t.name.split(' ')[1] ? t.name.split(' ')[1].charAt(0) : ''}</span>
      <div>
        <p class="t-name">${t.name}</p>
        <p class="t-role">${t.role}</p>
      </div>
    </div>
  </article>`
  )
  .join('')

document.querySelector('#app').innerHTML = `
<header class="navbar" id="navbar">
  <nav class="container nav-inner">
    <a class="logo" href="#inicio" aria-label="Ember Burgers and Grill">
      <span class="logo-badge">${icon('flame')}</span>
      Ember<em>+</em>Grill
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a class="nav-link" href="#inicio">Inicio</a></li>
      <li><a class="nav-link" href="#menu">Menú</a></li>
      <li><a class="nav-link" href="#nosotros">Nosotros</a></li>
      <li><a class="nav-link" href="#testimonios">Testimonios</a></li>
      <li><a class="btn btn-primary nav-cta" href="#contacto">Reservar</a></li>
    </ul>
    <button class="nav-toggle" id="navToggle" type="button" aria-label="Abrir menú">${icon('menu')}</button>
  </nav>
</header>

<main>
  <section class="hero" id="inicio">
    <div class="container hero-grid">
      <div>
        <p class="hero-badge">${icon('flame')} Cocina abierta · Todos los días de 12:00 a 23:00</p>
        <h1 class="hero-title">Fuego real.<br /><em>Sabor que se recuerda.</em></h1>
        <p class="hero-sub">Carne Angus, pan artesanal y brasas de roble. Creemos que una hamburguesa puede ser inolvidable, y lo demostramos todos los días.</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#menu">Ver menú</a>
          <a class="btn btn-ghost" href="#contacto">Reservar mesa</a>
        </div>
        <div class="hero-stats">
          <div class="stat"><strong>4.9★</strong><span>+1.2k reseñas</span></div>
          <div class="stat"><strong>40 min</strong><span>delivery caliente</span></div>
          <div class="stat"><strong>100%</strong><span>carne angus</span></div>
        </div>
      </div>
      <div class="hero-art">
        <div class="hero-glow"></div>
        ${dishes.burger}
        <span class="flu flu-1">${icon('flame')} Brasas de roble</span>
        <span class="flu flu-2">${icon('star')} 4.9 en Google</span>
      </div>
    </div>
  </section>

  <section class="features section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Por qué Ember</p>
        <h2 class="section-title">Razones para <em>obsesionarse</em></h2>
      </div>
      <div class="features-grid">
        ${features
          .map(
            (f, i) => `
        <article class="feature-card reveal" data-delay="${i}">
          <div class="feature-icon">${icon(f.ic)}</div>
          <h3 class="feature-title">${f.title}</h3>
          <p class="feature-text">${f.text}</p>
        </article>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <section class="menu section" id="menu">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Nuestro menú</p>
        <h2 class="section-title">Elegí tu <em>vicio</em></h2>
        <p class="section-sub">Todo se prepara al momento sobre brasas de roble. Elegí tu categoría y dejate llevar.</p>
      </div>
      <div class="tabs" id="tabs"></div>
      <div class="menu-grid" id="menuGrid"></div>
    </div>
  </section>

  <section class="about section" id="nosotros">
    <div class="container about-grid">
      <div class="about-art reveal">
        ${dishes.fries}
        <div class="about-badge"><strong>2015</strong><span>cocina de fuego</span></div>
      </div>
      <div class="about-copy">
        <p class="eyebrow reveal">Nuestra historia</p>
        <h2 class="section-title reveal">Del garage a la <em>parrilla</em></h2>
        <p class="reveal" data-delay="1">Ember nació en 2015 como una parrilla de garaje con tres amigos, una plancha y la obsesión por el punto exacto de la carne. Hoy seguimos haciendo hamburguesas con la misma regla de entonces: fuego real, ingredientes honestos y cero atajos.</p>
        <p class="reveal" data-delay="1">Cada pan sale del horno a la mañana, cada corte se muele en casa y cada salsa se prepara desde cero.</p>
        <ul class="check-list reveal" data-delay="2">
          <li>${icon('check')} Carne Angus 100%</li>
          <li>${icon('check')} Pan horneado a diario</li>
          <li>${icon('check')} Brasas de roble real</li>
          <li>${icon('check')} Nada congelado</li>
        </ul>
        <div class="stats-grid reveal" data-delay="2">
          ${stats
            .map(
              (s) => `
          <div>
            <div class="stat-num"><span data-count="${s.n}">0</span>${s.suffix}</div>
            <div class="stat-label">${s.label}</div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="testimonials section" id="testimonios">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Testimonios</p>
        <h2 class="section-title">Clientes que <em>vuelven</em></h2>
      </div>
      <div class="t-wrap reveal">
        <div class="t-track" id="tTrack">${testimonialsMarkup}</div>
        <div class="t-nav">
          <button class="t-btn" id="tPrev" type="button" aria-label="Testimonio anterior">${icon('chevronL')}</button>
          <button class="t-btn" id="tNext" type="button" aria-label="Siguiente testimonio">${icon('chevronR')}</button>
        </div>
      </div>
    </div>
  </section>

  <section class="cta section">
    <div class="container">
      <div class="cta-band reveal">
        <h2>¿Hambre real? <em>Nosotros también.</em></h2>
        <p>Reservá tu mesa o pedí delivery desde la web. El fuego no espera, así que nosotros tampoco.</p>
        <a class="btn btn-primary" href="#contacto">Reservar mesa</a>
      </div>
    </div>
  </section>

  <section class="contact section" id="contacto">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Contacto</p>
        <h2 class="section-title">Reservá tu <em>mesa</em></h2>
        <p class="section-sub">Contanos con cuántos van y cuándo; te confirmamos al instante.</p>
      </div>
      <div class="contact-grid">
        <div class="reveal">
          <div class="info-item">
            <span class="info-icon">${icon('pin')}</span>
            <div>
              <h3>Dónde estamos</h3>
              <p>Av. de los Braseros 1245, Palermo</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">${icon('phone')}</span>
            <div>
              <h3>Teléfono</h3>
              <p>+54 11 5555-0123</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">${icon('mail')}</span>
            <div>
              <h3>Email</h3>
              <p>hola@embergrill.com</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">${icon('clock')}</span>
            <div>
              <h3>Horarios</h3>
              <p>Lun a Jue · 12:00 a 23:00<br />Vie y Sáb · 12:00 a 01:00<br />Domingo · 12:00 a 22:00</p>
            </div>
          </div>
        </div>
        <div class="form-card reveal" data-delay="1">
          <h3>Reserva online</h3>
          <p class="form-sub">Completá el formulario y confirmamos tu mesa al instante.</p>
          <form id="reserveForm" novalidate>
            <div class="form-row">
              <div class="field">
                <label for="name">Nombre</label>
                <input id="name" name="name" type="text" placeholder="Tu nombre" autocomplete="name" />
                <p class="field-error">Ingresá tu nombre (mín. 3 caracteres).</p>
              </div>
              <div class="field">
                <label for="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" placeholder="+54 11 5555-0123" autocomplete="tel" />
                <p class="field-error">Ingresá un teléfono válido (7 a 15 dígitos).</p>
              </div>
            </div>
            <div class="form-row">
              <div class="field">
                <label for="date">Fecha</label>
                <input id="date" name="date" type="date" />
                <p class="field-error">Elegí una fecha a partir de hoy.</p>
              </div>
              <div class="field">
                <label for="time">Hora</label>
                <select id="time" name="time">
                  <option value="">Elegí un horario</option>
                  ${timeOptions()}
                </select>
                <p class="field-error">Elegí un horario.</p>
              </div>
            </div>
            <div class="field">
              <label for="people">Personas</label>
              <select id="people" name="people">${peopleOptions()}</select>
              <p class="field-error">Indicá cuántos van a venir.</p>
            </div>
            <div class="form-actions">
              <button class="btn btn-primary" type="submit">Confirmar reserva</button>
            </div>
          </form>
          <div class="form-success" id="formSuccess">
            <div class="success-icon">${icon('check')}</div>
            <h4>¡Mesa confirmada!</h4>
            <p id="successText"></p>
            <button class="btn btn-ghost" id="resetForm" type="button">Hacer otra reserva</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="logo" href="#inicio" aria-label="Ember Burgers and Grill">
          <span class="logo-badge">${icon('flame')}</span>
          Ember<em>+</em>Grill
        </a>
        <p class="footer-tag">Hamburguesas hechas con fuego real desde 2015. Buenos Aires.</p>
        <div class="socials">
          <a href="#" aria-label="Instagram">${icon('instagram')}</a>
          <a href="#" aria-label="Facebook">${icon('facebook')}</a>
          <a href="#" aria-label="X">${icon('x')}</a>
          <a href="#" aria-label="WhatsApp">${icon('whatsapp')}</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#menu">Menú</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#contacto">Reservas</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Horarios</h4>
        <ul class="footer-contact">
          <li>${icon('clock')} Lun a Jue · 12 a 23</li>
          <li>${icon('clock')} Vie y Sáb · 12 a 01</li>
          <li>${icon('clock')} Domingo · 12 a 22</li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul class="footer-contact">
          <li>${icon('pin')} Av. de los Braseros 1245, Palermo</li>
          <li>${icon('phone')} +54 11 5555-0123</li>
          <li>${icon('mail')} hola@embergrill.com</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Ember+Grill. Proyecto de portafolio.</span>
      <span>Hecho con fuego y JavaScript.</span>
    </div>
  </div>
</footer>
`

const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open')
  navToggle.innerHTML = open ? icon('close') : icon('menu')
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
})

navLinks.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open')
    navToggle.innerHTML = icon('menu')
  })
)

const navbar = document.getElementById('navbar')
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 24)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

const grid = document.getElementById('menuGrid')
const tabs = document.getElementById('tabs')
let activeCat = 'all'

const renderMenu = (cat) => {
  activeCat = cat
  tabs.innerHTML = categories
    .map(
      (c) =>
        `<button class="tab${c.id === cat ? ' is-active' : ''}" type="button" data-cat="${c.id}">${c.label}</button>`
    )
    .join('')
  grid.classList.remove('is-hiding')
  grid.style.minHeight = `${grid.offsetHeight}px`
  grid.innerHTML = menu.filter((m) => cat === 'all' || m.cat === cat).map(dishCard).join('')
}

renderMenu('all')

tabs.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab')
  if (!tab || tab.dataset.cat === activeCat) return
  renderMenu(tab.dataset.cat)
})

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = Number(el.dataset.count)
      const start = performance.now()
      const duration = 1400
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      countObserver.unobserve(el)
    })
  },
  { threshold: 0.5 }
)

document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el))

const track = document.getElementById('tTrack')
const tPrev = document.getElementById('tPrev')
const tNext = document.getElementById('tNext')

const slide = (dir) =>
  track.scrollBy({ left: dir * Math.max(track.clientWidth, 360) * 0.8, behavior: 'smooth' })

tPrev.addEventListener('click', () => slide(-1))
tNext.addEventListener('click', () => slide(1))

const form = document.getElementById('reserveForm')
const formCard = form.closest('.form-card')
const success = document.getElementById('formSuccess')
const successText = document.getElementById('successText')

const validators = {
  name: (v) => v.trim().length >= 3,
  phone: (v) => /^\+?[\d\s()\-]{7,15}$/.test(v.trim()),
  date: (v) => {
    if (!v) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return new Date(v + 'T00:00:00') >= today
  },
  time: (v) => v !== '',
  people: (v) => v !== '',
}

const setError = (field, invalid) => {
  const wrapper = field.closest('.field')
  wrapper.classList.toggle('is-invalid', invalid)
  return !invalid
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let ok = true
  Object.entries(validators).forEach(([name, validate]) => {
    const field = form.elements[name]
    if (field) ok = setError(field, !validate(field.value)) && ok
  })
  if (!ok) return

  const name = form.elements.name.value.trim()
  const people = form.elements.people.value
  const rawDate = new Date(form.elements.date.value + 'T00:00:00')
  const dateLabel = rawDate.toLocaleDateString('es', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  const time = form.elements.time.value
  const peopleLabel = people === '10+' ? 'más de 10 personas' : `${people} ${people === '1' ? 'persona' : 'personas'}`

  successText.textContent = `${dateLabel.charAt(0).toUpperCase()}${dateLabel.slice(1)} a las ${time} para ${peopleLabel}. Te esperamos, ${name}.`
  form.hidden = true
  success.classList.add('is-visible')
})

document.getElementById('resetForm').addEventListener('click', () => {
  form.reset()
  form.querySelectorAll('.field.is-invalid').forEach((f) => f.classList.remove('is-invalid'))
  success.classList.remove('is-visible')
  form.hidden = false
})