// const result = Math.floor((Math.random() * 10) + 1);
// console.log(result); // 1부터 10까지

// 조건문: 여러 값들이 주어지고 그 값의 종류에 따라 처리 방법을 달리 해야할 경우 사용
// if (result > 5){
//     console.log('5보다 큽니다.');
// } else if (result < 5){
//     console.log('5보다 작습니다.');
// } else {
//     console.log('5입니다.');
// }

// if문에 비해 가독성이 좋다
// case 뒤에는 표현식이 와야 함(result가 해당 표현식인 케이스에)
// 표현식: 값을 반환하는 모든 자바스크립트 코드
// switch (result){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log('5보다 작습니다.');
//         break;
//     case 5:
//         console.log('5입니다.');
//         break;
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log('5보다 큽니다.');
//         break;
// }

// 삼항연산자
// 모두 '표현식'만 써야함
// console.log(5 ? 3 : 2);
// result > 5 ? console.log('5보다 큽니다.') :
//     result < 5 ? console.log('5보다 작습니다.') : 
//     console.log('5입니다.');



// 반복문
// for in: 객체를 순환하고 싶을 때
// for in문 쓸 때 안전장치: hasOwnProperty
// const snack = {새우깡:1000, 짱구:1500, 홈런볼:2000};
// Object.prototype.꼬북칩 = 3000;
// const drink = {콜라: 1000, 사이다: 2000};

// for (let item in snack){
//     // hasOwnProperty: 객체가 특정 프로퍼티를 가지는지 확인. 프로토타입에 등록된 프로퍼티는 제외함.
//     if (snack.hasOwnProperty(item)){
//         console.log(`${item}의 가격은 ${snack[item]}원 입니다.`);
//     }
// }

// console.log('---------');

// for (let item in drink){
//     console.log(`${item}의 가격은 ${drink[item]}원 입니다.`);
// }

// snack is not iterable
// for (let item of snack){
//     console.log(item);
// }

// for of: 순환 가능한 것 모두 순환 가능
// array, string, arguments, nodeList, set, map. 단, object는 순환할 수 없다
// const heros = ['spiderman', 'blackwidow', 'ironman', 'doctorstrange'];
// const newHeros = [];

// for (const hero of heros){
//     newHeros.push(hero + "!!");
// }

// console.log(newHeros);

// for (const item of heros[0]){
//     console.log(item);
// }

// function test(a, b, c){
//     // arguments: 함수가 가지고 있는 기본적인 프로퍼티
//     for (const arg of arguments){
//         console.log(arg);
//     }
// }

// test(1, 3, 5);

// set은 알고리즘 테스트할 때 많이 씀..
// const mySet = new Set([1, 2, 3, 4, 5]);
// console.log(mySet);
// for (const item of mySet){
//     console.log(item);
// }
// mySet.add(10);
// console.log(mySet);

// 중복 제거하고 유일한 값만 반환
// const testArr = [1, 2, 3, 3, 4, 4, 5, 7, 7, 7, 7];
// const uniqueSet = new Set(testArr);
// console.log(Array.from(uniqueSet));

// 콜백함수: 매개변수로 전달하는 함수
// forEach(), map()
// forEach의 단점: 원본 데이터 손상
// 원본 데이터를 '유지'하는게 중요함
const list = [
    {name: '재현', age: 10},
    {name: '원범', age: 9},
    {name: '김진', age: 8},
    {name: '유진', age: 12}
];

// 데이터에 있는 나이는 일괄적으로 1살씩 올리고 싶다면
// list.forEach((item) => {item['age'] += 1});
// console.log(list); // 원본 데이터 자체가 바뀜

// const newList = [];
// list.forEach((item) => {
//     const newObj = {name: item.name};
//     newObj['age'] = item.age + 1;
//     newList.push(newObj);

//     // 이렇게 하면 같이 바뀌어버림
//     // const newObj = item;
//     // newObj['age'] = item.age + 1;
//     // newList.push(newObj);
// });
// console.log(newList);
// console.log(list);

const newList = list.map((item)=>{
    const newObj = {name: item.name};
    newObj['age'] = item.age + 1;
    return newObj;
});
console.log(newList);
console.log(list);