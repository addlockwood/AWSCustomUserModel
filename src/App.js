import './App.css';
import { useState, useEffect } from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import UnAuthWelcome from './components/UnAuthWelcome';

function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div> Hello, User 1234</div>
      <p>That's a pretty unoriginal name.</p>
      <p>JK...Welecome {user.attributes.name} {user.attributes.family_name}</p>
      <AmplifySignOut />
    </div>
  ) : (
    <UnAuthWelcome />
  );
}

export default App;
