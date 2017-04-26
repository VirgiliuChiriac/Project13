var loggedIn = 0;
function logedMenu(){
    if(loggedIn==0){
        document.getElementById("logged0").style.display="inline-block";
        document.getElementById("logged1").style.display="none";
        document.getElementById("logged2").style.display="none";
        document.getElementById("logged3").style.display="none";
        document.getElementById("logged4").style.display="none";
    } else {
        document.getElementById("logged0").style.display="none";
        document.getElementById("logged1").style.display="inline-block";
        document.getElementById("logged2").style.display="inline-block";
        document.getElementById("logged3").style.display="inline-block";
        document.getElementById("logged4").style.display="inline-block";
    }
}

function toggleLoggedIn(){
    if(loggedIn==0)
        loggedIn = 1;
    else 
        loggedIn = 0;
    logedMenu();
}
logedMenu();

document.getElementById("logBox").style.display="none";
document.getElementById("signUpBox").style.display="none";

$("#logged0").click(function(){
    $("#logBox").toggle();
    document.getElementById("logInBox").style.display="block";
    document.getElementById("signUpBox").style.display="none";
});
$("#signUpBx").click(function(){
    document.getElementById("logInBox").style.display="none";
    document.getElementById("signUpBox").style.display="block";
});
$("#logInBx").click(function(){
    document.getElementById("logInBox").style.display="block";
    document.getElementById("signUpBox").style.display="none";
});

$(".whiteBG").click(function(){
    document.getElementById("logBox").style.display="none";
});