var serverURL = "http://restclass.azurewebsites.net/API2/Todos";

var todo = [];


function createNew() {
   var text = $("#txtTest").val();

   //clear the text
   $("#txtTest").val("").focus();

   // create an object literal

   var todo = {
      text: text,
      user: "Carlos",
      state: 0 // new
   };

   displaytodo(todo);

   console.log(todo);

   // send the object to backend

   $.ajax({
      url: serverURL,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(todo),
      success: function (res) {
         console.log(res);
      },

      error: function (error) {
         console.error("Error saving", error);
      }
   });
}

// receives a todo item and displays it on the corresponding list
function displaytodo(todo) {
   console.log("Display")
   if (todo.state == 0) {
      // create an item on the pending list
      var list = $("#todo");
      list.append(`<li id="${todo.id}" class="list-group-item">${todo.text} <button class="btn btn-outline-primary float-right" onclick="markDone(${todo.id});" > Done </button> </li>`);
   }
   else {
      // create an item on the done list
      var list = $("#donetodo");
      list.append('<li class="list-group-item">' + todo.text + '</li>');
   }
}

function markDone(id){
   console.log("Item Done", id);

   $("#" + id).remove();

   // find on the todos array the one with the id = id
 
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id == id) {
            todo[i].state = 1;
            displaytodo(todo[i]);
        }
    }

}

function loanData() {
   // load data from backend
   //display to do

   $.ajax({
      url: serverURL,
      type: "GET",
      success: function (res) {
         console.log("Success");
         for (let i = 0; i < res.length; i++) {
            if (res[i].user == "Carlos") {
               console.log("Item Found");
               todo.push(res[i]);
               displaytodo(res[i]);
            }
         }


      },

      error: function (error) {
         console.error("Error saving", error);
      }
   });
}

function init2() {
   $("#btnAdd").click(createNew)
   $("#txtTest").keypress(function (args) {
      if (args.keyCode == 13) {
         createNew()
      }
   });

   loanData();
}

function parent(stuff) {
   console.log('Im another fool');
   stuff(); // <-- excetuting the parameter (it must be a function)
}

//alert('Hello Fools!!!!!!!!!');

function init() {
   var txt = document.getElementById('txtTest');
   console.log(txt);
   txt.value = 'LAST';
}



// $("#btnAdd").click(createNew);

// # = ID
// TAG
// . = class
/* $("#txtTest").val("LAST");

// assign a function to click event

 

//by tag
console.log($("input"));

//by class name
console.log($(".super"));

//JS adding css class
document.getElementById("id").classList.add("x");
$("id").addClass("x");

var items = [1,2,3,4];
$(items).each(function(i){
*/

//assing a function to click event









// assign a funstion to click event of button
//var btn = document.getElementById('btnAdd');
//btn.onclick = createNew;
// test
//parent(sayHello);

// when everything is rendered, call the function
//window.onload = init;

//$(document).ready(init2);
$(document).ready(init2);