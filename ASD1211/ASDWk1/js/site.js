

		
$('#json').bind('click', function(){
	$('#browse').empty();
	$.ajax({
		url: 'data.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
        	for (var i=0, j=response.membership.length; i<j; i++){
				var jdata = response.membership[i];
				$(''+
					'<li class="members">'+
						'<h2>'+ jdata.greeting +'</h2>'+
						'<h3>'+ jdata.fname +" " + jdata.lname + '</h3>'+
						'<h4>'+ jdata.email +'</h4>'+
						
					'</li><hr/>'
				).appendTo('#browse');
				console.log(response);
			}
		}
	});
	return false;
});


   $('#xml').bind('click', function(){
	$('#browse').empty();
	$.ajax({
		url: 'data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
			$(xml).find("men").each(function(){
				var greet = $(this).find('greet').text();
   				var name = $(this).find('fname').text()+" "+ $(this).find('lname').text() ;
   				var email= $(this).find('email').text();
				
    			$(''+
					'<li class="member">'+
						'<h2>'+ greet+'</h2>'+					
						'<h3>'+ name+'</h3>'+
						'<h4>'+ email +'</h4>'+			

						
					'</li><hr />'
				).appendTo('#browse');
				console.log(xml);
			});
		}
	});
	return false;
});

	$('#csv').bind('click', function(){
	$('#browse').empty();
	 $.ajax({
        type: "GET",
        url: "data.csv",
        dataType: "text",
        success: function(data) {
        	var allTextLines = data.split(/\r\n|\n/);
    		var headers = allTextLines[0].split(',');
    		var lines = []; 

			for (var i=1; i<allTextLines.length; i++) {
				var data = allTextLines[i].split(',');
				if (data.length == headers.length) {
					var members= []; 
					
					for (var j=0; j<headers.length; j++) {
						members.push(data[j]);
					}
					lines.push(members); 
				}
				
			}
			
			for (var m=0; m<lines.length; m++){
				var member = lines[m];
			$(''+
					'<li class="members">'+
						'<h2>'+ member[0]+" " + member[1] +'</h2>'+
						'<h4>'+ member[5] +'</h4>'+
						'<h4>'+ member[2] +'</h4>'+
						'<h4>'+ member[3] +'</h4>'+
					'</li><hr />'
				).appendTo('#browse');
			console.log(data);	
			}
        }
	});
	return false;
});

		
		
		
		
