function myFunction() {
    var a = parseInt(document.getElementById("SelectedName").value);
    var IdforAcademic = "LoadedAcademicPoint" + a;
    var IdforSocial = "LoadedSocialPoint" + a;
    var IdforDirector = "LoadedDirectorPoint" + a;
    var IdforTotal = "LoadedTotalPoint" + a;
    var selectedAcademicPoint = document.getElementById(IdforAcademic).innerHTML;
    var selectedSocialPoint = document.getElementById(IdforSocial).innerHTML;
    var selectedDirectorPoint = document.getElementById(IdforDirector).innerHTML;
    var selectedTotalPoint = document.getElementById(IdforTotal).innerHTML;
    document.getElementById("currentAcademicPoint").value = selectedAcademicPoint;
    document.getElementById("currentSocialPoint").value = selectedSocialPoint;
    document.getElementById("currentDirectorsPoint").value = selectedDirectorPoint;
    document.getElementById("currentTotalScore").value = selectedTotalPoint;
}


function myUpdateTotal(){
    document.getElementById("currentTotalScore").value = parseInt(document.getElementById("currentAcademicPoint").value)+parseInt(document.getElementById("currentSocialPoint").value)+parseInt(document.getElementById("currentDirectorsPoint").value);
}

function myCalc(num) {
    var x = document.getElementById("currentAcademicPoint").value;
    var result = (parseInt(x) + num);
    document.getElementById("currentAcademicPoint").value = result;
    myUpdateTotal();
}

function myCalcSocial(num) {
    var x = document.getElementById("currentSocialPoint").value;
    var result = (parseInt(x) + num);
    document.getElementById("currentSocialPoint").value = result;
    myUpdateTotal();
}

function myCalcDirector(num) {
    var x = document.getElementById("currentDirectorsPoint").value;
    var result = (parseInt(x) + num);
    document.getElementById("currentDirectorsPoint").value = result;
    myUpdateTotal();
}


function myDoubleCalc() {
    var x = document.getElementById("currentAcademicPoint").value;
    var result = (parseInt(x) * 2);
    document.getElementById("currentAcademicPoint").value = result;
    myUpdateTotal();
}

function myDoubleCalcSocial() {
    var x = document.getElementById("currentSocialPoint").value;
    var result = (parseInt(x) * 2);
    document.getElementById("currentSocialPoint").value = result;
    myUpdateTotal();
}

function myDoubleCalcDirector() {
    var x = document.getElementById("currentDirectorsPoint").value;
    var result = (parseInt(x) * 2);
    document.getElementById("currentDirectorsPoint").value = result;
    myUpdateTotal();
}
