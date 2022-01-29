function orangef(cell) {
  document.getElementById(cell).style.backgroundColor = orange
  document.getElementById(cell).style.border = orange
}

function greenf(cell) {
  document.getElementById(cell).style.backgroundColor = green
  document.getElementById(cell).style.border = green
}
function set(cell, press) {
  document.getElementById(cell).innerHTML = press
}

function delay(time) {
  time = time * 1000
  return new Promise((resolve) => setTimeout(resolve, time))
}

function grayf(cell) {
  document.getElementById(cell).style.backgroundColor = gray
  document.getElementById(cell).style.border = gray
}
function hidden() {
  document.getElementById('nope').style.width = '0vw'
  document.getElementById('nope').style.fontSize = '0vh'
}
function notword() {
  document.getElementById('nope').style.width = '60vw'
  document.getElementById('nope').style.fontSize = '5vh'
  delay(2).then(() => hidden())
}
function hidewin() {
  document.getElementById('yay').style.width = '0vw'
  document.getElementById('yay').style.fontSize = '0vh'
  document.getElementById('yay').style.height = '0vh'
}
function win() {
  document.getElementById('yay').style.width = '70vw'
  document.getElementById('yay').style.fontSize = '5vw'
  document.getElementById('yay').style.height = '70vh'
  delay(10).then(() => hidewin())
}

let stage = 0
const ent = []
const array = ['C', 'A', 'S', 'E', 'S']
let enter
let correct = 'CASES'
const orange = '#b59d3b'
const green = '#538d4e'
const gray = '#4f4f52'
const con = ['a', 'b', 'c', 'd', 'e', 'f']
/*
function display(rows) {
  enter = prompt('enter a 5 letter word for row: ' + rows).toUpperCase()
  if (enter.length == 5) {
    if (word.includes(enter) == true) {
      document.getElementById(rows + '1').innerHTML = enter[0]
      document.getElementById(rows + '2').innerHTML = enter[1]
      document.getElementById(rows + '3').innerHTML = enter[2]
      document.getElementById(rows + '4').innerHTML = enter[3]
      document.getElementById(rows + '5').innerHTML = enter[4]
      check(rows, enter)
      a = 'y'
    } else {
      notword()
    }
  } else {
    alert('must be 5 letters long')
  }
}*/
let n = 1
function key(press) {
  if (n < 6) {
    press = press.toUpperCase()
    set(con[stage] + String(n), press)
    ent[n - 1] = press
    n = n + 1
  }
}
function checks() {
  enter = ent[0] + ent[1] + ent[2] + ent[3] + ent[4]
  if (enter.length == 5) {
    if (word.includes(enter) == true) {
      check()
      a = 'y'
    } else {
      notword()
    }
  } else {
    alert('must be 5 letters long')
  }
}
function back() {
  n = n - 1
  ent[n - 1] = ''
  set(con[stage] + String(n), '')
}
function check() {
  var row = con[stage]
  if (enter == correct) {
    console.log('yo')
    document.getElementById('word').innerHTML = correct.toLowerCase()
    win()
    document.getElementById('tri').innerHTML = stage + 1 + ' tries'
  }

  let i = 1
  while (i < 6) {
    if (enter[i - 1] == correct[i - 1]) {
      greenf(row + String(i))
    } else if (array.includes(enter[i - 1]) == true) {
      orangef(row + String(i))
    } else {
      grayf(row + String(i))
    }
    i += 1
  }
  stage = stage + 1
  number = 0
  n = 1
}
