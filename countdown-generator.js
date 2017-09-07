var countdownGenerator = function (x) {
  /* your code here */
  let position = x
  let message = ""
  return function() {
    if (position > 0) {
      message = "T-minus " + position + "..."
      position --
      console.log(message)
    } else if (position < 0) {
      message = "Rockets already gone, bub!"
      position --
      console.log(message)
    } else {
      message = "Blast Off!"
      position --
      console.log(message)
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!