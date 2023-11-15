const express = require("express");
const usersRouter = require("./routes/users");
const usersTodos = require("./routes/todo");
const app = express();
const port = 3000;

//view engine 사용
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  //홈페이지 지정
  //res.sendFile(__dirname + viewPath + "/index.html");
  var vsSubTitle = "express js";
  //view engine 사용시
  res.render("index", {
    title: `node.js with ${vsSubTitle} and viewEngine EJS`,
  });
});

//라우터 지정
app.use("/users", usersRouter);
//app.use("/todo", usersTodos);

app.listen(port, () => {
  //port listening 중일때 아래 코듯 실행
  console.log(`Example app listening on port ${port}`);
});
