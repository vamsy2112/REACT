const heading = React.createElement(
  "div",
  { id: "container", xyz: "abc" },
  [
    React.createElement(
      "h1",
      { id: "heading1", className: "heading1" },
      React.createElement(
        "h2",
        { id: "heading2", className: "heading2" },
        "Hello from heading 2",
      ),
    ),
  ],
  [
    React.createElement(
      "h1",
      { id: "heading1", className: "heading1" },
      React.createElement(
        "h2",
        { id: "heading2", className: "heading2" },
        "Hello from heading 2",
      ),
    ),
  ],
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
