<?php
  if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername="interview-instance.cbrdmnt1ehet.eu-central-1.rds.amazonaws.com";
$username="user2";
$password="password1232";
$database="test2";
$conn=mysqli_connect($servername,$username,$password,$database);

$_POST = json_decode(file_get_contents("php://input"),true);
$comData = $_POST['textfield'];
$query="INSERT INTO opiniondata (Comment) VALUES ('$comData')";

if(mysqli_query($conn,$query)){
   echo "Data inserted";
}else{
    echo "Data not inserted!";
}
mysqli_close($conn);

?>
