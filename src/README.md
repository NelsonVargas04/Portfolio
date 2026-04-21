# Handoff: Portfolio — Nelson Vargas

## Overview
Portfolio personal de Nelson Vargas, Arquitecto de Software Senior & Especialista Frontend. Sitio de una sola página (SPA) con scroll continuo, secciones animadas y diseño dark/bold con acento lima-amarillo.

## Sobre los archivos de diseño
Los archivos en este bundle son **referencias de diseño creadas en HTML** — prototipos que muestran la apariencia e interacciones previstas, no código de producción para copiar directamente. La tarea es **recrear estos diseños en el entorno de tu codebase** usando sus patrones y librerías establecidas.

## Fidelidad
**Alta fidelidad (hifi)**: Los mockups son pixel-perfect con colores finales, tipografía, espaciado e interacciones. El desarrollador debe recrear la UI con precisión.

---

## Design Tokens

```css
/* — Modo oscuro (por defecto) — */
--bg:     #12121a;       /* Fondo principal */
--bg2:    #1a1a26;       /* Fondo secundario / secciones alternas */
--fg:     #f0ede6;       /* Texto principal (blanco cálido) */
--muted:  #7a7886;       /* Texto secundario / labels */
--accent: #c1c101;       /* Lima-amarillo — color acento */
--border: rgba(240,237,230,0.08);  /* Bordes sutiles */

/* — Modo claro — */
--bg:     #ffffff;
--bg2:    #f0f0f0;
--fg:     #0e0e14;
--muted:  #888898;
--accent: #c1c101;       /* Mismo acento */
--border: rgba(14,14,20,0.1);
```

**Tipografía (Google Fonts):**
```
Bebas Neue        → Títulos display grandes
DM Sans 300/400/500/600 → Cuerpo de texto
DM Mono 400/500   → Labels, tags, nav, código, badges
```

**Espaciado de secciones**: `padding: 120px 48px`

**Transiciones estándar**: `0.2s ease` hover, `0.7s ease` scroll reveals

---

## Secciones

### 1. Navegación (sticky)
- Fijo en top, `backdrop-filter: blur(12px)`
- Fondo: `rgba(18,18,26,0.85)` oscuro / `rgba(255,255,255,0.9)` claro
- `border-bottom: 1px solid var(--border)`
- Al hacer scroll > 60px: padding reduce de `20px 48px` → `14px 48px`
- **Logo**: `NV_` — DM Mono 11px, color `var(--accent)`, uppercase, letter-spacing 0.08em
- **Links**: DM Mono 11px, uppercase, `var(--muted)` → hover `var(--fg)` + underline animado en `var(--accent)` (width 0→100%, `0.25s ease`)
- **Botones idioma**: ES / EN — DM Mono 10px, activo en `var(--accent)`

---

### 2. Hero
- `min-height: 100vh`, grid 3 filas (`auto 1fr auto`), `padding-top: 100px`

**Ubicación:**
- Dot: círculo 6px `var(--accent)` con animación `pulse` (opacity + scale, 2s infinite)
- Texto: DM Mono 11px, uppercase, `var(--muted)`

**Nombre:**
- `NELSON`: Bebas Neue `clamp(100px, 16vw, 220px)`, `-webkit-text-stroke: 1.5px rgba(240,237,230,0.2)`, `color: transparent` (outline)
- `VAR`: Bebas Neue mismo tamaño, `var(--fg)`
- `GAS`: Bebas Neue mismo tamaño, `var(--accent)` + underline 4px que anima `scaleX(0→1)` en 0.8s con delay 1.2s y easing `cubic-bezier(0.16,1,0.3,1)`

**Panel de links** (columna derecha, min-width 260px):
- Título: DM Mono 10px, uppercase, `var(--muted)`, margin-bottom 16px
- Cada link: `display: flex; justify-content: space-between`, `padding: 14px 0`, `border-bottom: 1px solid var(--border)`, font-size 13px
- Hover: `padding-left: 6px`, color → `var(--accent)`, flecha → `translateX(4px)` + color acento
- Links: LinkedIn, GitHub, var.nelson15@gmail.com, Descargar CV (↓)

**Footer del hero** (separado por `border-top: 1px solid var(--border)`, `margin-top: 48px`):
- Izquierda: rol en DM Mono 11px uppercase `var(--muted)` + scroll hint (línea con scan animado)
- Derecha: Stats en Bebas Neue 52px — `3+` Años / `20+` Tecnologías / `JS` Lenguaje. `+` en `var(--accent)`

---

