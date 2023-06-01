const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

if (button) {
  button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
  });
}
/////////////////////////Задайте правильні ts типи для класичних js
let age: number;
let firstName: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number) => a;

age = 50;
firstName = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};
///////////////////////////////Задайте тип для змінної, в яку можна зберегти будь-яке значення

let anything: any;
anything = -20;
anything = "Text";
anything = {};
////////////Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}
//////Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number];
person = ["Max", 21];
/////Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Status {
  LOADING,
  READY,
}
const page = {
  load: Status.READY,
};

if (page.load === Status.LOADING) {
  console.log("Loading...");
}
if (page.load === Status.READY) {
  console.log("Ready");
}
///////////////////Зробіть змінну, яка може приймати або рядок, або число.///////////////////
let union: string | number;
union = "Some Text";
union = 10;
///////////////////Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
function state(action: "enable" | "disable") {
  if (action === "enable") {
    console.log("you see enable");
  }
  if (action === "disable") {
    console.log("you see disable");
  }
}
////////////Вкажіть типи для наступних функцій

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
////////////////Створіть свій тип даних на основі наявних даних.
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2023-01-01"),
    updateAt: new Date("2023-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
