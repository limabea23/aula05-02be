import express from "express";
import { config } from "dotenv";

import routes from "./routes/index.routes.js";

config();

const port = process.env.PORT || 3000;

const app = express();
app.use(routes);
app.use(express.json());

app.post("/2tds1", (req, res) => {
  return res.status(333).send({ message: "Hello, 2TDS1 - só os dev!" });
});

app.listen(port, () => {
  console.log(`🤠 Server started on http://localhost:${port}`);
});
