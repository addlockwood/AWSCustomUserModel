import Button from 'react-bootstrap/Button';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const ConfirmSignUp = ({email, setAuthState}) => {
  const [resendCode, setResendCode] = useState(false);
  const resendAuthConfirmation = event => {
    event.preventDefault();
    Auth.resendSignUp(email);
  };
  return (
  <>
    {resendCode && (
      <Alert variant="info" onClose={() => setResendCode(false)}>

      </Alert>
    )}
    <p>Please confrim your email at {email} then sign in.</p>
    <Button onClick={event => setAuthState(event.target.value)} value="signin">Sign In</Button>
    <Button onClick={resendAuthConfirmation}>Resend Comfirmation Email</Button>
  </>
  );
};


export default ConfirmSignUp