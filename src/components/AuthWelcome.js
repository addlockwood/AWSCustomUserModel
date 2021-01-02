const AuthWelcome = ({
  first_name,
  last_name,
  profession,
  email
}) => {
  return (
    <div>
      <h1>Hello, {first_name} {last_name}</h1>
      <p>Heard you liked fucking {profession}</p>
      <p>We'll send you tons of pics at {email}</p>
    </div>
  );
};

export default AuthWelcome