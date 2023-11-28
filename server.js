import express from "express";
import morgan from "morgan";
const app = express();


app.use(morgan('dev'));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("hello world");
});

app.post('/',(req,res) =>{
    console.log(req);
    res.json({message:"data received", data:req.body});

});

app.listen(5100, () => {
  console.log("server run");
});
