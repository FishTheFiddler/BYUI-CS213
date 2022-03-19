<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Order Result</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-with, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style11.css">
  </head>
  <body>
    <br>
    <br>
  <?php
    if (isset($_GET['confirm'])) {
      echo "Order Submitted!";
    }
    else if (isset($_GET['cancel'])) {
      echo "Order Cancelled!";
    }
  ?>
    <br>
    <br>
    <br>
    <a href="assign11.html">Purchase Again</a><br><br><br>
  </body>
</html>