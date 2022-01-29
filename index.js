
function orangef(cell) {
    document.getElementById(cell).style.backgroundColor = orange;
    document.getElementById(cell).style.border = orange;
}

function greenf(cell) {
    document.getElementById(cell).style.backgroundColor = green;
    document.getElementById(cell).style.border = green;
}


function delay(time) {
    time = time * 1000;
    return new Promise(resolve => setTimeout(resolve, time));
}

function grayf(cell) {
    document.getElementById(cell).style.backgroundColor = gray;
    document.getElementById(cell).style.border = gray;
}
function hidden(){
    document.getElementById("nope").style.width = "0vw";
    document.getElementById("nope").style.fontSize = "0vh";
}
function notword() {
    document.getElementById("nope").style.width = "60vw";
    document.getElementById("nope").style.fontSize = "5vh";
    delay(2).then(() => hidden());

}
const array = ["p", "A", "Y", "E", "E"];
let enter;
let correct = "PAYEE"
const orange = "#b59d3b"
const green = "#538d4e"
const gray = "#4f4f52"

function display(rows) {
    enter = prompt("enter a 5 letter word for row: " + rows).toUpperCase();
    if (enter.length == 5) {
        if (word.includes(enter) == true) {
            document.getElementById(rows + '1').innerHTML = enter[0];
            document.getElementById(rows + '2').innerHTML = enter[1];
            document.getElementById(rows + '3').innerHTML = enter[2];
            document.getElementById(rows + '4').innerHTML = enter[3];
            document.getElementById(rows + '5').innerHTML = enter[4];
            check(rows, enter)
            a = "y"
        } else {
            notword()
        }
    } else {
        alert("must be 5 letters long")
    }
}


function check(row, content) {

    if (content == correct) {
        alert('you win');
        console.log('yo');
    }

    let i = 1
    while (i < 6) {
        if (content[i - 1] == correct[i - 1]) {
            greenf(row + String(i));
        } else if (array.includes(content[i - 1]) == true) {
            orangef(row + String(i));
        } else {
            grayf(row + String(i));
        }
        i += 1;
    }

}