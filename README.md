# Ember · Burgers & Grill

Landing page de portafolio para un restaurante de hamburguesas con cocina de fuego. Carne Angus 100 %, pan artesanal y brasas de roble: una página completa, responsive y sin frameworks, construida con Vite y JavaScript vanilla.

## Demo

**[landing-page-restaurante-burger.vercel.app](https://landing-page-restaurante-burger.vercel.app/)**

## Instalación y uso local

```bash
npm install
npm run dev
```

Luego abrí la URL que indica Vite (por defecto `http://localhost:5173`).

## Características

- Hero con ilustración de hamburguesa en SVG, estadísticas y animaciones de aparición al hacer scroll.
- Sección "Por qué Ember" con características del local (ingredientes frescos, cocina de fuego, delivery, precio justo).
- Menú con pestañas por categoría: hamburguesas, acompañamientos, bebidas y postres.
- Historia de la marca con contadores animados al entrar en pantalla.
- Carrusel de testimonios 100 % en CSS con navegación por botones.
- Formulario de reserva con validación en el cliente (nombre, teléfono, fecha, hora y cantidad de personas).
- Navegación responsive con menú hamburguesa y navbar que cambia al hacer scroll.
- Iconos e ilustraciones dibujados en SVG generados desde JavaScript.

## Tecnologías

- [Vite](https://vitejs.dev/) 8
- JavaScript (ES Modules)
- HTML5 y CSS3
- Google Fonts: Anton (títulos) e Inter (texto)
- Ilustraciones SVG generadas en JS

## Estructura del proyecto

```
.
├── index.html              # Punto de entrada HTML
├── public/
│   └── favicon.svg
└── src/
    ├── main.js             # Renderizado y lógica de la página
    ├── style.css           # Estilos (tema oscuro, animaciones, responsive)
    ├── icons.js            # Iconos y art SVG de los platos
    └── data/
        └── menu.js         # Categorías, menú y testimonios
```

## Scripts

| Comando            | Descripción                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Inicia el servidor de desarrollo             |
| `npm run build`    | Genera la versión de producción en `dist/`   |
| `npm run preview`  | Previsualiza el build de producción          |

## Personalización

- **Menú y testimonios:** editá `src/data/menu.js`.
- **Contacto, horarios y redes:** buscá las secciones de contacto en `src/main.js`.
- **Colores y fuentes:** ajustá las variables en `:root` de `src/style.css`.

## Licencia

Proyecto de portafolio. Libre de usar y modificar.