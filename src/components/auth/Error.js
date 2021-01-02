import { Alert } from "react-bootstrap";

const Error = ({ err, resetAuthError }) => {
  let message;
  switch (err) {
    case "NotAuthorizedException":
      message = "Invalid email or password.";
      break;
    case "InvalidPasswordException":
      message = `Passwords must contain at least
        one uppercase letter, one special character,
        and be at least 8 characters long`;
      break;
    default:
      break;
  }
  console.log("rerender Error with: ", err);
  console.log(message);
  return (
    <Alert 
      variant="warning" 
      onClose={() => resetAuthError()} dismissible
    >
      <Alert.Heading>I think you messed up something.</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default Error;