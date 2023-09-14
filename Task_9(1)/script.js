let container = document.createElement("div");
container.classList.add("container", "bg-black", "text-center", "p-3", "m-sm-5","m-1");
document.body.appendChild(container);

let container1 = document.createElement("div");
container1.classList.add("p-2");
let inputArea = document.createElement("input");
inputArea.setAttribute("id", "result");
inputArea.setAttribute("type", "text");
inputArea.classList.add("form-control", "p-4", "bg-white", "text-lg-center");
container1.appendChild(inputArea);
container.appendChild(container1);

let buttonContainer = document.createElement("div");
buttonContainer.classList.add("p-2")
container.appendChild(buttonContainer);

let buttonSub = document.createElement("button");
buttonSub.setAttribute("id", "sub");
buttonSub.innerText = "-";
buttonSub.classList.add("btn", "btn-secondary", "m-2", "col-2");

let buttonAdd = document.createElement("button");
buttonAdd.setAttribute("id", "add");
buttonAdd.innerText = "+";
buttonAdd.classList.add("btn", "btn-secondary", "m-2", "col-2");

let buttonMul = document.createElement("button");
buttonMul.setAttribute("id", "mul");
buttonMul.innerText = "*";
buttonMul.classList.add("btn", "btn-secondary", "m-2", "col-2");

let buttonDiv = document.createElement("button");
buttonDiv.setAttribute("id", "div");
buttonDiv.innerText = "/";
buttonDiv.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button7 = document.createElement("button");
button7.setAttribute("id", "num7");
button7.innerText = "7";
button7.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button8 = document.createElement("button");
button8.setAttribute("id", "num8");
button8.innerText = "8";
button8.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button9 = document.createElement("button");
button9.setAttribute("id", "num9");
button9.innerText = "9";
button9.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button4 = document.createElement("button");
button4.setAttribute("id", "num4");
button4.innerText = "4";
button4.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button5 = document.createElement("button");
button5.setAttribute("id", "num5");
button5.innerText = "5";
button5.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button6 = document.createElement("button");
button6.setAttribute("id", "num6");
button6.innerText = "6";
button6.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button1 = document.createElement("button");
button1.setAttribute("id", "num1");
button1.innerText = "1";
button1.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button2 = document.createElement("button");
button2.setAttribute("id", "num2");
button2.innerText = "2";
button2.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button3 = document.createElement("button");
button3.setAttribute("id", "num3");
button3.innerText = "3";
button3.classList.add("btn", "btn-secondary", "m-2", "col-2");

let button0 = document.createElement("button");
button0.setAttribute("id", "num0");
button0.innerText = "0";
button0.classList.add("btn", "btn-secondary", "m-2", "col-2");

let buttonDot = document.createElement("button");
buttonDot.setAttribute("id", "dot");
buttonDot.innerText = ".";
buttonDot.classList.add("btn", "btn-secondary", "m-2", "col-2");

let buttonMod = document.createElement("button");
buttonMod.setAttribute("id", "mod");
buttonMod.innerText = "%";
buttonMod.classList.add("btn", "btn-secondary", "m-2", "col-2");

let buttonEqual = document.createElement("button");
buttonEqual.setAttribute("id", "equal");
buttonEqual.innerText = "=";
buttonEqual.classList.add("btn", "btn-secondary", "m-2", "col-4");

let buttonC = document.createElement("button");
buttonC.setAttribute("id", "c");
buttonC.innerText = "C";
buttonC.classList.add("btn", "btn-secondary", "m-2", "col-4");

buttonContainer.append(
  buttonSub,
  buttonAdd,
  buttonMul,
  buttonDiv,
  button7,
  button8,
  button9,
  button4,
  button5,
  button6,
  button1,
  button2,
  button3,
  button0,
  buttonDot,
  buttonMod,
  buttonC,
  buttonEqual
);

let display = document.getElementById("result");
display.readOnly = true;

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    input(key);
  } else {
    alert("Only numbers are allowed!");
  }
});

function input(val) {
  document.getElementById("result").value += val;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function output() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

let inputSub = document.getElementById("sub");
inputSub.addEventListener("click", function () {
  input("-");
});

let inputAdd = document.getElementById("add");
inputAdd.addEventListener("click", function () {
  input("+");
});

let inputMul = document.getElementById("mul");
inputMul.addEventListener("click", function () {
  input("*");
});

let inputDiv = document.getElementById("div");
inputDiv.addEventListener("click", function () {
  input("/");
});

let input7 = document.getElementById("num7");
input7.addEventListener("click", function () {
  input("7");
});

let input8 = document.getElementById("num8");
input8.addEventListener("click", function () {
  input("8");
});

let input9 = document.getElementById("num9");
input9.addEventListener("click", function () {
  input("9");
});

let input4 = document.getElementById("num4");
input4.addEventListener("click", function () {
  input("4");
});

let input5 = document.getElementById("num5");
input5.addEventListener("click", function () {
  input("5");
});

let input6 = document.getElementById("num6");
input6.addEventListener("click", function () {
  input("6");
});

let input11 = document.getElementById("num1");
input11.addEventListener("click", function () {
  input("1");
});

let input2 = document.getElementById("num2");
input2.addEventListener("click", function () {
  input("2");
});

let input3 = document.getElementById("num3");
input3.addEventListener("click", function () {
  input("3");
});

let input0 = document.getElementById("num0");
input0.addEventListener("click", function () {
  input("0");
});

let inputDot = document.getElementById("dot");
inputDot.addEventListener("click", function () {
  input(".");
});

let inputMod = document.getElementById("mod");
inputMod.addEventListener("click", function () {
  input("%");
});

let inputC = document.getElementById("c");
inputC.addEventListener("click", function () {
  clearScreen();
});

let inputEqual = document.getElementById("equal");
inputEqual.addEventListener("click", function () {
  output();
});

