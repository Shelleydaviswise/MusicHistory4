$(document).ready(function(){  

  $.ajax({
    url: "jsonFiles/songs.json"
  }).done(function(data) {
    console.log(data);
    
  var songArray = data.songs;

    for (var i =0; i < songArray.length; i++){
      var target = $("#right-flex");
      
        domString = "<div class = 'song'><h2>" + songArray[i].title + "</h2>" + "<p class = 'songDetails'>" +
        songArray[i].artist + "  |  " + songArray[i].album + "  |  " + songArray[i].year +
        "</p>" + "<br>" + "<button type ='button' class = 'removebtn' id = 'deleteButton'>Delete Song</button> </div>";

          target.append(domString);

            // keep this one
            }
// keep this one, closes the .done function 
        }); 

      $(document).on ('click', '#deleteButton', function (){
        $(this).parent().remove();
        })
// keep this one
});

