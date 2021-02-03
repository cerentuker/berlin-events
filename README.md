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
* Creating initial components (landing image, button) (add test and investigate failing elegantly instead of crash and burn)
* Binding the button to the GET request and hit the API when clicked
* Displaying results on page

Stage: Main
* My Main concern is to not re-render page inefficiently.
* Introducing list components that include list element components to place data on page.
  [for further reading](https://reactjs.org/docs/lists-and-keys.html)
* Will load all data on page load for now. Will add pagination next so that I dont load everything.
* Will handle the case when API returns zero results. Added an svg to display instead for better UX.
* Might switch API call to axios from regular fetch if budget allows.

Stage: Touch ups
* Added logo for visual enhancement.
* Ordered events by date, latest first.
* Changed error handling :
  - when the api call is successful and no fatal errors, but call has no results, show the logo only.
  - in case of a fatal error anywhere in App.js, fail elegantly by displaying the custem ui

Stage: Future Plans
* Will implement the API [tests](https://www.smashingmagazine.com/2020/07/react-apps-testing-library/)
* Will add better mobile support. Currently the page doesn't adapt to anything smaller than Iphone8.
* Will add pagination instead of loading all results at once.
* Will add test cases for faulty responses from API call.
* Will change API calls to use [axios](https://blog.logrocket.com/axios-or-fetch-api/)
* Check react best practices and add styleguide

Prioritised test cases
- 'Something went wrong. Please try again later.' should be displayed on screen when App.js crashes
- validate that only the logo is visible on page when API returns 0 results
- validate that there are some card elements on landing page when API returns more than one result.


