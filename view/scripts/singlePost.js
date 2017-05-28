var address = "http://ec2-35-165-78-223.us-west-2.compute.amazonaws.com/"

function showPost(data){
    console.log(data);
}

$.post(address + "singlePost",{
    url: window.location.href 
}, function(data){
    showPost(data);
});