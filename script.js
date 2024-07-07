// 1. Write a JavaScript program to remove items from a drop-down list.

const colorSelect = document.getElementById('colorSelect');
const Q1Btn = document.getElementById('Q1Btn');

const removeColor = () => {
    colorSelect.remove(colorSelect.selectedIndex);
}

const Fn = Q1Btn.addEventListener('click', removeColor);


// 2. Write a JavaScript program to change the  color given text in p tag  
// Eg : if you select green then the color of text should be green 

const color2 = document.getElementById("colorSelect2");
const text1 = document.getElementById("text1");
const Q2Btn = document.getElementById('Q2Btn');

const changeTextColor = () => {
    const selectedColor = color2.value;
    text1.style.color = selectedColor;
}

const display = Q2Btn.addEventListener('click',changeTextColor);


// 3. Write a JavaScript function to get the values of First and Last names of the following form.

const Rfname = document.getElementById('Rfname');
const Rlname = document.getElementById('Rlname');
const form = document.getElementById('form1');

const displayContent = (event) => {
    event.preventDefault();
    Rfname.innerHTML = form.elements[0].value;
    Rlname.innerHTML = form.elements[1].value;
}

form.addEventListener("submit", displayContent);

// 4.Write a JavaScript program to display a random image (clicking on a button) from the following list.

const randomImage = document.getElementById('randomImage');
const Q4Btn = document.getElementById('Q4Btn');

// const photos = ['http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot',
//                 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot' ,
//                 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot'];

const photos = ['01.jpg','02.jpg','03.jpg'];

const displayImage = () => {
    const randomImg = Math.floor(Math.random() * photos.length);
    randomImage.src = photos[randomImg];
}

Q4Btn.addEventListener('click',displayImage);