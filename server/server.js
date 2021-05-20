const express = require("express");
const path = require("path");
const router = require("./routes/router");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", router);

app.listen(port, (req, res) => {
	console.log("Server started on port " + port);
});
