/**
Cheryl Ferguson MiU 1206

 */
window.addEventListener("DOMContentLoaded", function() {

	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}

	function makeList() {
		var formTag = document.getElementsByTagName("form");
		var selectLi = $("select");
		var makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "dropdown");
		for(var i = 0, j = ministries.length; i < j; i++) {
			var makeOption = document.createElement("option");
			var optText = ministries[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	function getradio() {
		var radio = document.forms[0].sex;
		for(var i = 0; i < radio.length; i++) {
			if(radio[i].checked) {
				sexval = radio[i].value;
			}
		}

	}

	function getcheckval() {
		if($("checkbox-1").checked) {
			baptizedval = $("checkbox-1").value;
		} else {
			baptizedval = "No"
		}
	}

	function toggleControls(n) {
		switch(n) {
			case "on":
				$('minform').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addnew').style.display = "inline";
				break;
			case "off":
				$('minform').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addnew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}

	function storeData(key) {
		if(!key) {
			var id = Math.floor(Math.random() * 100000001);
		} else {
			id = key;
		}
		getradio();
		getcheckval();
		var item = {};
			item.fname = ["First Name:", $("fname").value];
			item.lname = ["Last Name:", $("lname").value];
			item.email = ["Email:", $("email").value];
			item.tel = ["Phone Number:", $("tel").value];
			item.radios = ["Sex:", sexval];
			item.group = ["Ministry:", $("dropdown").value];
			
		localStorage.setItem(id, JSON.stringify(item));
		alert("Data submitted");
	}

	function getData() {
		toggleControls("on")
		if(localStorage.length === 0) {
			autofilldata();
			alert("There is no data in local storage, default data was added.");
		}
		var makediv = document.createElement("div");
		makediv.setAttribute("id", "items");
		var makelist = document.createElement("ul");
		makediv.appendChild(createlist);
		document.body.appendChild(makediv);
		$("items").style.display = "block";
		for(var i = 0, len = localStorage.length; i < len; i++) {
			var makeli = document.createElement("li");
			var linksli = document.createElement("li");
			makelist.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makesublist = document.createElement("ul");
			makeli.appendChild(makesublist);
			
			getimage(obj.dropdown[1], makesublist);
			for(var n in obj) {
				var makesubli = document.createElement("li");
				makesublist.appendChild(makesubli);
				var optsubtext = obj[n][0] + " " + obj[n][1];
				makesubli.innerHTML = optsubtext;
				makesubli.appendChild(linksli);
			}
			makeitemlinks(localStorage.key(i), linksli);
		}
	}

	function getimage(catname, makesublist) {
		var imageli = document.createElement("li");
		makesublist.appendChild(imageli);
		var newimg = document.createElement("img");
		var setsrc = newimg.setAttribute("src", "img/" + catname + ".png");
		imageli.appendChild(newimg);
	}


	function makeitemlinks(key, linksli) {
		var editlink = document.createElement('a');
		editlink.href = "#";
		editlink.key = key;
		var edittext = "Edit Contact";
		editlink.addEventListener("click", edititem);
		editlink.innerHTML = edittext;
		linksli.appendChild(editlink);

		var breaktag = document.createElement("br");
		linksli.appendChild(breaktag);

		var dellink = document.createElement("a");
		dellink.href = "#";
		dellink.key = key;
		var deltext = "Delete Contact";
		dellink.addEventListener("click", delitem);
		dellink.innerHTML = deltext;
		linksli.appendChild(dellink);

	}

	function edititem() {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		toggleControls("off");

		$("fname").value = item.fname[1];
		$("lname").value = item.lname[1];
		$("email").value = item.email[1];
		$("tel").value = item.tel[1];
		
		var radios = document.forms[0].sex;
		for(var i = 0; i < radios.length; i++) {
			if(radios[i].value == "male" && item.radios[1] == "male") {
				radios[i].setAttribute("checked", "checked");
			} else if(radios[i].value == "female" && item.radios[1] == "female") {
				radios[i].setAttribute("checked", "checked");
			}
		}
		$("dropdown").value = item.dropdown[1];
		$("ease").value = item.ease[1];
		if(item.baptized[1] == "yes") {
			$("baptized").setAttribute("checked", "checked");
		}
		$("checkbox-1").value = item.baptized[1];
		$("story").value = item.story[1];

		save.removeEventListener("click", storeData);

		$("submit").value = "Edit Contact";
		var editsubmit = $("submit");
		editsubmit.addEventListener("click", validate);
		editsubmit.key = this.key;

	}

	function delitem() {
		var ask = confirm("Are you sure?");
		if(ask) {
			localStorage.removeItem(this.key);
			alert("Item Deleted.")
			window.location.reload();
		} else {
			alert("Item Not Deleted.")
		}
	}

	function clearLocal() {
		if(localStorage.length === 0) {
			alert("Local storage is empty.");
		} else {
			localStorage.clear();
			alert("Local storage Cleared.")
			window.location.reload();
			return false;
		}
	}


	function validate(e) {
		var getgroup = $("dropdown");
		var getfname = $("fname");
		var getlname = $("lname");
		var getemail = $("email");

	errmsg.innerHTML = "";
		getgroup.style.border = "1px solid black";
		getfname.style.border = "1px solid black";
		getlname.style.border = "1px solid black";
		getemail.style.border = "1px solid black";

		var messagearray = [];
		if(getfname.value === "") {
			var fnameerror = "First Name is REQUIRED.";
			getfname.style.border = "4px solid red";
			messagearray.push(fnameerror);
		}
		if(getlname.value === "") {
			var lnameerror = "Last Name is REQUIRED.";
			getlname.style.border = "4px solid red";
			messagearray.push(lnameerror);
		}
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!(re.exec(getemail.value))) {
			var emailerror = "A Valid Email Address is REQUIRED.";
			getemail.style.border = "4px solid red";
			messagearray.push(emailerror);
		}
		var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if(!(re.exec(gettel.value))) {
			var telerror = "A Valid Phone Number is REQUIRED.";
			gettel.style.border = "4px solid red";
			messagearray.push(telerror);
		}
		if(messagearray.length >= 1) {
			for(var i = 0, j = messagearray.length; i < j; i++) {
				var text = document.createElement("li");
				text.innerHTML = messagearray[i];
				errmsg.appendChild(text);
			}
			e.preventDefault();
			return false;
		} else {
			storeData(this.key);
		}

	}
	
	var sexval;
	var baptizedval = "No", errmsg = $("errors");


	var save = $("submit");

//Set click events
	submit.addEventListener("click", validate);
	clearLink.addEventListener("click", clearLocal);
	//displayLink.addEventListener("click", getData);

});

$("#minsignup").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});
