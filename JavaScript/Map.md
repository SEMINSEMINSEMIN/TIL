## Map이란?
Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류
```javascript
let m = new Map();
let test = [1, 2];
m
  .set('하나', 1)
  .set('둘', 2)
  .set(true, '트루')
  .set([1, 2], '리얼리?') 
  // 배열을 key로 하는게 가능하지만 호출이 제대로 안 됨
  .set(test, '리얼리?')

console.log(m);
/*
Map(5) {'하나' => 1, '둘' => 2, true => '트루', Array(2) => '리얼리?', Array(2) => '리얼리?'}
*/

m.get('하나'); // 1
m.get(true); // '트루'

m.get([1, 2]); // undefined
m.get(test); // '리얼리?'
```
### m.get([1, 2]);가 undefined인 이유
원시 값의 경우
```javascript
'안녕' === '안녕'; // true
'안녕' == '안녕'; // true
```
객체의 경우: 똑같은 객체처럼 보이지만 각 객체가 다른 주소값을 가진다
```javascript
[1, 2, 3] === [1, 2, 3]; // false
[1, 2, 3] == [1, 2, 3]; // false
```
### m.get(test);는 제대로 호출이 되는 이유
변수를 선언함을 통해 [1, 2]를 저장하기 위한 메모리 공간을 확보함. 그로 인해 set과 get 모두 메모리 주소가 같은 곳을 바라봄.
## Map에 해당 Key가 있는지 확인하기
```javascript
let m = new Map();
m
  .set('one', 1)
  .set('two', 2)
  .set(true, 'true')

m.has('one'); // true
m.has(true); // true
m.has('three'); // false
```
## Map의 값 제거
```javascript
let m = new Map();
m
  .set('one', 1)
  .set('two', 2)
  .set(true, 'true')

m.delete('one');
m.has('one'); // false
```
## Map 크기 구하기
```javascript
let m = new Map();
m
  .set('one', 1)
  .set('two', 2)
  .set(true, 'true')

m.size; // 3
// 오브젝트는 length가 없다
```
## Object - Map 형변환
객체 -> Map
```javascript
// Map is iterable
let data = new Map(Object.entries({'one': 1, 'two': 2})); // 가능

// 아래 코드는 모드 불가능하다
// let data = new Map({'one': 1, 'two': 2});
// let data = new Map('hello world');
// let data = new Map([10, 20, 30, 40]);
```
Map -> 객체
```javascript
let data = new Map(Object.entries({'one': 1, 'two': 2}));

let obj = Object.fromEntries(data);
obj; // {one: 1, two: 2}
```
## Map 순회
오브젝트는 순회가 불가능하다. 오브젝트를 순회하기 위해서는 Object.entries를 이용해야 한다.
```javascript
let data = {'one': 1, 'two': 2};

for (const i of Object.entries(data)){
    console.log(i);
}
// (2) ['one', 1]
// (2) ['two', 2]
```
이와 달리 Map은 직접 순회가 가능하다
```javascript
let m = new Map();

m
  .set('one', 1)
  .set('two', 2)

for (const i of m){
    console.log(i);
}
// (2) ['one', 1]
// (2) ['two', 2]

// 구조분해할당
for (const [i, j] of m){
    console.log(i);
}
// one
// two

for (const [i, j] of m){
    console.log(i, j);
}
// one 1
// two 2
```
## [Map과 Object의 차이](https://shanepark.tistory.com/220)
* Object의 키는 **문자열** 타입으로만 지정해야하지만 Map의 키는 모든 값을 가질 수 있다
* Object는 크기를 사용자가 직접 수동으로 알아내야 하지만, Map은 size를 통해 크기를 쉽게 얻을 수 있다. 또한 크기를 훨씬 빠르게 쉽게 측정할 수 있다.
    * Object의 길이를 구하는 데에는 O(n)의 시간 복잡도가 소요된다.
    * Map의 길이를 구하는 데에는 O(1)의 시간 복잡도가 소요된다.
* Map은 데이터를 추가하거나 제거하는 작업에서 Object보다 더 나은 성능을 보인다.
* Object는 key의 특정 순서가 보장되지 않지만, Map은 key의 특정 순서가 보장된다.
* Key overriding이 없다. Plain Object는 prototype 때문에 특정 몇몇 key들을 가지고 있다. 그러나 Map은 생성 직후에 어떠한 key값도 가지고 있지 않다.