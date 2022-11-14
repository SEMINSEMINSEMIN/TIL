// 함수란 재사용을 많이 할 코드를 따로 만들어놓은거! : 사용 설명서
// 스코프란 변수의 유효범위
// 전역 스코프: 전역 공간
// 함수 스코프: 함수 안에서 정의한 변수는 전역에서 접근 불가능
// 블록 스코프: 중괄호 안
// var: 함수 스코프
// let: 블록 스코프
// https://poiemaweb.com/es6-block-scope
// https://eblee-repo.tistory.com/37

// let val = 1; // 전역 스코프
// console.log(val);

// function test(){
//     let a = 1;
//     let b = 2;
//     return a + b;
// }

// let a = 20;
// console.log(test()); // 3
// console.log(b); // ReferenceError: b is not defined

// 함수 안에서 정의된 변수는 함수 안에서는 '어디서든' 접근 가능하다. -> !!!!!스코프 체이닝!!!!!
const myFunc = function (){
    let a = 1;
    let b = 2;

    const myFunc2 = function(){
        let b = 5;
        let c = 6;

        a = a + b + c;
        console.log(a);
    }

    myFunc2();
    console.log(a);
}

myFunc();
