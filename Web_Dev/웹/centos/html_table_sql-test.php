<?php
    $sql_addr = "34.66.52.207";
    $sql_user_name="dbaccess";
    $sql_pwd="0000";
    $sql_db_name="TEMS_SQL_Point";
    $sql_table_name_of_it="Point";
	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	//print "Connection Successful!<br>";

	//print "html_table_sql.php loaded";

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

	$re=mysqli_query($conn,"select * from Point order by Point DESC,Age,Name;");
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
    //array_multisort($sort, SORT_ASC, SORT_STRING,$tot_result);
    $sort_sel=1;
    $previous=0;
    $sorted_element=0;//0:id, 1:name, 2:birthday, 3:age
    $sorted_increase_decrease=0;//0: increase, 1: decrease

    for($i=0;$i<$tot;$i++){
        print "<tr>" ;
        //print "<td align='center'>" .$tot_result[$i][0]."</td>";
        print "<td align='center'>" .$tot_result[$i][1]."</td>";
        print "<td align='center'>" .$tot_result[$i][2]."</td>";
        print "<td align='center'>" .$tot_result[$i][3]."</td>";
        print "</tr>" ;
    }
    /*if(count($_COOKIE)> 0) {
        echo "Cookies are enabled.";
    } else {
        echo "Cookies are disabled.";
    }*/

    /*$sort=array();
    for($i=0;$i<$tot-1;$i++){
        for($j=$i+1;$j<$tot;$j++){
            if($tot_result[$i][1]>$tot_result[$j][1]){
                $tmp;
                for($k=0;$k<4;$k++){
                    $tmp=$tot_result[$i][$k];
                    $tot_result[$i][$k]=$tot_result[$j][$k];
                    $tot_result[$j][$k]=$tmp;
                }
            }
        }
    }*/
    mysqli_close($conn);
?>
