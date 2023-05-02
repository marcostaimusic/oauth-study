import React, { useState } from "react";
// import axios from "axios";

import { GoogleLogin } from "@react-oauth/google";

const CLIENT_ID =
  "516113137194-p0upked7fto9ua4mc6km6f3ih5b2kgds.apps.googleusercontent.com";

// const LoginPage = () => {
//   const [error, setError] = useState(null);

//   const handleGoogleLogin = async (response) => {
//     try {
//       const {token} = await fetch(
//         "http://localhost:5000/",
//         // {
//         //   tokenId: response.credential,
//         //   clientId: CLIENT_ID,
//         // }{  
//     {
//       method: 'post',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         tokenId: response.credential,
//         clientId: CLIENT_ID,
//       })
//   }
//       ).then(res => res.json())
//       .then(({token}) => document.cookie = `authToken=${token}; path=/;`)
//       // set the authentication cookie with the JWT token
     
//       // // redirect to the protected page
//       // 
//       window.location.href = "/protected-page";
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const onFailure = (error) => {
//     setError(error.message);
//   };

//   return (
//     <GoogleLogin
//       onSuccess={(credentialResponse) => {
//         handleGoogleLogin(credentialResponse)
//       }}
//       onError={() => {
//         console.log("Login Failed");
//       }}
//     />
//   );
// };

// export default LoginPage;


// import React, { useEffect } from 'react';
// import axios from 'axios';


// async function loginUser() {
//   try {
//     const res = await axios.get(
//       'http://localhost:3030/auth',
//       {
//         withCredentials: true,
//       }
//     )
//     return res
//   } catch (error) {
//     console.log(error)
//   }
// }

// function App() {

//   useEffect(() => {
//     loginUser();
//   }, [])

//   return (
//     <div>
// asdasd
//     </div>
//   );
// }

// export default App;


function App() {
  const [cookieValue, setCookieValue] = useState('');

  // const handleGetCookieClick = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/set-cookie', {
  //       credentials: 'include',
  //     });
  //     const data = await response.json();
  //     setCookieValue(document.cookie);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleGetCookieClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/set-cookie', {
        credentials: 'include',
      });
      setCookieValue(document.cookie);
      
      // Send the POST request
      const postResponse = await fetch('http://localhost:3001/post-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: 'example-data' }),
        credentials: 'include',
      });
      console.log(await postResponse.json());
  
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/set-cookie', {
        credentials: 'include',
      });
      const data = await response.json();
      setCookieValue(document.cookie);
    } catch (error) {
      console.error(error);
    }
  };

  // const handlePostDataClick = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/post-data', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ data: 'example-data' }),
  //       credentials: 'include',
  //     });
  //     console.log(await response.json());
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <button onClick={handleGetCookieClick}>Get Cookie</button>
      {/* <button onClick={handlePostDataClick}>Post Data</button> */}
      <GoogleLogin
      onSuccess={(credentialResponse) => {
        handleGetCookieClick()
        // handleGoogleLogin(credentialResponse)
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
      <p>Cookie value: {cookieValue}</p>
    </div>
  );
}

export default App;
