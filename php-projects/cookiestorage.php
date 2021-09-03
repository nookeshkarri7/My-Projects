<?php
    setcookie("key","value",time()+10);
    echo $_COOKIE['key'];
?>