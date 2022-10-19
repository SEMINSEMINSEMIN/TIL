[교안](https://paullabworkspace.notion.site/Promise-f09c6e6c5d8640399c4884d00a9fdf9c#186438d1f77940a797c738039d79623a)
## 예제 1) then 메서드
### then 메서드는 <span style="color: red">프로미스</span>를 반환한다.
```js
// let c;
let p = new Promise(function(resolve, reject){
    resolve('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0];
}).then(메시지 => {
    alert(메시지);
    return 메시지[0];
}).then(메시지 => {
    alert(메시지);
    // c = 메시지;
    return 메시지;
});
```
```js
console.log(p); // Promise {<pending>}
```
```js
console.log(p); // Promise {<fulfilled>: 'h'}
```
### then 메서드의 아규먼트
* 프로미스가 fulfilled 되었을 때의 콜백함수
* 프로미스가 rejected 되었을 때의 콜백함수
```js
let p = new Promise(function(_, reject){
    reject('에러 발생!');
}).then(
    () => {
        console.log("성공"); 
    }, 

    () => {
        console.error("실패");
    }
);
```
![](/images/%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A41.png)
```js
console.log(p); 
// Promise {<fulfilled>: undefined}
```
프로미스의 상태가 fulfilled로 나타난다. 왜 그런 것일까? 프로미스의 메서드들은 프로미스 체이닝을 위해서 반드시 프로미스를 반환하는데, 이때 Error가 throw되거나 reject가 호출되지 않는 한 fulfilled된 프로미스를 반환하기 때문이다. 그럼 에러를 던져보자.
```js
let p = new Promise(function(_, reject){
    reject('에러 발생!');
}).then(
    () => {
        console.log("성공"); 
    },

    () => {
        throw Error("실패");
    }
);
```
![](/images/%08promise2.png)
```js
console.log(p); 
// Promise {<rejected>: Error: 실패 at <anonymous>:8:15
```
아래 예도 rejected된 프로미스를 반환한다. then 내에 아규먼트가 하나이기 때문에 그 아규먼트는 resolve일 때 불러오는 콜백함수이다. 따라서 then은 실행되지 않고 최종적으로 반환되는 promise는 reject를 호출한 상태이기 때문에 p를 콘솔에 찍었을 때 rejected인 것이다.
```js
let p = new Promise(function(_, reject){
    reject('에러 발생!');
}).then(
    () => {
        console.log("성공"); 
    }
);
```
![](/images/promise3.png)
```js
console.log(p); 
// Promise {<rejected>: '에러 발생!'}
```
## 예제 2) catch 메서드
catch 메서드는 프로미스에서 발생한 에러를 다룬다. catch는 하나의 콜백 함수를 인자로 전달받고 콜백 함수는 프로미스가 실패(rejected) 상태일 때 호출된다. catch 역시 프로미스를 반환한다.
### reject는 rejected된 Promise 반환
```js
let p = new Promise(function(resolve, reject){
    reject('hello world')
});
console.log(p);
// Promise {<rejected>: 'hello world'}
```
### rejected(실패)된 Promise를 catch로 받은 경우
```js
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지); 
});
// hello world
```
```js
console.log(p); 
// Promise {<fulfilled>: undefined}
```
### 
아래의 경우 console.log(p)가 rejected로 뜬다
```js
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    throw Error(메시지);
});
```
![](/images/promises4.png)
```js
console.log(p);
// Promise {<rejected>: Error: hello world at <anonymous>:14:11}
```
## 예제 3) resolve인데 중간에 error가 던져졌을 때
```js
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    console.log(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    console.log(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    console.log(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    console.log('catch 실행!!')
});

// hello world
// hello
// Error: Error 발생! 경고경고! at <anonymous>:9:11
// catch 실행!!
```
```js
console.log(p);
// Promise {<fulfilled>: undefined}
```
## 예제 4) catch가 여러 개인 경우
예제를 위한 예제. 실무에서는 이렇게 코드를 짜지는 않음!
```js
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    console.log(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    console.log(메시지)
    throw Error('첫 번째 경고')
    return 메시지[0]
}).then(메시지 => {
    console.log(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
}).then(메시지=>{
    console.log(메시지)
    throw Error('두 번째 경고')
}).catch(메시지 => {
    console.log(메시지)
});
// hello world
// hello
// Error: 첫 번째 경고 at <anonymous>:9:11
// undefined
// Error: 두 번째 경고 at <anonymous>:18:11
```
## 예제 5) promise를 활용해 비동기 프로그래밍 하기
```js
let p = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('끝났다!'), 3000)
});
console.log('hello world');
console.log(p);
// hello world
// Promise {<pending>}
```
3초 후
```js
console.log(p);
// Promise {<fulfilled>: '끝났다!'}
```
## 예제 6) finally
finally 메서드는 하나의 콜백 함수를 인자로 전달받고 콜백 함수는 프로미스의 성공(resolve), 실패(rejected) 여부와 상관없이 반드시 호출된다. finally는 공통적으로 수행해서 처리할 내용이 있을 때 유용하다. finally 역시 then, catch와 마찬가지로 프로미스를 반환한다.
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
		reject(new Error("에러 발생💥"));
  }, 3000);
});

promise
	.then(value => console.log(value))
	.catch(error => console.error(error))
	.finally(() => console.log("종료🔥"))
```
![](/images/promise5.png)
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
		reject(new Error("에러 발생💥"));
  }, 3000);
});

promise
	.then(value => console.log(value))
	.catch(error => console.log(3))
	.finally(data => console.log(data));
// 3
// undefined
```
## 예제 7) 프로미스 체이닝
```js
let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 10000); // (*)
});

console.log('hello world');
// code 1000줄

let p2 = p.then(function(result) { // (**)
    console.log(result); // 1
    return result * 2;
});

console.log('hello world2');
// code 1000줄

let p3 = p2.then(function(result) { // (***)
    console.log(result); // 2
    return result * 2;
});

console.log('hello world3');
// code 1000줄

let p4 = p3.then(function(result) {
    console.log(result); // 4
    return result * 2;
});
```
![](/images/promise6.png)
아래 예시는 프로미스 체이닝이 아님
```js
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});
```
## 예제 8) fetch도 프로미스 반환!
```js
fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=>console.log(data[0]));
// {id: 1, productName: '버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링', price: 12500, stockCount: 100, thumbnailImg: 'asset/img/1/thumbnailImg.jpg', …}
```