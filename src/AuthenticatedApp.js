import AuthWelcome from './components/AuthWelcome';
import SignOut from './components/auth/SignOut';
import Container from 'react-bootstrap/Container'

const AuthenticatedApp = ({setAuthData, data}) => {
  return (
  <Container>
    <AuthWelcome {...data} />
    <SignOut setAuthData={setAuthData} />
  </Container>
  );
};

export default AuthenticatedApp;