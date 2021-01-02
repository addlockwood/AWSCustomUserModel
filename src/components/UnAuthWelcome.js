import React from 'react';
import { AmplifyConfirmSignUp, AmplifyAuthenticator,
    AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
// import ConfirmSignUp from './auth/ConfirmSignUp';

const UnAuthWelcome = () => {
  return (
    <>
    <div>Ummm...</div>
    <p>I don't know you. Please sign in or sign up.</p>
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "name",
            label: "First Name",
            placeholder: "Enter First Name",
            required: true,
          },
          {
            type: "family_name",
            label: "Last Name",
            placeholder: "Enter Last Name",
            required: true,
          },
          {
            type: "email",
            label: "Custom email Label",
            placeholder: "custom email placeholder",
            required: true,
          },
          {
            type: "password",
            label: "Custom Password Label",
            placeholder: "custom password placeholder",
            required: true,
          },
          {
            type: "custom:profession_type",
            label: "Profession Type",
            placeholder: "custom Profession placeholder",
            required: false,
          },
        ]} 
      />
      <AmplifyConfirmSignUp
        slot="confirm-sign-up"
        usernameAlias="email"
        headerText="Confirm Sign Up Bitch"
        formFields={[{}]}
        />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />

    </AmplifyAuthenticator>
    </>
  );
};

export default UnAuthWelcome;