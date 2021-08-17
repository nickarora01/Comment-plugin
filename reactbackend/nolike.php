<?php
$servername="interview-instance.cbrdmnt1ehet.eu-central-1.rds.amazonaws.com";
$username="user2";
$password="password1232";
$database="test2";
$conn=mysqli_connect($servername,$username,$password,$database);
$_POST = json_decode(file_get_contents("php://input"),true);
$Id = $_POST['Id'];
$likedata=$_POST['number'];
echo $Id;
echo $likedata;
$query="UPDATE opiniondata SET Likes=0 WHERE `CId`='$Id'";
if(mysqli_query($conn,$query)){
    echo "I am updated!";
}else{
    echo "Not updated successfully";
}
$res="SELECT `Likes` FROM opiniondata";
$result1=mysqli_query($conn,$res);
$row1=mysqli_fetch_array($result1);
echo $row1['Likes'];
?>
