// `` 백틱을 이용해서 변수를 ${} 스트링형태로 예쁘게 사용가능하다.
// 오브젝트안에는 Array, Function 전부 들어갈 수 있다.
const myfunction = {
    plus : function(a,b) {
        return a+b;
    },

    output : function(name){
        return `Hello! ${name}`;
    },
    
    division : function(a, b){
        return a/b;
    },
    array : [
        'Javascript','Java','SpringBoot','Algorithms'
    ],
    arrayinob : [
        {book : "길벗", price : 20000}
    ]
}

const useplus = myfunction.plus(10,10);
const useouput = myfunction.output("YoungHa");
const usedivision = myfunction.division(10,2);

console.log(useplus, useouput);
console.log(usedivision);
console.log(myfunction.array[3]); // 함수안에 배열값 가져오기
console.log(myfunction.arrayinob[0].price); // 함수안에 배열값에 오브젝트안의 데이터 가져오기



