var randomTreasure = Math.floor(Math.random()*9)
var randomBomb = Math.floor(Math.random()*9)
if(randomTreasure === randomBomb){
  randomBomb = Math.floor(Math.random()*9)
}

//define what you want your bomb and treasure to be then define what you want everything else to be
// randomTreasure = "🌈"
// randomBomb = "💣"
// if not randomTreasure and randomBomb = "🌴"


const changeToEmoji = (number) => {
    console.log('treasure', randomTreasure)
    console.log('bomb', randomBomb)
    console.log(number)
    if (randomTreasure === number){
        document.getElementById(number).innerHTML = "🌈"
        alert("You are the winner!")
    } else if (randomBomb === number){
        document.getElementById(number).innerHTML = "💣"
        alert("You suck 🖕")
    } else if (randomTreasure !== number && randomBomb !== number){
        document.getElementById(number).innerHTML = "🌴"
    }
}