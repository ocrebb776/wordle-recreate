function orangef(cell) {
    document.getElementById(cell).style.backgroundColor = orange;
    document.getElementById(cell).style.border = orange;
}

function greenf(cell) {
    document.getElementById(cell).style.backgroundColor = green;
    document.getElementById(cell).style.border = green;
}

const array = ["p", "a", "y", "e", "e"];
let RowOne;
let a;
let b;
let c;
let d;
let e;
let f;
const orange = "#b59d3b"
const green = "#538d4e"

function chone() {
    RowOne = prompt("enter guess 1");
    document.getElementById('a1').innerHTML = RowOne[0];
    document.getElementById('a2').innerHTML = RowOne[1];
    document.getElementById('a3').innerHTML = RowOne[2];
    document.getElementById('a4').innerHTML = RowOne[3];
    document.getElementById('a5').innerHTML = RowOne[4];
    checkOne(RowOne)
    a = "y"
}

function checkOne(Row) {

    if (Row == "payee") {
        alert("you wim");
    }
    let i = 1
    while (i < 6) {
        if (Row[i - 1] == array[i - 1]) {
            greenf("a" + String(i));
        } else if (array.includes(Row[i - 1]) == true) {
            orangef("a" + String(i));
        }
        i += 1;
    }
    /* else if (array.includes(Row[0]) == true) {
            orangef("a1");
        } else if (array.includes(Row[1]) == true) {
            orangef("a2");
        } else if (array.includes(Row[2]) == true) {
            orangef("a3");
        } else if (array.includes(Row[3]) == true) {
            orangef("a4");
        } else if (array.includes(Row[4]) == true) {
            orangef("a5");
        } else {
            alert("oh no");
        }
        if (Row[0] == "p") {
            greenf("a1")
        }
        if (Row[1] == "a") {
            greenf("a2")
        }
        if (Row[2] == "y") {
            greenf("a3")
        }
        if (Row[3] == "e") {
            greenf("a4")
        }
        if (Row[4] == "e") {
            greenf("a5")

        }
    */
}



function chtwo() {
    Rowtwo = prompt("enter guess 1");
    document.getElementById('b1').innerHTML = Rowtwo[0];
    document.getElementById('b2').innerHTML = Rowtwo[1];
    document.getElementById('b3').innerHTML = Rowtwo[2];
    document.getElementById('b4').innerHTML = Rowtwo[3];
    document.getElementById('b5').innerHTML = Rowtwo[4];
    checktwo(Rowtwo)
    b = "y"
}

function checktwo(Row) {
    if (Row == "payee") {
        alert("you wim");
    }
    if (array.includes(Row[0]) == true) {
        document.getElementById("b1").style.backgroundColor = "#b59f3b";
        document.getElementById("b1").style.border = "solid #b59f3b";
    }
    if (array.includes(Row[1]) == true) {
        document.getElementById("b2").style.backgroundColor = "#b59f3b";
        document.getElementById("b2").style.border = "solid #b59f3b";
    }
    if (array.includes(Row[2]) == true) {
        document.getElementById("b3").style.backgroundColor = "#b59f3b";
        document.getElementById("b3").style.border = "solid #b59f3b";
    }
    if (array.includes(Row[3]) == true) {
        document.getElementById("b4").style.backgroundColor = "#b59f3b";
        document.getElementById("b4").style.border = "solid #b59f3b";
    }
    if (array.includes(Row[4]) == true) {
        document.getElementById("b5").style.backgroundColor = "#b59f3b";
        document.getElementById("b5").style.border = "solid #b59f3b";
    }
    if (Row[0] == "p") {
        document.getElementById("b1").style.backgroundColor = "#538d4e";
        document.getElementById("b1").style.border = "solid #538d4e";
    }
    if (Row[1] == "a") {
        document.getElementById("b2").style.backgroundColor = "#538d4e";
        document.getElementById("b2").style.border = "solid #538d4e";
    }
    if (Row[2] == "y") {
        document.getElementById("b3").style.backgroundColor = "#538d4e";
        document.getElementById("b3").style.border = "solid #538d4e";
    }
    if (Row[3] == "e") {
        document.getElementById("b4").style.backgroundColor = "#538d4e";
        document.getElementById("b4").style.border = "solid #538d4e";
    }
    if (Row[4] == "e") {
        document.getElementById("b5").style.backgroundColor = "#538d4e";
        document.getElementById("b5").style.border = "solid #538d4e";
    }


}