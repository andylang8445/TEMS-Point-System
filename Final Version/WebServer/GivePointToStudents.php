<?php
    $sql_addr = "ls-a161fb9a6525ce8b6fc77e418dfbb36d3dde43b7.cdxfxlufjm0m.ca-central-1.rds.amazonaws.com";
    $sql_user_name="dbmasteruser";
    $sql_pwd="=-`x&pHEQC!LZ~G4U&*F3%m{X,9eEo*!";
    $sql_db_name="TEMS_SQL_Point";
    $sql_table_name_of_it="Point";
	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	//print "Connection Successful!<br>";

	//print "html_table_sql.php loaded";

    print '<!DOCTYPE html><head><meta charset="utf-8"><script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>';
    print '<script>
                var ws;

                $(document).ready(function() {
                    ws = new WebSocket("ws://35.182.71.151:8100");

                    // websocket 서버에 연결되면 연결 메시지를 화면에 출력한다.
                    ws.onopen = function(e) {
                        document.getElementById("log").innerHTML = "Connected to Update Server!";
                    };

                    // websocket 에서 수신한 메시지를 화면에 출력한다.
                    ws.onmessage = function(e) {
                        document.getElementById("log").innerHTML = e.data+"<br>Page will be reloaded shortly!";
                        setTimeout(function(){ location.reload(true); }, 1000);
                    };

                    // websocket 세션이 종료되면 화면에 출력한다.
                    ws.onclose = function(e) {
                        document.getElementById("log").style.color = "red";
                        document.getElementById("log").innerHTML = "Connection to Update Server Lost";
                        setTimeout(function(){ location.reload(true); }, 1000);
                    }
                });

                // 사용자가 입력한 메시지를 서버로 전송한다.
                function sendMessage() {
                    var txtSend = $("#SelectedName").val() + ":" + $("#currentAcademicPoint").val() + ":" + $("#currentSocialPoint").val() + ":" + $("#currentDirectorsPoint").val();
                    ws.send(txtSend);
                }

                //전체 학생 초기화
                function resetAll() {
                    var txtSend = "reset:reset:reset:reset";
                    ws.send(txtSend);
                }

    </script>';
    print '<link rel="icon" type="image/ico" href="https://imgur.com/i2ziR1y" /><title>Tutors Console</title><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"><link href="GivePointToStudents.css" rel="stylesheet" type="text/css"></script></head>';

	$tot=0;
    $tot_result=array(
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array()
    );

	$re=mysqli_query($conn,"select * from Point order by id;");
	//print '<table border="2"><tr><th>id</th><th>name</th><th>birthday</th><th>age</th></tr>';
	while($result=mysqli_fetch_array($re)){
        //print "<tr>";
		//print "<td>".$result[3]."</td>";
        $tot_result[$tot][0]=$result[0];//id
		//print "<td>".$result[0]."</td>";
        $tot_result[$tot][1]=$result[1];//name
		//print "<td>".$result[1]."</td>";
        $tot_result[$tot][2]=$result[2];//Academic Point
		//print "<td>".$result[2]."</td>";
        $tot_result[$tot][3]=$result[3];//Social Contribution point

        $tot_result[$tot][4]=$result[4];//Director's point
        $tot_result[$tot][5]=$result[5];//Total point

        if(((int)$tot_result[$tot][2]+(int)$tot_result[$tot][3]+(int)$tot_result[$tot][4])!=(int)$tot_result[$tot][5]){
          $tot_result[$tot][5]=(int)$tot_result[$tot][2]+(int)$tot_result[$tot][3]+(int)$tot_result[$tot][4];
          mysqli_query($conn,"update Point set TotalPoint = ".((string)$tot_result[$tot][5])." where id = '".((string)$tot_result[$tot][0])."';");
        }
        //wprint "</tr>";
		$tot++;
	}
    print '<body><div class="topnav"><a href="index.html">Main Console</a><a href="html_table_sql.php">Ranking Board</a><a class="active" href="">Tutor Logged In</a><a href="IamAtutor.html">LOGOUT</a></div>';
    echo '<script type="text/javascript" src="GivePointToStudents.js"></script>';
    echo '<div class="block"></div>';


    print '<center><div style="display:none"><table id="myTable" border="2"><tr><th align="center">id</th><th align="center">Name</th><th align="center">Academic Points</th><th align="center">Social Contribution Points</th><th align="center">Directors Points</th><th align="center">Total Points</th></tr>';
    for($i=0;$i<$tot;$i++){
        print "<tr>" ;
        print "<td align='center'>" .$tot_result[$i][0]."</td>";
        print "<td align='center'>" .$tot_result[$i][1]."</td>";
        print "<td align='center'><p id='LoadedAcademicPoint$i'>" .$tot_result[$i][2]."</p></td>";
        print "<td align='center'><p id='LoadedSocialPoint$i'>" .$tot_result[$i][3]."</p></td>";
        print "<td align='center'><p id='LoadedDirectorPoint$i'>" .$tot_result[$i][4]."</p></td>";
        print "<td align='center'><p id='LoadedTotalPoint$i'>" .$tot_result[$i][5]."</p></td>";

        print "</tr>" ;
    }
    print '</table></div></center>';


    print '<center><div class="block"><select name="Name" id="SelectedName" onchange="myFunction()"><option selected value="0" disabled>please select the student</option>';//<th align="center" width="40"><button id="id_sec" onclick="sortTable1_1();" style="width:100%; height:25px; font-size:10.2pt"><strong>id &#62;</strong></button></th>
    for($i=0;$i<$tot;$i++){
        print '<option value="'.$i.'">';
        print $tot_result[$i][1];
        print "</option>";
    }
    print '</select><br><label for="currentAcademicPoint">Current Academic point: </label><input type="text" id="currentAcademicPoint" name="currentAcademicPoint" placeholder="Academic Point">';
    print '<br><button id="M10" onclick="myCalc(-10)">-10</button><button id="M5" onclick="myCalc(-5)">-5</button><button id="P5" onclick="myCalc(5)">+5</button><button id="P10" onclick="myCalc(10)">+10</button><button id="P15" onclick="myCalc(15)">+15</button><button id="P20" onclick="myCalc(20)">+20</button><button id="P50" onclick="myCalc(50)">+50</button><button id="Double" onclick="myDoubleCalc()">X2</button>';

    print '<br><br><label for="currentSocialPoint">Current Social Contribution point: </label><input type="text" id="currentSocialPoint" name="currentSocialPoint" placeholder="Social Point">';
    print '<br><button id="M10" onclick="myCalcSocial(-10)">-10</button><button id="M5" onclick="myCalcSocial(-5)">-5</button><button id="P5" onclick="myCalcSocial(5)">+5</button><button id="P10" onclick="myCalc(10)">+10</button><button id="P15" onclick="myCalcSocial(15)">+15</button><button id="P20" onclick="myCalcSocial(20)">+20</button><button id="P50" onclick="myCalcSocial(50)">+50</button><button id="Double" onclick="myDoubleCalcSocial()">X2</button>';

    print '<br><br><label for="currentDirectorsPoint">Current Director point: </label><input type="text" id="currentDirectorsPoint" name="currentDirectorsPoint" placeholder="Director Point">';
    print '<br><button id="M10" onclick="myCalcDirector(-10)">-10</button><button id="M5" onclick="myCalcDirector(-5)">-5</button><button id="P5" onclick="myCalcDirector(5)">+5</button><button id="P10" onclick="myCalcDirector(10)">+10</button><button id="P15" onclick="myCalcDirector(15)">+15</button><button id="P20" onclick="myCalcDirector(20)">+20</button><button id="P50" onclick="myCalcDirector(50)">+50</button><button id="Double" onclick="myDoubleCalcDirector()">X2</button>';

    print '<br><br><label for="currentTotalScore">Current Total point: </label><input type="text" id="currentTotalScore" name="currentTotalScore" placeholder="Total Point" value="" readonly>';

    print '<br><br><button type="button" onclick="sendMessage();" class="GreenButton">Send</button>';
    print '<p id="log"></p>';

    print '</div><div><ul id="chat"></ul></div><button type="button" onclick="resetAll();" class="BigRedButton">Reset Point System</button></center>';

    print '<br><br><br>';


    $re=mysqli_query($conn,"select * from Point order by TotalPoint desc;");
    $tot=0;
    //print '<table border="2"><tr><th>id</th><th>name</th><th>birthday</th><th>age</th></tr>';
    while($result=mysqli_fetch_array($re)){
          //print "<tr>";
        //print "<td>".$result[3]."</td>";
          $tot_result[$tot][0]=$result[0];//id
        //print "<td>".$result[0]."</td>";
          $tot_result[$tot][1]=$result[1];//name
        //print "<td>".$result[1]."</td>";
          $tot_result[$tot][2]=$result[2];//Academic Point
        //print "<td>".$result[2]."</td>";
          $tot_result[$tot][3]=$result[3];//Social Contribution point

          $tot_result[$tot][4]=$result[4];//Director's point
          $tot_result[$tot][5]=$result[5];//Total point

		  $tot++;
          }


    print '<hr class="s9">';
    print '<center><p><h2>Live Ranking</h2>';
    print '<div><table id="myVisibleTable" border="2"><tr><th align="center">Name</th><th align="center">Academic Points</th><th align="center">Social Contribution Points</th><th align="center">Directors Points</th><th align="center">Total Points</th></tr>';
    for($i=0;$i<$tot;$i++){
        print "<tr>";
        print "<td align='center'>" .$tot_result[$i][1]."</td>";
        print "<td align='center'>" .$tot_result[$i][2]."</p></td>";
        print "<td align='center'>" .$tot_result[$i][3]."</p></td>";
        print "<td align='center'>" .$tot_result[$i][4]."</p></td>";
        print "<td align='center'>" .$tot_result[$i][5]."</p></td>";

        print "</tr>" ;
    }
    print '</table></div></p></center>';

    mysqli_close($conn);
    print '<div id="blankArea1" class="block"></div>';
    print '<div class="footer"><p>&copy; Copyright <script type="text/javascript">var d = new Date();document.write(d.getFullYear())</script>, Canada TEMS Academy<br><img src="https://i.imgur.com/DnAT5wd.png" width="80px" alt="TEMS LOGO"></p><p align="right" class="ex1">Webpage created by Hongjun Yun<br>hongjun.yun@icloud.com</p></div>';
    print "</body></html>";
?>
