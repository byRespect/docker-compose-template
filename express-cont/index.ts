import express from "express";
const app: express.Application = express();

const port: number = 1337;

app.get("/api", (_req, _res) => {
  _res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
