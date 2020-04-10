function myFunction() {
    var a = document.getElementById("SelectedName").value;
    var IdforAcademic = "LoadedAcademicPoint" + (parseInt(a));
    var IdforSocial = "LoadedSocialPoint" + (parseInt(a));
    var IdforDirector = "LoadedDirectorPoint" + (parseInt(a));
    var IdforTotal = "LoadedTotalPoint" + (parseInt(a));
    var selectedAcademicPoint = document.getElementById(IdforAcademic).innerHTML;
    var selectedSocialPoint = document.getElementById(IdforSocial).innerHTML;
    var selectedDirectorPoint = document.getElementById(IdforDirector).innerHTML;
    var selectedTotalPoint = document.getElementById(IdforTotal).innerHTML;
    document.getElementById("currentAcademicPoint").value = selectedAcademicPoint;
    document.getElementById("currentSocialPoint").value = selectedSocialPoint;
    document.getElementById("currentDirectorsPoint").value = selectedDirectorPoint;
    document.getElementById("currentTotalScore").value = selectedTotalPoint;
}


function myCalc(num) {
    var x = document.getElementById("currentAcademicPoint").value;
    var result = (parseInt(x) + num);
    document.getElementById("currentAcademicPoint").value = result;
}

function myCalcSocial(num) {
    var x = document.getElementById("currentSocialPoint").value;
    var result = (parseInt(x) + num);
    document.getElementById("currentSocialPoint").value = result;
}

function myCalcDirector(num) {
    var x = document.getElementById("currentDirectorsPoint").value;
    var result = (parseInt(x) + num);
    document.getElementById("currentDirectorsPoint").value = result;
}


function myDoubleCalc() {
    var x = document.getElementById("currentAcademicPoint").value;
    var result = (parseInt(x) * 2);
    document.getElementById("currentAcademicPoint").value = result;
}

function myDoubleCalcSocial() {
    var x = document.getElementById("currentSocialPoint").value;
    var result = (parseInt(x) * 2);
    document.getElementById("currentSocialPoint").value = result;
}

function myDoubleCalcDirector() {
    var x = document.getElementById("currentDirectorsPoint").value;
    var result = (parseInt(x) * 2);
    document.getElementById("currentDirectorsPoint").value = result;
}
