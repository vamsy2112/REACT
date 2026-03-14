# the ninth

# custom hooks:

- nothing but simple js functions like other hooks
- remember to return something out of it
- think of the contract like what it needs to take as parameter and return.
- for e.g., in restaurantMenu file, it must be having a simple single responsibvility of displaying the UI instead of fetching the data.
- we can extract that particular piece of code into a custom hook and name it useRestaurantInfo.js under utils folder
- this will simply take resId as parameter, fetch the data using useEffect(), store the data into a state variable initially as null or empty andthen when the data successfully fetched, setState it and resturn the state.
- now in the main component where we want to use this hook, simply import and store it with a variable.

# lazy loading, code splitting, on-demand loading, chunking, dynamic import:

- go to the applayout page or place where the compoenent is gettinng called.
- simply use lazy import. this is like below:
- const Grocery = lazy(() => import("path of the component"))
- this lazy is given to use by react so import it as a named import. it accepts a callback function and returns us the path of the component
- Now react will throw an error while loading the lazy component because it wont be able to render the data of component until it fetch and recieves data of that component. so that middle state is causing the error. to avoid this, use Suspense component which is given to us by react.
- Just wrap the lazy component with Suspense component and it will work.
