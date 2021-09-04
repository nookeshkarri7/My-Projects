<?php
    if ($_SERVER['REQUEST_METHOD']=='POST'){
        include 'db_connect.php';
        $username = $_POST["username"]; 
        $age = $_POST["age"]; 
        $password = $_POST["password"];

        
        $sql = "Select * from users where username='$username'";
    
        $result = mysqli_query($conn, $sql);
    
        $num_rows = mysqli_num_rows($result); 


        if ($num_rows==0){
            $phash=password_hash($password,PASSWORD_DEFAULT);
            $sql="INSERT INTO 'users' ('name','age','password') VALUES('$username','$age','$phash')";
            $result=mysqli_query($conn,$sql);
        }
        else{
            echo "Username not available"; 
        }
    }
?>

<form action="register.php" method="POST">
    <label for="username">Username</label><br>
    <input type="text" name="username" id="username"><br><br>
    
    <label for="age">Age</label><br>
    <input type="number" name="age" id="age"><br><br>

    <label for="password">Password</label><br>
    <input type="password" name="password" id="password"><br><br>
    <input type="submit" value="RegisterNow">
</form>