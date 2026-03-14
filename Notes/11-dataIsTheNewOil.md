# HOC

- a function which takes a component, adds special features and returns a comp back.
- e.g., Promoted label on swiggy resCards.

- create func which takes a func comp as parameter

```js
const withPromotedLabel = (ResCard) => {
  return (props) => {
  return (
  // adding special features here...
  )
  }
  }
```

- # Lifting the state up & controlled-uncontrolled components
- so imagine if you want to collapse all the categories on click of a single category of products, then we must lift the state up.
- see. each of the category (accordion of food category) has its own state to show or hide the description which is a boolean.
- we can create this collapsible accordion with setShowCategoryDesc(!showCategoryDesc)
- But this will only show or hide each category. We want to biuild in a way that if all other categories are opened, then on click of a category, all others must collapse.
- so for this, we need to lift the state showCategoryDesc up to its parent. Let the parent control the child's state.
- How can we do this? we will just cut this state and paste it into the parent. and pass this state as a prop to child.
- We must pass the function (setState func) as a prop and this needs to be called by the child on click event.
- so the sequence is:

1. the child calls the setState method on click event
2. the parent's state changes which force to re-render the UI
3. Child comp also gets re-rendered.

- This way we can control the state of a child from parent comp. This introduces to a new concept called as controlled and uncontrolled component.

- In this case, the parent is controlling the child comp. earlier when the child had its own state, it was uncontrolled but now after lifting the state up, it is a controlled component.

# context API

- for functional components, we must create a context first under utils folder, PascalCase styled name of comp, which is like a regular comp.
- in UserContext.js file under utils folder:

```js
import {createContext} from react
const UserContext = createContext({
loggedInUser: "Default User"
})

export default UserContext
```

- This creates a context available globally and can be accessed anywhere like this:

```javascript
import UserContext from "./path"
import {useContext} from react
```

- inside a func comp:

```js
  const data = useContext(UserContext)
  ``
  - if you console.log(data), then you will see an object with a property loggedinUser and its value.
- so you can destructure this on the fly and use it in the comp.

- Now what if i want to change the global valuefrom context?
- Thid can be done using a special thing called UserContext.Provider component given to us by rfeact
- we just have to wrap the app component with this and provide a prop value as {loggedInUser: "Vamsy Gannavarapu"}
- Now you will see the loggedinUser value will get updated to this value aftert successful credential validations
```
