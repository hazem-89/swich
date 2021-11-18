// window.onload = main;
window.addEventListener('load', main);


/**  The start of the program, runs after page is loaded */
function main(){
    startClock();
}
// EventListeners 

/** Keeps time updated on the page */

function startClock(){
    setInterval(renderClock, 100);
}

/** updates the page with the current time and day  */
function renderClock() {
    const timeElement = document.getElementById('time');
    const date = new Date();
    timeElement.innerHTML =getCurrentTimeString(date);

    const weekDayElement = document.getElementById('week-day');
    weekDayElement.innerHTML = getWeekDayString(date)
}
/**
 * 
 * @param {Date} date 
 * @returns {string}
 */
function getCurrentTimeString(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return  hours + ":" + minutes + ":" + seconds;
}
/**
 * takes a day 
 * @param {Date} date 
 * @returns {string}
 */
function getWeekDayString(date) {
    const weekday = date.getDay();
    switch (weekday) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesdays';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';

        if (weekday === 0) return "Sunday"
        if (weekday === 0) return "Monday"
        if (weekday === 0) return "Tuesdays"
        if (weekday === 0) return "Wednesday"
        if (weekday === 0) return "Thursday"
        if (weekday === 0) return "Friday"
        if (weekday === 0) return "Saturday"


    }
 
}