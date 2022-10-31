# 1. 자료구조와 알고리즘, 코딩테스트

-   추천 서적
    -   학문적 접근 : The Art of Computer Programming(도널드 커누스)
    -   코딩테스트 접근 : 파이썬 알고리즘 인터뷰(박상길)
    -   기타 : 파이썬 자료구조와 알고리즘(중학교 학생 가르칠 때 사용), 그림으로 배우는 알고리즘(코드 없고 그림만 있습니다), 알고리즘 산책(역사적인 알고리즘을 쭉 훑어봅니다. 수학적인 내용이 많고 코드는 C++로 되어 있으나 보는데 큰 무리는 없습니다.)

## 1.1 코테 전 준비사항

1. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
    - 프로그래머스 Node Version(12) -> replaceAll(15)
    - 사용 가능 라이브러리 미리 확인 등
    - 대부분 numpy나 pandas 같은 라이브러리 사용 금지이지만 간혹가다 제한이 없는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, itertools, re, bisect 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
5. 기억해두자! 예외처리!
6. 속도개선
    1. class로 구현
    2. 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
    3. for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
    4. 재귀는 느립니다. 최후의 수단으로 사용하세요.

## 1.2 문제 유형과 출제 방식

-   5 ~ 6시간, 6 ~ 7문제
-   30분씩 4문제, 2시간씩 2문제
-   문제 유형 분석 관련 글
    -   [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
    -   [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
    -   [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
        -   요구사항 구현 알고리즘(33%)
        -   그리디 알고리즘(20%)
        -   너비우선탐색, 깊이우선탐색(20%)
        -   정렬(8%)
        -   다이나믹 프로그래밍, 최단경로, 이진 탐색 등
-   전체 문제 유형
    -   알고리즘
        -   정렬
        -   이진 검색
        -   비트 연산
        -   슬라이딩 윈도우, 페이지 교체, 투포인트
        -   분할 정복
            -   그리디 알고리즘
            -   다이나믹 프로그래밍
            -   퀵소트, 병합정렬
    -   자료구조
        -   선형
            -   스택과 큐, 데크
            -   연결리스트, 해시 테이블
        -   비선형
            -   그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
            -   트리
                -   힙
                -   트라이

## 1.3 워밍업 문제

-   활용할 수 있는 기본 개념 코드

```js
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

Infinity - Infinity; // NaN
(123.45).toFixed(); // 123
(123.45).toFixed(1); // 123.4

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((a, c) => (a += c));

// 평평하게 만들기 - flat()
[1, [2, [3, [4]]]].flat(); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity);

// 배열 만들기
Array(10).fill(0);
[...Array(10)].map((_, i) => i + 1);
".".repeat(10).split("."); // 권장하지 않습니다.
".".repeat(9).split(".");
// Array.from(): 유사 배열 객체를 배열로 만들 때
Array.from("ab".repeat(10));
// 20) ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b']
```

-   활용할 수 있는 커스텀 메서드

```js
const zip = (a, b) => a.map((v, i) => [v, b[i]]);
// zip('hello', [10, 20, 30, 40, 50]) // error
zip([10, 20, 30, 40, 50], "hello"); // 성공
// (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// (2) [10, 'h']
// (2) [20, 'e']
// (2) [30, 'l']
// (2) [40, 'l']
// (2) [50, 'o']
zip([10, 20, 30], [1, 2, 3]);
// (3) [Array(2), Array(2), Array(2)]
// (2) [10, 1]
// (2) [20, 2]
// (2) [30, 3]
zip([10, 20, 30], [1, 2, 3, 4]);
// (3) [Array(2), Array(2), Array(2)]
// (2) [10, 1]
// (2) [20, 2]
// (2) [30, 3]
zip([10, 20, 30, 4], [1, 2, 3]);
// (4) [Array(2), Array(2), Array(2), Array(2)]
// (2) [10, 1]
// (2) [20, 2]
// (2) [30, 3]
// (2) [4, undefined]
```

### 1.3.1 워밍업 문제(google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

문제 링크 : https://codingdojang.com/scode/393

-   풀이
    ```js
    // 내 풀이 (1): 정규 표현식 + match 메서드 사용했으면 더 좋았을듯!
    let str = '';

    for (let i = 1; i <= 10000; i++){
        str += i;
    }

    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == 8){
                count++;
        }
    }
    console.log(count);    
    ```
    아래 코드는 [이 사이트](https://deeplify.dev/front-end/js/count-characters-in-string) 참고함!
    ```js
    // 내 풀이 (2)
    let count = 0;

    for (let i = 1; i <= 10000; i++){
        let pos = i.toString().indexOf('8');
        while (pos !== -1){
            count++;
            pos = i.toString().indexOf('8', pos + 1);
        }
    }

    console.log(count);
    ```
    ```js
    // '123433332121'.match(/1/g)
    // (3) ['1', '1', '1']
    // 'hello world hello'.match(/hello/g)
    // (2) ['hello', 'hello']

    let str = "";

    for (let i = 1; i <= 10000; i++) {
        str += i;
    }

    console.log(str.match(/8/g).length);
    ```
    ```js
    let str = "";
    for (let i = 1; i <= 10000; i++) {
        str += i;
    }
    console.log(str.split("").filter((item) => item === "8").length);
    ```
    ```js
    // [...Array(3)] 
    // (3) [undefined, undefined, undefined]
    const arr = [...Array(10000)].map((_, i) => i + 1).toString().match(/8/g).length;
    console.log(arr);
    ```
    ```js
    new Array(10000).fill(0).map((_, i) => i + 1).join('').match(/8/g).length;
    ```
    ```js
    let arr = []
    for(let i = 1;i<=10000;i++){
        arr.push(i);
    }
    let result = [...arr.join('')].filter(el=>el==='8').length
    console.log(result)
    ```

### 1.3.2 워밍업 문제(daum)

1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S = [1, 3, 4, 8, 13, 17, 20] 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

문제링크 : https://codingdojang.com/scode/408

-   풀이
    ```js
    // 내 풀이
    const arr = [1, 3, 4, 8, 13, 17, 20];
    const res = [];
    arr.reduce((acc, cur, i) => {
        if (i === 0){
            return acc + Infinity;
        } else {
            // Math.abs 처음에 안 했는데, '거리'중 제일 짧은 거를 구해야하는 거니까 절대값 취해야 함!
            const diff = Math.abs(cur - arr[i - 1]);
            if (diff < acc){
                res[0] = arr[i - 1];
                res[1] = arr[i];
                return acc = diff;
            } else {
                return acc;
            }
        }
    }, 0)
    console.log(res);
    ```
    앞 요소나 뒤 요소를 알아야 하기 때문에 for of문은 적절하지 않다.
    ```js
    // 기본적인 풀이
    let dots = [1, 3, 4, 8, 13, 17, 20];
    let 최솟값 = Infinity;
    let 최솟값인덱스 = 0;

    for (let i = 1; i < dots.length; i++) {
        if (Math.abs(dots[i] - dots[i - 1]) < 최솟값) {
            최솟값 = Math.abs(dots[i] - dots[i - 1]);
            최솟값인덱스 = i;
        }
    }
    console.log(dots[최솟값인덱스], dots[최솟값인덱스 - 1]);
    ```

    -   아래와 같은 방식으로 풀이 예정

    ```python
    list(zip('hello world', [10, 20, 30, 40, 50]))
    list(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]))
    sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])
    sorted(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20]), key=lambda i:i[1]-i[0])[0]
    ```
    [sort 콜백함수](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    ```js
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    let s = [1, 3, 4, 8, 13, 17, 20];

    let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
    // (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
    // (2) [1, 3]
    // (2) [3, 4]
    // (2) [4, 8]
    // (2) [8, 13]
    // (2) [13, 17]
    // (2) [17, 20]

    // sort의 콜백 함수
    // 차이가 작은것부터 큰 거 순서대로(오름차순)
    function 비교(a, b) {
        if (Math.abs(a[1] - a[0]) < Math.abs(b[1] - b[0])) {
            return -1;
        }
        if (Math.abs(a[1] - a[0]) > Math.abs(b[1] - b[0])) {
            return 1;
        }
        return 0;
    }

    pairs.sort(비교);
    pairs.sort(비교)[0];
    ```

    ```js
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    let s = [1, 3, 4, 8, 13, 17, 20];

    let pairs = zip(s.slice(0, s.length - 1), s.slice(1));
    let 최솟값 = Infinity;
    let 최솟값쌍 = [];

    for ([i, j] of pairs) {
        if (Math.abs(j - i) < 최솟값) {
            최솟값 = Math.abs(j - i);
            최솟값쌍 = [i, j];
        }
    }
    ```

## 1.4 기본 자료구조 및 알고리즘
[시각화 자료](https://visualgo.net/en)
1. 스택과 큐
![](스택.png)
![](큐.png)
2. 연결리스트
3. 트리와 그래프
    - 3.1 트리 구현
    - 3.2 트리의 순회
4. 정렬 알고리즘
    - 4.1 선택정렬
    - 4.2 삽입정렬
    - 4.3 병합정렬
    - 4.4 퀵정렬
5. 페이지 교체 알고리즘
6. 슬라이딩 윈도우와 투 포인터 알고리즘

### 1.4.1 스택과 큐

* 스택 : (삽입)arr.push, (삭제)arr.pop
* 큐: (삽입)arr.push, (삭제)arr.shift
* arr.unshift(1000) : 맨 앞에 1000을 삽입합니다.
* arr.shift() : 맨 앞에 값을 꺼냅니다.
* arr.push : 맨 뒤에 값을 삽입합니다.
* arr.pop : 맨 뒤에 값을 꺼냅니다.


    ```javascript
    // https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D
    class Stack {
        constructor(){
            this.arr = []; // 연결리스트로 구현할 수도 있지만, 지금 배우지 않았기에 배열로 구현합니다.
            this.length = 0; // 스택이 비었을 때 연산 정의불가 상태를 처리하기 위해
        }

        // S.push(): 스택의 가장 윗 데이터로 top이 가리키는 자리 위에(top = top + 1) 메모리를 생성, 데이터 x를 넣는다.
        push(data){
            this.arr.push(data);
            this.length += 1;
        }

        // S.pop(): 스택의 가장 윗 데이터를 삭제한다. 스택이 비었다면 연산 정의불가 상태.
        pop(index){
            if (this.length == 0){
                return
            }
            if (index > this.arr.length - 1){
                this.length -= 1
                return this.arr.pop()
            }
            let result = this.arr.splice(index, 1)
            this.length -= 1
            return result
        }

        // S.empty(): 스택이 비었다면 1을 반환하고,그렇지 않다면 0을 반환한다.
        empty(){
            if (this.length == 0){
                return 1
            } else {
                return 0
            }
        }

        // S.top(): 스택의 가장 윗 데이터를 반환한다. 만약 스택이 비었다면 이 연산은 정의불가 상태이다.
        top(){
            return this.arr[this.length - 1]
        }

        bottom(){
            return this.arr[0]
        }

        display(){
            return this.arr
        }
    }

    let s = new Stack()
    s.push(10)
    s.push(20)
    s.push(30)
    s.push(40)
    s.push(50)
    s.display() // (5) [10, 20, 30, 40, 50]
    s.pop(10) // 50
    s.display() // (4) [10, 20, 30, 40]
    s.pop(1) // 20
    s.display() // (3) [10, 30, 40]
    s.empty() // 0
    s.bottom() // 10
    s.top() // 40
    ```

### 1.4.2 연결리스트

-   연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
-   js에서는 그다지 메모리 효율이 좋지 못함
-   개념 : https://en.wikipedia.org/wiki/Linked_list
-   강의: https://www.youtube.com/watch?v=DzGnME1jIwY
    -   길이가 정해지지 않은 데이터를 핸들링할 때       
-   알고리즘 시각화 : https://visualgo.net/ko

1. step 1 - object로 linkedlist 구현

```javascript
// 여러분이 다 이해하실 수 있는 코드로 설명해보겠습니다.
const list = {
    head: {
        value: 46,
        next: {
            value: 49,
            next: {
                value: 97,
                next: {
                    value: 12,
                    next: null,
                },
            },
        },
    },
};
// list.head.next.next.value
// list.head.next.next.next.value

let list = {
    head: null,
};

let node1 = { value: 46, next: null };
let node2 = { value: 49, next: null };
let node3 = { value: 97, next: null };
let node4 = { value: 12, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

list.head = node1;


```

-   문제

```js
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: {
                        value: 21,
                        next: null,
                    },
                },
            },
        },
    },
};
list.head.next.next.next.value;
```

2. step 2 - class로 node 구현

```javascript
// 위 문제 처럼 만들어 보도록 하겠습니다.
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

node1 = new Node(90);
node2 = new Node(2);
node3 = new Node(77);
node4 = new Node(35);
node5 = new Node(21);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node1.data;
// 90
node1.next.next.data;
// 77
node1.next.next.next.data;
// 35
```

3. step 3 - class로 linkedList 구현
[호준님 강의](https://www.youtube.com/watch?v=dvKuG3gfLFQ)
```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

// l.head.data
// 'init'
// l.head.next.data
// 1
// l.head.next.next.data
// 2
// l.head.next.next.next.data
// 3

// 새로운노드 = node(1, null)
// init.next 값은 null인데! null자리를 '새로운노드node(1, null)'로!
// this.tail은 이제 node(1, null)
//
// 새로운노드 = node(2, null)
// node(1, null).next 값은 null인데! null자리를 '새로운노드node(2, null)'로!
// node(1, null) = 새로운노드node(2, null)
//
// 새로운노드 = node(3, null)
// node(2, null).next값은 null인데! null자리를 '새로운노드node(3, null)'로!
// node(2, null) = 새로운노드node(3, null)
```

4. step 4 - class로 linkedList에서 length 구현

```js
// head -> ['init', next]
//               ↑
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑
//                              tail

// 여기서 데이터를 추가하면 생성되는 노드마다 데이터 공간이 할당되는 것이라 메모리가 크게 필요하게 됩니다.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    length() {
        return this.length;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

5. step 5 - class로 linkedList에서 toString 구현

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
        this.displayData = "";
    }

    length() {
        return this.length;
    }

    toString() {
        return "<" + this.displayData.slice(0, -2) + ">";
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
        this.displayData += `${data}, `;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

6. step 6 - class로 linkedList에서 toArray 구현

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
        this.displayData = "";
        this.displayDataArr = [];
    }

    length() {
        return this.length;
    }

    toString() {
        return "<" + this.displayData.slice(0, -2) + ">";
    }

    toArray() {
        return this.displayDataArr;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
        this.displayData += `${data}, `;
        this.displayDataArr.push(data);
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

7. step 7 - (중요) toString을 순회로 구현

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    length() {
        return this.length;
    }

    toString() {
        let 순회용현재노드 = this.head;

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next;

        let 출력데이터 = "";
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }

        return 출력데이터;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```