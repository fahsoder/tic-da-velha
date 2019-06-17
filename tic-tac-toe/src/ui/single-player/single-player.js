var player1 = false; //set to 'x' or 'o' if playing computer 
var player2 = false; //if not playing computer set as false 

var xturn = true;
var x = [];
var o = [];
var win = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
  ["A3", "B3", "C3"],
  ["A1", "B2", "C3"],
  ["A3", "B2", "C1"]
];
var td = document.querySelectorAll("td");

for (var i = 0; i < td.length; i++) {
  td[i].onclick = placePiece(i);
}

function placePiece(i) {

  return function() {

    if (!td[i].innerHTML) {

      if (xturn) {
        td[i].innerHTML = "x";
        x.push(td[i].id);
        check4winner();
        if (x.length === 5) {
          window.setTimeout(reset, 1000);
        }
        if (player2) {
          computerTurn();
        } else {
          xturn = false;
        }
      } else {
        td[i].innerHTML = "o";
        o.push(td[i].id);
        check4winner();
        if (player2) {
          computerTurn();
        } else {
          xturn = true;
        }
      }
    }
    if (x.length === 5) {
      window.setTimeout(reset, 1000);
    }
  };
}

function check4winner() {
  for (i = 0; i < win.length; i++) {
    if (win[i].every(xplayer)) {
      document.getElementById(win[i][0]).style.color = '#eaac98';
      document.getElementById(win[i][1]).style.color = '#eaac98';
      document.getElementById(win[i][2]).style.color = '#eaac98';
      window.setTimeout(reset, 1500);
    } else if (win[i].every(oplayer)) {
      document.getElementById(win[i][0]).style.color = '#98acea';
      document.getElementById(win[i][1]).style.color = '#98acea';
      document.getElementById(win[i][2]).style.color = '#98acea';
      window.setTimeout(reset, 1500);
    }
  }
}

function xplayer(grid) {
  return x.indexOf(grid) > -1;
}

function oplayer(grid) {
  return o.indexOf(grid) > -1;
}

/* game logic */
var one = document.getElementById("A1"),
  two = document.getElementById("A2"),
  three = document.getElementById("A3"),
  four = document.getElementById("B1"),
  five = document.getElementById("B2"),
  six = document.getElementById("B3"),
  seven = document.getElementById("C1"),
  eight = document.getElementById("C2"),
  nine = document.getElementById("C3");
var board = [one, two, three, four, five, six, seven, eight, nine];

function firstMove() {
  var num = Math.floor(Math.random() * 9);
  var random = board[num];
  random.innerHTML = "x";
  x.push(random.id);
  xturn = false;
}

