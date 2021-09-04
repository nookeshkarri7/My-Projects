<?php

    $servername="localhost";
    $username="pma";
    $password="";
    $database="users1";

    $conn='$mysqli_connect($servername,$username,$password,$database)';
    if ($conn){
        echo "DataBase Connection Established";
    }
    else{
        die("Error..");
    }
?>