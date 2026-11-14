# AgWeather website

This is the code to build the MSU AgWeather website for Dr. Jeff Andresen. 

## Quick start

This is a javascript site, using [Svelte.js](https://svelte.dev/) that can build a mostly static website.  This source code can be built before deployment. 

 We use [`pnpm`](https://pnpm.io/) instead of npm to manage this node package, but `npm` should work ok.  project has a 'lockfile' describing which 

1. install things `pnpm i --frozen-lockfile`
    - if you are developing and need update package, just use `pnpm -i` but check the lock file into git
2. start a local dev server and view on your browser `pnpm run dev --open`



This project was started with the Svelte `sv` utility as follows:

```sh
# recreate the skeleton basis for this project
pnpm dlx sv@0.15.3 create --template minimal --types ts --add eslint vitest="usages:unit" playwright tailwindcss="plugins:typography" sveltekit-adapter="adapter:static" --install pnpm agweather
```

## Developing

### Getting stated
1. install pnpm and node if necessary.  This was developed with node v22.x
2. `pnpm install` to install dependencies, or `pnpm i --frozen-lockfile` to 
    keep current versions

### Dev

3. `pnpm run dev` start web server to test
4. edit pages 


### Testing
5. TBD will require writing tests to ensure all pages build
   - uses [`playwright` ](https://playwright.dev/)
   TODO:  add accessibility, see https://playwright.dev/docs/accessibility-testing 

### Building 

6. `npm run build` to create a site in the 'build' folder
7. You can preview the production build with `npm run preview` (which may be different then the dev server above)

### Deployment

TBD



