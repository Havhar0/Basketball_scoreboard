/* ----- HOME & GUESTS declarations */

let homePoints = 0
let homeCounter = document.getElementById("home-counter")

let foulPointsHome = 0
let foulCounterHome = document.getElementById("foul-counter-home")

let guestPoints = 0
let guestCounter = document.getElementById("guest-counter")

let foulPointsGuest = 0
let foulCounterGuest = document.getElementById("foul-counter-guest")



/* ----- TIMER declarations */

let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;

let status = 'Stopped';
let interval = '';



/* ----- Timer functions */

function StartWatch() {

    seconds++;

    if(seconds/60 === 1) {
        seconds=0;
        minutes++;
    }

    if(seconds < 10) {
        displaySeconds = '0'+ seconds.toString();
    } 
    else {
        displaySeconds = seconds;
    }
    if(minutes < 10) {
        displayMinutes = '0'+ minutes.toString();
    } 
    else {
        displayMinutes = minutes;
    }

    document.getElementById("timerDisplay").innerHTML = displayMinutes + ":" + displaySeconds;
}


function startStop() {

    if(status == 'Stopped') {

        interval = window.setInterval(StartWatch,1000);
        document.getElementById('handler').innerHTML = 'STOP'
        status = 'Started';

    } 
    else if(status == 'Started'){

        window.clearInterval(interval);
        document.getElementById('handler').innerHTML = 'START'
        status = 'Stopped';

    }
}

function Reset()
{
	seconds = 0;
	hours = 0;
	minutes = 0;
	window.clearInterval(interval);
	document.getElementById('timerDisplay').innerHTML = '00:00';
	document.getElementById('handler').innerHTML = 'START';
	status = 'Stopped';
}


/* ----- HOME functions */

function addHome1() {
    homePoints += 1
    homeCounter.textContent = homePoints
}
function addHome2() {
    homePoints += 2
    homeCounter.textContent = homePoints
}
function addHome3() {
    homePoints += 3
    homeCounter.textContent = homePoints
}
function addFoulHome() {
    foulPointsHome += 1
    foulCounterHome.textContent = foulPointsHome
}
function resetFoulHome() {
    foulPointsHome = 0
    foulCounterHome.textContent = foulPointsHome
}



/* ----- GUEST functions */

function addGuest1() {
    guestPoints += 1
    guestCounter.textContent = guestPoints
}
function addGuest2() {
    guestPoints += 2
    guestCounter.textContent = guestPoints
}
function addGuest3() {
    guestPoints += 3
    guestCounter.textContent = guestPoints
}
function addFoulGuest() {
    foulPointsGuest += 1
    foulCounterGuest.textContent = foulPointsGuest
}
function resetFoulGuest() {
    foulPointsGuest = 0
    foulCounterGuest.textContent = foulPointsGuest
}