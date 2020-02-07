function calculateHandler(x ,y,op) {
  // read & process user input from event
 try{
  x = parseInt(x);
  y = parseInt(y);
  op = op.toString();
  // pass user input through core logic
  var calculator;
  calculator = doMath(op, x, y); // leave this line!

  // render output to DOM for user
  document.querySelector("#results").innerText =
  x + " " + op + " " + y + " " + " = " +calculator;
  // log user action for developers
  console.log(calculate);
  // return true for the browser
  return true;
}
catch (err){
document.getElementById("results").innerHTML = err.message;
}
}