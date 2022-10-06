```javascript
let newuser = {
    id : 'hojun',
    pw : '1234',
    name : 'Semin',
    email : 'ksm9802@gmail.com',
    active : true,
};

let newuser2 = newuser; // newuser2가 newuser를 가리킴
newuser2['name'] = 'cat';
newuser2['email'] = 'jun@naver.com';

newuser2;
// {id: 'hojun', pw: '1234', name: 'cat', email: 'jun@naver.com', active: true}

// newuser도 '함께' 바뀐다
newuser;
// {id: 'hojun', pw: '1234', name: 'cat', email: 'jun@naver.com', active: true}
```
```javascript
let newuser = {
    id : 'hojun',
    pw : '1234',
    name : 'Semin',
    email : 'ksm9802@gmail.com',
    active : true,
};

let newuser2 = {...newuser}; // spread 기법 사용시 원본에 영향을 미치지 않고 복사 가능

newuser2['name'] = 'cat';
newuser2['email'] = 'jun@naver.com';

newuser2;
// {id: 'hojun', pw: '1234', name: 'cat', email: 'jun@naver.com', active: true}

// newuser는 함께 바뀌지 않는다.
newuser;
// {id: 'hojun', pw: '1234', name: 'Semin', email: 'ksm9802@gmail.com', active: true}
```
```javascript
let newuser = {
    id : 'hojun',
    pw : '1234',
    name : 'Semin',
    email : 'ksm9802@gmail.com',
    active : true,
};

let 회원정보업데이트 = {
    name : 'cat',
    email : 'jun@naver.com',
};

// 객체리터럴.md의 6. 프로퍼티 값 갱신 참고
newuser = {...newuser, ...회원정보업데이트};

newuser;
// {id: 'hojun', pw: '1234', name: 'cat', email: 'jun@naver.com', active: true}
```