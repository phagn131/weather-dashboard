//creates element for day using JQuery selector, modify the element and append it to the page

var $today = $("#currentDay");
var currentDay = moment();
document.getElementById("currentDay").innerHTML = currentDay;
$today.text(currentDay.format("dddd, MMMM Do"));
//set variable for hour block using moment.JS
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));
