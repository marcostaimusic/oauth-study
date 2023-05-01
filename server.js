const express = require("express");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const cors = require('cors')
const cookieParser = require('cookie-parser');



const CLIENT_ID = "516113137194-p0upked7fto9ua4mc6km6f3ih5b2kgds.apps.googleusercontent.com"
const JWT_SECRET = "<your-jwt-secret>";

// const app = express();

// app.use(cookieParser());

// app.use(express.json());
// app.use(cors({origin:'*'}))
// app.post("/api/auth/google", async (req, res) => {
//   try {
//     const { clientId } = req.body;
//     const client = new OAuth2Client(CLIENT_ID);
//     const ticket = await client.verifyIdToken({
//       idToken: req.body.tokenId,
//       audience: clientId,
//     });
//     const { email } = ticket.getPayload();
//     const authToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
//     console.log(authToken)
//     // set the authentication cookie with the JWT token
//     res.cookie("asdasdasd", authToken, { httpOnly: true });
//     res.status(200).json({ token: authToken, message: "Successfully logged in" });
//   } catch (err) {
//     res.status(401).json({ error: err.message});
//   }
// });
// app.get("/home", async(r,e) =>{
//   console.log('ciaone')
// })
// app.listen(5000, () => console.log("Server is running on port 5000"));


const app = express();
app.use(cors({origin:'*'}))
app.use(express.json());

// app.post('/', (req, res) => {
//   res.cookie('mycookie', 'myvalue', { httpOnly: true }).send('Cookie set');
// });
app.post("/", async (req, res) => {
  try {
    console.log(req.body)
    const { clientId } = req.body;
    const client = new OAuth2Client(CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: req.body.tokenId,
      audience: clientId,
    });
  
    const { email } = ticket.getPayload();
    const authToken = jwt.sign({ email}, JWT_SECRET, { expiresIn: "1h" });
    console.log(authToken)
    // set the authentication cookie with the JWT token
    res.cookie("asdasdasd", authToken, { httpOnly: true });
    res.status(200).json({ token: authToken, message: "Successfully logged in" });
  } catch (err) {
    res.status(401).json({ error: err.message});
  }
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});