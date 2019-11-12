/* Independent Practice

Making a favorites list: jQuery


You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

*/

function addToList($list, $thing) {
  var $newSpan = $('<span style="color:blue;font-weight:bold"><a href="#"> complete task</a></span>');
  var $newList = $('<li></li>');
  $newList.text($thing);
  $newList.addClass('fav-thing');
  $newList.append($newSpan);
  $list.append($newList);

}

  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');
  $('.fav-thing').append('<span style="color:blue;font-weight:bold"><a href="#"> complete task</a></span>');
  $button.on('click', function(event) {
    event.preventDefault();
    $thing = $newThingInput.val();
    addToList($thingList,$thing);
    $newThingInput.val('');
  });

  $(document.body).on('click',"span", function(event){
    event.preventDefault();
    var tagParent = $(this).parent();
    tagParent.addClass("compeleted"); 
  });



