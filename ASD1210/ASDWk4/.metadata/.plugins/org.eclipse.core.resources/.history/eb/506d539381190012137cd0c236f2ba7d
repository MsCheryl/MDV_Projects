
$(document).ready(function(){
	
	//***********some variables:
	var minList 			= ["Men", "Women", "Teens", "Children", "Seniors"];
	var sexVal, check1;
 	var cForm 				= $('#contactForm'); 
 	var iForm				=$('#infoForm');

 	function SS(value){
 		var element = document.getElementById(value);
 		return element;
 	}
 	
 
 	

 	var submitInfo 			= SS('send');
	var clearData 			= SS('clear');
	var preview 			= SS('show');
	var slideVal 			= SS('sliderBar');
	var noteBox 			= SS('notes');
	

	$('#notes').bind("change", function() {
		var noteBox = $('#messageBlock');
        console.log("box checked");
        SS('messageBlock').style.display = 'block';
    });
	
	
	
	function saveData (info){
	console.log(info);
	};


 	 cForm.validate({
 
 	 	invalidHandler: function(form, validator){
 	 		//errorHandle.click();
 	 		var html 			= "";
 	 		console.log(validator.submitted);
 	 		for(var key in validator.submitted){
 	 			var label 			= $('label[for^="' + key + '"]');
 	 			var legend 			= label.closest('fieldset').find('.ui-controlgroup-label');
 	 			var fieldName 	= label.length ? label.text() : legend.text();
 	 			if(legend.length){
 	 				fieldName =label.text(); 
 	 				console.log("label: " + fieldName);
 	 				console.log(legend.length);
 	 			}
 	 			
 	 			html += '<li>' + fieldName + '</li>';
 	 		};
 	 		
 	 	},
 	 	
 	 	submitHandler: function(){
 	 		var data = cForm.serializeArray();
 	 		saveData(data);
 	 }
 	 
 	 }); 
 	
//functions 
	
 //create select field
 	function createDrop (){
 		var formTag = document.getElementsByTagName("form"); //creates an array of all forms
 		var selectMin = SS('select');
 
 		selectMin.setAttribute("id", "groups");
 	
 	//populate  
 		for (var i = 0, j = minList.length; i < j; i++){
 			var makeOpt = document.createElement('option');
 			var opText = minList[i];
 			makeOpt.setAttribute("value", opText);
 			makeOpt.innerHTML = opText;
 			selectMin.appendChild(makeOpt);
 		}
 	}
 	 
 	 function getRadio(){
 		var radios = document.getElementById('contactForm').sex;
 		for(var i = 0; i < radios.length; i++){
 			if(radios[i].checked){
 				sexVal = radios[i].value;
 				console.log("the radio is worth: " + radios[i].value);
 			}
 		}	
 	}
 	
 	function getCheckBoxes(){
		var hasNotes = SS('notes');
		if(hasNotes.checked){
			check1 = hasNotes.value;
		}
		else{
			
		check1 = "No";
		}
 	}
 	
 	function toggleControls(n){
 		
 		switch(n){
 			case "on":
 			SS('contactForm').style.display = "none";
 			SS('send').style.display = "none";
 			SS('clear').style.display = "inline";
 			//SS('seeInfo').style.display = "block";
 			SS('previewInfo').style.display = "inline";
 				break;
 			case "off":
 			SS('items').style.display = "none";
 			SS('contactForm').style.display = "block";
 			SS('send').style.display = "inline";
 			SS('clear').style.display = "block";
 			//SS('addNew').style.display = "none";
 				break;
 			default: return false;
 		}
 	}
 	
 	function showData (){
 		toggleControls("on");
 		if (localStorage.length === 0){
 			alert("Loading JSON.");
 			localData();
 		}
 		else{
//first get from local storage to browser
 		 var makeDiv = document.getElementById('previewInfo');
 		 //oldDiv.appendChild(makeDiv);
 		 makeDiv.setAttribute("id", "items");
 		 makeDiv.setAttribute("data-role", "content");
 		 var makeList = document.createElement('ul');		
 		 makeList.setAttribute("data-role", "listview");
 		 makeList.setAttribute("data-inset", "true");
 		 makeList.setAttribute("data-filter", "true");
 		 
 		 makeDiv.appendChild(makeList);
 		 $('#previewInfo').append(makeDiv);
 		 
 		 SS('items').style.display = "display"; //show list

 		 	for (var i = 0, len=localStorage.length; i < len; i++){
 		 		var makeLi = document.createElement('li');	//create a list item
 		 		var makeBR = document.createElement('br');
 		 		makeLi.appendChild(makeBR);
 		 		var linksLi = document.createElement('li');
 		 		makeList.appendChild(makeLi);						
 		 		var keyVal = localStorage.key(i);
 		 		var value = localStorage.getItem(keyVal);
 		 		console.log(keyVal);
 		 		var obj = JSON.parse(value); 					
 		 		var makeSubList = document.createElement('ul');
 		 		makeLi.appendChild(makeSubList);
 		 	
 		 	//pic for each item
 		 		//getImage(obj.group[1], makeSubList);
 		 		var newsList = [];
 		 		for (var n in obj){
 		 			// var optSubText = obj[n][0];
 		 			// console.log("optSubText: " + optSubText);
 		 			// if(optSubText == "Birthday: "){
 		 				// if
 		 			// }
 		 			newsList.push(obj[n]);
 		 		}
 		 		newsList.sort(sortNumber);
 		 		for (var o in obj){
 		 			
 		 		}

 		 	
 		 		for (var j = 0; j < newsList.length; j++){
 		 			console.log("The array is: " + newsList);
 		 			var makeSubli = document.createElement('li');
 		 			makeSubList.appendChild(makeSubli);
 		 			var optSubText = newsList[j][0]+" "+newsList[j][1];  //separate the label with the value
 		 			console.log(newsList[j][1]);
 		 			makeSubli.innerHTML = optSubText;
 		 			makeSubli.appendChild(linksLi);	
 		 		}
 		 	//create edit/delete buttons for each group of data
 		 	makeItemLinks(localStorage.key(i), linksLi);
 			}
 		}
 	}
 	
 	function localData(){
 		for(var j in json){
 		var id = Math.floor(Math.random()*9999999);
 		localStorage.setItem(id, JSON.stringify(json[j]));
 		}
 		showData();
 	} 
 	
 	function storeData (key){
 		//if theres no key, create new id
 		console.log("storing the data");
 		var id;
 		if(!key){
 			id = Math.floor(Math.random()*9999999);
 		}
 		//if there is a key, set the id to the key to overwrite
 		else{
 			id = key;
 		}
 		console.log(id);
 		//gather form field values and store in object
 		//object props contain array with form label and input val
 		getRadio();
 		getCheckBoxes();
 		var item 				= {};
 		
 			  item.group		= ["Ministry Interest: ", SS('groups').value]; 		//ministry interest
 			  item.fname		= ["First Name: ", SS('fName').value]; 				//first name
 			  item.lname		= ["Last Name: ", SS('lName').value]; 				//last name
 			  item.bday			= ["Birthday: ", SS('bday').value]; 				//birthday
 			  item.slider		= ["Ease of Use: ", SS('sliderBar').value]; 		//ease of Use
 			  item.notes		= ["Additional Info?: ", check1];					//additional info
 			  item.sex			= ["Gender: ", sexVal];								//gender
 			  item.comment		= ["Message: ", SS('message').value];				//extra notes

 		//save to local storage: use stringify to convert our obj to string (only strings can be saved)
 		localStorage.setItem(id, JSON.stringify(item));
 		alert("Form Submitted");
 	}
 	
 	function noNulls(value){ //if the value is null, change string
 		if (value === ""){
 			return "No response given";
 		}
 		else{
 		return value;
 		}
 	}	
 	
 	function getImage(catName, makeSubList){
 		console.log("Ministry Interest: " + catName);
 		var imageLi = document.createElement('li');
 		makeSubList.appendChild(imageLi); //makeSublist is from showData()
 		var newImg = document.createElement('img');
 		var setSource = newImg.setAttribute('src', "images/" + catName + ".png");
 		imageLi.appendChild(newImg);
 	}
 	
 	//create edit/delete links for each stored rating
 	function makeItemLinks(key, linksLi){
 		//add edit single item
 		var editLink = document.createElement('a');
 		editLink.href = "#";
 		editLink.key = key;
 		var editText = "Edit Info";
 		editLink.addEventListener("click", editForm); //listen for click
 		editLink.innerHTML = editText;		//add text for link
 		linksLi.appendChild(editLink);		//add our button to the bottom of our shown information

	//add line break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
 		
 		var deleteLink = document.createElement('a');
 		deleteLink.href = "#";
 		deleteLink.key = key;
 		var deleteText = "Delete Your Info";
 		deleteLink.addEventListener("click", deleteItem);
 		deleteLink.innerHTML = deleteText;		//add text for link
 		linksLi.appendChild(deleteLink);		//add our button to the bottom of our shown information
 	}
 	
 	function deleteItem(){
 		var ask = confirm("Are you sure you would like to remove your information?");
 		if(ask){//if the user clicked "ok"
 			localStorage.removeItem(this.key); //deleteItem has access to key through makeItemLink
 			alert("Info deleted");
 			window.location.reload();
 		}
 		else{
 			alert("Your information was NOT deleted");
 		}
 	}
 	
 	function editForm(){
 		
 		//grab item from local store to populate fields with what's in memory'
 		var value = localStorage.getItem(this.key);
 		var item = JSON.parse(value);
		toggleControls("off");
 		//populate fields with local storage
 		SS('groups').value = item.group[1];
 		SS('fName').value = item.fname[1];
 		SS('lName').value = item.lname[1];
 		SS('bday').value = item.bday[1];
 		SS('sliderBar').value = item.slider[1];
 		SS('message').value = item.comment[1];
 		var radios = document.getElementById('contactForm').lifeGroup;
 		for (var i = 0; i < radios.length; i++){
 			if(radios[i].value == "Yes" && item.sex[1] == "Yes"){
 				radios[i].setAttribute("checked", "checked");
 			}
 			else if(radios[i].value == "No" && item.sex[1] == "No"){
 				radios[i].setAttribute("checked", "checked");
 			}
 		}
 		
 		if(item.notes[1] == "Yes"){
 				SS('notes').setAttribute("checked", "checked");	
 			}

 			
 		console.log("Working");
 		//remove the listener from the submit button when in edit mode
 		submitInfo.removeEventListener("click", storeData);
 		//change the button to read "save"
 		SS('send').value = "Save";
 		//save the key value established in this function as a property to overwrite info instead of add new
 		var editSubmit = SS('send');
 		//editSubmit.addEventListener("click", validate);
 		editSubmit.key = this.key;
 	}
 	
 	function clearLocal(){
 		if (localStorage.length === 0){
 			alert("Local Storage is ALREADY clear");
 		}
 		else{
 			localStorage.clear();
 			alert("Local Storage has been DELETED");
 			window.location.reload();
 			return false;
 		}
 	}
 	
	function sortNumber(a,b){
		
		if(a[0] === "Birthday: "){
			console.log("........................" + a[0]);
			return a[1]-b[1];
		}
		return;
	}

	//******************************Make some things happen!!
	createDrop();
	clearData.addEventListener("click", clearLocal);
	preview.addEventListener("click", showData);
	cForm.validate();
	
});