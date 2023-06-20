const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()

// TODO:middleware

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const options = { customCssUrl: './public/swagger-ui.css', customSiteTitle: "Shamsipour LMS - Swagger" }

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerFile));
routes.get('/', swaggerUi.setup(swaggerFile, options));

//TODO: Routes

app.use("/auth", require("./routes/authRoute"));
app.use("/", require("./routes/courseRoute"));
app.use("/", require("./routes/lessonRoute"));
app.use("/quiz", require("./routes/quizRoute"));
app.use("/users", require("./routes/userRoute"));
app.use("/profile", require("./routes/profileRoute"));
app.use("/enroll-course", require("./routes/enrollRoute"));

//TODO: Deploy:

// if (process.env.NODE_ENV == 'production') {
//   app.use(express.static('client/build'))
//   const path = require('path')
//   app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }

//TODO: Database and server created

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Express JS on Vercel')
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error occurred");
  });
