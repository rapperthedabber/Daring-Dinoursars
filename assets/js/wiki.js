// wikipedia-api code 
// fetchWikipedia 

//searching for title of article based on search term 
async function fetchWikipedia(searchTerm) { 

    // fetch article title and wiki link of search term
    var openSearchUrl = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "opensearch",
        search: searchTerm,
        limit: "1",
        namespace: "0",
        format: "json"
    };

    openSearchUrl = openSearchUrl + "?origin=*";
    Object.keys(params).forEach(function(key){openSearchUrl += "&" + key + "=" + params[key];});

    var openSearchResponse = await fetch(openSearchUrl);
    var openSearchResponseJson = await openSearchResponse.json();

    var wikiTitle = openSearchResponseJson[1][0];
    var wikiLink = openSearchResponseJson[3][0];
    var wikiLinkArray = wikiLink.split("/");
    var wikiTerm = wikiLinkArray[wikiLinkArray.length - 1];

    $('#wiki-title').text(wikiTitle);

    // get wiki article body
    var parseUrl = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "parse",
        page: wikiTerm,
        prop: "text",
        formatversion: 2,
        format: "json"
    };

    parseUrl = parseUrl + "?origin=*";
    Object.keys(params).forEach(function(key){parseUrl += "&" + key + "=" + params[key];});

    var parseResponse = await fetch(parseUrl);
    var parseResponseJson = await parseResponse.json();

    document.getElementById("wiki-article").innerHTML = parseResponseJson.parse.text;
}

function callWikiAPI() {
    var search = $('#search').val();
    fetchWikipedia(search);
}

//calling API when you click submit 
$('#searchBtn').click(function(event) {
    event.preventDefault();
    callWikiAPI();
})

//calling API as you press enter key
searchbar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        callWikiAPI();
    }
});