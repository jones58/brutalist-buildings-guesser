# Brutalist Buildings

Updated Brutalist Map built in React,TypeScript and Tailwind. Bootstrapped with Vite and deployed to Netlify.

## Building

- After the success of my [Brutalist Map project](https://github.com/jones58/brutalist-map), I wanted to rebuild it in a modern framework. Seeing as much of the functionality of that project was in JavaScript, I wanted to rebuild it in React, as it was hard to navigate the codebase, something a component based architecture would solve.
- I realised that this would allow me to use the mapbox NPM package rather than the CDN method I was previously using, which would allow me to host the geojson data myself - making it much easier to edit.
- During development, it became obvious that I could make a multi-page site with the data, now that I was selfhosting it, allowing me to display it in different ways. This would allow different users to engage as they wished.
- First, I set up the app using Vite.
- Then I worked on each of the pages in the app, using Tailwind CSS to rapidly design them in a similar style to my Brutalist Map project.
- Taught myself how to use APIs in Javascript with fetch() and then applied this to React.

  - I spent a long time trying to get this to work - it was relatively simple with the Mapbox URL but I also wanted to use local geojson data where possible (easier to edit and reference).

- Added Brutalist Map into the page

  - [React-map-gl](https://github.com/visgl/react-map-gl) as an API wrapper for [mapbox-gl](https://github.com/mapbox/mapbox-gl-js), with [mapbox studio](https://www.mapbox.com/studio/) staying as the source.

- Added React Router to navigate between pages and serve a 404 page and Link elements to improve page load speed.
- Deployed to Netlify.
- Added markers to the map using a map function.
- Added controls to the map using the example [in the React-map-gl docs](https://github.com/visgl/react-map-gl/blob/7.1-release/examples/controls/src/app.tsx) as a guide.
- Added details of the buildings on hovering over them on the map. I tried using the example [in the React-map-gl docs](http://visgl.github.io/react-map-gl/examples/geojson) but unfortunately couldn't get it to work. A workaround was to create a custom marker, since React Map GL wasn't letting me add onMouseEnter events to the marker that comes with the NPM package. I then used State management, to set whether each marker was hovered over. This caused some flickering which I resolved by binding the onMouseEnter and onMouseLeave events to the div displaying the information on hover.
- Added click event on marker, similar to the hover event above. Used borrowed html and css from the index page.
- Edited map so visited buildings are highlighted green on the map.
- Transformed svg icons to React TSX components using an [online tool](https://react-svgr.com/) - to allow for easier editing.
- Updated mobile look of site after some debugging on different screen sizes.
- I noticed some issues with images not loading, so I decided to download them from the links in the geojson data. I ran a python script to do this, and then another script to compress the .webp images down to below 1mb. This would improve speed.
- Abstracting out mapcontrol and customMarker components into separate files from the map component. This improves editability.

## Running on your machine

Clone the project and run the development server:

```bash
npm run dev
```
