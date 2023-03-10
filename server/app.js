//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();

const authRoutes = require("./routes/auth.js");
const transferRoutes = require("./routes/transfer.js");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioClient = require("twilio")(accountSid, authToken);


//app
const app = express();
app.use(express.json());
app.use(express.urlencoded());

//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("DB connected")).catch(err => console.log("DB connection error", err));

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));


//routes
const testRoutes = require('./routes/test');
app.use("/", testRoutes);
app.post("/", (req, res) => {
  const { message, user: sender, type, members } = req.body;

  if (type === "message.new") {
    members
      .filter((member) => member.user_id !== sender.id)
      .forEach(({ user }) => {
        if (!user.online) {
          twilioClient.messages
            .create({
              body: `You have a new message from ${message.user.fullName} - ${message.text}`,
              messagingServiceSid: messagingServiceSid,
              to: user.phoneNumber,
            })
            .then(() => console.log("Message sent!"))
            .catch((err) => console.log(err));
        }
      });

    return res.status(200).send("Message sent!");
  }

  return res.status(200).send("Not a new message request");
});
app.use("/auth", authRoutes);
app.use("/transfer", transferRoutes);

//port
const PORT = process.env.PORT || 8080;

//listen
const server = app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))