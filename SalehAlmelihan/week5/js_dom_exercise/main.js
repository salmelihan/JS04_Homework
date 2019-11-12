/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {
  this.list = list
  newList = document.createElement('li');
  newText = document.createTextNode(newThing);
  newList.appendChild(newText);
  this.list.appendChild(newList);
}

window.onload = function() {
  this.document.getElementById('new-thing-button').onclick = function (event){
    event.preventDefault();
    var textBoxValue = document.getElementById('new-thing').value;
    var list = document.getElementById('fav-list');
    addToList(list, textBoxValue);
    document.getElementById('new-thing').value = '';
    
  }
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


