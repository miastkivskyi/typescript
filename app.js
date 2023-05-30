var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener("click", function () {
        console.log(add(+input1.value, +input2.value));
    });
}
/////////////////////////Задайте правильні ts типи для класичних js
var age;
var firstName;
var toggle;
var empty;
var notInitialize;
var callback = function (a) { return a; };
age = 50;
firstName = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) {
    return 100 + a;
};
///////////////////////////////Задайте тип для змінної, в яку можна зберегти будь-яке значення
var anything;
anything = -20;
anything = "Text";
anything = {};
////////////Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
//////Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
var person;
person = ["Max", 21];
/////Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var page = {
    load: Status.READY,
};
if (page.load === Status.LOADING) {
    console.log("Loading...");
}
if (page.load === Status.READY) {
    console.log("Ready");
}
///////////////////Зробіть змінну, яка може приймати або рядок, або число.///////////////////
var union;
union = "Some Text";
union = 10;
///////////////////Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
function state(action) {
    if (action === "enable") {
        console.log("you see enable");
    }
    if (action === "disable") {
        console.log("you see disable");
    }
}
////////////Вкажіть типи для наступних функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2023-01-01"),
        updateAt: new Date("2023-05-01"),
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
