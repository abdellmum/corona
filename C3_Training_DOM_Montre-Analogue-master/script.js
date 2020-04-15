

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");





function clock() {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const secondsRatio = seconds * 6;
    const minutesRatio = minutes * 6 + (0.1 * seconds);
    const hoursRatio = hours * 30 + (0.5 * minutes);
    AIGUILLEHR.style.transform = 'rotate(' + hoursRatio + 'deg)';
    AIGUILLEMIN.style.transform = 'rotate(' + minutesRatio + 'deg)';
    AIGUILLESEC.style.transform = 'rotate(' + secondsRatio + 'deg)';
 
    
};
 

function kimHour(){
var element = document.getElementById('kim-hour');
var date = new Date ();
var heure=date.getHours();
var minute=date.getMinutes();
var secound=date.getSeconds();

    
    if (minute < 10) { minute = "0" + minute }
    
    if (secound < 10) { secound = "0" + secound }
    if (heure < 10) { heure = "0" + heure}
    element.innerHTML = heure + ":" + minute + ":" + secound;

}







setInterval(kimHour,clock, 1000);
setInterval(clock, 1000);