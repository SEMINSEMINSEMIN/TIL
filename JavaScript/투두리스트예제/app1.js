const main = document.querySelector(".artcl_main");
const userTask = main.querySelector("header input");
const addBtn = main.querySelector("header button");
const listCont = main.querySelector(".list_todo");

let keys = [];
function enterkey(event) {
    keys.unshift(event.key);
    if (keys.length > 2) {
        keys.pop();
    }
    if (keys[0] === "Enter" && keys[1] !== "Enter") {
        genItem();
    }
}

function genItem() {
    const li = document.createElement('li');
    li.textContent = userTask.value;
    listCont.appendChild(li);
}

// onkeyup : 키를 눌렀다가 땠을 때 이벤트
// https://stackoverflow.com/questions/35394937/keyboardevent-keycode-deprecated-what-does-this-mean-in-practice

userTask.addEventListener('keyup', enterkey);

addBtn.addEventListener('click', genItem);

