var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

document.querySelector(".img1").setAttribute("src", "./images/dice"+ randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "./images/dice"+ randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Jogador 1 Ganhou!"
}
if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Jogador 2 Ganhou!"
}
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Empate!"
}