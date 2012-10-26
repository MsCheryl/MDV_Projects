

$(document).ready(function(){
	$('#membership').live('click', function(){
		$('#browse').empty();
	$.ajax({
		"url":"_view/membership",
		"dataType":"json",
		"success": function(data){
			console.log(data);
			$.each(data.rows, function(index,member){
				var fname=member.value.fname;
				var lname=member.value.lname;
				var email=member.value.email;
				var sex=member.value.sex;
				var notes=member.value.memtype;
				$('#couchdata').append(
					$('<p>').append(
						$('<a>').attr("href","#")
							.text(fname+" "+lname)
					)
				);
			});
			$("#couchdata").listview('refresh');
		}
		
	});
	
});



	$('#ministry').live('click', function(){
		$('#browse').empty();
	$.ajax({
		"url":"_view/ministry",
		"dataType":"json",
		"success": function(data){
			console.log(data);
			$.each(data.rows, function(index,min){
				var fname=min.value.fname;
				var lname=min.value.lname;
				var email=min.value.email;
				var sex=min.value.sex;
				var notes=min.value.memtype;
				$('#couchdata').append(
					$('<p>').append(
						$('<a>').attr("href","#")
							.text(fname+" "+lname)
					)
				);
			});
			$("#couchdata").listview('refresh');
		}
		
	});
	
});

});