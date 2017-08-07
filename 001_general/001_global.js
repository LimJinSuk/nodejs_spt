//  global 객체
global.val = 'Global Variable';
global.func = () => {
    console.log('Global Function');
};

console.log(val);
func();

//  global 변수
console.log(__filename);
console.log(__dirname);