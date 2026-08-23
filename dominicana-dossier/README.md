# Dossier hotelero — República Dominicana

Módulo aislado y temporal. No está enlazado desde la navegación, el home ni el sitemap.

## URLs

- ES: `/es/inversiones/republica-dominicana`
- EN: `/en/investments/dominican-republic`

## Variable de entorno

`DOMINICANA_DOSSIER_PASSWORD` (Vercel → Project → Settings → Environment Variables).

No guardar el valor en el repositorio.

## Cómo eliminar este proyecto

1. Borrar la carpeta `dominicana-dossier/`.
2. Borrar las rutas:
   - `app/[locale]/(dominicana)/`
   - `app/api/dominicana-dossier/`
3. Quitar `outputFileTracingIncludes` y los headers de dossier en `next.config.ts`.
4. Quitar `/es/inversiones/` y `/en/investments/` de `app/robots.ts`.
5. Eliminar `DOMINICANA_DOSSIER_PASSWORD` en Vercel.
