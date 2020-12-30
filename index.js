const express = require("express")
    , morgan = require("morgan")
    , bodyParser = require("body-parser")
    , cookieParser = require("cookie-parser")
    , helpers = require("./helpers")
    , account = require("./api/account")
    , customer = require("./api/customer")
    , app = express();

app.use(helpers.rewriteSlash);
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser());
app.use(helpers.sessionMiddleware);
app.use(morgan("dev", {}));

/* Mount API endpoints */
app.use("/api-v1", customer);
app.use("/api-v1", account);

app.use(helpers.errorHandler);

const server = app.listen(process.env.PORT || 8079, function () {
  const port = server.address().port;
  console.log("App now running in %s mode on port %d", app.get("env"), port);
});