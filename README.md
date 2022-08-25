# LIT Hello world

A starter project with `<hello-world>` LIT component, ready to begin its journey.
Using [vitejs](https://vitejs.dev).

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:5173/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artefacts will be stored in the `dist/` directory.
Note that the entry point is set to `index.html`. You can change it to `src/hello-world.ts` if you prefer to build 1 single web component instead of a web component embedded in a page. The main difference will be the name of the files. In the case of embedded components, the name is hashed (since the entry point is `index.html`) otherwise it's not since it is the entry point of the library.
## API viewer

Included is the generation of `custom-elements.json` which is the result of [Custom Elements Manifest Analyser](https://custom-elements-manifest.open-wc.org/). To view the API of your custom element go to `http://localhost:8000/api-viewer.html` while in development mode `npm run start`. All changes made to the web component are reflected in the API viewer.
