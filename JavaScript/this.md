## this란?
객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수

대부분의 경우 this의 값은 함수를 호출한 방법에 의해 결정된다.

아래 표는 항상 성립하는 것은 아님
|함수 호출 방식|this 바인딩|
|:---:|:---:|
|일반 함수로서 호출|전역 객체|
|메서드로서 호출|메서드를 호출한 객체(마침표 앞의 객체)|
|생성자 함수로서 호출|생성자 함수가 생성하는 인스턴스|
|화살표 함수|상위스코프|
|콜백 함수|this가 다르게 동작할 수 있음|
## 일반 함수로서 호출
```javascript
function a(){
    console.log(this);
}

a(); 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

window.a();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```
[var로 선언시 변수가 window에 등록됨](https://kyw39341.tistory.com/34)
[window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name)
### 
```javascript
function sayName(){
    console.log(this);
    console.log(this.name);
}

var name = 'Hero';
// var로 선언시 변수가 window 객체에 등록됨

console.log(sayName());
// Window {window: Window, self: Window, document: document, name: 'Hero', location: Location, …}
// Hero
```
```javascript
function sayName(){
    console.log(this);
    console.log(this.name);
}

let name = 'Hero';
// let이나 const로 선언시 window 객체에 등록되지 않는다

console.log(sayName());
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//
```
> 그렇다면 let과 const는 어디 저장되는걸까?
![](/images/this.png)
```javascript
function a(){
    console.log(this); 
    function b(){
        console.log(this);
    }
    b();
}
a();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

function a(){
    console.log(this.name); 
    function b(){
        console.log(this.name);
    }
    b();
}
a();
//
//

window.name = 'semin';

function a(){
    console.log(this.name); 
    function b(){
        console.log(this.name);
    }
    b();
}
a();
// semin
// semin
```
## 메서드로서 호출
```javascript
let test = {
    one: 1,
    two: 2,
    three: function(){
        console.log(this);
    }
}

test.three();
// {one: 1, two: 2, three: ƒ}
// 메서드로서 호출하는 경우에 this는 메서드를 호출한 객체를 가리킨다

let test2 = test.three;
// test2를 선언후 test의 three 메서드 할당
// 이 경우 더 이상 three 메서드가 메서드가 아님
// 왜냐하면 객체 안에 있지 않으니까
// 즉 이는 일반 함수로서의 호출이다
test2();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```
```javascript
function sayName(){
    console.log(this.name);
}

let peter = {
    name: 'Peter Parker',
    say: sayName
};

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
};

console.log(peter.say());
// Peter Parker
console.log(bruce.say());
// Bruce Wayne
```
## 생성자 함수로서 호출
```javascript
function Createfun(str){
    this.str = str;
    this.consoleLog = function(){
        console.log(this);
    }
}

const createfun = new Createfun('hello');
createfun.str; 
// 'hello'
createfun.consoleLog();
// Createfun {str: 'hello', consoleLog: ƒ}
// 생성자 함수로서 호출했으므로 this는 생성자 함수로 생성하는 인스턴스를 가리킨다
```
## 버튼내 호출
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <button id="btn1">클릭1</button>
    <button id="btn2">클릭2</button>
    <script>
        let test1 = {
            one: 1,
            two: 2,
            three: function(){
                console.log(this);
            }
        }; 
        console.log(test1.three());
        // {one: 1, two: 2, three: ƒ}

        let test2 = test1.three;
        console.log(test2());
        // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

        let btn1 = document.getElementById('btn1');
        
        btn1.addEventListener("click", test1.three);
        // btn1 클릭시 this는 button#btn1

        let btn2 = document.getElementById('btn2');
        btn2.addEventListener("click", test2);
        // btn2 클릭시 this는 button#btn2
    </script>
</body> 
</html>
```
![](/images/this_%EB%B2%84%ED%8A%BC.png)
## this 조작
### call()
call() 메서드의 인수에 this로 사용할 한 개의 값을 전달할 수 있다
```javascript
var peter = {
    name: 'Peter Parker',
    sayName: function(){
        console.log(this.name);
    }
};

var bruce = {
    name: 'Bruce Wayne'
};

peter.sayName(); // Peter Parker
peter.sayName.call(bruce); // Bruce Wayne
```
```javascript
var peter = {
    name: 'Peter Parker',
    sayName: function(느낌표){
        console.log(this.name + 느낌표);
    }
};

var bruce = {
    name: 'Bruce Wayne'
};

peter.sayName.call(bruce, '!');
// Bruce Wayne!
```
### apply()
apply() 메서드의 인수에 this 로 사용할 값을 전달할 수 있으며, 배열의 형태로도 전달할 수 있습니다.
```javascript
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
        console.log(this.name+ ' is '+ is + ' or ' + is2);
    }
};

var bruce = {
    name: 'Bruce Wayne'
};

peter.sayName.apply(bruce, ['batman', 'richman']);
// Bruce Wayne is batman or richman
```
### bind()
this가 고정된 **새로운** 함수 반환
```javascript
function sayName(){
    console.log(this.name);
}

sayName();
//

var bruce = {
    name: 'bruce',
    say : sayName
};

bruce.say();
// bruce

var peter = {
    name: 'peter',
    say: sayName.bind(bruce)
}

peter.say();
// bruce
```