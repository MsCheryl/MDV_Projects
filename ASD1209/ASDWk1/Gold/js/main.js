$('#index').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){

		var myForm = $( '#memberForm' );
		    myForm.validate({
			invalidHandler: function( form, validator ) {
			},
			submitHandler: function() {
			storeData();
		}
	});
	
	//any other code needed for addItem page goes here
	$( '#displayData' ).on( 'click', getData );
	$( '#clearData'   ).on( 'click', clearLocal );
	$( '#addNew'      ).on( 'click', windowReload );
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

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
		item.date         = ["Birthday:",        	$( '#date' ).val()];
		item.notes        = ["Notes",               $( '#notes' ).val()];
		
		localStorage.setItem( id, JSON.stringify( item ) );
		alert( "Entry Added!" );
}; 

var	deleteItem = function (){
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



var windowReload = function(){
		window.location.reload();
		return false;
}

function toggleControls( n )
	{
		switch( n )
		{
			case "on":
				$( '#memberForm' ).toggle( "hide" );
				//$( '#clearData' ).toggle( "show" );
				$( '#displayData' ).toggle( "hide" );
				$( '#addNew' ).removeClass( "ui-disabled" );
                $( '#spouseName').toggle( "hide");
				break;
				
			case "off":
				$( '#memberForm' ).toggle( "show" );
				//$( '#clearData' ).toggle( "show" );
				$( '#displayData' ).toggle( "show" );
				$( '#addNew' ).addClass( "ui-disabled" );
				$( '#items' ).toggle( "hide" );
                $( '#spouseName').toggle("show");
				break;
				
			default:
				return false;	
		}
	}

var editItem = function()
	{
		var value = localStorage.getItem( this.key );
		var item  = JSON.parse( value );
		
		toggleControls( "off" );
		
		$( '#greetings' ).val( item.greetings[1] );
		$( '#fullname' ).val( item.fullname[1] );
        $( '#email').val(item.email[1] );
		$( '#kids' ).val( item.kids[1] );
		$( '#gender' ).val( item.gender[1] );
		$( '#date' ).val( item.date[1] );
		$( '#notes' ).val( item.notes[1] );
		
		thiskey         = this.key;
		$( '#submit' ).on( 'click', storeData( thiskey ) );
	}
	
function makeItemLinks( key, linksLi )
	{

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
	}