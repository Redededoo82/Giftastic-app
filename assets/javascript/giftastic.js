



//variable for the topics
var topics = ["skateboarding", "fire eating", "spiders", "praying mantis", "Gillian Anderson", "Battlefield 4", "taekwondo", "Drums"];




$('button').on('click', function () {
    var x = $(this).data("search");
    // console.log(x);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=kfsNu9OGKoolNogRfeogBHYhr3OBTtRa";
    console.log(queryURL);

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {

            // console.log(response);
            
        })
})