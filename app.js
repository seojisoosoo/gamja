const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const d = require("./db.json");

const data = d;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/get", (req, res) => {
  // res.send(data);

  setTimeout(() => {
    res.send(data.loopyData);
  }, 500);

  // throw new Error("error");
});

app.post("/post", (req, res) => {
  const loopyData = data.loopyData;
  const newData = {
    id: loopyData.length + 1,
    ...req.body,
  };
  loopyData.push(newData);
  res.send(loopyData);
});

app.put("/put", (req, res) => {
  const { name, ...putData } = req.body;
  targetLoopy = data.loopyData.find((x) => x.name === name);
  targetLoopyIdx = data.loopyData.indexOf(targetLoopy);
  data.loopyData[targetLoopyIdx] = {
    ...targetLoopy,
    ...putData,
  };
  res.send(data.loopyData);
});

app.delete("/delete", (req, res) => {
  const { name } = req.body;
  data.loopyData = data.loopyData.filter((x) => x.name !== name);
  res.send(data.loopyData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/login", (req, res) => {
  if(req.body.email===data.user[0].email && req.body.password===data.user[0].password){
    res.send("asdfjeifj56543asfnksafjiwehfiwf12342asfksadjfkdjs")
  }
  else{
    throw new Error("error");
  }
});
