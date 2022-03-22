<!DOCTYPE html>
<html lang="en">
   <head>
    <link rel="stylesheet" href="style_mortgage_10.css">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>PHP Loan Calculator Results</title>
   <?php
   $apr = $_GET ["apr"];
   $term = $_GET ["term"];
   $amount = $_GET ["amount"];

   if($apr == "") {
      $apr = 0;
   }
   if($term == "") {
      $term = 0;     
   }
   if($amount == "") {
      $amount = 0;
   }

   function calculation($apr, $term, $amount) {
      $term = $term * 12;
      $apr = $apr / 100 / 12;
      $result = $amount * $apr * (pow(1 + $apr, $term)) / (pow(1 + $apr, $term) - 1);
      return $result;
   }

   $monthly = calculation($apr, $term, $amount);
   $monthly = number_format($monthly, 2, '.', '');
   ?>
   </head>
   <body>
   <header>
      <p>PHP Loan Calculator Results</p>
   </header>
   <div>
      <?php
      echo "APR (%): $apr<br/>";
      echo "Loan Term (Years): $term<br/>";
      echo "Loan Amount (USD $): $ $amount<br><br>";
      echo "Monthly Payment: $ $monthly";
      ?>   
   </div>
      <div>
         <a href="mortgage.html">Previous Page</a>
      </div>
   </body>
</html>