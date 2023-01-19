
$(document).ready(function() {
var searchbar = document.querySelector(".input-group-field");
var button = document.querySelector(".button");
var dictionarytext = $('#dictionaryTextArea');



    var apiKey = ''  
  
    // preventing default event of video to not disappear on the screen on search result
  
   $('#searchBtn').click(function(event) {
      event.preventDefault()
  
      var videoSearchResults = $('#search').val()
     videoSearch(videoSearchResults)
  })
  
  // this function makes pull all together url for youTube with API key also the video search and how many videos we want to see on screen
  function videoSearch(videoSearchResults) {
      var maxResults = 5
      $('#youtubeVideoTitle').text('Youtube Results:')
      $("#videos").empty()
      let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${maxResults}&q=${videoSearchResults}`;
  
      fetch(url).then(res => res.json()).then(data => {

  // this for each loop making Scrolling over the YouTube thumbnails shows the title of the video
      data.items.forEach(item  => {
  
          var videoAppear = item.snippet.thumbnails.high.url
          var videoUrlAppear = 'https://www.youtube.com/watch?v=' + item.id.videoId
    // this anchor tag makes video available to appear on screen       
              var imgEl = $('<img>').attr('src', videoAppear).addClass('picture-frame')
              var videoAnchorTag = $('<a>').attr('href', videoUrlAppear).attr('target', '_blank')
          
          $("#videos").append(videoAnchorTag.append(imgEl))
  
      });
     
  })
   }




function Definition() {
    document.querySelector('.dictionaryText').classList.remove('hide')
    $('#dictionaryTextArea').empty()

    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchbar.value
    fetch(url).then(response => (response.json())).then(data => {
        $('#definitionTitlePop').text('Definition:');
        if (data.title) {
            console.log("did not go through")
            document.getElementById("phonetics").textContent = data.title
            document.getElementById("partSpeech").textContent = data.message
            document.getElementById("define").textContent = data.resolution
        }
        var previousSearches = JSON.parse(localStorage.getItem("searchHistory"))||[]
        if (previousSearches.indexOf(searchbar.value) == -1) {
            previousSearches.unshift(searchbar.value)
        } else {
            previousSearches.splice(previousSearches.indexOf(searchbar.value), 1)
            previousSearches.unshift(searchbar.value)
        }
        if (previousSearches.length > 3) {
            previousSearches = previousSearches.slice(0, 3)
        }
        localStorage.setItem("searchHistory", JSON.stringify(previousSearches))
        $('.searchHistory').empty()
            previousSearches.forEach((search) => {
            var button = document.createElement("button")
            button.classList.add("searchHistoryButton")
            button.textContent = search
            button.addEventListener("click", function () {
                var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search
                fetch(url).then(response => (response.json())).then(data => {
                    document.getElementById("phonetics").textContent = data[0].phonetics[1].text
                    document.getElementById("partSpeech").textContent = data[0].meanings[0].partOfSpeech
                    document.getElementById("define").textContent = data[0].meanings[0].definitions[0].definition
                    var sound = data[0].phonetics[1].audio
                    img.onclick = function () {
                        window.location.href = sound;
                    };
                })
                videoSearch(search)
                fetchWikipedia(search)
            })
            document.querySelector(".searchHistory").appendChild(button)
            
        })

        var searchTitle = document.createElement('h2')
        searchTitle.textContent = "Search History:"
        $('.searchHistory').prepend(searchTitle)


        var definition = data[0].meanings
        var phonetics = data[0].phonetics[1].text
        var sound = data[0].phonetics[1].audio
        $("#dictionaryTextArea").append()



        $("#dictionaryTextArea").append()


        for (const ele of definition) {

            var part = ele.partOfSpeech || ""
            var definitionPart = ele.definitions
            var img = document.querySelector("img");
            img.setAttribute("src", "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-sound-audio-icon--line-style-vector-illustration-png-image_314747.jpg");
            img.setAttribute("id", "clickImg");
            img.setAttribute('target', '_blank');
            img.onclick = function () {
                window.location.href = sound;
            };

            document.getElementById("partSpeech").textContent = part;
            document.getElementById("define").textContent = definitionPart[0].definition;
            document.getElementById("phonetics").textContent = phonetics;
            
        }


    })
}


  



button.addEventListener("click", Definition);
searchbar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // code for enter
        Definition()
    }

});



})