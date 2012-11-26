

$('#home').on('pageinit', function(){
    //code needed for home page goes here

 	$('#additem').click(function(){
		confirm ("Are you sure you would like to add your information?");
	});//code for page

$( '#remoteData' ).on( 'pageinit', function () {
    console.log("Loading remote data...");//see if info is loading


    $( '#jsonData' ).on( 'click', function () {
    $('#memberLogList').empty();
    $.ajax( {
        url:        'data/data.json',
        type:       'GET',
        dataType:   'json',
        success:    function ( info ) {
            console.log(json,memberLog);
              $.each(json.memberLog, function(i, memberLog){  
             
				    var makeli = $("<li id='memEntry"+i+"'></li>");
				    var optSubText = $( "<img src='images/"+memberLog.greeting[1]+".png'/>"+
		    				"<h3>"+memberLog.date[1]+"</h3>"+
		    				"<p>"+memberLog.fullName[0]+" "+memberLog.fullName[1]+"</p>"+
		    				"<p>"+memberLog.spouseName[0]+" "+memberLog.spouseName[1]+"</p>"+
		    				"<p>"+memberLog.gender[0]+" "+memberLog.gender[1]+"</p>"+
		    				"<p>"+memberLog.kids[0]+" "+memberLog.kids[1]+"</p>"+
		    				"<p>"+memberLog.comments[0]+" "+memberLog.comments[1]+"</p>");
		    			
		    			var editLink = $("<a href='#additem' id='edit"+i+"'> Edit entry</a>");
		    				editLink.on('click', function(){
		    					editItem(this.id);

		    				});
		    			var deleteLink = $("<a href='#list' id='delete"+i+"'>Delete Item</a>");
		    				deleteLink.on('click', function(){
		    					deleteItem(this.id);
		    				});
		    			
		    			editLink.html(optSubText);
		    			makeli.append(editLink, deleteLink).appendTo("#memberLogList");
				    
				 	});
				
		   		
		    },
		    error: function(){
		    	alert("Probelm with JSON");
		    }
		});
		$("#memberLogList").listview("refresh");
	});
    
//XML Data
$( '#xmlData' ).on( 'click', function() {
    console.log("calling XML Data");
    $('#memberLogList').empty();
    $('<p>').html('importing XML').appendTo('#memberLogList');
    $.ajax( {
        url: 'data/data.xml',
        type: 'GET',
        dataType: 'xml',
        success:function ( info ) {
            console.log("waiting for xml...");
            $(info).find("item").each(function(){
            	var item = $(this);
                var greetings = $(this).find('greetings').text();
                var fullname = $(this).find('fullName').text();
   				var gender = $(this).find('gender').text();
   				var kids = $(this).find('kids').text();
   				var date = $(this).find('date').text();
   				var notes = $(this).find('notes').text();
    			$(''+
					'<div class="members">'+
						'<h3>Greetings: '+ greetings +'</h3>'+
						'<p>Full Name:' + fullName +'</p>'+
						'<p>Email:' + email +'</p>'+
						'<p>Date: '+ date +'</p>'+
						'<p>Phone Number: '+ pn +'</p>'+
						'<p>Gender: '+ gender +'</p>'+
						'<p>Kids: '+ kids +'</p>'+
						'<p>Notes: '+ notes +'</p>'+
					'</div>'
				).appendTo('#memberLogList');
				console.log(info);
			});
			}
		});
		return false;
	});
	$("#memberLogList").listview("refresh");
});

//CSV Date
$( '#csvData' ).on( 'click', function() {
    $('#memberLogList').empty();
    $('<p>').html('importing CSV').appendTo('#memberLogList');
    $.ajax( {
        url: 'data/data.csv',
        type: 'GET',
        dataType: 'text',
        success:function (data) {
            var lines = data.split(/\r\n|\n/);
            var headers = lines[0].split(',');
    		var allItems = [ ]; 
    		
            for (var i=1; i<lines.length; i++) {
				var data = lines[i].split(',');
				if (data.length == headers.length) {
					var memberLog = [ ];  

					for (var j=0; j<headers.length; j++) {
						memberLog.push(data[j]); 
					}
					lines.push(memberLog); 
				}

			}
            for (var m=0; m<allItems.length; m++){
				var people = allItems[m];
			$(''+
					'<div class="lyrictitle">'+
						'<h3>'+'Greetings: '+ people[0] +'</h3>'+
						'<p>'+'Full Name: '+ people[1] +'</p>'+
						'<p>'+'Email: '+ people[2] +'</p>'+
						'<p>'+'Date: '+ people[3] +'</p>'+
						'<p>'+'Gender: '+ people[4] +'</p>'+
						'<p>'+'Kids: '+ people[5] +'</p>'+
						'<p>'+'Notes:'+ people[6] +'</p>'+
					'</div>'
				).appendTo('#memberData');
			console.log(allItems);	
			}
        }
	});
	return false;
});//end    




$('#yamlData').on("click", function () {
        $("#memberLogList").empty();
        YAML.fromURL("data/data.yaml",function(yaml){
        	console.log("Loading YAML....");
                var entryItems = {}
                $.extend(entryItems, yaml);
                console.log(entryItems);
                $.each(entryItems, function (i, entryItem) {


                    var makeli = $("<li id='listItem" + i + "'></li>");
                    var optSubText = $("<img src='images/" + entryItem.greetings + ".png'/>" +

                        "<p>" + "Greeting: " + " " + entryItem.greetings + "</p>" +
                        "<p>" + "First Name: " + " " + entryItem.firstName + "</p>" +
                        "<p>" + "Last Name: " + " " + entryItem.LastName + "</p>" +
                        "<p>" + "Gender: " + " " + entryItem.gender + "</p>" +
                        "<p>" + "Kids: " + " " + entryItem.kids + "</p>" +
                        "<p>" + "Date: " + " " + entryItem.date + "</p>" +
                        "<p>" + "Notes: " + " " + entryItem.notes + "</p>");

                });
                $("#memberLogList").listview('refresh');
            },
            //error: function(){
                console.log("problems?")
            //}
        //});
//});

	$( "#additem" ).on( "pageinit",function(){
		
		$( "#additem" ).validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			storeData(this.id);
		)}
	});
	
};	 	
	 	// Save Data
	$('#submit').live('click', function saveData(id) {
	    var l = new Date();
	    var key = (l.getTime());
	    var greetings = $("#greetings").val();
	    var fullname = $("#fullname");
	    var email = $("#email").val();
	    var pn = $("pn").val();
	    var date = $("#date").val();
	    var gender;
	    if ($('#gender').is(":checked")){
	    gender = "Male";
	    }else{
	    gender = "Female";
	    }
	    var kids = $("#kidRange").val();
	    var notes = $("#notes").val();
	    var item = [greetings, fullname,  gender, date, kidRange, notes];
	    
	    localStorage.setItem(key, item);
	    location.reload();
	    alert("Entry Saved!");
	    
	}); 
	
	
	//Get Data
	
	$('#displayData').live('click', function getData() {
	    toggleControls("on");
	    var getListdiv = $('#list')[0];
	    for (var i = 0, j = localStorage.length; i< j; i++) {
	        var key = localStorage.key(i);
	        var value = localStorage.getItem(key);
	        value = value.split(',');
	
	        $('<div>').attr({'class': 'listDiv'}).appendTo('#list');
	        $('<h3>').html(value[0]).appendTo('.listDiv');
	        $('<p>').html('Full Name:' + value [1]).appendTo('.listDiv');
	        $('<p>').html('Greetings: ' + value[2]).appendTo('.listDiv');
	        $('<p>').html('Gender: ' + value[3]).appendTo('.listDiv');
	        $('<p>').html('Kids: ' + value[4]).appendTo('.listDiv');
	        $('<p>').html('Date: ' + value[5]).appendTo('.listDiv');
	        $('<p>').html('Notes: ' + value[6]).appendTo('.listDiv');
	        $('<p>').html($('<a>').attr({'href': '#','onclick': 'clearData(' + key + ');'}).html('Delete Entry')).appendTo('.listDiv');
	        $('<p>').html($('<a>').attr({'href': '#','onclick': 'editData(' + key + ');'}).html('Edit Entry')).appendTo('.listDiv');
	
	    }
	});
	
	
	//Edit Data
	
	function editItem(id) {
	    var itemId = id;
	    var value = localStorage.getItem(itemId);
	    value = value.split(',');
	    toggleControls("off");
	    var greetings = value[0];
	    var fullname = value[1];
	    var email = value[2];
	    var pn = value[3];
	    var gender;
	    var kids = value[4];
	    var date = value[1];
	    var notes = value[5];
	
	    $('#greetings').val(greetings);
	    $('#fullname').val(fullname);
	    $('#email').val(email);
	    $('#pn').val(pn);
	    if ($('#gender').is(":checked")){
	    gender = "Male";
	    }else{
	    gender = "Female";
	    }
	    $('#kids').val(kids);
	    $('#date').val(date);
	    $('#notes').val(notes);
	
	    // show edit button
	    var editButton = $('#edit').css('display', 'block');
	    var submitButton = $('#submit').css('display', 'none');
	    var itemList = $('#list').css('display', 'none');

$("#list").on ('pageinit', function(){	    
	
	    // when clicking editItem button
	    $('#edit').live('click', function clickEdit() {
	        var menu = $('#greetings').val();
	        var name = $('#fullname').val();
	        var email = $('#email').val();
	        var pn = $('#pn').val();
	        var gender;
	        if ($('#gender').is(":checked")){
	        gender = "Male";
	        }else{
	        gender = "Female";
	        }
	        var kids = $('#kids').val(); 
	        var date = $('#date').val();
	        var notes = $('#notes').val();
	        var item = [
	        greetings, fullname, date,  gender, kids, notes];
	     
	        localStorage.setItem(itemId, item);           
	        location.reload();
	        alert("You have successfully edited this entry.");
	        
	    });
	
	}
	
	
	//Delete Data
	
	function deleteItem(id) {
	    var ask = confirm("You are about to DELETE this entry.");
	    if (ask) {
	        localStorage.removeItem(id);
	        window.location.reload();
	    } else {
	        alert("Entries have NOT been removed.");
	    };
	};
	
	
	//Clear Data
	
	function clearLocal() {
	    if (localStorage.length === 0) {
	        alert("There are NO SAVED entries.");
	    } else {
	        localStorage.clear();
	        alert("All entries have been removed!");
	        window.location.reload();
	        return false;
	    };
	  };  
	};
	$("#clear").on("click",clearData);
	
});	
	
	 //Set link and submit click events
	/* $("#displayData").bind('click', Main.onDisplayDataTapped);
	  $("#clearData").bind('click', Data.deleteData);
	  $("#saveData").bind('click', Form.validate);
	  $("#displayJSON").bind('click', Data.getJSON);
	  $("#displayXML").bind('click', Data.getXML);
	  $("#displayCSV").bind('click', Data.getCSV);*/
	
	
		
		
		
		
		
	
	  /*  var myForm = $( '#memberForm' );
	    myForm.validate({
	        invalidHandler: function( form, validator ) {
	        },
	        submitHandler: function() {
	            storeData();
	        }
	    });
	
	
	    $( '#displayData' ).on( 'click', getData );
	    $( '#clearData'   ).on( 'click', clearLocal );
	    $( '#addNew'      ).on( 'click', windowReload );
	
	});
	
	
	
	var autoFillData = function (){
	    for ( var n in json )
	    {
	        var id = Math.floor( Math.random()*10001 );
	        localStorage.setItem( id, JSON.stringify( json[n] ) );
	    }
	};
	
	var getData = function(){
	    toggleControls( "on" );
	    if( localStorage.length === 0 )
	    {
	        alert( "There are no saved entries, default data will be used." );
	        autoFillData();
	    }
	    console.log("Getting Data!");
	
	    var makeDiv  = document.createElement( 'div' );
	    makeDiv.setAttribute( "id", "items" );
	    var makeList = document.createElement( 'ul' );
	    makeDiv.appendChild( makeList );
	    $( '#showData' ).append( makeDiv );
	    //document.body.appendChild( makeDiv );
	    //$( 'items' ).style.display = "block";
	    for( var i = 0, len = localStorage.length; i < len; i++ )
	    {
	        var makeli      = document.createElement( 'li' );
	        var linksLi     = document.createElement( 'li' );
	        makeList.appendChild( makeli );
	        var key         = localStorage.key( i );
	        var value       = localStorage.getItem( key );
	        var obj         = JSON.parse( value );
	        var makeSubList = document.createElement( 'ul' );
	        makeli.appendChild( makeSubList );
	        getImage( obj.greeting[1], makeSubList );  //get images
	        for( var n in obj )
	        {
	            var makeSubli    = document.createElement( 'li' );
	            makeSubList.appendChild( makeSubli );
	            var optSubText   = obj[n][0] + " " + obj[n][1];
	            makeSubli.innerHTML = optSubText;
	            makeSubList.appendChild( linksLi );
	        }
	        makeItemLinks( localStorage.key( i ), linksLi );
	    }
	};
	
	var storeData = function( key ){
	
	    var id;
	
	    if ( !key )
	    {
	        var id     = Math.floor( Math.random() * 10001 );
	    }
	    else
	    {
	        id         = key;
	    }
	
	    var item       = {};
	
	    item.greetings    = ["Greeting:",           $( '#greetings' ).val()];
	    item.fullname     = ["Full Name:",          $( '#fullname' ).val()];
	    item.email        = ["Email:",              $( '#email').val()];
	    item.kids         = ["Kids:",               $( '#kids' ).val()];
	    item.gender       = ["Gender:",             $( 'input[name=gender]:checked', '#memberForm' ).val()];
	    item.date         = ["Birthday:",            $( '#date' ).val()];
	    item.notes        = ["Notes",               $( '#notes' ).val()];
	
	    localStorage.setItem( id, JSON.stringify( item ) );
	    alert( "Entry Added!" );
	};
	
	var    deleteItem = function (){
	    var ask = confirm( "Are you sure? This can NOT be undone." );
	    if (ask)
	    {
	        localStorage.removeItem( this.key );
	        window.location.reload();
	        alert( "Entry deleted!" );
	    }
	    else
	    {
	        alert( "Entry NOT deleted." );
	    }
	};
	
	var clearLocal = function(){
	    if( localStorage.length === 0 ){
	        alert( "No SAVED entries." );
	    }else{
	        localStorage.clear();
	        alert( "Are you sure? This will remove all entries" );
	        window.location.reload();
	        return false;
	    }
	};
	
	// Get the image depending on what value was selected.
	function getImage(greeting, makeSubList) {
	    var imageLi = document.createElement('li');
	    makeSubList.appendChild(imageLi);
	    var newImg = document.createElement('img');
	    var setSrc = newImg.setAttribute("src", "images/" + greeting + "png");
	    console.log("The greeting is: " + greeting);
	    imageLi.appendChild(newImg);
	}
	
	
	
	var windowReload = function () {
	    window.location.reload();
	    return false;
	};
	
	
	var editItem = function () {
	    var value = localStorage.getItem(this.key);
	    var item = JSON.parse(value);
	
	    toggleControls("off");
	
	    $('#greetings').val(item.greetings[1]);
	    $('#fullname').val(item.fullname[1]);
	    $('#email').val(item.email[1]);
	    $('#kids').val(item.kids[1]);
	    $('#gender').val(item.gender[1]);
	    $('#date').val(item.date[1]);
	    $('#notes').val(item.notes[1]);
	
	    thiskey = this.key;
	    $('#submit').on('click', storeData(thiskey));
	};
	
	function makeItemLinks( key, linksLi ){
	
	    var editLink         = document.createElement( 'n' );
	    editLink.href        = "#";
	    editLink.key         = key;
	    var editText         = "Edit Entry";
	    editLink.addEventListener( "click", editItem );
	    editLink.innerHTML   = editText;
	    linksLi.appendChild( editLink );
	
	    var breakTag         = document.createElement( 'br' );
	    linksLi.appendChild( breakTag );
	
	    var deleteLink       = document.createElement( 'n' );
	    deleteLink.href      = "#";
	    deleteLink.key       = key;
	    var deleteText       = "Delete Entry";
	    deleteLink.addEventListener( "click", deleteItem );
	    deleteLink.innerHTML = deleteText;
	    linksLi.appendChild( deleteLink );
	    
	    
	    
	  $("#displayData").bind('click', Main.onDisplayDataTapped);
	  $("#clearData").bind('click', Data.deleteData);
	  $("#saveData").bind('click', Form.validate);
	  $("#displayJSON").bind('click', Data.getJSON);
	  $("#displayXML").bind('click', Data.getXML);
	  $("#displayCSV").bind('click', Data.getCSV);
	  
	  Main.showData();
	
)};*/