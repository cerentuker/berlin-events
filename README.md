# Berlin Events Application
This is a web application that feeds on [Berlin Events SimpleSearch API](https://www.berlin.de/sen/web/service/maerkte-feste/strassen-volksfeste/index.php/index/all.json?q=) and displays available events in Berlin to the user.

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
For handling the API responses I will be most likely using axios.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Project Stages

Stage: Initial
1- Creating initial components (landing image, button) (add test and failing elegantly component for initial state)
2- Binding the button to the GET request and hit the API when clicked
3- Displaying results on page


Stage: Main
1- My Main concern is to not re-render page inefficiently.
2- Introducing list components that include list element components to place data on page.
  [for further reading](https://reactjs.org/docs/lists-and-keys.html)
3- Will load all data on page load for now. Will add pagination next so that I dont load everything.
4- Will handle the case when API returns zero results. Added an svg to display instead for better UX.
5- Might switch API call to axios from regular fetch if budget allows.

Stage: Touch ups
1- Added logo for visual enhancement.
2- Ordered events by date, latest first.

Stage: Future Plans
1- Will add better mobile support. Now it doesn't adapt to anything smaller than Iphone8.
2- Will add pagination.

