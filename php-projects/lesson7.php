<?php
    //die and exit functions
    /*echo "new ";
    die();
    echo "message 2"*/

    @mysqli_connect("localhost","root","") || die("Error");
    echo "connected"
?>