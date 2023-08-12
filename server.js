const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json());
const port = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute");
const path = require("path");
app.use("/api/user/", userRoute);



app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*",function(_,res){
  res.sendFile(
    path.join(__dirname,"./client/build/index.html"),
    function(err){
      res.status(500).send(err),
        }
        );
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
