var deadline = 'October 30 2019 23:59:59 PST';

function getTimeRemaining(deadline){
var t = Date.parse(deadline) - Date.parse(new Date());
var seconds = Math.floor((t/1000)%60);
var minutes = Math.floor((t/1000/60)%60);
var hours = Math.floor((t/(1000*60*60))%24);
var days = Math.floor(t/(1000*60*60*24)); 
return {
   'total' : t,
   'days' : days,
   'hours' : hours,
   'minutes' : minutes,
   'seconds' : seconds
};
}

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

function renderGreeting(){ 
   return '<h3>' + greeting + '</h3>'
}

function askName(){
    var username = prompt('What is your name?');
    return '<h3>' + username + '!' + '</h3>';
}

var sunOrMoon; 
if (greeting == 'Good evening, '){
    sunOrMoon = '<img src = "images/moon.jpg">'
}
else if (greeting !== 'Good evening, '){
    sunOrMoon = '<img src = "images/sun.jpg">'
}
function displaySky(){
   return sunOrMoon
}
