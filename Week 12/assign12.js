function validate() {
    var startCity = document.getElementById('startCity').value;
    var endCity = document.getElementById('endCity').value;
    var startState = document.getElementById('startState').value;
    var endState = document.getElementById('endState').value;

    var error = document.getElementById('error');


    if (startCity == "") {
        error.innerHTML = "ERROR: Enter a Starting City";
        document.getElementById('startCity').focus();
        return false;
    }

    else if (endCity == "") {
        error.innerHTML = "ERROR: Enter an Ending City";
        document.getElementById('endCity').focus();
        return false;
    }
    
    else if (startState == "" || startState.length < 2) {
        error.innerHTML = "ERROR: Enter a Starting State initials (Example: CA, ID, UT, CO, Etc)";
        document.getElementById('startState').focus();
        return false;
    }

    else if (endState == "" || endState.length < 2) {
        error.innerHTML = "ERROR: Enter an Ending State initials (Example: CA, ID, UT, CO, Etc)";
        document.getElementById('endState').focus();
        return false;
    }
    
    else {
        error.innerHTML = "";
        var url = "/cgi-bin/cs213/mileageAjaxJSON?startCity=" + startCity + "&startState=" + startState + "&endCity=" + endCity + "&endState\=" + endState;
        mileageRequest(url, startCity, endCity, startState, endState);
        return true;
    }
}

function mileageRequest(url, startCity, endCity, startState, endState) {
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('ERROR!');
        return false;
    } 
    else {
        httpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.response);
                var distance = data.trip.miles;
                var output = "<br/>The distance between " + startCity + ", " + startState + " and " + endCity + ", " + endState + " is " + distance + " miles.";

                if (data.trip.tmode != undefined) {
                    output += "<br/><h3>Transport Type Available</h3><br/>";
                    for (var i = 0; i < data.trip.tmode.length; i++) {
                        output += [i+1] + " - " + data.trip.tmode[i] + "<br/>";
                    }
                } else{ output += "<br/><h3> No Transport Information to Display</h3<br/>"

                }
                document.getElementById("output").innerHTML = output;
            }
        };
        httpRequest.open("GET", url, true);
        httpRequest.send();
    }
}