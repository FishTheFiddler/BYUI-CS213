
function test(){
    var status = document.getElementById("status");
    status.innerHTML = "YO";
}


function getRequest() {

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
            document.getElementById('status').innerHTML = "-Http Request Initiated-";
            ajaxRequest(this.responseText);
    }

    httpRequest.open("GET","assign10.php",true);
    httpRequest.send();
}


function ajaxRequest(responseText) {    
    document.getElementById('status').innerHTML = "-Ajax Request Process-";
    var response = responseText;
    //var json = JSON.parse(responseText);
    document.getElementById('output').innerHTML = response + " test";

}