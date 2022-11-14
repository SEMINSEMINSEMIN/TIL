function makeClosure(){
    // 클로저 공간
    // 비공개 프로퍼티
    // class에서 private사용해서 접근했던걸 예전 문법에서는 저렇게 클로저로 만들었다
    const val1 = 100;
    const val2 = 200;

    return {
        getVal1: function (){return val1},
        getVal2: function (){return val2}
    }
}

let result = makeClosure();
console.log(result.getVal1());
console.log(result.getVal2());
console.log(result.val1);
console.log(result.val2);
console.log(val1);
console.log(val2);