// Part 3 Problem 1

const shallPassed = 30;
let steps = 0;

function randomSteps() {
    return Math.ceil(Math.random() * 10);
}

function randomTime() {
    return Math.ceil(Math.random()*10) * 1000;
}

function snakesAndLaddersGame() {
    let waktu = randomTime();
    let langkah = randomSteps();
    let sumLangkah = 0;
    return new Promise((berhasil) => {
        setTimeout(() => {
            berhasil('step ini membutuhkan ' + waktu/1000 + ' detik \nstep ini medapatkan ' + langkah + ' langkah\nsehingga langkahnya bertambah dari ' + steps + ' menjadi ' + (steps+langkah))
            steps = steps + langkah;
        }, waktu);
    })
}

async function result() {
    for (let i = 0; i < 5; i++) {
        let nilai = await snakesAndLaddersGame();
        console.log(nilai);
    }
    
    if (steps >= shallPassed) {
        console.log('Congratulation, you have passed this game! And your total step is', steps );
    } else {
        console.log('Goodbye! you didnt passed this game because your step only ', steps, ', because minimum step to pass this game is', shallPassed)
    }
}
result();