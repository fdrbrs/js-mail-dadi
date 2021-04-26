//chiedo all'utente la sua mail

var userMail = prompt("Write your email to login");

//genero un array di email

var mailArray = ["red@colors.com", "blue@colors.com", "green@colors.com", "yellow@colors.com", "purple@colors.com", "brown@colors.it"];

//verifco se la mail inserita dall'utente è nella mia lista

var msg;

// non va bene usare switch
/* switch (userMail) {
    case mailArray[0]:
        msg = "Login Succesful";
        break;

    case mailArray[1]:
        msg = "Login Succesful";
        break;

    case mailArray[2]:
        msg = "Login Succesful";
        break;

    case mailArray[3]:
        msg = "Login Succesful";
        break;

    case mailArray[4]:
        msg = "Login Succesful";
        break;

    case mailArray[5]:
        msg = "Login Succesful";
        break;

    default:
        msg = "Login Not Succesful";
        break;
} */

if (mailArray.includes(userMail)) {
    msg = "Login Successful"
} else {
    msg = "Login Not Successfull"
}

//stampo messagio sull'esito del controllo

document.getElementById("msg").innerHTML = msg;

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var userDice = Math.floor(Math.random() * 6) + 1
var machineDice = Math.floor(Math.random() * 6) + 1

console.log(userDice);
console.log(machineDice);

document.getElementById("user_roll").innerHTML = userDice;

document.getElementById("machine_roll").innerHTML = machineDice;

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
var result;

if (userDice > machineDice) {
    result = "you win!";
} else if (userDice < machineDice) {
    result = "you lose!"
} else {
    result = "draw!"
}

document.getElementById("result").innerHTML = result;