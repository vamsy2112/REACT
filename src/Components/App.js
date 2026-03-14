import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import AboutUs from "./AboutUs";
import Error from "./Error";
import RestaurantInfo from "./RestaurantInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../../utils/UserContext";

// const heading = React.createElement(
//   "div",
//   { id: "container", xyz: "abc" },
//   [
//     React.createElement("h1", { id: "myHeading" }, "h1 from react"),
//     React.createElement(
//       "h4",
//       { id: "myHeading h4" },
//       "h4 sibling of h1 from react",
//     ),
//   ],
//   [
//     React.createElement(
//       "div",
//       { id: "div1", className: "heading1" },
//       React.createElement(
//         "h2",
//         { id: "h2", className: "heading2" },
//         "Hello from second div 2",
//       ),
//     ),
//   ],
// );

// // JSX
// const JsxHeading = () => {
//   return (
//     <h1 id="heading" className="react-heading">
//       Hello from JSX
//     </h1>
//   );
// };

// const FuncComponent = () => {
//   return (
//     <div>
//       <JsxHeading />
//       <h1>React functional component practice</h1>
//     </div>
//   );
// };
// console.log(JsxHeading, heading);

const AppLayout = (props) => {
  const [name, setName] = useState("Default User");
  // credential validation code goes here...
  // make an api call and send username and password
  useEffect(() => {
    const data = {
      name: "Vamsy G",
    };

    setName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: name }}>
      <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
  );
};

const ContactUs = lazy(() => import("./Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
