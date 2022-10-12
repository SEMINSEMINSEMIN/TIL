## Set이란?
모든 타입의 값을 저장하는 객체자료형의 한 종류, 객체 안의 값은 중복을 허용하지 않는다.
```javascript
let s = new Set('abcdeeeeeee');
console.log(s); // Set(5) {'a', 'b', 'c', 'd', 'e'}

// Set에 값 추가하기
s.add('f');
console.log(s); // Set(6) {'a', 'b', 'c', 'd', 'e', …}

// Set 사이즈 확인
console.log(s.size); // 6

// Set 순환
for (let i of s) {
    console.log(i);
}
// a
// b
// c
// d
// e
// f

// Set 값 제거
s.delete('a');
console.log(s); // Set(5) {'b', 'c', 'd', 'e', 'f'}

// Set 값 확인
console.log(s.has('f')); // true
console.log(s.has('z')); // false

// Set의 모든 값 제거
s.clear();
console.log(s); // Set(0) {size: 0}
```
배열을 Set으로
```javascript
let ss = new Set('abcdeeee'.split(''));
ss; // Set(5) {'a', 'b', 'c', 'd', 'e'}
```
## 교집합, 합집합, 차집합
```javascript
let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value));
console.log(cro); // ['c']

// 합집합
let union = new Set([...a].concat(...b));

// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));
```