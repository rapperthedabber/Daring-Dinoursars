var searchbar = document.querySelector(".input-group-field");
var button = document.querySelector(".button");
var dictionarytext = $('#dictionaryTextArea');
function Definition() {
    $('#dictionaryTextArea').empty()
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchbar.value
    fetch(url).then(response => (response.json())).then(data => {
        console.log(data)
        if(data.title){
            console.log("did not go through")
            document.getElementById("phonetics").textContent = data.title
            document.getElementById("partSpeech").textContent = data.message
            document.getElementById("define").textContent = data.resolution
           }
        localStorage.setItem("Definition", searchbar.value);
        var definition = data[0].meanings
        var phonetics = data[0].phonetics[1].text
        var sound = data[0].phonetics[1].audio
        $("#dictionaryTextArea").append()
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



