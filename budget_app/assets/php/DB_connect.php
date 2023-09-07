<?php

// $data = json_decode(file_get_contents('php://input'));



$servername = "localhost:3306";
$username = "tischa79_test_db";
$password = "b4Zkq_334";
$dbname = "tischa79_test_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);


// Check if the connection was successful
$db_response = [];

// $db_response['success'] = 'not set';
if (!$conn) {
    $db_response['success'] = false;
    $db_response['message'] = "Connection failed: " . mysqli_connect_error();
}else{
    $db_response['success'] = true;
}

// echo json_encode($db_response);



// mysqli_close($conn);

?>