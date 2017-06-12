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

if(getCookie("user_id")!=""){
    $.post(address + "profile",{
        id: getCookie("user_id")
    }, function(data){

        document.getElementById('pFname').value=data[0][1];
        document.getElementById('pLname').value=data[0][2];
        document.getElementById('pPhone').value=data[0][5];

        FB.getLoginStatus(function(response) {
            if(response.status!='unknown'){
                document.getElementById('pEmail').value="Logged in with Facebook";
                document.getElementById('pPass').value="";
                document.getElementById('pPass').style.display="none";
            } else {
                document.getElementById('pEmail').value=data[0][3];
                document.getElementById('pPass').value=data[0][4];
            }
        });
    });

    $.post(address + "profilePosts",{
        id: getCookie("user_id")
    }, function(data){

        console.log(data);

        for(var i = 0 ;i<data.length;i++){
            var tr = document.createElement("tr");
            var node = document.createElement("td");
            node.innerHTML = data[i][0];
            tr.appendChild(node);

            node = document.createElement("td");
            node.innerHTML = data[i][2];
            tr.appendChild(node);

            node = document.createElement("td");
            node.innerHTML = data[i][3];
            tr.appendChild(node);

            node = document.createElement("td");
            node.innerHTML = data[i][4];
            tr.appendChild(node);

            var info;
            if(data[i][4]=="Inchiriere"){
                info = "€/month";
            } else {
                if( data[i][3]=="Apartament" || data[i][3]=="Casa/Vila" ){
                    info = "€";
                } else {
                    info = "€/m<sup>2</sup>";
                }
            }
            node = document.createElement("td");
            node.innerHTML = data[i][8] + info;
            tr.appendChild(node);

            document.getElementById("profilePostsTable").appendChild(tr);

            var x = document.createElement("OPTION");
            x.value = data[i][0];
            x.text = "ID - " + data[i][0];
            document.getElementById("postID").appendChild(x);
        }

    });
} else {
    console.log("unlogged");
    document.getElementById("close").style.display="block";
    document.getElementById("close").style.backgroundColor="white";
    document.getElementById("close").style.zIndex=100;
    document.getElementById("close").id="nullID";
}

function updateProfile(){
    $.post(address + "updateProfile",{
        id: getCookie("user_id"),
        fname:document.getElementById('pFname').value==""?"-":document.getElementById('pFname').value,
        lname:document.getElementById('pLname').value==""?"-":document.getElementById('pLname').value,
        phone:document.getElementById('pPhone').value==""?"-":document.getElementById('pPhone').value,
        pass:document.getElementById('pPass').value==""?"-":document.getElementById('pPass').value
    }, function(data){

        console.log(data);
    });
}