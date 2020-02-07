document.getElementById("btnOperation").addEventListener("click", calc);

function calc() {
    var mForm = document.getElementById('mainForm');
    var x = mForm['value1'].value;
    var y = mForm['value2'].value;
    var op = mForm['operator'].value;

    var regex = /^\d+$/;
    if ((!x.match(regex)) || (!y.match(regex))) {
        document.querySelector("#results").innerText = "Please write numbers only";
    } else {
        calculateHandler(x, y, op);
        clear();
    }
}
function clear(event) {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
}