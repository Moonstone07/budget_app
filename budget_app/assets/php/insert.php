<?php


require_once 'DB_connect.php';

$results = [];
$insertedRows = 0;

try {
    if (!isset($_REQUEST["expense-name"]) || !isset($_REQUEST["expense-amount"]) || !isset($_REQUEST["category"])) {
        throw new Exception('Required data is missing i.e. expense-name, expense-amount, or category are missing');
    }

    $query = "INSERT INTO expenses (expense_name, expense_amount, category) VALUES (?, ?, ?)";

    if ($stmt = mysqli_prepare($conn, $query)) {
        mysqli_stmt_bind_param($stmt, 'sds', $_REQUEST["expense-name"], $_REQUEST["expense-amount"], $_REQUEST["category"]);

        mysqli_stmt_execute($stmt);

        $insertedRows = mysqli_stmt_affected_rows($stmt);

        if ($insertedRows > 0) {
            $results[] = [
                "insertedRows" => $insertedRows,
                "id" => $conn->insert_id,
                "expense_name" => $_REQUEST["expense-name"],
                "expense_amount" => $_REQUEST["expense-amount"],
                "category" => $_REQUEST["category"],
            ];
        } else {
            throw new Exception("No rows were inserted");
        }
    } else {
        throw new Exception("Prepared statement did not insert records.");
    }
} catch (Exception $error) {
    $results[] = ["error" => $error->getMessage()];
} finally {
    echo json_encode($results);
}



// https://tischa79.web582.com/dynamic/budget_app/assets/php/insert.php?expense-name=apples&expense-amount=2.00














?>






