### 3. Marquee de tecnologías
- `overflow: hidden`, `border-top/bottom: 1px solid var(--border)`, fondo `var(--bg2)`
- Dos copias del track para loop infinito
- Animación: `translateX(0 → -100%)`, 30s, linear, infinite
- Hover: `animation-play-state: paused`
- Items: DM Mono 11px, uppercase, `var(--muted)`, separados por `✦` (7px, `var(--accent)`)
- Tecnologías: `Python · Git · Scrum · CSS/Sass · Sequelize · IndexedDB · React.js · TypeScript · Node.js · React Native · PostgreSQL · LLM Integration · Prompt Engineering · GraphQL · Redis · Zustand · TanStack Query · JavaScript`

---

### 4. Sobre mí
- Grid `1fr 1fr`, gap 80px

**Izquierda:**
- Section label: DM Mono 10px uppercase `var(--muted)`, con línea de 28px `var(--accent)` antes
- Título: `CONSTRUYENDO COSAS QUE IMPORTAN` — Bebas Neue `clamp(52px, 8vw, 112px)`, `IMPORTAN` en `var(--accent)`
- Cuerpo: DM Sans 16px, weight 300, `rgba(240,237,230,0.75)`, line-height 1.8. `<strong>` = weight 500, `var(--fg)`
- Cita: `border-left: 2px solid var(--accent)`, padding-left 24px, italic 14px, `var(--muted)`

**Derecha (stat grid):**
- Grid 2×2, `gap: 1px`, fondo del gap `var(--border)`
- Celdas: padding 32px 28px, fondo `var(--bg)` → hover `var(--bg2)`
  - `3+` Años de experiencia
  - `20+` Tecnologías dominadas
  - `JS` Lenguaje principal (grid-column 1/-1)
- Números: Bebas Neue 64px, `var(--fg)`. `+` en `var(--accent)`
- Labels: DM Mono 9px, uppercase, `var(--muted)`, margin-top 8px

---

### 5. Experiencia
- Fondo: `var(--bg2)`
- Grid `240px 1fr`, gap 80px, margin-top 64px

**Tabs laterales** (`border-left: 1px solid var(--border)`):
- Tab: padding 16px 20px, DM Mono 11px uppercase, `var(--muted)` → hover `var(--fg)`
- Tab activo: `border-left: 2px solid var(--accent)`, color `var(--accent)`, fondo `rgba(193,193,1,0.04)`

**Contenido — Vela One (2022 – Actualidad):**
- Título: DM Sans 20px weight 500, `var(--fg)`
- Empresa: DM Mono 12px, `var(--accent)`, uppercase — `Vela One — California, USA`
- Período: DM Mono 10px, `var(--muted)`, uppercase — `2022 — Actualidad`
- Bullets: `▸` en `var(--accent)` 12px + texto 14px weight 300 `rgba(240,237,230,0.72)`, line-height 1.7
  1. **Estrategia de componentes unificada**: sistema de diseño y biblioteca de componentes escalable para web y móvil
  2. **Infraestructura y entrega de contenido**: CDN, configuraciones server-side, baja latencia global
  3. **Desarrollo impulsado por IA**: LLMs, Prompt Engineering en SDLC, automatización de tests
  4. **Liderazgo técnico y mentoría**: equipo global multidisciplinario, Agile, code reviews

**Tags de stack** (debajo, `border-top: 1px solid var(--border)`):
- DM Mono 10px, `border: 1px solid var(--border)`, padding 4px 10px
- Hover: `border-color: var(--accent)`, color `var(--accent)`
- Tags: React · React Native · TypeScript · Node.js · PostgreSQL · LLM Integration · CDN · Agile

---

### 6. Proyectos
- Lista vertical (`flex-direction: column`, `gap: 2px`, fondo `var(--border)`)
- Cada fila: grid `1fr 1fr`, `gap: 2px`, fondo `var(--border)`
- Hover fila: preview sube `translateY(-6px)`, fondo info → `#161622`

**Preview (mockup browser):**
- Fondo `var(--bg2)`, centrado
- Mockup: `border-radius: 6px`, sombra `0 24px 60px rgba(0,0,0,0.5)`, `border: 1px solid rgba(255,255,255,0.06)`, width 85%
- Browser bar: fondo `#1e1e2e`, dots 8px (rojo `#ff5f56` / amarillo `#ffbd2e` / verde `#27c93f`)
- URL bar: DM Mono 9px, `var(--muted)`, fondo `rgba(255,255,255,0.04)`
- Screen: `height: 180px`, fondo oscuro, rayas diagonales CSS + label DM Mono 10px centrado

**Panel info:**
- Fondo `var(--bg)`, padding 44px
- Badge tipo: DM Mono 9px, fondo `var(--accent)`, color `var(--bg)`, padding 3px 10px
- Nombre: Bebas Neue 56px, `var(--fg)`
- Descripción: 13px weight 300, `rgba(240,237,230,0.6)`, line-height 1.75
- Tags stack: DM Mono 9px, `border: 1px solid var(--border)`, padding 3px 9px
- Botones:
  - Primario: fondo `var(--accent)`, color `var(--bg)` → hover: borde acento, texto acento
  - Secundario: `border: 1px solid rgba(240,237,230,0.15)` → hover: borde + texto acento

