/* NodeJs 12 샘플 코드 */

let request = require("request");
let fs = require("fs");
let url =
  "http://apis.data.go.kr/1741000/MisfortuneSituationNoticeMsg3/getMisfortuneSituationNoticeMsg1List";
let sKey =
  "aN2aOKkivRPAL7ZlAtz6BKj%2FQcSYUvEvZVRk80qX0cTYMUEUAiGIx%2BslDNoLo1feNuxD6cSBgSaMO3B6tp%2FZvw%3D%3D";
var queryParams =
  "?" + encodeURIComponent("serviceKey") + "=" + sKey; /* Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
queryParams +=
  "&" + encodeURIComponent("type") + "=" + encodeURIComponent("xml"); /* */

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
    //10개를 받아서 sitRep.xml파일에 저장한다.
    fs.writeFile("sitRep.xml", body, function (err) {
      if (err) throw err;
      console.log("Saved!!!");
    });
  }
);
