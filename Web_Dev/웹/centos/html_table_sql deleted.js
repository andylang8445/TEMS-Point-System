function sortTable2() {
    var x = document.getElementById("name_sec");
    x.innerHTML = "<strong>Name &#62;</strong>";
    document.getElementById("age_sec").innerHTML = "<strong>Age</strong>";
    document.getElementById("point_sec").innerHTML = "<strong>Point</strong>";
    x.onclick = sortTable2_1;
    document.getElementById("age_sec").onclick = sortTable3;
    document.getElementById("point_sec").onclick = sortTable4;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    while (switching) {
        switching = false;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable2_1() {
    var x = document.getElementById("name_sec");
    x.innerHTML = "<strong>Name &#60;</strong>";
    document.getElementById("age_sec").innerHTML = "<strong>Age</strong>";
    document.getElementById("point_sec").innerHTML = "<strong>Point</strong>";
    x.onclick = sortTable2;
    document.getElementById("age_sec").onclick = sortTable3;
    document.getElementById("point_sec").onclick = sortTable4;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;

    while (switching) {
        switching = false;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable3() {
    var x = document.getElementById("age_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Age &#62;</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("point_sec").innerHTML = "<strong>Point</strong>";
    x.onclick = sortTable3_1;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("point_sec").onclick = sortTable4;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;

    while (switching) {
        switching = false;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable3_1() {
    var x = document.getElementById("age_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Age &#60;</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("point_sec").innerHTML = "<strong>Point</strong>";
    x.onclick = sortTable3;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("point_sec").onclick = sortTable4;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;

    while (switching) {
        switching = false;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable4() {
    var x = document.getElementById("point_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Point &#62;</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("age_sec").innerHTML = "<strong>Point</strong>";
    x.onclick = sortTable4_1;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("age_sec").onclick = sortTable3;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;

    while (switching) {
        switching = false;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable4_1() {
    var x = document.getElementById("point_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Point &#60;</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("age_sec").innerHTML = "<strong>Point</strong>";
    x.onclick = sortTable4;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("age_sec").onclick = sortTable3;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;

    while (switching) {
        switching = false;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

