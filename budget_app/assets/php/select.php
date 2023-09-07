<?php


// connect to the database
require_once "DB_connect.php";

// selecting the columns of the table
$stmt = mysqli_prepare($conn, "SELECT * FROM expenses");
// $stmt = mysqli_prepare($conn, "SELECT expense_id, expense_name, expense_amount FROM expenses");

// execute the query
mysqli_stmt_execute($stmt);

// get the result
$result = mysqli_stmt_get_result($stmt);

// loop through the result
while ($row = mysqli_fetch_assoc($result)) {
    $results[] = $row;
}

// encode and display json
echo json_encode($results);

// close the connection 
mysqli_close($conn);





?>