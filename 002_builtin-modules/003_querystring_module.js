var url = require('url');
var querystring = require('querystring');

//  parse Example
var urlString = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=node.js&oquery=iphone+8&ie=utf8&tqi=TU1mhdpySoGssZOXzKdssssssn4-295326";
var query = url.parse(urlString).query;
console.log(querystring.parse(query));

//  stringify Example
var obj = {
    module: "querystring",
    method: "stringify",
    type: "built-in module"
}
console.log(querystring.stringify(obj));
