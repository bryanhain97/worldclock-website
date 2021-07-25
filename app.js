const localTime = document.querySelector('.local-time');
const localText = document.querySelector('.local-text')
const countryTime = document.querySelector('.country-time')
const countryText = document.querySelector('.country-text')
// var clock = setInterval(() => localTime.textContent = displayTime(), 1000)

/* 
if radiobutton AM/PM checked, display time modulo 12
*/
const radioButtons = document.querySelectorAll('input[type="radio"]')
const radio12 = document.getElementById('12hours')
const radio24 = document.getElementById('24hours')

const displayTime = function () {
    let time = new Date().toLocaleTimeString();
    if (radio12.checked === true) {
        if (eval(time.slice(0, 2)) >= 12) {
            countryText.textContent = 'country time (pm)'
            localText.textContent = 'local time (pm)'
            return `${(eval(time.slice(0, 2)) % 12).toString()}:${time.slice(3)}`
        }else{
            countryText.textContent = 'country time (am)'
            localText.textContent = 'local time (am)'
            return `${(eval(time.slice(0, 2)) % 12).toString()}:${time.slice(3)}`
        }
    } else if (radio24.checked === true) {
            countryText.textContent = 'country time'
            localText.textContent = 'local time'
        return time
    }
}
const clock = setInterval(() => localTime.textContent = displayTime(), 1000)


