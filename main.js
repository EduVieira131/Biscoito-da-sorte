const cookieImage = document.querySelector('#cookie')
const btnReset = document.querySelector('#reset')
const homeScreen = document.querySelector('.home')
const luckyScreen = document.querySelector('.luckyScreen')

//Events
cookieImage.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleClick)

//Functions
function handleClick() {
  toggleScreen()
}

function toggleScreen() {
  homeScreen.classList.toggle('hide')
  luckyScreen.classList.toggle('hide')
}
