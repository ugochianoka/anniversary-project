let enterBtn = document.getElementById("btn-1")
let input = document.getElementById("input")
let gifts = []
let enteredGifts = document.getElementById("chosen")
let final = document.getElementById("final")
function enter() {
    gifts.push(input.value)
    let chosen = ""
    for(let i=0; i < gifts.length; i++) {
        chosen += `<li>
            Gift ${i+1} : ${gifts[i]}
        </li>`
    }
    enteredGifts.innerHTML = chosen
    input.value = ""
}

function clickMe() {
    if(gifts.length >= 3) {
        let gift = Math.floor(Math.random()*gifts.length)
        let youGot = gifts [gift]
        let finalGift = `You won  ${youGot}, Congratulations Baby!!!🥳❤️`
        final.innerHTML = finalGift
    }
    else {
        final.innerHTML = `Ezinwanne enter up to 3 gifts 😒🙄😑`
    }
}
