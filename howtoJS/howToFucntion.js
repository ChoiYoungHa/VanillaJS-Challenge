// 자바스크립트는 function 자료형을 정해주지 않음. 값을 받는 것은 parameter 라고 함.
function myUse(isname, that){
    console.log('Call my', isname, that, '!');
}

console.log('Hello!');
//전달해주는 것 give 하는것을 agument 아규먼트라고함.
myUse('Dev', 'good');