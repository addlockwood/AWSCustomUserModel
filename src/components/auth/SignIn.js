import { useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Form, Button, InputGroup } from "react-bootstrap";
import { Auth } from "aws-amplify";

const SignIn = ({setAuthState, setAuthData, setAuthError}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const submit = event => {
    event.preventDefault();
    //check user sign in
    console.log(email);
    console.log(password);
    Auth.signIn(email, password)
      .then(({attributes}) => {
        setAuthData({
          email: attributes.email,
          first_name: attributes.name,
          last_name: attributes.family_name,
          profession: attributes["custom:profession_type"],
          confirmed: true
        });
      })
      .catch(({ code }) => {
        setAuthData({email: email});
        code === "UserNotConfirmedException" ? setAuthState("unconfirmed") : setAuthError(code);
      });
  };

  const handelShowPassword = () => {
    console.log(showPassword);
    setShowPassword(!showPassword);
    const _type = showPassword ? "password" : "text";
    setPasswordType(_type);
    console.log(showPassword);
  };

  return (
  <Form onSubmit={submit}>
    <Form.Group>
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" onChange={event => setEmail(event.target.value)} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <InputGroup>
      <Form.Control type={passwordType} placeholder="Enter Password" onChange={event => setPassword(event.target.value)} />
        <InputGroup.Append>
          <InputGroup.Text onClick={handelShowPassword}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
    <Form.Group>
      <Button type="submit">
        Sign In
      </Button>
      <Button variant="link" onClick={event => setAuthState(event.target.value)} value="signup">Don't have an account? Sign up here.</Button>
    </Form.Group>
  </Form>
  );
};

export default SignIn;