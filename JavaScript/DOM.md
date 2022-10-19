# 0. 개요
* window(브라우저)
    * DOM: 브라우저가 제공하는 API
    * BOM: 브라우저가 제공하는 API
    * JS

# 1. DOM이란?
Document Object Model: 문서를 객체화해서 모델링 한다.

DOM 은 HTML 문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜주는 역할

각각의 요소와 속성, 콘텐츠를 표현하는 단위를 '노드(node)'라고 합니다.

![](/images/dom1.png)

# 2. DOM 트리 접근
최상단에 있는 Document 객체를 통해 HTML 문서에 접근(DOM 트리의 진입점 역할 수행)
```js
// 해당하는 Id를 가진 요소에 접근하기
document.getElementById()

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 '단일' 요소에 접근하기
document.querySelector("selector");

// css 선택자로 '여러' 요소에 접근하기
document.querySelectorAll("selector");
```

## 3. DOM 제어 명령어
### 3.1. 이벤트 삽입
```js
target.addEventListener( type, listener )
```
* target: 이벤트 삽입할 요소
* [type: 이벤트 타입](https://developer.mozilla.org/ko/docs/Web/Events): 한 개만 사용 가능
* listener: 이벤트 발생시 실행되는 함수(리스너 함수)
```html
<button>HELLO!</button>
```
```js
// 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지합니다.
// listener 함수의 인수에는 이벤트에 대한 정보가 담겨있습니다.

const myBtn = document.querySelector("button");

myBtn.addEventListener('click', function(){
	console.log("hello world");
})
```
```html
<button onclick="myFunction()">HELLO!</button>
```
위 코드의 단점: HTML과 JS가 분리가 안 됨. 유지보수 어려움.
### 3.2. 클래스 제어
```html
<button>Make me BLUE!</button>
```
```js
const myBtn = document.querySelector("button");

myBtn.addEventListener('click', function(){
// blue 라는 클래스의 속성 값을 지정 할 수 있습니다.
	myBtn.classList.add("blue");

	// myBtn.classList.remove(“blue”);     클래스를 제거합니다.
	// myBtn.classList.toggle(“blue”);     클래스를 토글합니다. 없으면 넣어주고, 있으면 제거합니다.
	// myBtn.classList.contains(“blue”);   해당하는 클래스가 있는지 확인합니다.
})
```
### 3.3. 요소 제어
```html
<ul></ul>
<button>Make me MORE!</button>
```
```js
// document.createElement(target); target 요소를 생성합니다.
// document.createTextNode(target); target 텍스트를 생성합니다.
// element.appendChild(target);    target 요소를 element의 자식으로 위치합니다. 항상 부모의 '마지막' 자식으로 위치시킴
// element.removeChild(target);    element의 target 자식 요소를 제거합니다.

const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener('click', function(){
	for(let i=0; i < 5; i++){
		const myLi = document.createElement('li');
		myUl.appendChild(myLi);
	}
})
```
```html
<div id="parentElement">
    <span id="childElement">hello guys~</span>
</div>
```
```js
// parentElement.insertBefore(target, location); target요소를 parentElement의 자식인 location 위치 앞으로 이동합니다.

const span = document.createElement("span");
const sibling = document.getElementById("childElement");
const parentDiv = document.getElementById("parentElement");
parentDiv.insertBefore(span, sibling);
```
### 3.4. JavaScript 문자열을 사용해 element, text 노드를 생성하거나 추가하기
```html
<p></p>
<input type="text">
<button>Write Something!</button>
```
```js
const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener('click', function(){
	myP.textContent = myInput.value;
});

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener('input', ()=>{
  myP.textContent = myInput.value;
});

myP.innerHTML = "<strong>I'm Strong!!</strong>";
myP.outerHTML = "<div></div>";

// innerHTML 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다.
// innerText 속성은 요소의 렌더링된 텍스트 콘텐츠를 나타냅니다. (렌더링된에 주목하세요. innerText는 "사람이 읽을 수 있는" 요소만 처리합니다.)
// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다.
```
* innerHTML 사용시 주의 사항 : [https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML#security_considerations](https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML#security_considerations)

* 최적화를 위해서는 innerText보다는 textContent

* innerText 와 textContent의 차이 : [https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/innerText#예제](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/innerText#%EC%98%88%EC%A0%9C)

### 3.5. 더 인접한곳(Adjacent)으로 정밀하게 배치하기
```html
<strong class="sayHi">
    반갑습니다.
</strong>
```
```js
const sayHi = document.querySelector('.sayHi');
sayHi.insertAdjacentHTML('beforebegin', '<span>안녕하세요 저는</span>'); // 바로 전의 형제
sayHi.insertAdjacentHTML('afterbegin', '<span>재현입니다</span>'); // // 첫 번째 자식
sayHi.insertAdjacentHTML('beforeend', '<span>면접오시면</span>'); // // 마지막 자식
sayHi.insertAdjacentHTML('afterend', '<span>치킨사드릴게요</span>'); // // 바로 다음 형제
```
### 3.6. DOM 안에서 노드 탐색하기
노드와 요소를 구분! 줄바꿈과 주석은 요소가 아니라 **노드**다.
```html
<!-- 주석입니다 주석. -->
<article class="cont">
    <h1>안녕하세요 저는 이런 사람입니다.</h1>
    <p>지금부터 자기소개 올리겠습니다</p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt voluptates laudantium fugit, omnis
    dolore itaque esse exercitationem quam culpa praesentium, quisquam repudiandae aut. Molestias qui quas ea iure
    officiis.
    <strong>감사합니다!</strong>
</article>
```
```js
const cont = document.querySelector(".cont");
console.log(cont.firstElementChild);  // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild);   // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling);    // 이전 형제노드를 찾습니다.
console.log(cont.children);           // 모든 직계자식을 찾습니다.
console.log(cont.parentElement);      // 부모 요소를 찾습니다.
```
# 4. 이벤트 객체(중요)
이벤트에 대한 정보가 담겨있기 때문에, 이벤트가 발생했을 때 이벤트가 어디서 발생했는지 이벤트 객체를 통해 알 수 있다
```html
<article class="parent">
    <ol>
        <li><button class="btn-first" type="button">버튼1</button></li>
        <li><button type="button">버튼2</button></li>
        <li><button type="button">버튼3</button></li>
    </ol>
</article>
```
```js
const btnFirst = document.querySelector('.btn-first');
btnFirst.addEventListener('click', (event) => {
    console.log(event);
});
```
# 5. 이벤트 흐름 (중요)
![](/images/%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%A0%84%ED%8C%8C.png)
캡쳐링 단계: 브라우저 화면에서 이벤트가 발생하면 브라우저는 가장 먼저 이벤트 대상을 찾기 시작함. 브라우저가 이벤트 대상을 찾아갈 때는 가장 상위의 window 객체부터 document, body 순으로 DOM 트리를 따라 내려감

이벤트 대상을 찾으면 버블링 단계 시작. 버블링 단계란? 캡처링이 끝나면 이제 다시 DOM 트리를 따라 올라가며 만나는 모든 버블링 이벤트 리스너를 실행

이러한 과정에서 이벤트 리스너가 차례로 실행되는 것을 이벤트 전파라고 한다.

캡쳐링 이벤트와 버블링이벤트를 구분하여 동작시키는 경우는 많지는 않음
# 6. 이벤트 target, currentTarget
부모부터 자식까지 일련의 요소를 모두 타고가며 진행되는 이러한 이벤트의 특징 덕분에 이벤트 객체에는 target, currentTarget 이라는 속성이 존재합니다. 

**target** 속성에는 이벤트가 발생한 진원지의 정보가 담겨 있습니다. target 속성을 통해 이벤트 리스너가 없는 요소의 이벤트가 발생했을 때도 해당 요소에 접근 할 수 있습니다.

**currentTarget** 속성에는 이벤트 리스너가 연결된 요소가 참조되어 있습니다.
# 7. 이벤트 위임
앞에서 우리는 이벤트의 흐름을 통해 이벤트 리스너가 없는 요소의 이벤트가 발생했을 때도 해당 요소에 접근 할 수 있다는 것을 알게 되었습니다. 

이를 이용해 이벤트 리스너가 없어도 마치 리스너가 있는 것 처럼 사용 할 수 있습니다.

이벤트 위임이 없으면 일일히 다 찾아야 하는 번거로움!

모든 자식요소한테 동일한 이벤트를 발생시키고 싶으면 부모한테 이벤트리스너 달아주면 됨!

상위요소에서 stopPropagation() - > 이벤트 캡처링을 막음.

하위요소에서 stopPropagation() - > 이벤트 버블링을 막음.

# 8. 이벤트의 this
이벤트 리스너 함수 내부에서의 this 값은 이벤트가 연결된 노드를 참조합니다.

이는 event.currentTarget 속성의 참조값과 유사합니다. 

만약 이벤트 리스너 함수를 화살표 함수로 쓴다면 this 가 가리키는 대상이 달라진다는 점에 유의하세요. 화살표 함수의 this 는 자신을 둘러 싸고 있는 외부 환경의 this 값을 참조합니다.
# 9. preventDefault()
브라우저의 기본 이벤트 동작을 취소합니다.

브라우저는 HTML 태그를 통해 여러가지 기능들을 제공합니다. 하지만 때때로 그러한 기능이 방해가 되는 경우가 있습니다.
# 10. stopPropagation()
앞에서 우리는 preventDefault를 통해 브라우저의 기본 이벤트 동작을 취소해봤습니다. 하지만 이때 우리가 앞에서 배웠던 이벤트 흐름, 즉 이벤트 전파(이벤트 프로파게이션)를 막지는 못합니다.