# Portfolio · Santiago Sarmiento

Portfolio personal de **Santiago Sarmiento**, desarrollador y fundador de **Nexora**.

Construido con React, TypeScript, Vite, Three.js y GSAP. Diseño original de
[Redoyanul Haque](https://github.com/red1-for-hek), bajo licencia MIT.

---

## Descripción

Desarrollador y fundador de Nexora, enfocado en crear software, experiencias
digitales y productos tecnológicos con una visión a largo plazo. Me interesa
construir tecnología útil, cuidar cada detalle y entender los sistemas desde el
código hasta su funcionamiento interno.

**Barranquilla, Colombia** · [GitHub](https://github.com/Saaarmyx) ·
[Email](mailto:saaarmyx@gmail.com)

---

## Stack

- React 18 + TypeScript
- Vite 5
- Three.js / React Three Fiber (personaje 3D del hero)
- GSAP + ScrollTrigger + Lenis (animaciones y scroll suave)
- React Router
- Tailwind (parcial), CSS modular por componente
- chess.js + stockfish.js (juego de ajedrez integrado)

---

## Estructura

```bash
src/
├── components/          # Secciones y componentes de UI
│   ├── styles/          # CSS de cada componente
│   ├── Character/       # Personaje 3D (three.js)
│   └── utils/           # Split text, GSAP, cursor
├── pages/               # Rutas (/ y /play)
├── config.ts            # Todo el contenido editable
├── context/             # Estado del loader
└── data/                # Datos auxiliares
public/                  # Imágenes, modelos 3D, vídeo
api/chat.js              # Función serverless para el chat del ajedrez
```

Todo el texto visible vive en `src/config.ts`. Los textos sueltos que quedaron
en los componentes son etiquetas de interfaz (navegación, títulos de sección).

---

## Comandos

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # build de producción en dist/
npm run preview    # sirve el build
npm run lint
```

---

## Despliegue

Vercel. `vercel.json` gestiona las cabeceras de seguridad y el enrutado hacia
`index.html`.

El chat del ajedrez depende de `api/chat.js`, que necesita una clave de API en
la variable de entorno declarada en `.env.example`. Sin ella, ese chat no
funciona; el resto del sitio no la necesita.

---

## Estado

- `src/config.ts` → `projects` está vacío. Los proyectos se cargan a mano: cada
  uno necesita `id`, `title`, `category`, `technologies`, `image`,
  `description` y `link`.
- Las fotografías en `public/images/` son marcadores. Sustituye
  `mypicnbg.png` (1000x1000) y `mypic.jpeg` (1080x1480) conservando el nombre.

---

## Licencia

MIT. El diseño y la estructura originales pertenecen a
[Redoyanul Haque](https://github.com/red1-for-hek); se conserva el aviso de
copyright en `LICENSE`.