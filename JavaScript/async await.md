# 1. 사용 이유
`Promise`를 사용하여 비동기 처리를 하다 보면 프로미스 체이닝으로 인해 then 지옥이 발생하는데 이는 코드 가독성을 많이 떨어트린다. 반면에 `async/await`은 프로미스와 달리 후속 처리 메서드 없이 비동기를 동기처럼 사용할 수 있다. 이처럼 async/await은 then을 사용하지 않아도 되고, 비동기 함수를 만들 필요도 없으며, 코드를 `nesting*` 하지 않기 때문에 코드 가독성이 좋다는 장점이 있다. 

에러를 잡아내는 `try catch` 문법을 사용하는 데에도 차이점이 있다. 프로미스는 프로미스 객체내부에서 발생한 에러를 프로미스 처리 메서드 `catch`로 처리하기 때문에,  프로미스 객체 내부에 발생한 에러를 프로미스 외부에서 잡아내지 못한다. 하지만 async/await은 모든 동기와 비동기 에러를 try catch를 통해 처리할 수 있어 에러 파악이 보다 용이하다는 장점이 있다.
# 2. async 사용 방법
## 2.1. 함수 선언식
async는 결괏값을 프로미스로 반환한다. 프로미스 외의 다른 값을 리턴하더라도 그 값을 그대로 반환하지 않고 프로미스로 감싸 반환한다.
```js
async function planet(){
    return [1, 2];
}

planet().then(data => {
    result = data.reduce((a, b) => a + b);
    console.log(result);
    return result;
});

// 3
// Promise {<fulfilled>: 3}
```
## 2.2. 함수 표현식
```js
let planet = async function (){
    return [1, 2];
}

planet().then(data => {
    result = data.reduce((a, b) => a + b);
    console.log(result);
    return result;
});

// 3
// Promise {<fulfilled>: 3}
```
ES2015부터 화살표 함수 형태로도 사용 가능
```js
let planet = async () => {
    return [1, 2];
}

planet().then(data => {
    result = data.reduce((a, b) => a + b);
    console.log(result);
    return result;
});

// 3
// Promise {<fulfilled>: 3}
```
# 3. await
프로미스 앞에 await 키워드를 붙이면 해당 프로미스가 `settled` 될 때까지 대기하다가 `settled` 상태가 된 이후 **프로미스가 `resolve`한 결과**를 반환한다. 즉 비동기 코드 앞에 await을 두어 비동기 처리를 기다리게 만들고, 앞선 코드가 실행된 후에 차례로 실행하여 비동기 처리 순서를 보장함으로써 비동기를 동기적으로 처리할 수 있게 된다. 

await은 프로미스 체이닝으로 발생하는 then 지옥을 없애 코드의 가독성을 높일 수 있다는 장점 뿐만 아니라 await 키워드로 선언된 코드가 실행되는 동안 다른 작업을 중단시키지 않아 효율적으로 자원을 사용할 수 있다는 장점을 가진다.
```js
async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = await promise; // 프로미스가 이행될 때까지 기다림
    console.log(result);
}

f();
// 1초 후 '완료!'
```
```js
async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 5000)
    });

    let result = promise; 
    console.log(result);
}

f();
// Promise {<pending>}
```
ES 2022 이전에 await을 사용하기 위해선 async 함수 안에서 사용했으며, async 함수가 아닌 일반 함수 안에서 사용할 경우 SyntaxError가 발생했다. 하지만 개정 이후 top level await이 되면서 더 이상 async 함수를 쓰지 않아도 await을 사용할 수 있게 되었다.
```js
// error
function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("완료")
            resolve("두번째!")
        }, 1000)
    });

    let result = await promise;
    console.log(result);
    return 'hello'
}

f();
// Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
```
```js
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("완료")
            resolve("두번째!")
        }, 1000)
    });

    let result = await promise;
    console.log(result);
    return 'hello'
}

f();
// 1초 후
// 완료
// 두번째!
```
```js
// 이 코드 사용 가능!
const productData = await fetch('http://test.api.weniv.co.kr/mall').then((data) => data.json())');
```
```js
async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("완료-1");
            resolve("완료-2");
        }, 1000);
    });
    let result = await promise;
    console.log(result + '완료-3');
    return 'hello';
}

f();
// 완료-1
// 완료-2완료-3
```