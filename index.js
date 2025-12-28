let homeScore = document.getElementById("home-score") 
let guestScore = document.getElementById("guest-score")

function homeBtn1(){
    homeScore.textContent = Number(homeScore.textContent) + 1
}
function homeBtn2(){
    homeScore.textContent = Number(homeScore.textContent) + 2
}
function homeBtn3(){
    homeScore.textContent = Number(homeScore.textContent) + 3
}

function guestBtn1(){
    guestScore.textContent = Number(guestScore.textContent) + 1
}
function guestBtn2(){
    guestScore.textContent = Number(guestScore.textContent) + 2
}
function guestBtn3(){
    guestScore.textContent = Number(guestScore.textContent) + 3
}
function reset(){
    guestScore.innerText = 0
    homeScore.innerText = 0
}
