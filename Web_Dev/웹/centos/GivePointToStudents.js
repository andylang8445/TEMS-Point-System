function myFunction() {
    var x = document.getElementById("SelectedName").value;
    var IdforText = "LoadedPoint" + (parseInt(x));
    var selectedPoint = document.getElementById(IdforText).innerHTML;
    document.getElementById("currentPoint").value = selectedPoint;
}

function myCalc(num) {
    var x = document.getElementById("currentPoint").value;
    var result = (parseInt(x) + num);
    document.getElementById("currentPoint").value = result;
}

function myDoubleCalc() {
    var x = document.getElementById("currentPoint").value;
    var result = (parseInt(x) * 2);
    document.getElementById("currentPoint").value = result;
}
