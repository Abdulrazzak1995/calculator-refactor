function calculateHandler(x, y, op) {
  try {
    // read & process user input from event
    x = parseInt(x);
    y = parseInt(y);
    op = op.toString();
    // pass user input through core logic

    var calculate;
    calculate = doMath(op, x, y);
    // render output to DOM for user
    document.querySelector("#results").innerText =
      x + " " + op + " " + y + " " + " = " + calculate;
    // log user action for developers
    console.log(calculate);
    // return true for the browser
    return true;
  }
  catch (err) {
    document.getElementById("results").innerHTML = err.message;
  }
}