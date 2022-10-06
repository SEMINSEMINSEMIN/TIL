Object.keys()
* 객체의 key들을 **배열**로 반환(An array of **Strings**)

Object.values()
* 객체의 value들을 **배열**로 반환(Object.keys()와 달리 value 고유 타입이 유지됨)

Object.entries()
* returns an **array** of a given object's own enumerable **string-keyed** property pairs.
```javascript
let user = {
    id: "raontt2285",
    pw: "1234",
    age: 25,
    active: true,
    0: [1, 2, 3]
};

Object.keys(user); // (5) ['0', 'id', 'pw', 'age', 'active']
Object.values(user); // (5) [Array(3), 'raontt2285', '1234', 25, true]
Object.entries(user);
/*
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ['0', Array(3)]
1: (2) ['id', 'raontt2285']
2: (2) ['pw', '1234']
3: (2) ['age', 25]
4: (2) ['active', true]
length: 5
[[Prototype]]: Array(0)
*/
let ent = Object.entries(user);
ent[0]; // (2) ['0', Array(3)]
ent[0][1]; // (3) [1, 2, 3]
```