//creates element for day using JQuery selector, modify the element and append it to the page

var $today = $("#currentDay");
var currentDay = moment();
document.getElementById("currentDay").innerHTML = currentDay;
$today.text(currentDay.format("dddd, MMMM Do"));
//set variable for hour block using moment.JS
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

var timeEl = document.getElementById('time');
var dateEl = document.getElementById('date');
var currentWeatheritemEl = document.getElementById('current-weather-items');
var timezone = document.getElementById('time-zone');
var countryEl = document.getElementById('country');
var weatherForecastEl = document.getElementById('weather-forecast');
var currentTempEl = document.getElementById('current-temp');


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

setInterval(() => {
    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var hour = time.getHours();
    var hoursin12hourFormat = hour >= 13 ? 2: hour
    var minutes = time.getMinutes();
    var ampm = hour >=12 ? 'PM' : 'AM';

    //timeEl.innerHTML = hoursin12hourFormat + ':' + minutes + ' ' + `<span id="am-pm">$(ampm)</span>`

    //dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);