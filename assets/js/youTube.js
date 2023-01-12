$(document).ready(function() {
  var apiKey = 'AIzaSyBkLVz5IK5NGgGSgn-Nf6-Oxs59yQIlO08' 
  var video = document.getElementById('videos');
  // var videos = $('#videos')
 var videoAppear =  video.setAttribute("src", "https://youTube.com");
var p = document.createElement("p")
p.append(video)
p.textContent = "https://youTube.com"
  $("#videos").append(video);

 $('#searchBtn').click(function(event) {
    event.preventDefault()

    var search = $('#search').val()
    console.log(search)
   videoSearch(apiKey, search, 6)
})


 
 function videoSearch(key, search, maxResults) {

    $("#videos").empty()
    let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${search}&videoEmbeddable=true`;

fetch(url).then(res => res.json()).then(data => {

      
    console.log(data)

    data.items.forEach(item  => {

    
      // video = ` <iframe width="420" height"315" src=https://www.youtube.com/"0"allowfullscreen></iframe> `

      //   video = `
      //  <iframe width="420" height"315 src="https://www.youtube.com/embed/${item.id.videoId}"frameborder="0"allowfullscreen></iframe> 
        
      //   `
        console.log(video)
      //  $("#videos").append(video)
      p.textContent = video
    });
})


 }
})
