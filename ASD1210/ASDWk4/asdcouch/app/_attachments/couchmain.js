
$('#submit').bind('click', function(){
	var d = new Date();
    var myid = (d.getTime());
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var email = $('#email').val();
	if($('#male').attr('checked')){
		var sex = "Male"
	}else{
		var sex = "Female"
	}
	var ease = $('#ease').val();
	var notes = $('#notes:checked').val();
	if(notes == "on") {
		var notes = "Yes"
	} else {
		var notes = "No"
	}

	var dropdown = $('#dropdown').val();
    var item = {
    	"_id": "ministry:" + dropdown + ":" + myid,
    	"fname": fname, 
    	"lname": lname, 
    	"email": email, 
    	"sex": sex, 
    	"ease": ease,
    	"notes": notes,
    	"dropdown": dropdown
    };
	console.log(item);
	$.couch.db("ASD1210").saveDoc(item, {
		success: function(data) {
			console.log(data);
			alert("Thank You, you have been added.");
			document.location.href = 'additem.html'; 
		},
		error: function(status) {
			console.log(status);
			alert("Error please try again.");
		}
	});
return false;

});

var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for(var pair in urlPairs){
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	return urlValues;
};


