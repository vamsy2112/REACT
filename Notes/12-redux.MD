# Redux

- redux is a state managemnent library or a data management library

# steps to configure and connect

- install 2 packages @reduxjs/toolkit and react-redux
- create a store using configureStore from reduxjs/toolkit package as named import
- configureStore({}) has list of objects where the data is present

# Connect this store to the app by wwrapping the app with Provider from react-redux package as named import

- This Provider provides a store as prop and in our case it is storeName (appStore)
- Creating the slices of stores. for e.g., cartSlice as below:

- inside cartSlice.js file:

```javascript

 import {createSlice} from reduxjs/toolkit


const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

# Now how to subscribe to the store?

- It will be done using the selector or useSelector hook given to us by react-redux
- in header comp,

```js
import {useSelector} from 'react-redux;

const cartItems = useSelector((store) => {store.cart.items})


```

- so useSelector needs to be imported, then WHEN CALLED, IT TAKES A CALLBACK FUNCTION AND THAT GIVES YOU ACCESS TO STORE. we only need a part of the store which is store.cart.items. This value is extracted via cartItems and used in rendering code.
- now in rendering code , we just need to call the cartItems.length to diisplay the no. of items in the cart in header comp

# How to dispatch an action?

- In the body comp, goal is to show the cartItems.length on header whenever we add an item to the cart.

`js const dispatch = useDispatch()`

- on the add btn, attach an onClick event.
- in the onClick function or onClick handler fn, we need to dispatch an action as below:

```js
const addItemHandler = () => {
  dispatch(addItem("pizza"));
};
```

- carefully observe that all these addItem are part of the actions that we exported.
- also observe that when we said addItem will take state and action as parameters, redux works behind the scenes and assigns the value of action.payload as pizza here.

- so dispatch is a function given to us by react-redux again.
