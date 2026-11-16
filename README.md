# AgWeather Website

This is the code to build the MSU AgWeather website for Dr. Jeff Andresen, MSU
Geography, Environment, and Spatial Sciences.  It is designed based on MSU web 
branding and accessibility standards (to the best of our ability)


## Tech

This is a javascript site, using [Svelte.js](https://svelte.dev/) that can build a mostly static website.  This source code can be built before deployment. 

- We use [`pnpm`](https://pnpm.io/) instead of npm to manage this node package, but `npm` should work ok.  project has a 'lockfile' describing which 
- [Svelte.js](https://svelte.dev/) 5.5 and SvelteKit 2.5.7
- Theme built with Daisy UI components, which are based on Tailwind CSS
- Font is 


### Getting stated

0. requires Node.js  Install pnpm and node if necessary.  <br\>
   This was developed with `node` v22.17
1. install things: `pnpm i --frozen-lockfile`  this will use the versions here
    - if you are developing and need update package, just use `pnpm -i` but check the
2. `pnpm run dev` start web server to test
3. edit pages
4. testing:  TBD 
   - will require writing tests to ensure all pages build
   - uses [`playwright` ](https://playwright.dev/)
   - TODO:  add accessibility testing, see https://playwright.dev/docs/accessibility-testing 

5. **Build** `npm run build` to create a site in the 'build' folded, which can be
   copied into static site (this may change in the future).  This folder 
   does not get checked into git as it can always be re-built.  

6. Preview the "build" version with `npm run preview` 

### Deployment

TBD

## Note

This project was started with the Svelte `sv` utility as follows:

```sh
# recreate the skeleton basis for this project
pnpm dlx sv@0.15.3 create --template minimal --types ts --add eslint vitest="usages:unit" playwright tailwindcss="plugins:typography" sveltekit-adapter="adapter:static" --install pnpm agweather
```


### More!

See also the [notes](notes) folder in this repo for more hints on about how to develop


