# Project Context
- **Tooling** Javascript using node, pnpm (over npm where possible)
- **Stack:** Svelte 5 + SvelteKit for the AgWeather website (as much static as possible with minimal server-side)
  for HTML generation use DaisyUI  Tailwind CSS and custom CSS for the MSU-related site (see style below)
  When creating page elements, try to create re-useable components based on Svelte5/runes.  Use vite-test for testing. 
- **Style** as much as possible refer to best practrices and web standards from MSU especially https://dxstudio.msu.edu/website-technology/web-standards 
  but other examples such as https://www.canr.msu.edu/webteam/websites/web-standards, striving to be WGAG 2.2 compliant
  You can refer to a template created based on these principles on https://github.com/billspat/Unofficial-MSU-Website-Template
  for additional components like cards etc.  
- **Active Skills:** Use the global `svelte5` skill for all frontend/UI tasks. 
- **Deployment:** Must build cleanly to static assets (`pnpm run build`) with clear local-preview instructions in `README.md` 
  so that it can be deployed not only to services like Vercel but for a local deployment if SSR is needed
- **Dev Assistance** Make suggestions for how to apply best practices to make this site easy to maintain and develop
  for those who may not use Svelte5 or do web development every day.  add info into the "notes" directory as markdown
  for extensive hints to developers or describing components.  It's ok to put comments inside components to describe
  how the are to be used in the project 

