//  내장 객체 : console
//  console.log usage
var my_number = 1972;
var my_string = "Log String";
var my_json = {code: 200, message: "Success"};

console.log("로그 문자열");  //  로그를 출력함
console.log("Output Number: %d", my_number);    //  %d : number
console.log("Output String: %s", my_string);    //  %s : string
console.log("Output JSON: %j", my_json);        //  %j : json object

//  Time Check
console.time("my_label");
for (var i = 0; i < 1000000; i++) {}
console.timeEnd("my_label");
