  // Get the list of cats currently at the rescue, and list them on the web site, 
  // underneath the intake form
  var catList = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data) {
      //console.log(data);
      var catObjectList = JSON.parse(catList.responseText);
      //console.log(catObjectList);
      //console.log(catObjectList.length);

      for (i = 0; i < catObjectList.length; i++) {
        $('#cats').append('<li>' + catObjectList[i].name + ' - <em>' + catObjectList[i].note + '</em></li>');
      }
    });
    


  $("form").on("submit", function(event) {

    // don't let the form submit/refresh the page! we can handle this with js
    event.preventDefault();

    // get the cat's name and note from the form
    var newCat = $('#cat-name').val();
    var newCatNote = $('#cat-note').val();

    // create the object with the new cat info so we can add it to the database
    var catObject = {
      name: newCat,
      note: newCatNote,
    };

    //console.log(catObject);
    $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(catObject))
      .done(function(data) {
        //console.log(data);
        var newCatData = JSON.parse(data);
        $('#cats').append('<li>' + newCatData.name + ' - <em>' + newCatData.note + '</em></li>');
      });

    // reset/clear the form fields
    $('#cat-name').val('Mr. Kittums');
    $('#cat-note').val('Tell us a bit about this cat');
  });  
    






