let saffron = document.querySelector(".saffron");
let white = document.querySelector(".white");
let green = document.querySelector(".green");
let firstPage = document.querySelector(".firstPage");

saffron.addEventListener("click", () => {
  document.body.style.backgroundColor = "orange";
});

white.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

// ++++++++++++++++++ bmi calculator ++++++++++++++++++++

const form = document.querySelector("form");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const resultParagraph = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = calculateBMI(weight, height);
  resultParagraph.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});

function calculateBMI(weight, height) {
  return weight / height ** 2;
}

// ++++++++++++++++++++++++++++ clock ++++++++++++++++++++++++++++

let clock = document.querySelector(".clock");

setInterval(() => {

    let date = new Date();
    clock.innerHTML = date.toLocaleString();

} , Infinity);
 

// ++++++++++++++++++++++++++++++++++++ random color generate +++++++++++++++++++++++++++++

const randomColor = function() {
  const hex = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId = null;

let startChangingColor = function() {
  document.body.style.backgroundColor = randomColor();
};

let start = function() {
  intervalId = setInterval(startChangingColor, 1000);
};

let stopChangingColor = function() {
  clearInterval(intervalId);
};

document.querySelector("#start").addEventListener("click", start);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

// +++++++++++++++++++++++++++++++++ keycode +++++++++++++++++++++++++++++++++++

let inserted = document.querySelector(".keycode");

window.addEventListener("keydown", (e) => {
  inserted.innerHTML = `
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  `;
});

