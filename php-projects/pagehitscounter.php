<?php
    $name='counter.txt';
    $size=filesize($name); //no.of.digits in txt file

    $file=fopen($name,"r");
    $counter=fread($file,$size);
    fclose($file);

    $pcounter=$counter+1;
    $fileopen=fopen($name,"w");
    fwrite($fileopen,$pcounter);

    echo "Page views Count:".$pcounter;
?>