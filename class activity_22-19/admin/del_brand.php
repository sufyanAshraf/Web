<?php
if(!isset($_SESSION['user_email'])){
    header('location: login.php?not_admin=You are not Admin!');
}
if(isset($_GET['del_brand'])){
    $brand_id = $_GET['del_brand'];
    $del_brand = "DELETE FROM `brands` WHERE brand_id='$brand_id'";
    $run_del = mysqli_query($con,$del_brand);
    if($run_del){
        header('location: index.php?view_brands');
    }
}