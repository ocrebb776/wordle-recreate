function orangef(cell) {
    document.getElementById(cell).style.backgroundColor = orange;
    document.getElementById(cell).style.border = orange;
}

function greenf(cell) {
    document.getElementById(cell).style.backgroundColor = green;
    document.getElementById(cell).style.border = green;
}

function grayf(cell) {
    document.getElementById(cell).style.backgroundColor = gray;
    document.getElementById(cell).style.border = gray;
}
const array = ["p", "a", "y", "e", "e"];
let enter;
let a;
let b;
let c;
let d;
let e;
let f;
const orange = "#b59d3b"
const green = "#538d4e"
const gray = "#4f4f52"

function display(rows) {
    enter = prompt("enter a 5 letter word for row: " + rows);
    if (enter.length == 5) {
        document.getElementById(rows + '1').innerHTML = enter[0];
        document.getElementById(rows + '2').innerHTML = enter[1];
        document.getElementById(rows + '3').innerHTML = enter[2];
        document.getElementById(rows + '4').innerHTML = enter[3];
        document.getElementById(rows + '5').innerHTML = enter[4];
        check(rows, enter)
        a = "y"
    } else {
        alert("must be 5 letters long")
    }
}

function check(row, content) {

    if (content == "payee") {
        alert("you wim");
    }
    let i = 1
    while (i < 6) {
        if (content[i - 1] == array[i - 1]) {
            greenf(row + String(i));
        } else if (array.includes(content[i - 1]) == true) {
            orangef(row + String(i));
        } else {
            grayf(row + String(i));
        }
        i += 1;
    }

}