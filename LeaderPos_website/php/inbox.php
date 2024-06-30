<?php
extract($_GET);
mysql_connect ("localhost","root","") or die ("connection impo");
mysql_select_db ("leaderpos" ) or die ("connection impo");

$req = "insert into inboxes values ('$inbox3','$inbox1','$inbox2','$inbox4','$inbox5')";
mysql_query($req);
if (mysql_affected_rows()>0){
    echo "succesfully sent" ;
}
else{
    echo"not sent";
}
?>