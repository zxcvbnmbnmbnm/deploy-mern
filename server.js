const express = require("express");
const app = express();
const cors = require("cors")
const path = require("path")
app.use(express.json())
app.use(express.static("./client/build"))

app.use(cors())

let nameid = 3

let data = [
  {name:"new name 1",roll:321},
  {name:"new name 2",roll:331221},
  {name:"new name 3",roll:5321},
]


let reqCount = 1;

app.get("/data", (req  , res) => {
    res.json(data)
});

app.post("/data",(req,res)=>{
  data.push({name:`new name ${++nameid}`,roll:32132})
  res.json(data)
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname,"client","build","index.html"))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server listening on port ==> ", PORT);
});
