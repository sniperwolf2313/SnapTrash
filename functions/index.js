const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin")

const app = express();
const cors = require("cors");

var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(cors({origin: true}))

app.get("/hello-world", (req, res) => {
    return res.status(200).json({message: "Hello World!"});
});


app.use(require('/src/routes/report_routes.js'));


exports.app = functions.https.onRequest(app);

