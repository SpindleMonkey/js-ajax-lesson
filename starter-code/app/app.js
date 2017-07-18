  // Get all cats and spit out the JSON collection in the console
  var catList= $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
    var catObjectList = JSON.parse(catList.responseText);
    console.log(catObjectList);
    console.log(catObjectList.length);

    for(i=0; i < catObjectList.length; i++){
      $("#cats").append("<li>" + catObjectList[i].name + ' - <em>' + catObjectList[i].note + "</em></li>");
    }
    });
    


    $("form").on("submit", function(event){
      event.preventDefault();
      var newCat = $('#cat-name').val();
      var newCatNote = $('#cat-note').val();
      console.log(newCat);
      console.log(newCatNote);
      var catObject = {};
      catObject.name = newCat;
      catObject.note = newCatNote;
      console.log(catObject);
      $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(catObject))
        .done(function(data){
          console.log(data);
          var newCatData = JSON.parse(data);

          $("#cats").append("<li>" + newCatData.name + ' - <em>' + newCatData.note + "</em></li>");
        });
    });  
    






