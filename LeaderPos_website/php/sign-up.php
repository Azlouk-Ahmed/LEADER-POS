<?php
extract($_POST);

mysql_connect ("localhost","root","") or die ("connection impo");
mysql_select_db ("leaderpos" ) or die ("connection impo");

$req = "insert into signup values ('$t3','$t1','$t2','$r1','$t4','$t5')";
mysql_query($req);
if (mysql_affected_rows()>0){
    echo "succesfully added to data base" ;
}
else{
    echo"error";
}
?>