const selectMenu = document.querySelectorAll('select')
const timeBox = document.querySelector('.time')
const alarmBtn = document.querySelector('button')
const ringtone = new Audio('/media/ringtone.mp3')
const content = document.querySelector('.content')

for (let i = 23; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = ` <option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)

}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = ` <option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}

setInterval(() => {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    h = h < 10 ? '0' + h : h
    s = s < 10 ? '0' + s : s
    m = m < 10 ? '0' + m : m
    timeBox.innerHTML = `${h}:${m}:${s}`
    if (alarmTime == `${h}:${m}`) {
        ringtone.play()
        ringtone.loop = true

    }
}, 1000)

let alarmTime;

alarmBtn.addEventListener('click', () => {

    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
    if (alarmTime.includes('hour') || alarmTime.includes('minute')) {
        alert('زمان هشدار را مشخص کنید')
    }
    checkState(alarmState)
    console.log('clicked')
})


let alarmState = 'noset'

function checkState(state) {
    if (state == 'noset') {
        content.classList.add('disable')
        alarmBtn.innerText = 'clear alarm'
        alarmState = 'set'
    }
    else {
        content.classList.remove('disable')
        ringtone.pause()
        alarmTime = ''
        alarmState = 'noset'
        alarmBtn.innerText = 'set alarm'
    }
}

  
