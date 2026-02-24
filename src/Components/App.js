import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

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
  return (
    <div>
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
