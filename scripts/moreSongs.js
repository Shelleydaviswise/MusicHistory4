$(document).ready(function(){  


  // function activating the More button
  $(document).on('click', '#getMoreSongs', function(){

    $.ajax({
      url: "jsonFiles/songs2.json"
      }).done(function(data) {
      // console.log(data);
      

    var songArray = data.songs;
      for (var i =0; i < songArray.length; i++){
        var target = $("#song-list");

      domString = "<div class = 'song'><h2>" + songArray[i].title + "</h2>" + "<p class = 'songDetails'>" +
          songArray[i].artist + "  |  " + songArray[i].album + "  |  " + songArray[i].year +
            "</p>" + "<br>" + "<button type ='button' class = 'removebtn' id = 'deleteButton'>Delete Song</button> </div>";

              target.append(domString)
            
            // keep this one
            }
        })
// keep this one, closes the .done function
    }); 


// put delete function here

  $(document).on ('click', '#deleteButton', function (){
    $(this).parent().remove();  
     })
// keep this one
  });

