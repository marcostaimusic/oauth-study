import React, { useState } from "react";
import axios from "axios";

import { GoogleLogin } from "@react-oauth/google";

const CLIENT_ID =
  "516113137194-p0upked7fto9ua4mc6km6f3ih5b2kgds.apps.googleusercontent.com";

const LoginPage = () => {
  const [error, setError] = useState(null);

  const handleGoogleLogin = async (response) => {
    try {
      const {token} = await fetch(
        "http://localhost:5000/",
        // {
        //   tokenId: response.credential,
        //   clientId: CLIENT_ID,
        // }{  
    {
      method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        tokenId: response.credential,
        clientId: CLIENT_ID,
      })
  }
      ).then(res => res.json())
      .then(({token}) => document.cookie = `authToken=${token}; path=/;`)
      // set the authentication cookie with the JWT token
     
      // // redirect to the protected page
      // 
      window.location.href = "/protected-page";
    } catch (err) {
      setError(err.message);
    }
  };

  const onFailure = (error) => {
    setError(error.message);
  };

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        handleGoogleLogin(credentialResponse)
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default LoginPage;


