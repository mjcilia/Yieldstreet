# Yieldstreet Survey JS Challenge

## Demo
If you don't want to install the project you can go ahead and checkout the demo on https://mjcilia.github.io/Yieldstreet/.

## Running the Project

To run the project, kindly follow the below steps.

### Project Clone and Node Modules Installation
```sh
git clone https://github.com/mjcilia/Yieldstreet.git
cd Yieldstreet
npm i
```
### Start Development Mode
```sh
npm start
```
### Start Production Build
```sh
npm run build
```
### Run Test Suite
```sh
npm run test
```

# Requirements Run Through
- [x] Survey should work by solely including a JS file
    - [x] Craco Setup - `craco.config.js`
    - [x] Sample Build in `./demo` Folder
- [x] A Multi-Step Survey
    - [x] Survey Split Across 4 Steps
    - [x] Next and Previous Navigation
    - [x] Survey Submit Button
    - [x] Close Pop Up Post Submission
- [X] Survey Steps
    - [x] Step 1 - Name (Input) and Email (Input) all Optional
        - [X] Email Validation if Submitted
    - [x] Step 2 - Age (Select) and Gender (Radio Input) all required.
    - [x] Step 3 - Favorite Book (Input) and Favorite Colors (Multi Checkbox) all required;
    - [x] Step 4 - Summary
        - [x] Summary displayed in table
- [x] Survey Submission should be disabled if any of the required fields are omitted.
- [x] Survey Submission should be disabled if any of the fields are invalid (namely email field).
- [x] The survey pop-up should load 2 seconds after the page has loaded.
- [x] Survey works across multiple devices and resoultions


# Bonus Requirements Run Through
- [x] Broswer Tab Closed and the Reopened - see redux-persist in store setup.
    - [x] Lands on Step where user left off before closing tab.
    - [x] User Data is not lost.
- [x] Survey should not re-open if already submitted


# Architecture

## Framework and Libraries

- React with the Create React App Boilerplate was used. This was chosen as it comes with TypeScript support (https://create-react-app.dev/docs/adding-typescript/) out of the box and saves on time in relation to initial Project Setup and Initial Boilerplate. Should this application be taken to production one should review whether to eject from CRA as to provide more flexible optimisations.

- React Material UI (https://mui.com/) - This was chosen and used as it provides a robust and customizable selection of components. More importantly a library such as Material UI has extensive testing around it and also provides form controls with all the required states. 

- Joi (https://joi.dev/) - Joi was used as a Schema Validator for the survey, it was utilised as to validate each step and also the entire survey schema prior to submission. Joi can be thought of as a schema description language and run time data validation tool. 

- Craco (https://github.com/gsoft-inc/craco) - Craco was used as to override the default CRA configuration without having to eject from CRA. Namely used as to satisfy the "Survey should work by solely including a JS file" requirement outlined above. 

- Redux Persist (https://github.com/rt2zz/redux-persist) - Redux persist was used as to Save the Redux Store Data into local storage and thus satisfying one of the Bonus Requirements.

## Project Architecture

- State Management

    - A Flux Architecture with a focus on State Namespacing was adopted. The current setup is scalable as further State Namespaces can be created with minimal effort, see `./store/survey`. Moreover there is a clear seperation between Reducers, Actions and Selectors.

    - The Redux Toolkit (https://redux-toolkit.js.org/usage/usage-with-typescript) was used in relation to state managment. One would argue whether redux is too roobust for such a minor challenge, nonetheless I used Redux Toolkit as to demonstrate how state can be typed and more importantly it would be easier for anyone reviewing this challenge as to understand how state is mangaed.

    - Immer (https://github.com/immerjs/immer) - the Redux Toolkit mentioned above also make use of Immer as to simplify handling Immutable Data Structures. I kept Immer as it tackles pain points when handling state modifications in reducers.

    - State Component Interaction Patterns - A Smart/Dumb Component Pattern was not adopted, instead throughout the app components are encouranged to select parts of the Application State they require and dispatch the relevant actions. This comes with it's pros and cons but most notably you avoid Prop Drilling through out the app.

- Components

    - Functional Components were used through out. As a functional programming advocate myself I find functional components more performant, easier to test, easier to reason about and in general more reusable. Functional components in a way were not utilised to the fullest of extents as they still rely on state nonetheless I wanted to keep things simple for the sake of this challenge.   
    
    - Brad Frosts Atomic Design was used in relation to component structure, thus why components are seperated into 4 distinct levels, namely atoms, molecules, organisms and templates. See https://bradfrost.com/blog/post/atomic-web-design/.

    - Component were also prefixed with the prefix Y. This as for components to be easily distiguished from those provided by React Material UI.

# Potential Improvements

- [ ] Logging - A logger should be implemented as to give developers full visibilty to any erros which might bubble up when the survey is used by an extensive audience across a multitude of browsers, devices and resolutions.
- [ ] Performance / Save on Component Re Renders - Application performance should be fully reviewed as to save on unecessary UI re renders.
- [ ] Performance / Cache Files - Application files should be appropriately cached via the use of service workers. A tool like Workbox can come in handy - https://developers.google.com/web/tools/workbox.
- [ ] Performance / Some extra libraries and asstes are being bundled (namely extra material ui components, icons and web fonts), this should be reviewed as to save on load times. 
- [ ] Better Styling - The survey lacks details in relation to how aesthetically pleasing it looks, more effort to visibilty of system feedback should be implemented.
- [ ] Usability / The survey should go through a review of Jacob Nielsen's usability heuristics - https://www.nngroup.com/articles/ten-usability-heuristics/.
- [ ] Code Quality and Test Coverage - A better linting setup should be implemented as to ensure best practices whilst a more extensive test coverage should also be adpoted. 

