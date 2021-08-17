<?php
$servername="interview-instance.cbrdmnt1ehet.eu-central-1.rds.amazonaws.com";
$username="user2";
$password="password1232";
$database="test2";
$conn=mysqli_connect($servername,$username,$password,$database);
$sql="SELECT * FROM opiniondata LIMIT 3";
$result=mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){
 $i=0;
while($row=mysqli_fetch_array($result)){
    echo $row['CId']."       ".$row['Comment'].'/';
}
$i++;
}
?>
