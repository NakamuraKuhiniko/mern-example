const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const compression = require("compression");
const server = http.createServer(app);
const path = require("path");
const io = socketIo(server);

require("dotenv").config();

const port = process.env.PORT || 3000;
const clientBuildFolderPath = path.join(__dirname, "..", "client", "build");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static(clientBuildFolderPath));
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);

app.set("socketio", io);

app.get("/*", function (_req, res) {
  res.sendFile(path.join(clientBuildFolderPath, "index.html"));
});

server.listen(port);
