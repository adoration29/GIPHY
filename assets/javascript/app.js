//the api key
var APIKEY ="dA3m3oQhNuMzKbA7rvqcqDqlcBILJvPt";
// the URL needed to query the database

var queryURL = "https://api.giphy.com/v1/gifs/search?" + "q=fish&api_key=" + APIKEY;

$('button').on('click',function(){
    var x = $(this).data("search");
    console.log(x);
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dA3m3oQhNuMzKbA7rvqcqDqlcBILJvPt&limit=10";
    console.log(queryURL);

    $.ajax({
        url:queryURL,
        method:"GET"
    })
    .done(function(response){
        console.log(response);
        var topic = ["tilapia", "blueFish", "dolphin", "croaker", "catFish", "shark"];
//looping through the array
for(var i =0; i < response.data.length; i++){          
console.log(response.data[0].rating);
//append each gif to the application
$("body").append("<p>rating: "+ response.data[i].rating+"</p>");
$("body").append("<img src='" + response.data[i].images.downsized_large.url +" '>");

}
       

})

})
        

