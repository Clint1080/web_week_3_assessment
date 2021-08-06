
const colorBtn = document.querySelector(`#color`)
const placeBtn = document.querySelector(`#place`)
const ritualBtn = document.querySelector(`#ritual`);

const colorAlert = (e) => {
    window.alert(`My favorite color is Blue.`)
}
const placeAlert = (e) => {
    window.alert(`My favorite place is Fish lake Utah.`)
}
const ritualAlert = (e) => {
    window.alert(`My favorite ritual is watching youtube before bed.`)
}

colorBtn.addEventListener(`click`, colorAlert)
placeBtn.addEventListener(`click`, placeAlert)
ritualBtn.addEventListener(`click`, ritualAlert)