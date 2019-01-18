import {findHoroscope} from "./lib.js";

const dayEl = document.getElementById('day');
const monthEl = document.getElementById('month');
const defineEl =document.getElementById('define');
const resultEl = document.getElementById('result');

function reactToClick() {
    const day = dayEl.value;
    const month = monthEl.value;
    const result = findHoroscope(month, day);
    resultEl.textContent = result;
};

defineEl.addEventListener('click', reactToClick);