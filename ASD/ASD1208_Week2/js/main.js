var parseLogItemForm = function(data){
    console.log(data);
    //alert("Welcome to MINISTRY N Motion!  Where we are on a mission to <em>Call the Capital to Christ!</em>);
};


$("#home").on("pageinit", function () {
	//code needed for home page goes here
});



$('#addinfoForm').on('pageinit', function(){

		$('#addinfoForm').validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
			storeData(this.id);
		}
	});
});

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
            item.email = ["Email:", $("#email").val()];
            item.greeting = ["Select Greeting:", $("#greeting").val()];
            item.comments = ["Comments:", $("#comments").val()];
            //Saving data into local storage using Stringify
        localStorage.setItem(id, JSON.stringify(item));
        alert("Log Saved!");

    };
        var getData = function(){
            if(localStorage.length === 0){
                alert("Local Storage is empty, so default data was added.");
                autoFillData();
            }
            //Write Data from Local Storage to the browser
            $("#itemList").empty();
            //Making list of items
            for(var i=0, len=localStorage.length; i<len;i++){
                var makeli = $("<li id='listItem"+i+"'></li>");
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                //converting from local storage value back to an object using JSON.parse()
                var obj = JSON.parse(localStorage.getItem(key));

                //creating item list
                var optSubText = $( "<img src='images/"+obj.greetings[1]+".png'/>"+
                    "<h3>"+obj.date[1]+"</h3>"+
                    "<h3>"+obj.submitTime[1]+"</h3>"+
                    "<p>"+obj.fname[0]+" "+obj.fname[1]+"</p>"+
                    "<p>"+obj.lname[0]+" "+obj.lname[1]+"</p>"+
                    "<p>"+obj.sex[0]+" "+obj.sex[1]+"</p>"+
                    "<p>"+obj.kidRange[0]+" "+obj.kidRange[1]+"</p>"+
                    "<p>"+obj.greetings[0]+" "+obj.greetings[1]+"</p>"+
                    "<p>"+obj.comments[0]+" "+obj.comments[1]+"</p>");
                //Creates Edit Link
                var editLink = $("<a href='#addinfoForm' id='edit"+key+"'> Edit Entry</a>");
                    editLink.on('click', function(){
                        editItem(this.id);

                });
            };
                //Creates Delete Link
                var deleteLink = $("<a href='#list' id='delete"+key+"'>Delete Item</a>");
                    deleteLink.on("click", function(){
                        deleteItem(this.id);
                });

                editLink.html(optSubText);
                makeli.append(editLink, deleteLink).appendTo("#registerList");
                };
            var deleteItem = function(){
            var ask = confirm("Are you sure?");
                if(ask){
                    localStorage.removeItem(key);
                    alert("Entry was deleted.");
                    $("#list").listview('refresh');
                    }else{
                        alert("Entry was NOT deleted.");
                    };

                };

    var autoFillData = function (){
                for(var n in json){
                    var id = Math.floor(Math.random()*100000001);
                    localStorage.setItem(id, JSON.stringify(json[n]));
                };

            };
        $("#submit").on("click", storeData);
        $("#display").on("click", getData);

var clearLocal = function () {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        var ask = confirm("Deleting ALL items? This can NOT be undone.");
        if (ask) {
            localStorage.clear();
            alert("All items are deleted!");
            $("#itemList").empty();
        } else {
            alert("Items were NOT deleted.");
        };
    };
};
    $("#list").on('pageinit', function(){

        //edit single item
        var editItem = function (id) {
            //get data from item in local storage
            var key = parseInt(id.match(/\d+/g));
            var item = JSON.parse(localStorage.getItem(key));
            //Populate the form with current local storage values.
            $("#fname").val(item.fname[1]);
            $("#lname").val(item.lname[1]);
            $("#date1").val(item.date[1]);
            $("#date2").val(item.date2[1]);
            $("#submitTime").val(item.submitTime[1]);
            $('input#' + item.sex[1].toLowerCase()).attr('checked', true).checkboxradio('refresh');
            $("#kidRange").val(item.kidRange[1]);
            $("#greetings").val(item.greetings[1]).selectmenu("refresh");
            $("#comments").val(item.comments[1]);
            //Change submit button value to edit button
            $("#addLogForm div form#additem div.ui-field-contain.ui-body.ui-br div.ui-btn.ui-shadow.ui-btn-corner-all.ui-fullsize.ui-btn-block.ui-btn-up-b span.ui-btn-inner.ui-btn-corner-all span.ui-btn-text").text("Save Log Edit");
            //Save the key value established in this function as a property of #additem
            $("#submit").attr("key", key);


        };
    });

