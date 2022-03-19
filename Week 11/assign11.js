function function1(){
    var item0 = document.getElementById("item_0");
    var item1 = document.getElementById("item_1");
    var item2 = document.getElementById("item_2");
    var item3 = document.getElementById("item_3");
    var total = document.getElementById("total");
    var sum = 0.0;

    document.getElementById("error").style.backgroundColor = "gray";
    document.getElementById("error").innerHTML = "";

  if (item0.checked){
    sum += 7.95;
    }
  else{
    sum = sum;
    }

  if (item1.checked){
    sum += 13.95;
    }
  else{
    sum = sum;
    }

  if (item2.checked){
    sum += 9.95;
    }
  else{
    sum = sum;
    }

  if (item3.checked){
    sum += 6.95;
    }
  else{
    sum = sum;
    }

    total.value = "$" + sum.toFixed(2);
  }

  function validateData() {
    var errorMessage = document.getElementById("error");
    errorMessage.style.backgroundColor = "gray";
    errorMessage.innerHTML = "";
      
    
    var valid = false;
    var nameRegExp = /[a-zA-Z]/g;
    var phoneRegExp = /(\d{3})[-](\d{3})[-](\d{4})$/;
    var cardRegExp = /(\d{4})[ ](\d{4})[ ](\d{4})[ ](\d{4})$/g;
    var expDateRegExp = /(0[0-9]|1[0-2])([/])([2-9][0-9][2-9][0-9])$/g;

    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var total = document.getElementById("total").value;
    //var card = document.getElementById("card").value;
    var credit_card = document.getElementById("credit_card").value;
    var month = document.getElementById("month").value; 
    var year = document.getElementById("year").value; 

    var item0 = document.getElementById("item_0");
    var item1 = document.getElementById("item_1");
    var item2 = document.getElementById("item_2");
    var item3 = document.getElementById("item_3");

    var cardType = document.getElementById("cardType");

    if (!nameRegExp.test(fname)){
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: Invalid First Name. Please use only alphabetic characters.";
      document.getElementById("first_name").focus();
      return false;
    }
    else if (!nameRegExp.test(lname)){
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: Invalid Last Name. Please use only alphabetic characters.";
      document.getElementById("last_name").focus();
      return false;
    }
    else if (address == ""){
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: Invalid Address. Please enter a shipping address";
      document.getElementById("address").focus();
      return false;
    }
    else if (!phoneRegExp.test(phone)){
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: Invalid Phone Number. Please use the format \'###-###-####\'";
      document.getElementById("phone").focus();
      return false;
    }
    else if (!cardRegExp.test(credit_card)){
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: Invalid Card Number. Please use the format \'#### #### #### ####\'";
      document.getElementById("credit_card").focus();
      return false;
    }
    else if (month == ""){
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: Invalid Expiration Date. Please enter a Month";
      document.getElementById("month").focus();
      return false;
    } 
    else if (year == ""){
    errorMessage.style.backgroundColor = "yellow";
    errorMessage.innerHTML = "ERROR: Invalid Expiration Date. Please enter a Year";
    document.getElementById("year").focus();
    return false;
    } 
    else if(!item0.checked && !item1.checked && !item2.checked && !item3.checked){
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: No items selected. Please select one or more items to purchase.";
      return false;
    }
    else if(!cardType.checked) {
      errorMessage.style.backgroundColor = "yellow";
      errorMessage.innerHTML = "ERROR: No Credit Card type selected. Please select an available option.";
      return false;
    }
    else{
      errorMessage.style.backgroundColor = "green";
      errorMessage.innerHTML = "-No Errors Found-";
      return true;
    }
  }

  function onClear(){
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("total").value = "";
    document.getElementById("card").value = "";
    document.getElementById("credit_card").value = "";
    document.getElementById("item_0").checked = false;
    document.getElementById("item_1").checked = false;
    document.getElementById("item_2").checked = false;
    document.getElementById("item_3").checked = false;
    document.getElementById("card").checked = false;
    document.getElementById("card2").checked = false;
    document.getElementById("card3").checked = false;

    document.getElementById("exp_date").value = "";
    document.getElementById("first_name").focus();
  }