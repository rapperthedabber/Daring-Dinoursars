


$(document).ready(function() {
  var apiKey = 'AIzaSyA0_825U4h0ZZTExYZ_6QZfquUkOE2gf1Y'  
//   var video = ''
//   var videos = $('#videos')



 $('#searchBtn').click(function(event) {
    event.preventDefault()

    var search = $('#search').val()
    console.log(search)
   videoSearch(apiKey, search, 5)
})




 function videoSearch(key, search, maxResults) {
    
    $('#youtubeVideoTitle').text('Youtube Results:')
    $("#videos").empty()
    let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${search}`;

    fetch(url).then(res => res.json()).then(data => {


    console.log(data)

    data.items.forEach(item  => {

        var videoAppear = item.snippet.thumbnails.high.url
        var videoUrlAppear = 'https://www.youtube.com/watch?v=' + item.id.videoId
        
            var imgEl = $('<img>').attr('src', videoAppear).addClass('picture-frame')
            var videoAnchorTag = $('<a>').attr('href', videoUrlAppear).attr('target', '_blank')
        
        console.log( $("#videos"))
        $("#videos").append(videoAnchorTag.append(imgEl))

        
    //     video = `
    //    <iframe width="420" height"315 src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe> 
        
    //     `
    //     console.log(video)
    //    $("#videos").append(video)
    });
})


 }
})
