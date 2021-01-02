import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import SignIn from './SignIn';
import ConfirmSignUp from './ConfirmSignUp';
import SignUp from './SignUp';
import Error from './Error';

const CustomAuthenticator = ({setAuthData, data}) => {
  const [authError, setAuthError] = useState();
  const [authState, setAuthState] = useState();

  if (data && authState === "unconfirmed") {
    return <ConfirmSignUp {...data} setAuthState={setAuthState} />;
  } else if (authState === "signup") {
    return (
      <Container>
        {authError && <Error 
          err={authError}
          resetAuthError={setAuthError}
          setAuthState={setAuthState}
        />}
        <SignUp
          setAuthData={setAuthData}
          setAuthState={setAuthState}
          setAuthError={setAuthError}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        {authError && <Error 
          err={authError}
          resetAuthError={setAuthError}
          setAuthState={setAuthState}
        />}
        <SignIn 
          setAuthData={setAuthData} 
          setAuthState={setAuthState}
          setAuthError={setAuthError}
        />
      </Container>
    );
  }

};

export default CustomAuthenticator;