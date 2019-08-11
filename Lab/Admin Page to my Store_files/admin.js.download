
//object constructor
function Item(title,des,price,image,category){
    this.title=title;
    this.description=des;
    this.price=price;
    this.image=image;
    this.category=category;
    this.user = "Carlos";
}


function saveItem(){
  //get sate
  var title = $("#txtTitle").val();
  var des = $("#txtDescription").val();
  var price = $("#txtPrice").val();
  var image = $("#txtImage").val();
  var category = $("#txtCat").val();

  console.log(title,des,price,image,category);

  //create object
var theItem = new Item(title,des,price,image,category);
console.log(theItem);

console.log("the title: ", theItem.title);

  //save object to back end

var serverURL = "http:restclass.azurewebsites.net/API/points";

  $.ajax({
    url: serverURL,
    type: "POST",
    data: JSON.stringify(theItem),
    contentType: "application/json",
    success: function(res){
      console.log("Success Fool.....", res);
    },
    error: function(error){
      console.error("No internet, Fool.....", error);
    }

    
  });

  
}

function testAjax(){
    var serverURL ="http://restclass.azurewebsites.net/API/test";

    $.ajax({
      url: serverURL,
      type: "GET",
      success: function(res){
        console.log("Success Fool.....", res);
      },

      error: function(error){
        console.error("No internet, Fool.....", error);


      }
    });
}

function init(){
  console.log("Init admin page");

  //initialization

  //events
  $("#btnSave").click(saveItem);
}




window.onload = init;