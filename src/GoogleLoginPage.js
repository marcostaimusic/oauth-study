import { GoogleLogin } from '@react-oauth/google';

export const App2 = () => {

  const onSuccess = async (res) => {
    const idToken = res.credential;
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ token: idToken })
    });
    const data = await response.json();
    console.log(data);
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        buttonText="Login with Google"
      />
    </div>
  );
}

export default App2;
