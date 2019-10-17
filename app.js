function renderGreeting(){


var today = new Date();
var hourNow = today.getHours();


var greeting;
if (hourNow > 18) {
   greeting = 'Good evening, ';
} else if (hourNow > 12) {
   greeting = 'Good afternoon, ';
} else if (hourNow > 0) {
   greeting = 'Good morning, ';
} else {
   greeting = 'Welcome, ';
}
 return '<h3>' + greeting + '</h3>';
}

function askName(){
    var username = prompt('What is your name?');
    return '<h3>' + username + '!' + '</h3>';
}
// document.write(askName());

// var sunOrMoon; 
// if (greeting == 'Good evening, '){
//     sunOrMoon = '<img src = "images/moon.jpg">'
// }
// else if (greeting !== 'Good evening, '){
//     sunOrMoon = '<img src = "images/sun.jpg">'
   // return sunOrMoon;
}
function displaySky(){
   return sunOrMoon
}
