var url = require('url');

var urlString = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=node.js&oquery=iphone+8&ie=utf8&tqi=TU1mhdpySoGssZOXzKdssssssn4-295326";

var parseObject = url.parse(urlString);
console.log(parseObject);

var parseObjectEx = url.parse(urlString, true); //  두 번째 인자가 true면 query string을 object로 변환
console.log(parseObjectEx);

var urlFormat = url.format(urlString);
console.log(urlFormat);