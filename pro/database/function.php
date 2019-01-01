<?php 
    require "db_connection.php";

    function getCats(){
        global $con;
        $getCatQuery = "select * from categories";
        $getCatResult = mysqli_query($con, $getCatQuery);
        
        while ($row = mysqli_fetch_assoc($getCatResult))
        {
            // $id =  $row['catId'];
            $title = $row['catTitle'];
            echo "<li> <a class='nav-link'  href='#'>$title</a> </li>";
        }

        //print_r($row);
    }

    function getBrand(){
        global $con;
        $getCatQuery = "select * from brand";
        $getCatResult = mysqli_query($con, $getCatQuery);
        
        while ($row = mysqli_fetch_assoc($getCatResult))
        {
            $title = $row['BrTitle'];
            echo "<li> <a class='nav-link'  href='#'>$title</a> </li>";
        }
    }

    function getItem(){
        global $con;
        $getCatQuery = "select * from categories";
        $getCatResult = mysqli_query($con, $getCatQuery);
        
        while ($row = mysqli_fetch_assoc($getCatResult))
        {
            $title = $row['catTitle'];
            echo "<option>$title</option>";
        }
    }

    function brand(){
        global $con;
        $getCatQuery = "select * from brand";
        $getCatResult = mysqli_query($con, $getCatQuery);
        
        while ($row = mysqli_fetch_assoc($getCatResult))
        {
            $title = $row['BrTitle'];
            echo "<option>$title</option>";
        }
    } 

?>