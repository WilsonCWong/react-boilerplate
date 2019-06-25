A boilerplate/reference I developed to help kickstart my React projects. Heavily inspired by [Spectrum](https://github.com/withspectrum/spectrum/).

# Features
- Babel and webpack overrides via ```react-app-rewired``` and ```customize-cra```, without having to eject.
- React Router, Redux (with ```redux-thunk```), and ```styled-components``` preconfigured and ready right out of the box.
- Flexible, organized, and sane file structure inspired by [Spectrum](https://github.com/withspectrum/spectrum/).
- Support for build analyzation, just install ```source-map-explorer``` by doing ```yarn global add source-map-explorer```, and then run ```yarn analyze```.

I recommend using ```yarn``` as the package manager for this. Otherwise, delete the ```yarn.lock``` before running ```npm install```.

# File Structure
```public``` - This has all the static files that will be served to the client on the frontend. It includes html files, icons, images, fonts, etc.

```shared``` - Shared JavaScript code.

```src``` - The source code of the frontend SPA.
- ```actions``` - Redux action creators. These should be grouped by category, e.g., actions (this includes thunks!) related to todos should be in todos.js.
- ```components``` - Global components. These are reuseable components such as buttons, inputs, navbars, etc.
- ```hooks``` - Custom hooks that can be used.
- ```pages``` - The pages/routes of the app. Each folder here corresponds to a route and contains the component that renders that route. These folders can also have another ```components``` folder within that holds local components, which are components only used for rendering that page.
- ```reducers``` - The redux reducers go here. Again, each reducer should correspond to its category, e.g., todos.js holds the reducer for todo actions. These reducers are combined together in ```index.js``` to create the root reducer.
- ```store``` - This folder contains an ```index.js``` file, which has a method for creating and initializing the store by injecting all middleware, initial state, and the root reducer.
- ```utils``` - Helper/Utility methods.
- ```globalStyles.css``` - This is a stylesheet for global styles. You can switch this to SASS if you need to pretty easily. Just install the dependency. I'm also aware you can use ```styled-components``` for this using ```createGlobalStyle```, but that has some possible issues. Refer to this [issue](https://github.com/styled-components/styled-components/issues/1593).
- ```index.js``` - The heart of the SPA. The component tree is started and mounted here, routes are defined, and the redux store is initialized here as well.

```config-overrides.js``` - The configuration for ```customize-cra```. Use this to add babel plugins or webpack overrides. Refer to their [documentation](https://github.com/arackaf/customize-cra).