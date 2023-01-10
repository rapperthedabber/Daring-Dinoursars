var searchbar = document.querySelector(".input-group-field");
var button = document.querySelector(".button");


function Definition(){
 var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchbar.value
fetch(url).then(response =>(response.json())).then(data=> {console.log(data[0])
     console.log(data.values())
}
);
}

button.addEventListener("click", Definition );

// wikipedia-api code 

// fetchWikipedia 
function fetchWikipedia() { 

    var url = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "opensearch",
        search: "Cheese",
        limit: "5",
        namespace: "0",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {console.log(response);})
        .catch(function(error){console.log(error);});

}

fetchWikipedia();