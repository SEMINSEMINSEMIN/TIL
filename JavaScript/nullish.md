# 1. nullish 연산자란? (??)
여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾는다.

null이나 undefined가 아닌 첫 번째 피연산자를 반환한다.
```javascript
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

console.log(firstName ?? lastName ?? nickName ?? '익명의 사용자'); // 바이올렛
```
```javascript
let a ;
let b ;
let c ;

let d = a ?? b ?? c;
d; // undefined
```
```javascript
// 카카오톡
let 실명;
let 별명 = 'licat';
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;
채팅창아이디; // 'licat'
```
# 2. ||와 ??의 차이점
||는 첫 번째 truthy 값을 반환
* falsy하다: null, undefined, 0, '', NaN, false

??는 첫 번째 정의된(defined) 값을 반환
* nullish하다: null, undefined
```javascript
let height = 0;
height || 100; // 100
height ?? 100; // 0
```