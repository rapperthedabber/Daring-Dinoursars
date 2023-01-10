var searchbar = document.querySelector(".input-group-field");
var button = document.querySelector(".button");
var dictionarytext = $('#dictionaryTextArea');


function Definition(){
    $('#dictionaryTextArea').empty()
 var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchbar.value
fetch(url).then(response =>(response.json())).then(data=> {
      localStorage.setItem("Definition", searchbar.value);
      var definition = data[0].meanings
      $("#dictionaryTextArea").append(origin)


     for(const ele of definition){
       // var loopDefinition =  data[0].meanings[i].definitions[i].definition;
        //$("#dictionaryTextArea").append(loopDefinition); 
        //console.log(ele)
        var part = ele.partOfSpeech || ""  
        var definitionPart = ele.definitions
    
     ele.definitions.forEach(definition => {
        console.log(definition)
        console.log(definitionPart[0].definition)
       $("#dictionaryTextArea").append(definition , part)
       $("#dictionaryTextArea").append(definition , definitionPart[0].definition)
    
      })
     
  // in for loop grab part 
  //do another for loop using ele to update array
  // do html stuff 
}
     
     

     
}
);
}

button.addEventListener("click", Definition );

