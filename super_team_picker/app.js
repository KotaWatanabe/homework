const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
// const methodOverride = require("method-override");
const rootRouter = require("./routes/root");
const cohortsRouter = require("./routes/cohorts");

const app = express(); // http.createServer(...)

app.set("view engine", "ejs");


app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));


// app.use(
//   methodOverride((req, res) => {
//     if (req.body && req.body._method) {
//       const method = req.body._method;
//       return method;
//     }
    
//   })
// );

// COOKIER PARSER
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));


// app.use((request, response, next) => {
//   console.log("ðª Cookies:", request.cookies);
//   response.locals.username = "";
//   const username = request.cookies.username;
//   if (username) {
//     response.locals.username = username;
//   }

//   next();
// });

// -= ROUTERS =-

app.use("/", rootRouter);
app.use("/cohorts", cohortsRouter);


const PORT = 4508;
const ADDRESS = "localhost"; // 127.0.0.1
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});
