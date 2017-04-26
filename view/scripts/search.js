var address = "http://ec2-35-165-78-223.us-west-2.compute.amazonaws.com/"

function filters( responseData ) {
    // Do what you want with the data
    console.log(responseData);

    for(var j = 0; j< responseData.length;j++)
    for(var i = 0 ; i < responseData[j].length; i++){
        if(responseData[j][i][0]!=null){
        var x = document.createElement("OPTION");
        x.value = responseData[j][i][0];
        x.text = responseData[j][i][0];
        if(j == 0)
            document.getElementById("oras").appendChild(x);
        if(j == 1)
            document.getElementById("tip").appendChild(x);
            if(j == 2)
            document.getElementById("achizitie").appendChild(x);
            if(j == 3)
            document.getElementById("nr-camere").appendChild(x);
            if(j == 4)
            document.getElementById("nr_bai").appendChild(x);
            if(j == 5)
            document.getElementById("confort").appendChild(x);
            if(j == 6)
            document.getElementById("etaj").appendChild(x);
            if(j == 7)
            document.getElementById("clasificare").appendChild(x);
            if(j == 8)
            document.getElementById("tipAgr").appendChild(x);
        }
    }
}

$.ajax({
    url: address + "filters",
    success: function ( data, status, XHR ) {
        filters(data);
    }
});


function showSearch(respData){
    console.log(respData);
    var node = document.getElementById('results');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
    for(var i = 0; i<respData.length;i++){
        var node2 = document.createElement("DIV");
        node2.className += 'result';

        for(var j = 0; j<respData[i].length;j++)
        if(respData[i][j] !=null){
            var txt = document.createElement("p");
            var node;
            switch (j){
                case 0:
                    node = document.createTextNode("id produs: " + respData[i][j]); break;
                case 1:
                    node = document.createTextNode("id user: " + respData[i][j]); break;
                    case 2:
                    node = document.createTextNode("oras: " + respData[i][j]); break;
                    case 3:
                    node = document.createTextNode( "tip: " + respData[i][j]); break;
                    case 4:
                    node = document.createTextNode( "achizitie: " + respData[i][j]); break;
                    case 5:
                    node = document.createTextNode( "descriere: " + respData[i][j]); break;
                    case 6:
                    node = document.createTextNode( "latitudine: " + respData[i][j]); break;
                    case 7:
                    node = document.createTextNode("longitudine: " + respData[i][j]); break;
                    case 8:
                    node = document.createTextNode("pret: " + respData[i][j]); break;
                    case 9:
                    node = document.createTextNode("nr camere: " + respData[i][j]); break;
                    case 10:
                    node = document.createTextNode( "nr bai: " + respData[i][j]); break;
                    case 11:
                    node = document.createTextNode("suprafata utila: " + respData[i][j]); break;
                    case 12:
                    node = document.createTextNode("confort: " + respData[i][j]); break;
                    case 13:
                    node = document.createTextNode( "vechime: " + respData[i][j]); break;
                    case 14:
                    node = document.createTextNode("niveluri imbil: " + respData[i][j]); break;
                    case 15:
                    node = document.createTextNode("structura rezistenta: " + respData[i][j]); break;
                    case 16:
                    node = document.createTextNode("etaj: " + respData[i][j]); break;
                    case 17:
                    node = document.createTextNode( "suprafata teren: " + respData[i][j]); break;
                    case 18:
                    node = document.createTextNode("front stradal: " + respData[i][j]); break;
                    case 19:
                    node = document.createTextNode("clasificare: " + respData[i][j]); break;
                    case 20:
                    node = document.createTextNode("tip agricol: " + respData[i][j]); break;
            }
            txt.appendChild(node);
            node2.appendChild(txt);
        }
        document.getElementById("results").appendChild(node2);
    }
    
}

function rootShowSearch(){
    var oras = document.getElementById("oras");
    var tip = document.getElementById("tip");
    var achizitie = document.getElementById("achizitie");
    var nr_camere = document.getElementById("nr-camere");
    var nr_bai = document.getElementById("nr_bai");
    var conf = document.getElementById("confort");
    var etaj = document.getElementById("etaj");
    var clasif = document.getElementById("clasificare");
    var tipAgr = document.getElementById("tipAgr");
        $.post(address + "search",{
            oras: oras.options[oras.selectedIndex].value,
            tip: tip.options[tip.selectedIndex].value,
            achizitie: achizitie.options[achizitie.selectedIndex].value,
            nr_cam: nr_camere.options[nr_camere.selectedIndex].value,
            nr_bai: nr_bai.options[nr_bai.selectedIndex].value,
            conf: conf.options[conf.selectedIndex].value,
            etaj: etaj.options[etaj.selectedIndex].value,
            clasif: clasif.options[clasif.selectedIndex].value,
            tipArr: tipAgr.options[tipAgr.selectedIndex].value
        }, function(data){
        showSearch(data);
        });

    document.getElementById("nr-camere").style.display = "none";
    document.getElementById("nr_bai").style.display = "none";
    document.getElementById("confort").style.display = "none";
    document.getElementById("etaj").style.display = "none";
    document.getElementById("clasificare").style.display = "none";
    document.getElementById("tipAgr").style.display = "none";
    var stip = document.getElementById("tip");
    switch(stip.options[stip.selectedIndex].value){
        case "Apartament":
            document.getElementById("nr-camere").style.display = "inline-block";
            document.getElementById("nr_bai").style.display = "inline-block";
            document.getElementById("confort").style.display = "inline-block";
            document.getElementById("etaj").style.display = "inline-block";
            break;
        case "Casa/Vila":
            document.getElementById("nr-camere").style.display = "inline-block";
            document.getElementById("nr_bai").style.display = "inline-block";
            document.getElementById("confort").style.display = "inline-block";
            break;
        case "Teren Constructii":
            document.getElementById("clasificare").style.display = "inline-block";
            break;
        case "Teren Agricol":
            document.getElementById("clasificare").style.display = "inline-block";
            document.getElementById("tipAgr").style.display = "inline-block";
            break;
    }
}

rootShowSearch();

$("select").change(function(){
    rootShowSearch();
    resultHeight();
});

$("#tip").change(function(){
    document.getElementById("nr-camere").selectedIndex = 0;
    document.getElementById("nr_bai").selectedIndex = 0;
    document.getElementById("etaj").selectedIndex = 0;
    document.getElementById("clasificare").selectedIndex = 0;
    document.getElementById("tipAgr").selectedIndex = 0;
});

$(".filters").hide();
$(".filter-button").click(function() {
    $(".filters").toggle();
    resultHeight();
});
$("#results").hide();
$(".results-button").click(function() {
    $("#results").toggle();
});

function resultHeight(){
    var results = document.getElementById("results");
    results.style.height = "0px";

    results.style.height = window.innerHeight - document.body.offsetHeight - 20 + "px";
}


$( window ).resize(function() {
    resultHeight();
});
resultHeight();


