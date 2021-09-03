<?php
    if (isset($_POST["name"]) && isset($_POST["age"]) && isset($_POST["address"])){
        $name= $_POST['name'];
    }
    if (!empty($name) ){
        echo $name;
    }
    else{
        echo "Fill the name";
    }
    
    

?>
<form action="form.php" method="POST">
    <input type='text' name="name"/><br/>
    <input type='text' name="age"/><br/>
    <input type='text' name="address"/><br/>
    <button type="submit">Submit</button>
</form>
