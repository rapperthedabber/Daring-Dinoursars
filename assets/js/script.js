var searchbar = document.querySelector(".input-group-field");
var button = document.querySelector(".button");
var dictionarytext = $('#dictionaryTextArea');
<<<<<<< HEAD
=======


>>>>>>> b3c91836672a2077d08c98413e30ed6fb1bbd947
function Definition() {
    $('#dictionaryTextArea').empty()
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchbar.value
    fetch(url).then(response => (response.json())).then(data => {
        console.log(data)
        localStorage.setItem("Definition", searchbar.value);
        var definition = data[0].meanings
        var phonetics = data[0].phonetics[1].text
        var sound = data[0].phonetics[1].audio
<<<<<<< HEAD
        $("#dictionaryTextArea").append()
        for (const ele of definition) {
            // var loopDefinition =  data[0].meanings[i].definitions[i].definition;
            //$("#dictionaryTextArea").append(loopDefinition);
=======

        $("#dictionaryTextArea").append()


        for (const ele of definition) {
            // var loopDefinition =  data[0].meanings[i].definitions[i].definition;
            //$("#dictionaryTextArea").append(loopDefinition); 
>>>>>>> b3c91836672a2077d08c98413e30ed6fb1bbd947
            //console.log(ele)
            var part = ele.partOfSpeech || ""
            var definitionPart = ele.definitions
            var img = document.createElement("img");
            img.setAttribute("src", "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-sound-audio-icon--line-style-vector-illustration-png-image_314747.jpg");
            img.onclick = function() {
                window.location.href = sound;
            };
            $("#dictionaryTextArea").append(img)
<<<<<<< HEAD
            ele.definitions.forEach(definition => {
                console.log(definition)
                console.log(definitionPart[0].definition)
                // $("#dictionaryTextArea").append(definition , part)
=======

            ele.definitions.forEach(definition => {
                console.log(definition)
                console.log(definitionPart[0].definition)


                // $("#dictionaryTextArea").append(definition , part)

>>>>>>> b3c91836672a2077d08c98413e30ed6fb1bbd947
                $("#dictionaryTextArea").append(phonetics, part, definitionPart[0].definition)
                //var img = $("#audio-image").setAttribute("src","https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-high-volume-icon-png-image_762948.jpg")
            }
            )
<<<<<<< HEAD
            // in for loop grab part
            //do another for loop using ele to update array
            // do html stuff
        }
    }
    );
}
=======


            // in for loop grab part 
            //do another for loop using ele to update array
            // do html stuff 
        }




    }
    );
}

>>>>>>> b3c91836672a2077d08c98413e30ed6fb1bbd947
button.addEventListener("click", Definition);
searchbar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // code for enter
        Definition()
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> b3c91836672a2077d08c98413e30ed6fb1bbd947
