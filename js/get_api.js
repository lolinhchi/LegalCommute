console.log("get API");


$.getJSON("http://www.imdbapi.com/?" + dataString + "&callback=?").success(function(data){
    console.log(data);})