**Proyectos (en orden, alternando preview/info de lado):**

**1. SHOP.AR** — Preview izquierda / Info derecha
- Tipo: E-Commerce
- Desc: Plataforma e-commerce de alto rendimiento. Gestión de productos, carrito y pagos completos con arquitectura de componentes moderna.
- Stack: React · Node.js · PostgreSQL · Sequelize
- URL: shop.ar

**2. SPLITAPP** — Info izquierda / Preview derecha
- Tipo: Landing Page · Free
- Desc: App para dividir gastos que calcula automáticamente quién debe qué. Organizá cenas, viajes, alquileres y más.
- Stack: React · TypeScript · GIT
- URL: splitapp.ar
- Screen color: `#1a1040`

---

### 7. Contacto
- Fondo: `var(--bg2)`, grid `1fr 1fr`, gap 80px

**Izquierda:**
- "CONSTRUYAMOS ALGO GRANDE" — Bebas Neue `clamp(52px, 8vw, 112px)`, `GRANDE` en `var(--accent)`
- Tagline: 14px weight 300, `var(--muted)`, max-width 360px

**Derecha:**
- "ABIERTO / A NUEVAS IDEAS." — Bebas Neue `clamp(48px, 6vw, 80px)`, `IDEAS.` en `var(--accent)`
- Links (padding 20px 0, `border-bottom: 1px solid var(--border)`):
  - Hover: `border-color: var(--accent)`, valor → `var(--accent)`, flecha → `translateX(6px)`
  - Email: var.nelson15@gmail.com
  - LinkedIn: Conectar en LinkedIn
  - GitHub: github.com/nelsonvargas

---

### 8. Footer
- Flex, `justify-content: space-between`, padding `24px 48px`
- `border-top: 1px solid var(--border)`, fondo `var(--bg)`
- DM Mono 10px, `var(--muted)`
- Izq: `Nelson Vargas © 2025`
- Der: `Diseñado y desarrollado con atención al detalle`

---

## Interacciones y Comportamiento

### Scroll Reveal
```js
// IntersectionObserver, threshold 0.12
// Clases CSS:
.reveal             { opacity: 0; transform: translateY(32px); transition: 0.7s ease; }
.reveal.visible     { opacity: 1; transform: none; }
.reveal-delay-1     { transition-delay: 0.1s; }
.reveal-delay-2     { transition-delay: 0.2s; }
.reveal-delay-3     { transition-delay: 0.3s; }
.reveal-delay-4     { transition-delay: 0.4s; }
// Hero elements: reveal inmediato (200ms timeout on load)
```

### Navegación
- `window.scrollY > 60` → `nav.classList.add('scrolled')` → `padding: 14px 48px`
- `scroll-behavior: smooth` en `<html>`

### Experiencia — Tabs
- Click en tab → activa `.active` en tab y panel de contenido correspondiente

### Modo claro/oscuro
- Toggle clase `body.light`
- Los tokens CSS cambian completamente vía sobrescritura en `body.light { ... }`

### Animaciones de carga (Hero, sin scroll)
```css
/* Underline VARGAS */
@keyframes underline-in { to { transform: scaleX(1); } }
/* Propiedades: scaleX(0→1), 0.8s, delay 1.2s, cubic-bezier(0.16,1,0.3,1) */

/* Dot ubicación */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
}
/* 2s, ease-in-out, infinite */

/* Scroll hint */
@keyframes scroll-scan { to { left: 100%; } }
/* Línea con scan amarillo: 2s, delay 2s, ease-in-out, infinite */

/* Fade in scroll hint */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}
/* delay 2s */
```

---

## Textura de fondo (grain)
```html
<!-- Elemento fijo, pointer-events: none, z-index: 1000, opacity: 0.03 -->
<div style="position:fixed; inset:0; background-image: url('data:image/svg+xml,...feTurbulence baseFrequency=0.9 numOctaves=4...'); opacity:0.03; pointer-events:none; z-index:1000;"></div>
```

---

## Archivos incluidos
- `Portfolio.html` — Prototipo de diseño completo (referencia visual)
- `README.md` — Este documento

---

## Notas para el desarrollador
1. **Screenshots de proyectos**: Los previews de browser usan placeholders. Reemplazar con capturas reales de Shop.ar y SplitApp
2. **Links reales**: GitHub, LinkedIn, CV descargable — conectar a URLs reales
3. **Toggle EN/ES**: Implementar i18n; el botón ya está en el nav
4. **Marquee**: Puede implementarse con `react-fast-marquee` o CSS puro (dos copias del contenido para loop sin salto)
5. **Reveals**: Usar `framer-motion` (`useInView`) o CSS `IntersectionObserver` puro
6. **Grain**: Overlay SVG inline con `feTurbulence` — alternativa: `noise.png` como `background-image`