function computerTurn() {
  var square;
  // two player2 in a row
  if (one.innerHTML == player2 && two.innerHTML == player2 && !three.innerHTML) {
    square = three;
  } else if (one.innerHTML === player2 && three.innerHTML === player2 && !two.innerHTML) {
    square = two;
  } else if (two.innerHTML === player2 && three.innerHTML === player2 && !one.innerHTML) {
    square = one;
  } else if (four.innerHTML === player2 && five.innerHTML === player2 && !six.innerHTML) {
    square = six;
  } else if (four.innerHTML === player2 && six.innerHTML === player2 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player2 && six.innerHTML === player2 && !four.innerHTML) {
    square = four;
  } else if (seven.innerHTML === player2 && eight.innerHTML === player2 && !nine.innerHTML) {
    square = nine;
  } else if (seven.innerHTML === player2 && nine.innerHTML === player2 && !eight.innerHTML) {
    square = eight;
  } else if (eight.innerHTML === player2 && nine.innerHTML === player2 && !seven.innerHTML) {
    square = seven;
  } else if (one.innerHTML === player2 && five.innerHTML === player2 && !nine.innerHTML) {
    square = nine;
  } else if (one.innerHTML === player2 && nine.innerHTML === player2 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player2 && nine.innerHTML === player2 && !one.innerHTML) {
    square = one;
  } else if (three.innerHTML === player2 && five.innerHTML === player2 && !seven.innerHTML) {
    square = seven;
  } else if (three.innerHTML === player2 && seven.innerHTML === player2 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player2 && seven.innerHTML === player2 && !three.innerHTML) {
    square = three;
  } else if (two.innerHTML === player2 && five.innerHTML === player2 && !eight.innerHTML) {
    square = eight;
  } else if (two.innerHTML === player2 && eight.innerHTML === player2 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player2 && eight.innerHTML === player2 && !two.innerHTML) {
    square = two;
  } else if (one.innerHTML === player2 && four.innerHTML === player2 && !seven.innerHTML) {
    square = seven;
  } else if (one.innerHTML === player2 && seven.innerHTML === player2 && !four.innerHTML) {
    square = four;
  } else if (four.innerHTML === player2 && seven.innerHTML === player2 && !one.innerHTML) {
    square = one;
  } else if (three.innerHTML === player2 && six.innerHTML === player2 && !nine.innerHTML) {
    square = nine;
  } else if (three.innerHTML === player2 && nine.innerHTML === player2 && !six.innerHTML) {
    square = six;
  } else if (six.innerHTML === player2 && nine.innerHTML === player2 && !three.innerHTML) {
    square = three;
  }

  //two player1 in a row
  else if (one.innerHTML == player1 && two.innerHTML == player1 && !three.innerHTML) {
    square = three;
  } else if (one.innerHTML === player1 && three.innerHTML === player1 && !two.innerHTML) {
    square = two;
  } else if (two.innerHTML === player1 && three.innerHTML === player1 && !one.innerHTML) {
    square = one;
  } else if (four.innerHTML === player1 && five.innerHTML === player1 && !six.innerHTML) {
    square = six;
  } else if (four.innerHTML === player1 && six.innerHTML === player1 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player1 && six.innerHTML === player1 && !four.innerHTML) {
    square = four;
  } else if (seven.innerHTML === player1 && eight.innerHTML === player1 && !nine.innerHTML) {
    square = nine;
  } else if (seven.innerHTML === player1 && nine.innerHTML === player1 && !eight.innerHTML) {
    square = eight;
  } else if (eight.innerHTML === player1 && nine.innerHTML === player1 && !seven.innerHTML) {
    square = seven;
  } else if (one.innerHTML === player1 && five.innerHTML === player1 && !nine.innerHTML) {
    square = nine;
  } else if (one.innerHTML === player1 && nine.innerHTML === player1 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player1 && nine.innerHTML === player1 && !one.innerHTML) {
    square = one;
  } else if (three.innerHTML === player1 && five.innerHTML === player1 && !seven.innerHTML) {
    square = seven;
  } else if (three.innerHTML === player1 && seven.innerHTML === player1 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player1 && seven.innerHTML === player1 && !three.innerHTML) {
    square = three;
  } else if (two.innerHTML === player1 && five.innerHTML === player1 && !eight.innerHTML) {
    square = eight;
  } else if (two.innerHTML === player1 && eight.innerHTML === player1 && !five.innerHTML) {
    square = five;
  } else if (five.innerHTML === player1 && eight.innerHTML === player1 && !two.innerHTML) {
    square = two;
  } else if (one.innerHTML === player1 && four.innerHTML === player1 && !seven.innerHTML) {
    square = seven;
  } else if (one.innerHTML === player1 && seven.innerHTML === player1 && !four.innerHTML) {
    square = four;
  } else if (four.innerHTML === player1 && seven.innerHTML === player1 && !one.innerHTML) {
    square = one;
  } else if (three.innerHTML === player1 && six.innerHTML === player1 && !nine.innerHTML) {
    square = nine;
  } else if (three.innerHTML === player1 && nine.innerHTML === player1 && !six.innerHTML) {
    square = six; //not working when 9
  } else if (six.innerHTML === player1 && nine.innerHTML === player1 && !three.innerHTML) {
    square = three;
  }
  //starting moves    
  else if (o.length < 2 && five.innerHTML === player1 && !one.innerHTML) {
    square = one;
  } else if (o.length < 2 && five.innerHTML === player2 && !two.innerHTML && !eight.innerHTML) {
    square = two;
  } else if (o.length < 2 && five.innerHTML === player2 && !six.innerHTML && !four.innerHTML) {
    square = six;
  } else if (o.length < 2 && one.innerHTML === player2 && !two.innerHTML && !three.innerHTML) {
    square = three;
  } else if (o.length < 2 && one.innerHTML === player2 && !four.innerHTML && !seven.innerHTML) {
    square = seven;
  } else if (one.innerHTML === player1 && !four.innerHTML && !seven.innerHTML && ((!eight.innerHTML && nine.innerHTML === player1) || (!nine.innerHTML && eight.innerHTML === player1))) {
    square = seven;
  } else if (!five.innerHTML) {
    square = five;
  } else if (!one.innerHTML) {
    square = one;
  } else if (!two.innerHTML) {
    square = two;
  } else if (!three.innerHTML) {
    square = three;
  } else if (!four.innerHTML) {
    square = four;
  } else if (!six.innerHTML) {
    square = six;
  } else if (!seven.innerHTML) {
    square = seven;
  } else if (!eight.innerHTML) {
    square = eight;
  } else if (!nine.innerHTML) {
    square = nine;
  }

  square.innerHTML = player2;
  if (player2 === "x") {
    x.push(square.id);
  } else {
    o.push(square.id);
  }

  check4winner();

} // computer logic

function reset() {
  board.forEach(function(square) {
    square.innerHTML = "";
    square.style.color = '#01352C';
  });
  x = [];
  o = [];
  xturn = true;
  if (player2 === "x") {
    firstMove();
  }
}

//options
//
var btn = document.querySelector('button');
var options = document.querySelector('.options').classList;
var forms = document.querySelectorAll('input');

btn.onclick = function() {

  //add retract class
  if (options.contains("retract")) {
    options.remove("retract");
  } else {
    options.add("retract");
  }

  function set() {
    if (forms[0].checked) {
      if (forms[2].checked) {
        player1 = "x";
        player2 = "o";
      } else if (forms[3].checked) {
        player1 = "o";
        player2 = "x";
      }
    } else {
      player1 = false;
      player2 = false;
    }
  }
  set();
  reset();

};