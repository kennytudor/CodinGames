const pattern = ["CP", "CL", "PR", "PS", "RL", "RC", "LS", "LP", "SC", "SR"]

class Player {
   
       constructor(num, sign, enemies ) {
        this.number = num;
        this.sign = sign;
        this.enemies = enemies;
    }

    addEnemies(id) {
        this.enemies.push(id.number)
    }

    enemiesString() {
        let s = this.enemies.join(' ')

        return s
    }
}


//competion

const N = parseInt(readline());
let competition = []
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const NUMPLAYER = parseInt(inputs[0]);
    const SIGNPLAYER = inputs[1];
    const enemies = [];
    competition.push(new Player(NUMPLAYER, SIGNPLAYER, enemies))
}



while(competition.length > 1) {
    competition.push(rules(competition.shift(), competition.shift()))
}

//rules of the game

function rules( player1, player2) {
    player1.addEnemies(player2)
    player2.addEnemies(player1)

    if(pattern.includes(player1.sign + player2.sign)) {
        return player1
    } else if(pattern.includes(player2.sign + player1.sign)) {
        return player2
    } else if(player1.number < player2.number) {
        return player1
    } else return player2
}


let winner = competition.shift()
console.log(winner.number)
console.log(winner.enemiesString())

