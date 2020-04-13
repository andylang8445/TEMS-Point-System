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


function myUpdateTotal(num) {
    if (num == 0) {
        document.getElementById("currentTotalScore").value = "-";
    } else {
        document.getElementById("currentTotalScore").value = parseInt(document.getElementById("currentAcademicPoint").value) + parseInt(document.getElementById("currentSocialPoint").value) + parseInt(document.getElementById("currentDirectorsPoint").value);
    }
}

function myCalc(num) {
    if (num == 0) {
        document.getElementById("currentAcademicPoint").value = "-";
    } else {
        var x = document.getElementById("currentAcademicPoint").value;
        var result = (parseInt(x) + num);
        document.getElementById("currentAcademicPoint").value = result;
    }
    myUpdateTotal(num);
}

function myCalcSocial(num) {
    if (num == 0) {
        document.getElementById("currentSocialPoint").value = "-";
    } else {
        var x = document.getElementById("currentSocialPoint").value;
        var result = (parseInt(x) + num);
        document.getElementById("currentSocialPoint").value = result;
    }
    myUpdateTotal(num);
}

function myCalcDirector(num) {
    if (num == 0) {
        document.getElementById("currentDirectorsPoint").value = "-";
    } else {
        var x = document.getElementById("currentDirectorsPoint").value;
        var result = (parseInt(x) + num);
        document.getElementById("currentDirectorsPoint").value = result;
    }
    myUpdateTotal(num);
}


function myDoubleCalc() {
    if (num == 0) {
        document.getElementById("currentAcademicPoint").value = "-";
    } else {
        var x = document.getElementById("currentAcademicPoint").value;
        var result = (parseInt(x) * 2);
        document.getElementById("currentAcademicPoint").value = result;
    }
    myUpdateTotal(num);
}

function myDoubleCalcSocial() {
    if (num == 0) {
        document.getElementById("currentSocialPoint").value = "-";
    } else {
        var x = document.getElementById("currentSocialPoint").value;
        var result = (parseInt(x) * 2);
        document.getElementById("currentSocialPoint").value = result;
    }
    myUpdateTotal(num);
}

function myDoubleCalcDirector() {
    if (num == 0) {
        document.getElementById("currentDirectorsPoint").value = "-";
    } else {
        var x = document.getElementById("currentDirectorsPoint").value;
        var result = (parseInt(x) * 2);
        document.getElementById("currentDirectorsPoint").value = result;
    }
    myUpdateTotal(num);
}
