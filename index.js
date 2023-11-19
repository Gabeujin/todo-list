const port = 3000;
const express = require("express");
const app = express();

//app.set
app.set("view engine", "ejs"); //view engine 사용
app.set("views", "./views"); //view engine 으로 읽어들일 정적파일 관련 폴더

//app.use
app.use(express.json()); //json data를 읽기위해 사용. ex){data : "1"}
app.use(express.urlencoded({ extended: true })); //관련 정보는 middleware인 body-parser 참고하면 좋음, extended 는 querystring 내장모듈을 사용시 false, qs 모듈 사용시 true

//router section - app.use 다음에 작성

//mapping section
app.get("/", (req, res, next) => {
  //GET 방식으로 호출시
  let vsSubTitle = "nodeJs x express web framework";
  let vsDescription = "on CodeSandbox";
  //view engine 사용시 아래와 같이 서버상에서의 결과를 화면으로 전달 가능하다
  res.render("index", {
    title: `${vsSubTitle}`,
    subTitle: `${vsDescription}`,
  });
});

app.post("/", (req, res, next) => {
  //POST 방식으로 호출시
  let vsSubTitle = "nodeJs x express web framework";
  //express.json(),express.urlencoded() 를 사용해 post 방식으로 request 에 담긴 form 데이터를 아래와 같이 사용
  res.render("index", {
    title: `${vsSubTitle}`,
    subTitle: `${req.body.customText}`,
  });
});

app.listen(port, () => {
  //port listening 중일때 아래 코드를 반드시 실행
  console.log(`Example app listening on port ${port}`);
});
