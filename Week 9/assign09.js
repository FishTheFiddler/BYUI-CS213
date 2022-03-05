

function getCityRequest(url) {
  var getRequest = new XMLHttpRequest();

  getRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {                
        if (url == "usa.txt" || url == "mexico.txt" || url == "canada.txt" || url == "russia.txt") {
          ajaxRequest(this.responseText);
        }
      }
    };
    getRequest.open("GET", url, true);
    getRequest.send();
}

function getStudentRequest() {
  var studentUrl = document.getElementById("studentInfo").value;

  var validInput = validateStudent(studentUrl);
  var getRequest = new XMLHttpRequest();



    getRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {                
        if (validInput){
          jsonRequest(this.responseText);
        }
      }
    }
    getRequest.open("GET", studentUrl, true);
    getRequest.send();
  }

function ajaxRequest(responseText) {
    var ajax = responseText.split(/\s{2,25}|\n/);
    var display = "<table><tr><th>City:</th><th>Population:</th></tr>";
    for (i = 0; i < ajax.length - 1; i++) {
      display += "<tr><td>" + ajax[i] + "</td><td>" + ajax[i + 1] + "</td></tr>";
      i++;
    }
    
    display += "</table>";
    document.getElementById('ajax').innerHTML = display;
}
                
function jsonRequest(responseText) {   
  var errorMessage = document.getElementById("error");              
  var json = JSON.parse(responseText);
  var display = "<table><tr><th>Name:</th><th>Address:</th><th>Major:</th><th>GPA:</th></tr>";
  for (var i = 0; i < json.students.length; i++) {
    display = display + "<tr><td>" + json.students[i].first + " " + json.students[i].last + "</td><td>" 
    + json.students[i].address.city + ", " + json.students[i].address.state + ", " + json.students[i].address.zip
     + "</td><td>" + json.students[i].major + "</td><td>" + json.students[i].gpa + "</td></tr>";
  }

  display += "</table>";
  document.getElementById('json').innerHTML = display;
  errorMessage.style.backgroundColor = "green";
  errorMessage.style.color = "black";
  errorMessage.innerHTML = "-Complete-";
}


function validateStudent(url){
  var errorMessage = document.getElementById("error");

  if (url == "json.txt" || url == "json1.txt"){
    return true;
  }

  else if (url != "json.txt" || url != "json1.txt"){
    errorMessage.style.backgroundColor = "yellow";
    errorMessage.style.color = "black";
    errorMessage.innerHTML = "-ERROR- Not a valid text file.";
    document.getElementById('json').innerHTML = "";
    return false;
  }
}