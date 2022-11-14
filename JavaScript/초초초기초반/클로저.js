// 함수 호출시 return 외 모든건 다 메모리에서 없어짐

// const myFunc = function (){
//     let a = 1;
//     let b = 2;

//     const myFunc2 = function(){
//         let b = 5;
//         let c = 6;

//         a = a + b + c;
//         console.log(a);
//     }

//     return myFunc2();
// }

// const innerFunc = myFunc();

// innerFunc();

// 메모리 관리: 참조 카운팅
// 원래대로라면 return 하면 나머지는 다 없애야 하지만, a를 바라보는 뭔가가 있으면 a를 남겨놓음
// myFunc 함수는 myFunc2를 반환
// 이때 myFunc 함수는 return 키워드를 만나서 종료된다. 그리고 안에 있는 프로퍼티들은 삭제 된다.
// 클로저 공간: let a = 1; let b = 2;
// 클로저 함수: myFun2 => 클로저 공간에 접근할 수 있는 함수
// a를 접근할 수 있는 유일한 방법은 myFunc2.

const myFunc = function (){
    let a = 1;
    let b = 2;

    const myFunc2 = function(){
        let b = 5;
        let c = 6;

        a = a + b + c;
        console.log(a);
    }

    return myFunc2;
}

const innerFunc = myFunc();

innerFunc();