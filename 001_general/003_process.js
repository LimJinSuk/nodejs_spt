//  내장객체 process

//  process.argv : 실행 매개변수
process.argv.forEach(function(item, index) {
    console.log(index, item);
});

//  process.env : 환경 관련 정보
console.log(process.env);

//  process.version : node.js 버전
console.log(process.version);

//  process.versions : 종속된 프로그램 버전 표시
console.log(process.versions);

//  process.arch : 프로세서의 아키텍쳐
console.log(process.arch);

//  process.platform : 플랫폼
console.log(process.platform);
