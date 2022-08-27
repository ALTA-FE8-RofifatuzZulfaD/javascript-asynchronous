// Part 3 Problem 1

const shallPassed = 30;
let steps = 0;

function randomSteps() {
    return Math.ceil(Math.random() * 10);
}

function randomSeconds() {
    return Math.ceil(Math.random()*10) * 1000;
}

function snakesAndLaddersGame() {
    let waktu = randomSeconds();
    let langkah = randomSteps();
    let sumLangkah = 0;
    return new Promise((berhasil) => {
        setTimeout(() => {
            berhasil('step ini membutuhkan ' + waktu/1000 + ' detik \nstep ini medapatkan ' + langkah + ' langkah\nsehingga langkahnya bertambah dari ' + sumLangkah + ' menjadi ' + (sumLangkah+langkah))
            sumLangkah += langkah;
        }, waktu);
    })
}

(async () => {
    for (let i = 0; i < 5; i++) {
        let value = await snakesAndLaddersGame()
        console.log(value);
    }
})();