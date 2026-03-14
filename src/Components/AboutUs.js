import UserContext from "../../utils/UserContext";

// re-write this in class based comp. then we can use UserContext.Consumer properly.
const AboutUs = () => {
  return (
    <div>
      <UserContext.Consumer>
        <h1>
          {(data) => {
            data.loggedInUser;
          }}
        </h1>
      </UserContext.Consumer>
    </div>
  );
};

export default AboutUs;
