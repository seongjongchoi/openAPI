/* NodeJs 샘플 코드 */
var request = require("request");
var fs = require("fs");

var url =
  "http://apis.data.go.kr/1741000/MisfortuneSituationNoticeMsg2/getMisfortuneSituationNoticeMsgList";
let sKey =
  "aN2aOKkivRPAL7ZlAtz6BKj%2FQcSYUvEvZVRk80qX0cTYMUEUAiGIx%2BslDNoLo1feNuxD6cSBgSaMO3B6tp%2FZvw%3D%3D";
var queryParams =
  "?" + encodeURIComponent("ServiceKey") + "=" + sKey; /* Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
queryParams +=
  "&" + encodeURIComponent("type") + "=" + encodeURIComponent("xml"); /* */
queryParams +=
  "&" + encodeURIComponent("flag") + "=" + encodeURIComponent("Y"); /* */

request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
    fs.writeFile("sitRep.xml", body, function (err) {
      if (err) throw err;
      console.log("Saved!!!");
    });
  }
);
