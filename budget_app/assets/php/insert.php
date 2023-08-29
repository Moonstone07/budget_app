<?php


require_once 'DB_connect.php';

  $results = [];
  $insertedRows = 0;


try{
    if(!isset($_REQUEST["expense-name"]) || !isset($_REQUEST["expense-amount"])){
      throw new Exception('Required data is missing i.e. expense-name, expense-amount are missing');
    }
    $query = "INSERT INTO expenses (expense_name, expense_amount) VALUES (?, ?)";

    if($stmt = mysqli_prepare($conn, $query)){
      mysqli_stmt_bind_param($stmt, 'sd', $_REQUEST["expense-name"], $_REQUEST["expense-amount"]);

      mysqli_stmt_execute($stmt);

      $insertedRows = mysqli_stmt_affected_rows($stmt);
  
      if($insertedRows > 0){
        $results[] = [
          "insertedRows"=>$insertedRows,
          "id" => $conn->insert_id,
          "expense_name" => $_REQUEST["expense-name"],
        ];
      }else{
        throw new Exception("No rows were inserted");
      }
      //removed the echo from here
      //echo json_encode($results);
    }else{
      throw new Exception("Prepared statement did not insert records.");
    }

  }catch(Exception $error){
    //add to results array rather than echoing out errors
    $results[] = ["error"=>$error->getMessage()];
  }finally{
    //echo out results
    echo json_encode($results);
  }


// https://tischa79.web582.com/dynamic/budget_app/assets/php/insert.php?expense-name=apples&expense-amount=2.00








//   $query = "INSERT INTO expenses (expense_name, expense_amount) VALUES (?, ?)";

//   if($stmt = mysqli_prepare($conn, $query)){
//     mysqli_stmt_bind_param($stmt, 'sd', $_REQUEST["expense-name"], $_REQUEST["expense-amount"]);
//     mysqli_stmt_execute($stmt);
//     $insertedRows = mysqli_stmt_affected_rows($stmt);

//     if($insertedRows > 0){
//       $results[] = [
//         "insertedRows"=>$insertedRows,
//         "id" => $link->insert_id,
//         "full_name" => $_REQUEST["expense-name"],
//       ];
//     }
//     echo json_encode($results);
//   }






?>






















