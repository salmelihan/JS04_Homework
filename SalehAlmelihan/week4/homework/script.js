console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.querySelector('body');// query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
body.style.fontFamily = "Arial, sans-serif";
// change the backgroundColor to a color of your choice
body.style.background = "#ECE8D9";

var nickname =  document.getElementById('nickname');// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
nickname.innerHTML = 'Almelihan';
// query select favorites byID
var favorites = document.querySelector('span#favorites');

// query select hometown byID
var hometown = document.querySelector('span#hometown');

// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';
favorites.innerHTML = 'Reading';
hometown.innerHTML = 'Hail';
//change the color of all selectors to colors of your choice, it better be good LOL

nickname.style.color= '#A9890F'
favorites.style.color= '#A98A12'
hometown.style.color = '#7A630A'
// https://www.w3schools.com/jsref/prop_style_color.asp