<?php
    if (isset($_FILES['userfile']['name'])){
        $name=$_FILES['userfile']['name'];
        $temp_location=$_FILES['userfile']['tmp_name'];
        $location="uploads/";
        $new_location=$location.$name;
        
        $extension=substr($name,strpos($name,".")+1);

        if (!empty($name) && ($extension=="jpg" || $extension=="jpeg") ){
            if(move_uploaded_file($temp_location,$new_location)){
                echo "file uploaded";
            }
        }
        else{
            echo "please select a file (.JPEG or .JPG only)";
        }}
?>
<br><br><br><br>
<br>
<form action="fileupload.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="userfile"><br><br>
    <input type="submit" value="Upload !"/>
</form>