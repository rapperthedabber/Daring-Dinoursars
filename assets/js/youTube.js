$(document).ready(function() {
  var apiKey = '' 
  var video = ''
  var videos = $('#videos')


 $('#searchBtn').click(function(event) {
    event.preventDefault()

    var search = $('#search').val()
    console.log(search)
   videoSearch(apiKey, search, 10)
})


 
 
 function videoSearch(key, search, maxResults) {

    $("#videos").empty()
    let url = ` https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${search}`;

fetch(url).then(res => res.json()).then(data => {

      
    console.log(data)

    data.items.forEach(item  => {

        video = `
       <iframe width="420" height"315 src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe> 
        
        `
        console.log(video)
       $("#videos").append(video)
    });
})


 }
})
