const localTime = document.querySelector('.local-time');
// var clock = setInterval(() => localTime.textContent = displayTime(), 1000)

/* 
if radiobutton AM/PM checked, display time modulo 12
*/
const radioButtons = document.querySelectorAll('input[type="radio"]')
const radio12 = document.getElementById('12hours')
const radio24 = document.getElementById('24hours')

if(radio24.checked === true){
    let displayTime = function(){
        return new Date().toLocaleTimeString()
    }
    var clock = setInterval(() => localTime.textContent = displayTime(), 1000)
}
console.log(radioButtons)
