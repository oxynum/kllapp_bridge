const { google } = require('googleapis');
const dotenv = require('dotenv');
dotenv.config();
  
const jwtClient = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY,
    process.env.SCOPES
);

console.log(jwtClient)


