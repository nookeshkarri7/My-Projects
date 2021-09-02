<?php
    if(isset($_POST['rol'])){
        $random=rand(1,584);
        echo $random;
    }
?>
<form action="lesson11.php" method="POST">
    <input type="submit" name="rol" value="nookesh">
</form>