var address = "http://ec2-35-165-78-223.us-west-2.compute.amazonaws.com/"

var url_string = window.location.href; //"http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5";
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log("" + id);

function showPost(respData){

    var node2 = document.getElementById('singlePostResult');
    for(var i = 0; i<respData.length;i++){

        for(var j = 2; j<respData[i].length;j++){
            if(respData[i][j] !=null){
                var txt = document.createElement("p");
                var node;
                switch (j){
                    case 0: node = "id produs: " + respData[i][j]; break;
                    case 1: node = "id user: " + respData[i][j]; break;
                    case 2: node = "oras: " + respData[i][j]; break;
                    case 3: node =  "tip: " + respData[i][j]; break;
                    case 4: node =  "achizitie: " + respData[i][j]; break;
                    case 5: node =  "descriere: " + respData[i][j]; break;
                    case 6: node =  "latitudine: " + respData[i][j]; break;
                    case 7: node = "longitudine: " + respData[i][j]; break;
                    case 8: 
                      var info;
                      if(respData[i][4]=="Inchiriere"){
                          info = "€/month";
                      } else {
                          if( respData[i][3]=="Apartament" || respData[i][3]=="Casa/Vila" ){
                              info = "€";
                          } else {
                              info = "€/m<sup>2</sup>";
                          }
                      }
                      node = "pret: " + respData[i][j] + info; break;
                    case 9: node = "nr camere: " + respData[i][j]; break;
                    case 10: node =  "nr bai: " + respData[i][j]; break;
                    case 11: node = "suprafata utila: " + respData[i][j]; break;
                    case 12: node = "confort: " + respData[i][j]; break;
                    case 13: node =  "vechime: " + respData[i][j]; break;
                    case 14: node = "niveluri imbil: " + respData[i][j]; break;
                    case 15: node = "structura rezistenta: " + respData[i][j]; break;
                    case 16: node = "etaj: " + respData[i][j]; break;
                    case 17: node =  "suprafata teren: " + respData[i][j]; break;
                    case 18: node = "front stradal: " + respData[i][j]; break;
                    case 19: node = "clasificare: " + respData[i][j]; break;
                    case 20: node = "tip agricol: " + respData[i][j]; break;
                }
                txt.innerHTML=node;
                node2.appendChild(txt);
            }
        }
    }

    var id_user=respData[0][1];
    var node3 = document.getElementById('singlePostResultOwner');

    $.post(address + "profile",{
        id: id_user
    }, function(data){
        //console.log(data);
        var txt1 = document.createElement("p");
        txt1.innerHTML = "First Name: "+data[0][1];
        node3.appendChild(txt1);

        var txt2 = document.createElement("p");
        txt2.innerHTML = "Last Name: "+data[0][2];
        node3.appendChild(txt2);

        var txt3 = document.createElement("p");
        txt3.innerHTML = "Phone Number: "+data[0][5];
        node3.appendChild(txt3);
    });
}

$.post(address + "singlePost",{
    id: id 
}, function(data){
    console.log(data);
    showPost(data);
});