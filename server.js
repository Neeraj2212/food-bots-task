const express = require("express");
const path = require("path");
const router = require("./routes/router");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
app.use("/api", router);
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
// app.use(express.static(path.join(__dirname, "public")));

app.listen(port, (req, res) => {
	console.log("Server started on port " + port);
});
