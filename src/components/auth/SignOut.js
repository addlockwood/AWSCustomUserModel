import Button from "react-bootstrap/Button";
import { Auth } from "aws-amplify";

const SignOut = ({ setAuthData }) => {
  
  const signout = () => {
    console.log("sign out");
    Auth.signOut()
      .then(res => {
        console.log("signout success", res);
        setAuthData();
      })
      .catch(err => console.log(err));
  };

  return (
    <Button onClick={signout}>Sign Out</Button>
  );
};

export default SignOut;