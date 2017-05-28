var address = "http://ec2-35-165-78-223.us-west-2.compute.amazonaws.com/"

function showSearch(respData,a){
    var node2 = document.createElement("DIV");
    var txt = document.createElement("p");
    var node3;
    if(a == 1)
        node3 = document.createTextNode("without index ~ number of results: " + respData[0][0]);
    else 
        node3 = document.createTextNode("with index ~ number of results: " + respData[0][0]);
    txt.appendChild(node3);
    node2.appendChild(txt);
    document.getElementById("results2").appendChild(node2);
    //
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

    var node = document.getElementById('results2');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
        $.post(address + "bd",{
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
            showSearch(data,1);
        });

        $.post(address + "bdindex",{
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
            showSearch(data,2);
        });

    document.getElementById("nr-camere").style.display = "none";
    document.getElementById("nr_bai").style.display = "none";
    document.getElementById("confort").style.display = "none";
    document.getElementById("etaj").style.display = "none";
    document.getElementById("clasificare").style.display = "none";
    document.getElementById("tipAgr").style.display = "none";
    var stip = document.getElementById("tip");
    switch(stip.options[stip.selectedIndex].value){
        case "Apartament/Garsoniera":
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

$(".filter-button").click(function() {
    $(".filters").toggle();
    resultHeight();
});

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

function showID(){
    
    var str;
    if(isNaN(parseInt(document.getElementById("inputID").value))){
        str = "Invalid data input";
        var node = document.getElementById('results3');
        while (node.hasChildNodes()) {
            node.removeChild(node.firstChild);
        }
        node.appendChild(document.createElement("p").appendChild
            (document.createTextNode(str)));
    } else {
        $.post(address + "bdshow",{
            id: document.getElementById("inputID").value
        }, function(data){
            str = data.toString();
            if(str == "")
                str = "no data found";
            var node = document.getElementById('results3');
            while (node.hasChildNodes()) {
                node.removeChild(node.firstChild);
            }
            node.appendChild(document.createElement("p").appendChild
                (document.createTextNode(str)));
        });
    }
}

function softdeleteID(){
    var str;
    if(isNaN(parseInt(document.getElementById("inputID").value))){
        str = "Invalid data input"
    } else {
        str = "Soft deleted everything linked to data with id " + 
        document.getElementById("inputID").value;
    }

    var node = document.getElementById('results3');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
    node.appendChild(document.createElement("p").appendChild
        (document.createTextNode(str)));

    $.post(address + "bdsoftdelte",{
            id: document.getElementById("inputID").value
        }, function(data){
            console.log(data);
        });
}

function deleteID(){
    var str;
    if(isNaN(parseInt(document.getElementById("inputID").value))){
        str = "Invalid data input"
    } else {
        str = "Deleted everything linked to data with id " + 
        document.getElementById("inputID").value;
    }

    var node = document.getElementById('results3');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
    node.appendChild(document.createElement("p").appendChild
        (document.createTextNode(str)));

    $.post(address + "bddelte",{
            id: document.getElementById("inputID").value
        }, function(data){
            console.log(data);
        });
}