$(document).ready(function() {
  var apiKey = 'AIzaSyAEpNaGklHhXXM_gtNw0RnsJ52SQOjluOQ'  


 $('#searchBtn').click(function(event) {
    event.preventDefault()

    var search = $('#search').val()
    console.log(search)
   videoSearch(search)
})


function videoSearch(search) {
    var maxResults = 5
    $('#youtubeVideoTitle').text('Youtube Results:')
    $("#videos").empty()
    let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${maxResults}&q=${search}`;

    fetch(url).then(res => res.json()).then(data => {


    console.log(data)

    data.items.forEach(item  => {

        var videoAppear = item.snippet.thumbnails.high.url
        var videoUrlAppear = 'https://www.youtube.com/watch?v=' + item.id.videoId
        
            var imgEl = $('<img>').attr('src', videoAppear).addClass('picture-frame')
            var videoAnchorTag = $('<a>').attr('href', videoUrlAppear).attr('target', '_blank')
        
        console.log( $("#videos"))
        $("#videos").append(videoAnchorTag.append(imgEl))

    });
   
})
 }
})


