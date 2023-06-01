"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener("click", function () {
        console.log(add(+input1.value, +input2.value));
    });
}
let age;
let firstName;
let toggle;
let empty;
let notInitialize;
let callback = (a) => a;
age = 50;
firstName = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const page = {
    load: Status.READY,
};
if (page.load === Status.LOADING) {
    console.log("Loading...");
}
if (page.load === Status.READY) {
    console.log("Ready");
}
let union;
union = "Some Text";
union = 10;
function state(action) {
    if (action === "enable") {
        console.log("you see enable");
    }
    if (action === "disable") {
        console.log("you see disable");
    }
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2023-01-01"),
        updateAt: new Date("2023-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map