// wikipedia-api code 

// fetchWikipedia 
function fetchWikipedia(searchTerm) { 

    var url = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "opensearch",
        search: searchTerm,
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

$('#searchBtn').click(function(event) {
    event.preventDefault();

    var search = $('#search').val();
    console.log(search);
    fetchWikipedia(search);
})