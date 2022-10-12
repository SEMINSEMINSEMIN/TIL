```javascript
let 회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근'];
```
## 문제1: 몇 명이 게시판에 게시물을 썼을까요?
```javascript
const peopleNum = new Set(회사게시판).size;
console.log(peopleNum); // 3
```
## 문제2: 각자 몇 개의 게시물을 작성하였나요?
```javascript
const user = new Set(회사게시판);
for (const i of user) {
    let num = 회사게시판.filter(x => x === i).length;
    console.log(`${i}님은 ${num}개의 게시물을 작성했습니다.`);
}
// 이호준님은 3개의 게시물을 작성했습니다.
// 김은하님은 2개의 게시물을 작성했습니다.
// 이준근님은 1개의 게시물을 작성했습니다.
```
```javascript
// 서현주님 코드(키의 업데이트 활용)
let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) || 0) + 1);
}
// Map(3) {'이호준' => 3, '김은하' => 2, '이준근' => 1}
```