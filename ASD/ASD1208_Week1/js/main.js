
$(document).ready(function(){
    alert("Welcome to MINISTRY N Motion!  Where we are on a mission to <em>Call the Capital to Christ!</em>);
});


$('#home').on('pageinit', function(){
}
	//code needed for home page goes here
});


$('#joinusForm').on('pageinit', function(){

		var myForm = $('#joinusForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
    for(var n in json){
        var id = Math.floor(Math.random()*100000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
    };

};

var getData = function(){
    if(localStorage.length === 0){
        alert("There is no data in Local Storage so default data was added.");
        autoFillData();
    }
    //Write Data from Local Storage to the browser
    $("#itemList").empty();
    //Making list items
    for(var i=0, len=localStorage.length; i<len;i++){
        var makeli = $("<li id='listItem"+i+"'></li>");
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        //Converting string from local storage value back to an object using JSON.parse()
        var obj = JSON.parse(localStorage.getItem(key));

    };

var storeData = function(data){
    if(!key){
        var id = Math.floor(Math.random()*100000001);
    }else{
        id = key;
    }

    var item = {};
    item.fname = ["First Name:", $("#fname").val()];
    item.lname = ["Last Name:", $("#lname").val()];
    item.date1 = ["Connection Date:", $("#date1").val()];
    item.date2 = ["Submit Date:", $("#date2").val()];
    item.greeting = ["Select Greeting:", $("#greeting").val()];
    item.comments = ["Comments:", $("#comments").val()];
    //Saving data into local storage using Stringify
    localStorage.setItem(id, JSON.stringify(item));
    alert("Log Saved!");

}; 

var	deleteItem = function (){
    var ask = confirm("Are you sure you want to delete this log entry?");
    var key = localStorage.key();
    if(ask){
        localStorage.removeItem(key);
        alert("Log Entry was deleted.");

    }else{
        alert("Log entry was Not deleted.");
    };

};
					
var clearLocal = function () {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        var ask = confirm("Deleting ALL log items? This can NOT be undone.");
        if (ask) {
            localStorage.clear();
            alert("All log items are deleted!");
            $("#itemList").empty();
        } else {
            alert("Log items not deleted.");
        }
        ;
    }
    )




};



