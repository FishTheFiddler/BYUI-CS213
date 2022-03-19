<?php
function my_handle(){}
set_error_handler("my_handle");

$first = $_GET['first_name'];
$last = $_GET['last_name'];
$address = $_GET['address'];
$phone = $_GET['phone'];
$total = $_GET['total'];
$cardType = $_GET['cardType'];
$month = $_GET['month'];
$year = $_GET['year'];

$item_0 = $_GET['item_0'];
$item_1 = $_GET['item_1'];
$item_2 = $_GET['item_2'];
$item_3 = $_GET['item_3'];
?>

<!DOCTYPE html>
<html lang="en">
      <head>
      <title>Purchase Review</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="eidth=device-with, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="style11.css">
      </head>
      <body>
        <header>
           <h1>Purchase Review</h1>
        </header>
                <div class="review">
                    <?php
                        echo "Name: $first $last<br/>";
                        echo "Address: $address<br/>";
                        echo "Phone: $phone<br/>";
                        echo "Items:<br/>";
                        echo "$item_0<br/>";
                        echo "$item_1<br/>";
                        echo "$item_2<br/>";
                        echo "$item_3<br/><br/>";
                        echo "Total price: $total<br/>";
                        echo "Credit card type: $cardType<br/>";
                        echo "Credit card expiration date: $month $year<br/>";
                    ?>
                </div>
          <div>
            <form id="verify" action="assign11_a.php" method="get">
              <h2>Confirm Purchase?</h2>
              <input type="submit" name="confirm" value="Confirm">
              <input type="submit" name="cancel" value="Cancel">
              <br><br><br>
              <a href="assign11.html">Previous Page</a>
            </form>
          </div>
          
      </body>
</html>