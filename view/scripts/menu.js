function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var loggedIn = 0;

function logedMenu(){
    if(getCookie("user_id")!=""){
        loggedIn = 1;
        document.getElementById("logBox").style.display="none";
        document.getElementById("close").style.display="none";
    } else {
        loggedIn = 0;
    }

    if(loggedIn==0){
        document.getElementById("logged0").style.display="inline-block";
        document.getElementById("logged1").style.display="none";
        document.getElementById("logged3").style.display="none";
        document.getElementById("logged4").style.display="none";
    } else {
        document.getElementById("logged0").style.display="none";
        document.getElementById("logged1").style.display="inline-block";
        document.getElementById("logged3").style.display="inline-block";
        document.getElementById("logged4").style.display="inline-block";
    }
}

var address = "http://ec2-35-165-78-223.us-west-2.compute.amazonaws.com/";

function LogIn(){
    $.post(address + "login",{
        user: document.getElementById('in-email').value,
        pass: document.getElementById('in-pass').value
    }, function(data){
        if(data[0]!=null){
            document.getElementById('in-email').value="";
            document.getElementById('in-pass').value="";
            setCookie("user_id",data[0],1);
            logedMenu();
        } else {
            setCookie("user_id","",-1);
            logedMenu();
        }
    });
}
logedMenu();

function toggleLoggedIn(){
    FB.logout(function(response) {
        console.log(response);
    });
    setCookie("user_id","",-1);
    logedMenu();
}

document.getElementById("logBox").style.display="none";
document.getElementById("close").style.display="none";
document.getElementById("signUpBox").style.display="none";

$("#logged0").click(function(){
    $("#logBox").toggle();
    $("#close").toggle();
    document.getElementById("logInBox").style.display="block";
    document.getElementById("signUpBox").style.display="none";
});

$("#close").click(function(){
    $("#logBox").toggle();
    $("#close").toggle();
});

$("#signUpBx").click(function(){
    document.getElementById("logInBox").style.display="none";
    document.getElementById("signUpBox").style.display="block";
});

$("#logInBx").click(function(){
    document.getElementById("logInBox").style.display="block";
    document.getElementById("signUpBox").style.display="none";
});

$("#signUpB").click(function(){
    if(document.getElementById('up-email').value == "" || document.getElementById('up-pass').value == ""){
        alert("Email and Password can't be null");
    } else {

        $.post(address + "signUp",{
            fname: document.getElementById('up-fname').value == "" ? "-" : document.getElementById('up-fname').value,
            lnane: document.getElementById('up-lname').value == "" ? "-" : document.getElementById('up-lname').value,
            user: document.getElementById('up-email').value == "" ? "-" : document.getElementById('up-email').value,
            pass: document.getElementById('up-pass').value == "" ? "-" : document.getElementById('up-pass').value,
            phone: document.getElementById('up-phone').value == "" ? "-" : document.getElementById('up-phone').value
        }, function(data){
            if(data[0]!=null){
                document.getElementById('up-fname').value="";
                document.getElementById('up-lname').value="";
                document.getElementById('up-email').value="";
                document.getElementById('up-pass').value="";
                document.getElementById('up-phone').value="";
                setCookie("user_id",data[0],1);
                logedMenu();
            } else {
                setCookie("user_id","",-1);
                logedMenu();
            }
        });
    }
});

$(document).on(
    'fbload',  //  <---- HERE'S OUR CUSTOM EVENT BEING LISTENED FOR
    function(){
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });

    }
);

function statusChangeCallback(response){
    console.log("this function" + response);
    if(response.status!='unknown'){
        console.log("in the log-in funcion");
        $.post(address + "login",{
            user: response.authResponse.userID.toString(),
            pass: "-"
        }, function(data){
            if(data[0]!=null){
                setCookie("user_id",data[0],1);
                logedMenu();
                console.log("logged fb");
            } else {
                $.post(address + "signUp",{
                    fname: "-",
                    lnane: "-",
                    user: response.authResponse.userID.toString(),
                    pass: "-",
                    phone: "-"
                }, function(data){
                    if(data[0]!=null){
                        console.log("sign up fb");
                        setCookie("user_id",data[0],1);
                        logedMenu();
                    } else {
                        console.log("error fb");
                        setCookie("user_id","",-1);
                        logedMenu();
                    }
                });
            }
        });
    } else {
        console.log("unlogged fb");
    }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}