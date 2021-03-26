/* NodeJs 샘플 코드 */
//재난문자방송 발령현황

var request = require("request");

var url = "http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList";
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

//let urlTest = "http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList";
//let qPram = "?serviceKey=aN2aOKkivRPAL7ZlAtz6BKj%2FQcSYUvEvZVRk80qX0cTYMUEUAiGIx%2BslDNoLo1feNuxD6cSBgSaMO3B6tp%2FZvw%3D%3D&pageNo=1&numOfRows=10&type=xml&flag=Y";

request(
  {
    url: url + queryParams,
    //   url: urlTest + qPram,
    method: "GET",
  },
  function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
  }
);
