// 1. Write a JavaScript program to remove items from a drop-down list.

const colorSelect = document.getElementById('colorSelect');
const Q1Btn = document.getElementById('Q1Btn');

function removeColor() {
    colorSelect.remove(colorSelect.selectedIndex);
}

const Fn = Q1Btn.addEventListener('click', removeColor);


// 2. Write a JavaScript program to change the  color given text in p tag  
// Eg : if you select green then the color of text should be green 

const color2 = document.getElementById("colorSelect2");
const text1 = document.getElementById("text1");
const Q2Btn = document.getElementById('Q2Btn');

function changeTextColor() {
    const selectedColor = color2.value;
    text1.style.color = selectedColor;
}

const display = Q2Btn.addEventListener('click',changeTextColor);


// 3. Write a JavaScript function to get the values of First and Last names of the following form.

const Fname = document.getElementById('Fname');
const Lname = document.getElementById('Lname');
const Rfname = document.getElementById('Rfname');
const Rlname = document.getElementById('Rlname');
const Q3Btn = document.getElementById('Q3Btn');

const displayContent = () => {
    Rfname.innerHTML = Fname.value;
    Rlname.innerHTML = Lname.value;

}

const Q3 = Q3Btn.addEventListener('click', displayContent);
