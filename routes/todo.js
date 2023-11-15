var express = require("express"); //웹 프레임워크 express
var router = express.Router(); //라우터 사용시 필히 명시

/* GET users listing. */
router.post("/", function (req, res, next) {
  const title = "todoList";
  console.log(res);
  // const vsNm = res.body.nm;
  // const vsGender = res.body.gender;
  // res.send(`<h1>${title}</h1>
  //   <p>당신의 이름은 ${vsNm}</p>
  //   <p>당신의 성별은 ${vsGender}</p>`);
});

//라우터 모듈을 export로 추출(index.js 의 상단에 선언한 require("./routes/todo"); 사용하기위해 필수 절차)
module.exports = router;
