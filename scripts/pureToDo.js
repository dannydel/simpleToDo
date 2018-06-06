document.addEventListener("DOMContentLoaded", function (event) {

    //IIFE to render new Dom Elements
    (function () {
      //create div inside root div
      let newDiv = document.createElement("div");
      newDiv.id = "newDiv";

      //create title inside new div
      let header2 = document.createElement("h2");
      header2.id = "title";
      let textNode = document.createTextNode("Simple List");
      header2.appendChild(textNode);
      newDiv.appendChild(header2);

      //create ul inside new div
      let list = document.createElement("ul");
      list.id = "myList";

      //Add first item to list to show there is a list
      let listItem = document.createElement("li");
      listItem.title = "Delete Me!";
      let listItemTextNode = document.createTextNode("First Node!");
      listItem.appendChild(listItemTextNode);
      
      list.appendChild(listItem);
      newDiv.appendChild(list);

      // add stuff to map div
      let rootDiv = document.getElementById("root");
      rootDiv.appendChild(newDiv);

    }());

    //Create Click Events
    let addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addItem);

    let list = document.getElementById("myList");
    list.addEventListener("click", function (e) {
      removeItem(list, getEventTarget(e));
    });

    let textBox = document.getElementById("textBox");
    textBox.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            addItem();
        }
    });


    //CRUD
    function addItem() {
      let list = document.getElementById("myList"),
      newItem = document.getElementById("textBox").value,
      newItemNode = document.createTextNode(newItem),
      li = document.createElement("li");

      li.appendChild(newItemNode);
      li.title = "Delete Me";

      list.appendChild(li);
      clearTextBox("textBox");
    }

    function removeItem(list, item) {
      list.removeChild(item);
    }

    //Extra Functions
    function getEventTarget(e) {
      e = e || window.event;
      return e.target || e.srcElement;
    }

    function clearTextBox(textBoxId){
      document.getElementById(textBoxId).value = null;
    }

  });