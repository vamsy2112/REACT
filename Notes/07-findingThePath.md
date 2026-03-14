# the seventh

- install react-router-dom
- import {createBrowserRouter} from react-router-dom
- assign it to a variable in app component and it is a function so pass the parameter as an array of objects.
- each object has properties as path and element.

- import RouterProvider component from react-router-dom
- add it to the react.render instead of the applayout like react.render(<RouterProvider router={appRouter} />)
- if there is an error, we need to show the error page and that needs to be given as a property in the object as errorElement: <Error />
- you can use {useRouteError} hook to display more about the error messages.

- how to create children routes?
- so children route means the header will stay there and all other content will be replaced by other components depending on the route we are in.
- children: [{}, {}, {}]. So again this is an array of objs. we can just cut and paste the other pages path objs into this property.
- then, AppLayout component, we can just remove the <Body /> and we can just import a new component from react-router-dom called as <Outlet />.
- This will simply replace the comp based on the route very efficiently. In DOM, we wont see this outlet comp but the HTML code of that particular component.

- Now to make our header work better with links, we can import Link component from react-router-dom and use it to navigate to links via header.
- Link comp works simply like an anchor tag. its just that anchor tag has href attribute, Link has to attribute.
- With this, even when we navigate to any other page, there will be no refresh of the page.

- click on the restuarant card it should also retur the data from swiggy api regarding the name of restaurant, cuisines, etc.
- this all depends on the resId we are using in applauyout inside the path obj.
- we must use the useParams hook bby importing it as named import
- destructure resId from useParams()
  then pass this resId into the API url.
- now import Link component and pass it onto the res card.
- this should redirect to the restaurant page on which it was clicked.
