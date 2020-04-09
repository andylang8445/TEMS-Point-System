<?php
    $sql_addr = "34.66.52.207";
    $sql_user_name="dbaccess";
    $sql_pwd="0000";
    $sql_db_name="TEMS_SQL_Point";
    $sql_table_name_of_it="Point";
	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	//print "Connection Successful!<br>";

	//print "html_table_sql.php loaded";

    print '<!DOCTYPE html><head><meta charset="utf-8"><meta name="Tutors Console" content="width=device-width, initial-scale=1.0"><title>Tutors Console</title><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"><link href="GivePointToStudents.css" rel="stylesheet" type="text/css"></head>';

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
        $tot_result[$tot][0]=$result[0];
		//print "<td>".$result[0]."</td>";
        $tot_result[$tot][1]=$result[1];
		//print "<td>".$result[1]."</td>";
        $tot_result[$tot][2]=$result[2];
		//print "<td>".$result[2]."</td>";
        $tot_result[$tot][3]=$result[3];
        //wprint "</tr>";
		$tot++;
	}
  print '<body><div class="topnav"><a href="index.html">Main Console</a><a href="html_table_sql.php">Ranking Board</a>  <a class="active" href="">Tutor Logged In</a></div>';
    echo '<script type="text/javascript" src="GivePointToStudents.js"></script>';
    echo '<div class="block"></div>';


    print '<center><div class="block"><select name="Name" id="SelectedName" onchange="myFunction()"><option selected value="0">please select the student</option>';//<th align="center" width="40"><button id="id_sec" onclick="sortTable1_1();" style="width:100%; height:25px; font-size:10.2pt"><strong>id &#62;</strong></button></th>
    for($i=0;$i<$tot;$i++){
        print '<option value="'.($i+1).'">';
        print $tot_result[$i][1];
        print "</option>";
    }
    print '</select></div></center>';
    mysqli_close($conn);
print '<div id="blankArea1" class="block"></div>';
    print '<div class="footer"><p>&copy; Copyright <script type="text/javascript">var d = new Date();document.write(d.getFullYear())</script>, Canada TEMS Academy<br><img src="https://storage.googleapis.com/tems_point_system_image_storage_2/52dee1_8a31d53908ce2a3ee4eb3194319ff85b.png" width="80px" alt="TEMS LOGO"></p><p align="right" class="ex1">Webpage created by Hongjun Yun<br>hongjun.yun@icloud.com</p></div>';
    print "</body></html>";
?>
