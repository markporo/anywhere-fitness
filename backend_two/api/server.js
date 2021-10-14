const express = require("express");
const server = express();
server.use(express.json());
// server.use(cors());
// server.use(helmet());

const userRouter = require("./users/router");
server.use("/api/users", userRouter);

server.use("*", (req, res, next) => {
  console.log(`hitting${req.method} and ${req.baseUrl}`);
  next({ status: 404, message: "not found" });
});

server.use((err, req, res) => {
  res.status(err.status || 500).json({ message: `Horror: ${err.message}` });
});

module.exports = server;
