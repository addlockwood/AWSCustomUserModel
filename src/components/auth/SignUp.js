import { useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Form, Button, InputGroup } from "react-bootstrap";
import { Auth } from 'aws-amplify';

const SignUp = ({ setAuthState, setAuthData, setAuthError }) => {
  const [signUpData, setSignUpData] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [attributes, setAttributes] = useState();

  const setInput = event => {
    const _name = event.target.name;
    const _value = event.target.value;
    if (["email", "password"].includes(_name)){
      if (_name === "email") {
        setSignUpData({
          ...signUpData,
          username: _value,
        });
        setAttributes({
          ...attributes,
          [_name]: _value
        });
      } else {
        setSignUpData({
          ...signUpData,
          [_name]: _value
        });
      }
    } else {
      setAttributes({
        ...attributes,
        [_name]: _value
      });
    }
  };

  const signUpInputs = [
    {
      placeholder: "First Name",
      type: "text",
      name: "name"
    },
    {
      placeholder: "Last Name",
      type: "text",
      name: "family_name"
    },
    {
      placeholder: "Email",
      type: "email",
      name: "email"
    },
    {
      placeholder: "Password",
      type: "password",
      name: "password"
    },
    {
      placeholder: "Profession Type",
      type: "text",
      name: "custom:profession_type"
    }
  ];

  const submit = event => {
    event.preventDefault();
    console.log({...signUpData, attributes: {...attributes}});
    Auth.signUp({...signUpData, attributes: {...attributes}})
      .then(res => {
        console.log(res);
        setAuthState("unconfirmed");
        setAuthData({...signUpData, ...attributes});
      })
      .catch(({ code }) => {
        console.log(code);
        setAuthError(code);
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
    {
      signUpInputs.map((item, i) => {
        return item.name === "password" ? (
            <Form.Group key="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
              <Form.Control
                type={passwordType}
                placeholder="Enter Password"
                onChange={setInput}
                name={item.name}
              />
                <InputGroup.Append>
                  <InputGroup.Text onClick={handelShowPassword}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          ) : (
            <Form.Group key={i}>
              <Form.Label>{item.placeholder}</Form.Label>
              <Form.Control
                placeholder={`Enter ${item.placeholder}`}
                type={item.type}
                name={item.name}
                onChange={setInput}
              />
            </Form.Group>
          );
      })
    }
    <Form.Group>
      <Button type="submit">Sign Up</Button>
      <Button variant="link" onClick={event => setAuthState(event.target.value)} value="signin">Already have an account? Sign in here.</Button>
    </Form.Group>
  </Form>
  );
};

export default SignUp;