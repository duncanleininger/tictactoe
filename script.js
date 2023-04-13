let player = 0
let turn = 0
let wongame = 0

let p1 = []
let p2 = []
const square = document.querySelectorAll('.field')
const output = document.getElementById('message')

const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

output.innerHTML = "RED's TURN"

square.forEach((div) => {
    div.addEventListener('click', function(Event) {
        if (player === 0) {
            player = 1
            output.innerHTML = "GREEN's TURN"
            Event.target.classList.add("redfield")
            turn++
            p1.push(parseInt(Event.target.id))
            p1.sort()
            let win = checkWinning(p1);
            if (win) {
            output.innerHTML = "RED WINS!"
            output.style.backgroundColor = "rgb(255, 77, 77)"
            wongame = 1
            endgame()
            }

            if (turn == 9 && wongame == 0) {
                output.innerHTML = "DRAW!"
                endgame()
            }
        }
        else {
            player = 0
            output.innerHTML = "RED's TURN"
            Event.target.classList.add("greenfield")
            turn++
            console.log(turn)
            p2.push(parseInt(Event.target.id))
            let win = checkWinning(p2);

            if (win) {
            output.innerHTML = "GREEN WINS!"
            output.style.backgroundColor = "rgb(77, 255, 77)"
            wongame = 1
            endgame()
            }

            if (turn == 9 && wongame == 0) {
                output.innerHTML = "DRAW!"
                endgame()
            }
            
        }
    })
})

function checkWinning(array) {
    return winning.some((wArray) => wArray.every((winNumber) => array.includes(winNumber)))
}


function endgame() {
    square.forEach((div) => {
    div.classList.add("lockedfield")
    })
    setTimeout(() => {
        restartgame()
    }, 3000);
}

function restartgame() {
    square.forEach((div) => {
        div.classList.remove("lockedfield","greenfield","redfield")
        })
    wongame = 0
    turn = 0
    player = 0
    p1 = []
    p2 = []
    document.getElementById('message').innerHTML = "RED's TURN"
    output.style.backgroundColor = "rgb(255, 255, 255)"
}