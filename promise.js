// Part 2 problem 2

const listColor=["green", "yellow", "blue", "orange", "red"];

let getRandomColor = new Promise((resolve, reject) => {
    console.log('Loading starts ...');
    console.log('generating random color ...');
    let randomNum = Math.floor(Math.random() * 7);
    if (randomNum <= listColor.length) {
        setTimeout(() => {
            resolve(listColor[randomNum] + '\nloading end ...')
        }, 3000);
    } else {
        setTimeout(() => {
            reject('Failed to get random color, please try again')
        }, 3000);
    }
})

    .then((value) => console.log('The color we get is ' + value))
    .catch((error) => console.log(error));

