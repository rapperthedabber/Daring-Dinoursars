var searchbar = document.querySelector(".input-group-field");
var button = document.querySelector(".button");
var dictionarytext = $('#dictionaryTextArea');
function Definition() {
    document.querySelector('.dictionaryText').classList.remove('hide')
    $('#dictionaryTextArea').empty()

    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchbar.value
    fetch(url).then(response => (response.json())).then(data => {
        console.log(data)
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
            })
            document.querySelector(".searchHistory").appendChild(button)
        })

        var searchTitle = document.createElement('h2')
        searchTitle.textContent = "Search History:"
        $('.searchHistory').prepend(searchTitle)


        console.log(data[0].word)

        var definition = data[0].meanings
        var phonetics = data[0].phonetics[1].text
        var sound = data[0].phonetics[1].audio
        $("#dictionaryTextArea").append()
        // console.log(data[0].parse.title)


        // img.setAttribute("src", "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-sound-audio-icon--line-style-vector-illustration-png-image_314747.jpg");
        // img.onclick = function () {
        //     window.location.href = sound;
        // };
        // $("#definitions").append(img)



        $("#dictionaryTextArea").append()



        // for( i = 0; i < 5 ; i++){
        //     console.log(data)
        //     }
        // }
        for (const ele of definition) {
            // var loopDefinition =  data[0].meanings[i].definitions[i].definition;
            // $("#dictionaryTextArea").append(loopDefinition); 

            console.log(ele)
            var part = ele.partOfSpeech || ""
            var definitionPart = ele.definitions
            var img = document.querySelector("img");
            img.setAttribute("src", "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-sound-audio-icon--line-style-vector-illustration-png-image_314747.jpg");
            img.setAttribute("id", "clickImg");
            img.setAttribute('target', '_blank');
            img.onclick = function () {
                window.location.href = sound;
            };


            // ele.definitions.forEach(definition => {
            //     console.log(definition)
            //     console.log(definitionPart[0].definition)
            // $("#dictionaryTextArea").append(definition , part)}



            document.getElementById("partSpeech").textContent = part;
            document.getElementById("define").textContent = definitionPart[0].definition;
            document.getElementById("phonetics").textContent = phonetics;
            ele.definitions.forEach(definition => {
                console.log(definition)
                console.log(definitionPart[0].definition)

                //$("#dictionaryTextArea").append(definition, part)




                //$("#definition").append(phonetics, part, definitionPart[i].definition)
                //var img = $("#audio-image").setAttribute("src","https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-high-volume-icon-png-image_762948.jpg")
            })
        }

        // in for loop grab part
        //do another for loop using ele to update array
        // do html stuff
    })
}

// function searchTerm() {
//     var word = JSON.parse(localStorage.getItem("Word"));
//     var searchHistory = document.querySelector("#searchHistory");
//     searchHistory.textContent = word;
// }


// searchTerm()




// in for loop grab part 
//do another for loop using ele to update array
// do html stuff 


button.addEventListener("click", Definition);
searchbar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // code for enter
        Definition()
    }

});



