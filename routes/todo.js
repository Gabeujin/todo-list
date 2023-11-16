var express = require("express"); //웹 프레임워크 express
var router = express.Router(); //라우터 사용시 필히 명시

/* Post users listing. queryString 에서 바로 가져옴 */
router.get("/", (req, res, next) => {
  // let vsNm = req.query.nm;
  // let vsGender = req.query.gender;
  res.render("todo", {
    title: `TODO LIST`,
  });
});

/* Post users listing. - used body parser(express v4 ~ builtIn) */
router.post("/", (req, res, next) => {
  // let vsNm = req.body.nm;
  // let vsGender = req.body.gender;
});

//라우터 모듈을 export로 추출(index.js 의 상단에 선언한 require("./routes/todo"); 사용하기위해 필수 절차)
module.exports = router;