$("#threeData").on('pageinit', function(){

    $("#jsonButton").on("click", function(){
        console.log("Load JSON");
        $("#itemList").empty();
        $.ajax({
            url      : "data/data.json",
            type     : "GET",
            dataType : "json",
            success  : function(json){
                console.log(json.items);
                $.each(json.items, function(i, item){
                    console.log(i + " " + item.fname[0] + " " + item.fname[1]);


                    var makeli = $("<li id='listItem"+i+"'></li>");
                    var optSubText = $( "<img src='images/"+item.greetings[1]+".png'/>"+
                        "<p>"+item.fname[0]+" "+item.fname[1]+"</p>"+
                        "<p>"+item.lname[0]+" "+item.lname[1]+"</p>"+
                        "<p>"+item.sex[0]+" "+item.sex[1]+"</p>"+
                        "<p>"+item.kidRange[0]+" "+item.kidRange[1]+"</p>"+
                        "<h3>"+item.date2[1]+"</h3>"+
                        "<h3>"+item.submitTime[1]+"</h3>"+
                        "<p>"+item.greetings[0]+" "+item.greetings[1]+"</p>"+
                        "<p>"+item.comments[0]+" "+item.comments[1]+"</p>");
                    //Creates Edit Link in Item
                    var editLink = $("<a href='addinfoForm.html' id='edit"+i+"'> Edit Item</a>");
                    editLink.on('click', function(){
                        editItem(this.id);

                    });
                    //Creates Delete Link in Item
                    var deleteLink = $("<a href='#list' id='delete"+i+"'>Delete Item</a>");
                    deleteLink.on('click', function(){
                        deleteItem(this.id);
                    });
                    editLink.html(optSubText);
                    //Adds edit and delete links to the list
                    makeli.append(editLink, deleteLink).appendTo("#itemList");

                });
                $("#itemList").listview('refresh');

            },
            error: function(){
                alert("JSON Ajax Error");
            }
        });

    });

    $("#xmlButton").on("click", function(){
        console.log("Starting XML");
        $("#itemList").empty();

        $.ajax({
            url: "data/data.xml",
            type: "GET",
            dataType: "xml",
            success: function(xml){
                console.log("Waiting for xml...");
                $(xml).find("items").each(function(){
                    var item = $(this);
                    console.log("Name: ", item.find("fname").text());

                    var makeli = $("<li id='listItem"+item+"'></li>");

                    //create log item list
                    var optSubText = $( "<img src='images/"+item.find("greetings").text()+".png'/>"+
                        "<h3>"+item.find("date").text()+"</h3>"+
                        "<h3>"+item.find("submitTime").text()+"</h3>"+
                        "<p>"+"First Name:"+" "+item.find("fname").text()+"</p>"+
                        "<p>"+"Last Name:"+" "+item.find("lname").text()+"</p>"+
                        "<p>"+"Male or Female:"+" "+item.find("sex").text()+"</p>"+
                        "<p>"+"kidRange:"+" "+item.find("kidRange").text()+"</p>"+
                        "<p>"+"Greeting:"+" "+item.find("greetings").text()+"</p>"+
                        "<p>"+"Comments:"+" "+item.find("comments").text()+"</p>");
                    //Creating Edit Link in Item
                    var editLink = $("<a href='#addinfoForm' id='edit"+item+"'> Edit Log Item</a>");
                    editLink.on('click', function(){
                        editItem(this.id);

                    });
                    //Creating Delete Link in Item
                    var deleteLink = $("<a href='#list' id='delete"+item+"'>Delete Item</a>");
                    deleteLink.on('click', function(){
                        deleteItem(this.id);
                    });
                    //Make item data the edit link
                    editLink.html(optSubText);
                    //Adding edit and delete links to the list
                    makeli.append(editLink, deleteLink).appendTo("#itemList");


                });
                $("#itemList").listview('refresh');
            },
            error: function(){
                alert("XML Ajax Error");
            }


        });

    });

    $("#yamlButton").on("click", function(){
        $("#itemList").empty();
        YAML.fromURL("data/data.yaml", function(yaml){
            console.log("Starting YAML");
            console.log(yaml);
            var items = {};
            $.extend(items, yaml);
            console.log(items);



            $.each(items, function(i, item){
                console.log(i + " " + " " + item.fname);



                var makeli = $("<li id='listItem"+i+"'></li>");
                var optSubText = $( "<img src='images/"+item.greetings+".png'/>"+
                    "<h3>"+item.date+"</h3>"+
                    "<h3>"+item.submitTime+"</h3>"+
                    "<p>"+"First Name: "+" "+item.fname+"</p>"+
                    "<p>"+"Last Name: "+" "+item.lname+"</p>"+
                    "<p>"+"Male or Female: "+" "+item.sex+"</p>"+
                    "<p>"+"kidRange: "+" "+item.kidRange+"</p>"+
                    "<p>"+"Greeting: "+" "+item.greetings+"</p>"+
                    "<p>"+"Comments: "+" "+item.comments+"</p>");
                //Creating Edit Link in Item
                var editLink = $("<a href='#addinfoForm' id='edit"+i+"'> Edit Log Item</a>");
                editLink.on('click', function(){
                    editItem(this.id);

                });
                //Creating Delete Link in Item
                var deleteLink = $("<a href='#list' id='delete"+i+"'>Delete Item</a>");
                deleteLink.on('click', function(){
                    deleteItem(this.id);
                });
                //Make item data the edit link
                editLink.html(optSubText);
                //Adding edit and delete links to the list
                makeli.append(editLink, deleteLink).appendTo("#itemList");
            });
            $("#itemList").listview('refresh');
        });

    });

});



