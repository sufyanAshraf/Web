<?php
require_once "db_connection.php";

function getCats(){
    global $con;
    $getCatsQuery = "select * from categories";
    $getCatsResult = mysqli_query($con,$getCatsQuery);
    while($row = mysqli_fetch_assoc($getCatsResult)){
        $cat_id = $row['cat_id'];
        $cat_title = $row['cat_title'];
        echo "<li><a class='nav-link'  href='#'>$cat_title</a></li>";
    }
}
function getBrands(){
    global $con;
    $getBrandsQuery = "select * from brands";
    $getBrandsResult = mysqli_query($con,$getBrandsQuery);
    while($row = mysqli_fetch_assoc($getBrandsResult)){
        $brand_id = $row['brand_id'];
        $brand_title = $row['brand_title'];
        echo "<li><a class='nav-link'  href='#'>$brand_title</a></li>";
    }
}

function getProduct(){
    $cols = 3;
    $count = 1;
    global $con;
    $getPro = "select * from products";
    $getResult = mysqli_query($con,$getPro);

    echo "<table border='1'>";


    while($row = mysqli_fetch_assoc($getResult)){

        if($count == 1){
            echo "<tr>";
        }  

        $pro_title = $row['pro_Title'];
        $pro_price = $row['pro_price'];
        $pro_image = $row['pro_image'];

        echo "<td><img src=$pro_image alt='img' height='200' width='250'> </br> &nbsp; $pro_title </br>&nbsp; $$pro_price </td>";
      
        if($count == 4)
        {
            $count = 0;
            echo "</tr>";
        }
        
        $count++;
    }
    echo "</table>";
}


?>