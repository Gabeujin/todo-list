const port = 3000;
const express = require("express");
const usersTodos = require("./routes/todo");
const app = express();
//view engine 사용
app.set("view engine", "ejs");
app.set("views", "./views");
//라우터 지정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/todo", usersTodos);

app.get("/", (req, res, next) => {
  //홈페이지 지정
  var vsSubTitle = "nodeJs x express web framework(CodeSandbox)";
  //view engine 사용시
  res.render("index", {
    title: `${vsSubTitle}`,
  });
});

app.listen(port, () => {
  //port listening 중일때 아래 코듯 실행
  console.log(`Example app listening on port ${port}`);
});
