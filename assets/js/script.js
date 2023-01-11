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