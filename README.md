# LinguaShell Next.js Starter

Cascarón en Next.js 14 con App Router pensado para lanzar una plataforma de idiomas modular y con foco en rendimiento.

## Características clave
- **Secciones principales**: Grammar, Vocabulary, Reading, Listening, Speaking, Interactive Stories, Exam Preparation, Pronunciation, Forum, Blog y One-to-one Classes; cada ruta incluye `loading.tsx` y componentes propios.
- **Carga bajo demanda**: Todas las páginas importan sus vistas mediante `next/dynamic` + `Suspense`, lo que habilita división de código a nivel de ruta.
- **Prefetch controlado**: El menú principal desactiva el prefetch inicial y lo activa únicamente cuando el usuario pasa el cursor por cada enlace.
- **Diseño base**: Layout con header, aside y área central inspirado en un salón de clase, estilizado con Tailwind CSS.
- **Analytics listo**: Placeholder para GA4 mediante `lib/analytics.ts` y un inicializador cliente.
- **Proxy externo**: Reescritura de `/practica/:path*` hacia `https://mi-app-externa.com/:path*` para integrar herramientas existentes.
- **Preparado para Vercel**: Scripts de build/deploy y configuración amigable con la plataforma.

## Estructura de carpetas
```
app/
  layout.tsx
  page.tsx
  practica/
  <sección>/
    loading.tsx
    page.tsx
    components/
components/
  analytics/
  navigation/
  ui/
lib/
public/
styles/
```

Cada carpeta de sección mantiene sus componentes aislados para evitar dependencias pesadas entre rutas.

## Desarrollo
1. Instala dependencias:
   ```bash
   npm install
   ```
   > Si trabajas sin conexión a npm, configura un mirror privado y actualiza `.npmrc` según tus políticas.
2. Ejecuta el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre `http://localhost:3000` y navega por las secciones. Cada ruta se precargará sólo cuando el usuario muestre intención (hover).

## Personalización del proxy `/practica`
- El proxy se define en `next.config.mjs`.
- Para apuntar a otro dominio, reemplaza `https://mi-app-externa.com/:path*` por tu servicio real.
- Vercel y Next respetarán este rewrite tanto en desarrollo como en producción.

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/practica/:path*',
        destination: 'https://tu-dominio-o-api/:path*',
      },
    ];
  },
};
export default nextConfig;
```

## Añadir nuevas secciones con carga diferida
1. Crea la carpeta `app/nueva-seccion`.
2. Añade `page.tsx` con `dynamic(() => import('./components/NuevaVista'))` y un `Suspense` que use tu mensaje de carga.
3. Crea `loading.tsx` con un esqueleto ligero.
4. Coloca los componentes reales en `app/nueva-seccion/components/`.
5. Si la sección depende exclusivamente del cliente (por ejemplo, canvas o grabación), agrega `ssr: false` en el dynamic import.
6. Actualiza el menú en `components/navigation/MainNav.tsx` para exponer la nueva ruta.

## Consejos de rendimiento
- Mantén los proveedores globales al mínimo dentro de `app/layout.tsx`.
- Divide librerías pesadas (charts, editores, ASR) por ruta usando `next/dynamic` y Suspense.
- Usa componentes `loading.tsx` concisos para feedback inmediato.
- Aprovecha `next/image` para recursos estáticos y optimizaciones automáticas.
- Prefetch sólo cuando el usuario muestre intención (`onMouseEnter`); evita precargas innecesarias en la home.
- Vercel aplica compresión (Brotli) y CDN automáticamente, pero puedes añadir cabeceras adicionales según tus necesidades.

## Deploy en Vercel
1. Crea un proyecto nuevo en Vercel y conecta tu repositorio.
2. En la configuración, asegúrate de que el comando de build sea `npm run vercel-build` (o `npm run build`).
3. El directorio de salida es `.next` por defecto.
4. Tras el deploy, las visitas a `https://tu-dominio/practica/...` serán proxied al dominio configurado en `next.config.mjs` y se verán como parte de tu sitio.
5. Configura tu ID de GA4 en `lib/analytics.ts` cuando esté listo.

## Scripts disponibles
- `npm run dev`: servidor de desarrollo.
- `npm run build`: compilación para producción.
- `npm run start`: servidor en modo producción.
- `npm run lint`: análisis ESLint con reglas de Next.js.
- `npm run vercel-build`: alias para `next build` utilizado por Vercel.
- `npm run deploy`: comando opcional para despliegue manual con la CLI de Vercel (`vercel`).

¡Disfruta construyendo tu plataforma de idiomas sobre este cascarón! 🚀
