function sortTable2() {
    var x = document.getElementById("name_sec");
    x.innerHTML = "<strong>Name &#62;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("AcademicPoint_sec").innerHTML = "<strong>Academic Points</strong>";
    document.getElementById("SocialPoint_sec").innerHTML = "<strong>Social Contribution Points</strong>";
    document.getElementById("TotalPoint_sec").innerHTML = "<strong>Total Points</strong>";
    x.onclick = sortTable2_1;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("AcademicPoint_sec").onclick = sortTable3;
    document.getElementById("SocialPoint_sec").onclick = sortTable4;
    document.getElementById("TotalPoint_sec").onclick = sortTable5;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable2_1() {
    var x = document.getElementById("name_sec");
    x.innerHTML = "<strong>Name &#60;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("AcademicPoint_sec").innerHTML = "<strong>Academic Points</strong>";
    document.getElementById("SocialPoint_sec").innerHTML = "<strong>Social Contribution Points</strong>";
    document.getElementById("TotalPoint_sec").innerHTML = "<strong>Total Points</strong>";
    x.onclick = sortTable2;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("AcademicPoint_sec").onclick = sortTable3;
    document.getElementById("SocialPoint_sec").onclick = sortTable4;
    document.getElementById("TotalPoint_sec").onclick = sortTable5;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable3() {
    var x = document.getElementById("AcademicPoint_sec");
    x.innerHTML = "<strong>Academic Points &#62;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("SocialPoint_sec").innerHTML = "<strong>Social Contribution Points</strong>";
    document.getElementById("TotalPoint_sec").innerHTML = "<strong>Total Points</strong>";
    x.onclick = sortTable3_1;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("SocialPoint_sec").onclick = sortTable4;
    document.getElementById("TotalPoint_sec").onclick = sortTable5;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable3_1() {
    var x = document.getElementById("AcademicPoint_sec");
    x.innerHTML = "<strong>Academic Points &#60;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("SocialPoint_sec").innerHTML = "<strong>Social Contribution Points</strong>";
    document.getElementById("TotalPoint_sec").innerHTML = "<strong>Total Points</strong>";
    x.onclick = sortTable3;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("AcademicPoint_sec").onclick = sortTable2;
    document.getElementById("SocialPoint_sec").onclick = sortTable4;
    document.getElementById("TotalPoint_sec").onclick = sortTable5;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable4() {
    var x = document.getElementById("SocialPoint_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Social Contribution Points &#62;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("AcademicPoint_sec").innerHTML = "<strong>Academic Points</strong>";
    document.getElementById("TotalPoint_sec").innerHTML = "<strong>Total Points</strong>";
    x.onclick = sortTable4_1;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("AcademicPoint_sec").onclick = sortTable3;
    document.getElementById("TotalPoint_sec").onclick = sortTable5;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable4_1() {
    var x = document.getElementById("SocialPoint_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Social Contribution Points &#60;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("AcademicPoint_sec").innerHTML = "<strong>Academic Points</strong>";
    document.getElementById("TotalPoint_sec").innerHTML = "<strong>Total Points</strong>";
    x.onclick = sortTable4;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("AcademicPoint_sec").onclick = sortTable3;
    document.getElementById("TotalPoint_sec").onclick = sortTable5;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}


function sortTable5() {
    var x = document.getElementById("TotalPoint_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Total Points &#62;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("AcademicPoint_sec").innerHTML = "<strong>Academic Points</strong>";
    document.getElementById("SocialPoint_sec").innerHTML = "<strong>Social Contribution Points</strong>";
    x.onclick = sortTable5_1;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("AcademicPoint_sec").onclick = sortTable3;
    document.getElementById("SocialPoint_sec").onclick = sortTable4;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable5_1() {
    var x = document.getElementById("TotalPoint_sec");
    var chk_sorted = true;
    x.innerHTML = "<strong>Total Points &#60;</strong>";
    //document.getElementById("id_sec").innerHTML = "<strong>id</strong>";
    document.getElementById("name_sec").innerHTML = "<strong>Name</strong>";
    document.getElementById("AcademicPoint_sec").innerHTML = "<strong>Academic Points</strong>";
    document.getElementById("SocialPoint_sec").innerHTML = "<strong>Social Contribution Points</strong>";
    x.onclick = sortTable5;
    //document.getElementById("id_sec").onclick = sortTable1;
    document.getElementById("name_sec").onclick = sortTable2;
    document.getElementById("AcademicPoint_sec").onclick = sortTable3;
    document.getElementById("SocialPoint_sec").onclick = sortTable4;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    rows = table.rows;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
