console.log('I\'m Handsome and Beautiful Yes!');
// 오브젝트안에 Araay 안에 오브젝트의 형식의 예
const ob = {
    name : 'YoungHa',
    old : 24,
    address : 'Hwagok',
    todoList:['JavaScript','SpringBoot','CS50'],
    favFood : [
        {name : 'ChikenChestMeet', price : 20000}
    ],
    favleng : [
        {name : 'java', howto: 'inteliJ'}
    ]
}

console.log(ob);
console.log(ob.todoList[1]);
console.log(ob.favFood[0].name);
console.log(ob.favFood[0].price);
console.log(ob.favleng[0].howto);

//접근자를 이용한 value 변경
ob.favFood[0].price = 67000;
console.log(ob.favFood[0].price);



