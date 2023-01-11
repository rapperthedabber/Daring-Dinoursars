// wikipedia-api code 

// fetchWikipedia 
function fetchWikipedia(searchTerm) { 

    var url = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "opensearch",
        search: searchTerm,
        limit: "1",
        namespace: "0",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {$('#wiki-title').text(response[1][0]);})
        .catch(function(error){$('#wiki-article').text(error);});
}

function fetchWikipediaBody(searchTerm) { 

    var url = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "parse",
        page: searchTerm,
        prop: "text",
        formatversion: 2,
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response){$('#wiki-article').text(response.parse.text);})
        //.then(function(parse) {$('#wiki-article').text(parse);})
        .catch(function(error){console.log(error);});
}

function callWikiAPIs() {
    var search = $('#search').val();
    fetchWikipedia(search);
    fetchWikipediaBody(search);
}

$('#searchBtn').click(function(event) {
    event.preventDefault();
    callWikiAPIs();
})

searchbar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        callWikiAPIs();
    }
});