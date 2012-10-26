


	$('#submit').live('click', function saveItems(id) {
			var d = new Date();
			var key = (d.getTime());
			var fname = $('#fname').val();
			var lname = $('#lname').val();
			var email = $('#email').val();
			if($('#male').attr('checked')){
				var sex = "Yes"
			}else{
				var sex = "No"
			}
			var ease = $('#ease').val();
			var notes = $('#notes:checked').val();
			if(notes == "on") {
				var notes = "Yes"
			} else {
				var notes = "No"
			}
			var dropdown = $('#dropdown').val();
			var allItems = [dropdown, fname, lname, email, sex, ease, notes];
			localStorage.setItem(key, allItems);
			location.reload();
			alert("Thank you, your information has been recieved.");
		
	});
	function clearData() {
			if(localStorage.length === 0) {
				alert("Local storage is empty.");
			} else {
				localStorage.clear();
				alert("Local storage has been cleared");
				return false;
			}
	}
	
	function getItems() {
			var getListdiv = $('#display')[0];
		
			for(var i = 0, len = localStorage.length; i < len; i++) {
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				value = value.split(',');
				var dropdown = value[0];
				var fname = value[1];
				var lname = value[2];
				var email = value[3];
				var sex = value[4];
				var ease = value[5];
				var notes = value[6];
				var newDiv = document.createElement("div");
		
				var newh3 = document.createElement("h3");
				
				var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
				$('<h3 />', {
					text : 'Greeting: ' + value[0]
				}).appendTo(newDiv);
				
				$('<p />', {
					text : value[1] +" "+ value[2]
				}).appendTo(newDiv);
				var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
		
				$('<p />', {
					text : 'Email: ' + value[3]
				}).appendTo(newDiv);
		
		
				$('<p />', {
					text : 'Sex: ' + value[4]
				}).appendTo(newDiv);
		
				$('<p />', {
					text : 'Ease of Use: ' + value[5]
				}).appendTo(newDiv);
		
				$('<p />', {
					text : 'Notes: ' + value[6]
				}).appendTo(newDiv);
		
				
		
				
				if(dropdown == "Mr") {
					minImage = "Mr.png";
				}
				if(dropdown == "Mrs") {
					minImage = "Mrs.png";
				}
				if(dropdown == "Ms") {
					minImage = "Ms.png";
				}
				if(dropdown == "Miss") {
					minImage = "Miss.png";
				}
				
		
				var newP = document.createElement("p");
				var newImg = document.createElement("IMAGES");
				newImg.setAttribute("src", "images/" );
				newP.appendChild(newImg);
				newDiv.appendChild(newP);
				
			$('<p><a href="#" onclick="deleteItem(' + key + ')">Delete Item</a></p>)').appendTo(newDiv);
				getListdiv.appendChild(newDiv);
				
			$('<p><a href="#" onclick="editItem(' + key + ')">Edit Item</a></p>)').appendTo(newDiv);
				getListdiv.appendChild(newDiv);
			}
		
			if(localStorage.getItem('appfname')) {
				var clearLink = $('#clear').css('display', 'block');
			} else {
				var dropdown= $('#dropdown').val(dropdown);
				var fname = "";
				var lname = "";
				var email = "";
				var sex = $('#sex').val(sex);
				var ease =$('#ease').val(ease);
				var notes = $('#notes').val(notes);
		
			}
		}
	
	function editItem(id) {
	
		var itemId = id;
		var value = localStorage.getItem(itemId);
		value = value.split(',');
		var dropdown = value[0];
		var fname = value[1];
		var lname = value[2];
		var email = value[3];
		var sex = value[4];
		var ease = value[5];
		var notes = value[6];
	
		$('#dropdown').val(dropdown);
		$('#fname').val(fname);
		$('#lname').val(lname);
		$('#email').val(email);
		if(sex == "Male") {
			$('#male').attr('checked', 'checked')
		}else{
			$('#female').attr('checked','checked')
		};
		$('#ease').val(ease);
		if(notes == "Yes") {
			$('#notes').attr('checked', 'checked');
			var editButton = $('#edit-item').css('display', 'block');
			var subresButtons = $('#subres').css('display', 'none');
			var itemList = $('#list').css('display', 'none');
	
			function clickEdit() {
			
				var dropdown = $('#dropdown').val();
				var fname = $('#fname').val();
				var lname = $('#lanme').val();
				var email = $('#email').val();
				var sex = $('#sex').val();
				var ease = $('#ease').val();
				if(notes == "Yes") {
					var notes = "Yes"
				} else {
					var notes = "No"
				}
				var allItems = [fname, lname, email, sex, ease, notes, dropdown];
				if(fname != " " && dropdown != " " && email != " ") {
					localStorage.setItem(itemId, allItems);
					alert("Entry Updated!");
					location.reload();
				} else {
					alert("These fields are REQUIRED.");
				}
			};
	
	
			$('#edit-item').bind('click', clickEdit); 
		}
	};
	
	
	$("#reset").live("click", function(e) {  
		e.preventDefault();
		clearData();
	});
	
	$("#displaybutton").bind("click", function() { 
		getItems([], "display");
		console.log("gathering information");
	
	});
	function deleteItem(id) {
		var ask = confirm("This can not be undone, are you sure?");
		if(ask) {
			localStorage.removeItem(id);
			window.location.reload();
		} else {
			alert("Entry not removed.");
		}
	}