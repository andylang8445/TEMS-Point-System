 <?php
    $sql_addr = "ls-a161fb9a6525ce8b6fc77e418dfbb36d3dde43b7.cdxfxlufjm0m.ca-central-1.rds.amazonaws.com";
    $sql_user_name="dbmasteruser";
    $sql_pwd="=-`x&pHEQC!LZ~G4U&*F3%m{X,9eEo*!";
    $sql_db_name="TEMS_SQL_Point";
    $sql_table_name_of_it="Point";
	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	//print "Connection Successful!<br>";

	//print "html_table_sql.php loaded";

    print '<!DOCTYPE html><head><link rel="icon" type="image/ico" href="https://i.imgur.com/i2ziR1y.png" /><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Point Board</title><link rel="stylesheet" type="text/css" href="html_table_sql.css"></head>';

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

	$re=mysqli_query($conn,"select * from Point order by TotalPoint DESC,AcademicPoint DESC,SocialPoint DESC,Name;");
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
        $tot_result[$tot][4]=$result[4];
        $tot_result[$tot][5]=$result[5];

        if(((int)$tot_result[$tot][2]+(int)$tot_result[$tot][3]+(int)$tot_result[$tot][4])!=(int)$tot_result[$tot][5]){
          $tot_result[$tot][5]=(int)$tot_result[$tot][2]+(int)$tot_result[$tot][3]+(int)$tot_result[$tot][4];
          mysqli_query($conn,"update Point set TotalPoint = ".((string)$tot_result[$tot][5])." where id = '".((string)$tot_result[$tot][0])."';");
        }
        //wprint "</tr>";
        $tot++;
	}
  print '<body><div class="topnav"><a href="index.html">Main Console</a>
          <a class="active" href="">Ranking Board</a><a href="IamAtutor.html">Tutor Login</a></div><div class="block"></div>';
    echo '<script type="text/javascript" src="html_table_sql.js"></script>';
    //array_multisort($sort, SORT_ASC, SORT_STRING,$tot_result);
    $sort_sel=1;
    $previous=0;
    $sorted_element=0;//0:id, 1:name, 2:birthday, 3:age
    $sorted_increase_decrease=0;//0: increase, 1: decrease


    print '<div><table id="myTable" border="2"><tr><th align="center"><button id="name_sec" onclick="sortTable2();" style="width:100%; min-height: 64px; font-size:10.2pt"><strong>Name</strong></button></th><th align="center"><button id="AcademicPoint_sec" onclick="sortTable3();" style="width:100%; min-height: 64px; font-size:10.2pt"><strong>Academic Points</strong></button></th><th align="center"><button id="SocialPoint_sec" onclick="sortTable4();" style="width:100%; min-height: 64px; font-size:9.5pt"><strong>Social Contribution Points</strong></button></th><th align="center"><button id="TotalPoint_sec" onclick="sortTable5();" style="width:100%; min-height: 64px; font-size:10.2pt"><strong>Total Points</strong></button></th></tr>';//<th align="center" width="40"><button id="id_sec" onclick="sortTable1_1();" style="width:100%; height:25px; font-size:10.2pt"><strong>id &#62;</strong></button></th>
    for($i=0;$i<$tot;$i++){
        print "<tr>" ;
        //print "<td align='center'>" .$tot_result[$i][0]."</td>";
        print "<td align='center'>" .$tot_result[$i][1]."</td>";
        print "<td align='center'>" .$tot_result[$i][2]."</td>";
        print "<td align='center'>" .$tot_result[$i][3]."</td>";
        print "<td align='center'>" .$tot_result[$i][5]."</td>";
        print "</tr>" ;
    }
    print '</table></div>';
    mysqli_close($conn);
print '<div class="block"/>';
    print '<div class="footer"><p>&copy; Copyright <script type="text/javascript">var d = new Date();document.write(d.getFullYear())</script>, Canada TEMS Academy<br><img src="https://i.imgur.com/DnAT5wd.png" width="80px" alt="TEMS LOGO"></p><p align="right" class="ex1">Webpage created by Hongjun Yun<br>hongjun.yun@icloud.com</p></div>';
    print "</body></html>";
?>
