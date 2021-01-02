import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import AuthenticatedApp from './AuthenticatedApp'
import CustomAuthenticator from './components/auth/CustomAwsAuthenticator';
import { Auth } from 'aws-amplify';


function App() {
  const [user, setUser] = useState();  
  useEffect(() => {
    if ( user && user.confirmed) {return;}
    Auth.currentAuthenticatedUser()
      .then(({ attributes }) => {
        console.log("App redered good res: ", attributes);
        setUser({
          first_name: attributes.name,
          last_name: attributes.family_name,
          profession: attributes["custom:profession_type"],
          email: attributes.email,
          confirmed: true
        });
      })
      .catch(err => console.log("App rendered err: ", err));
  }, [user]);
  
  if ( user && user.confirmed) {
    return <AuthenticatedApp  data={user} setAuthData={setUser} />;
  }
  else {
    return (
      <CustomAuthenticator 
        setAuthData={setUser}
        data={user}
      />
    );
  }
}

export default App;
