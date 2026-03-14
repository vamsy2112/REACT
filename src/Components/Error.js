import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>there's an error loading the page</h1>
      <h4>
        {err.status} - {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
