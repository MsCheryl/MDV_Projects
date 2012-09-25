var parsememberItemForm = function(data){
    // uses form data here;
    console.log(data);
};

$("#home").on('pageinit', function(){


});

$("#dataInfo").on('pageinit', function(){

    $("#jsonButton").on("click", function(){
        console.log("waiting for JSON");
        $("#entryItem").empty();
        $.ajax({
            url      : "data/data.json",
            type     : "GET",
            dataType : "json",
            success  : function(json){
                console.log(json.entryItem);
                $.each(json.entryItem, function(i, entryItem){
                    console.log(i + " " + entryItem.fname[0] + " " + memberItem.fname[1]);


                    /// do stuff
                    var makeli = $("<li id='listItem"+i+"'></li>");
                    var optSubText = $( "<img src='images/"+memberItem.greetings[1]+".png'/>"+
                        "<h3>"+memberItem.date[1]+"</h3>"+
                        "<p>"+memberItem.fname[0]+" "+memberItem.fname[1]+"</p>"+
                        "<p>"+memberItem.lname[0]+" "+memberItem.lname[1]+"</p>"+
                        "<p>"+memberItem.sex[0]+" "+memberItem.sex[1]+"</p>"+
                        "<p>"+memberItem.kidRange[0]+" "+memberItem.kidRange[1]+"</p>"+
                        "<p>"+memberItem.greetings[0]+" "+memberItem.greetings[1]+"</p>"+
                        "<p>"+memberItem.comments[0]+" "+memberItem.comments[1]+"</p>");
                    //Edit Link in Item
                    var editLink = $("<a href='#newEntry' id='edit"+i+"'> Edit Entry</a>");
                    editLink.on('click', function(){
                        editItem(this.id);

                    });
                    //Delete Link in Item
                    var deleteLink = $("<a href='#list' id='delete"+i+"'>Delete Entry</a>");
                    deleteLink.on('click', function(){
                        deleteItem(this.id);
                    });
                    // edit link
                    editLink.html(optSubText);
                    //Adding edit and delete
                    makeli.append(editLink, deleteLink).appendTo("#entryItem");

                });
                $("#entryItem").listview('refresh');

            },
            error: function(){
                alert("JSON Ajax Error");
            }
        });

    });



    $("#xmlButton").on("click", function(){
        console.log("Starting XML");
        $("#entryItems").empty();

        $.ajax({
            url: "data/data.xml",
            type: "GET",
            dataType: "xml",
            success: function(xml){
                console.log("waiting for xml");
                $(xml).find("item").each(function(){
                    var item = $(this);
                    console.log("Name: ", item.find("fname").text());

                    var makeli = $("<li id='listItem"+item+"'></li>");

                    //create log item list
                    var optSubText = $( "<img src='images/"+item.find("greetings").text()+".png'/>"+

                        //"<p>"+"Appropriate Greeting:"+" "+item.find("greetings").text()+"</p>"+
                        "<p>"+"First Name:"+" "+item.find("fname").text()+"</p>"+
                        "<p>"+"Last Name:"+" "+item.find("lname").text()+"</p>"+
                        "<p>"+"Male or Female:"+" "+item.find("sex").text()+"</p>"+
                        "<p>"+item.find("date").text()+"</p>"+
                        "<p>"+"kidRange:"+" "+item.find("kidRange").text()+"</p>"+
                        "<p>"+"Comments:"+" "+item.find("comments").text()+"</p>");
                    //Creating Edit Link in Item
                    var editLink = $("<a href='#newEntry' id='edit"+item+"'> Edit Log Item</a>");
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
                    makeli.append(editLink, deleteLink).appendTo("#entryItems");


                });
                $("#entryItems").listview('refresh');
            },
            error: function(){
                alert("XML Ajax Error");
            }


        });

    });

    $("#yamlButton").on("click", function(){
        $("#entryItem").empty();
        YAML.fromURL("data/data.yaml", function(yaml){
            console.log("waiting for YAML");
            console.log(yaml);
            var entryItems = {}
            $.extend(entryItems, yaml);
            console.log(entryItems);
          


            $.each(entryItems, function(i, entryItem){
                console.log(i + " " + " " + entryItem.fname);


                
                var makeli = $("<li id='listItem"+i+"'></li>");
                var optSubText = $( "<img src='images/"+entryItem.greetings+".png'/>"+

                    "<p>"+"Greeting: "+" "+entryItem.greetings+"</p>"+
                    "<p>"+"First Name: "+" "+entryItem.fname+"</p>"+
                    "<p>"+"Last Name: "+" "+entryItem.lname+"</p>"+
                    "<p>"+"Email: "+" "+entryItem.email+"</p>"+
                    "<p>"+"Male or Female: "+" "+entryItem.sex+"</p>"+
                    "<p>"+"Birthday: "+" "+entryItem.date+"</p>"+
                    "<p>"+"kidRange: "+" "+entryItem.kidRange+"</p>"+
                    "<p>"+"Comments: "+" "+entryItem.comments+"</p>");
                //Creating Edit Link in Item
                var editLink = $("<a href='#newEntry' id='edit"+i+"'> Edit Log Item</a>");
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
                makeli.append(editLink, deleteLink).appendTo("#entryItems");
            });
            $("#entryItem").listview('refresh');
        });




    });

    $( '#csvButton' ).on( 'click', function() {
        $('#entryItem').empty();
        $.ajax( {
            url: 'data/data.csv',
            type: 'GET',
            dataType: 'text',
            success:function ( result ) {

                var lines = result.split("\n");

                var dataRow = lines[0];
                var dataCol = dataRow.split(",");
                for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                    var row = lines[lineNum];
                    var columns = row.split(",");

                    $(''+
                        '<div class="csvData">'+
                        '<p>' + dataCol[0] + " " + columns[0] +
                        '<br>'+ dataCol[1] + " " + columns[1] +
                        '<br>'+ dataCol[2] + " " + columns[2] +
                        '<br>'+ dataCol[3] + " " + columns[3] +
                        '<br>'+ dataCol[4] + " " + columns[4] +
                        '<br>'+ dataCol[5] + " " + columns[5] + '</p>' +
                        '</div>'
                    ).appendTo('#viewData');
                }
            }
        });
    });

});



$("#newEntry").on('pageinit', function(){



    $("#newEntryItem").validate({
        invalidHandler: function(form, validator){},
        submitHandler: function(){

            storeData(this.id);
        }
    });

    var storeData = function(key){
        //if there is no key , this is a new item and needs a key
        if(!key){
            var id = Math.floor(Math.random()*100000001);
        }else{

            id = key;
        }

        var entryItem = {};
            entryItem.greetings = ["Appropriate Greeting:", $("#greetings").val()];
            entryItem.fname = ["First Name:", $("#fname").val()];
            entryItem.lname = ["Last Name:", $("#lname").val()];
            entryItem.email = ["Email:", $("#email").val()];
            entryItem.date = ["Birthday:", $("#date").val()];
            entryItem.sex = ["Male or Female:", $('input[name="sex"]:checked', '#addentryItem').val()];
            entryItem.kidRange = ["kidRange:", $("#kidRange").val()];
            entryItem.comments = ["Comments:", $("#comments").val()];
        //Saving data into local storage using Stringify
        localStorage.setItem(id, JSON.stringify(entryItem));
        alert("Log Saved!");

    };
    //Display local storage
    var getData = function(){
        if(localStorage.length === 0){
            alert("There is no data in Local Storage so default data was added.");
            autoFillData();
        }
        //Write Data from Local Storage to the browser
        $("#entryItems").empty();
        //Making list items
        for(var i=0, len=localStorage.length; i<len;i++){
            var makeli = $("<li id='listItem"+i+"'></li>");
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Converting string from local storage value back to an object using JSON.parse()
            var obj = JSON.parse(localStorage.getItem(key));

            //create log item list
            var optSubText = $( "<img src='images/"+obj.greetings[1]+".png'/>"+
                "<p>"+obj.greetings[0]+" "+obj.greetings[1]+"</p>"+
                "<p>"+obj.fname[0]+" "+obj.fname[1]+"</p>"+
                "<p>"+obj.lname[0]+" "+obj.lname[1]+"</p>"+
                "<p>"+obj.email[0]+" "+obj.email[1]+"</p>"+
                "<p>"+obj.date[1]+" "+ obj.date[1]+"</p>"+
                "<p>"+obj.sex[0]+" "+obj.sex[1]+"</p>"+
                "<p>"+obj.kidRange[0]+" "+obj.kidRange[1]+"</p>"+
                "<p>"+obj.comments[0]+" "+obj.comments[1]+"</p>");
            //Creating Edit Link in Item
            var editLink = $("<a href="#newEntry" id='edit"+key+"'> Edit Entry</a>");
            editLink.on('click', function(){
                editItem(this.id);

            });
            //Creating Delete Link in Item
            var deleteLink = $("<a href='#list' id='delete"+key+"'>Delete Entry</a>");
            deleteLink.on('click', function(){
                deleteItem(this.id);
            });
            //Make item data the edit link
            editLink.html(optSubText);
            //Adding edit and delete links to the list
            makeli.append(editLink, deleteLink).appendTo("#entryItems");
        };
        var deleteItem = function(){
            var ask = confirm("Are you sure you want to delete this entry?");
            
            if(ask){
                localStorage.removeItem(key);
                alert("Entry was deleted.");
                $("#list").listview('refresh');
            }else{
                alert("Entry was Not deleted.");
            };

        };
    };
    //Auto Populate Default data to local storage
    var autoFillData = function(){
        //Store the JSON Object into local storage
        for(var n in json){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        };

    };
    $("#submit").on("click", storeData);
    $("#displayLog").on("click", getData);

});


$("#list").on('pageinit', function(){



    //edit single item
    var editItem =function(id) {
        //grab the data from our item in local storage
        var key = parseInt(id.match(/\d+/g));
        var entryItem = JSON.parse(localStorage.getItem(key));
        //Populate the form with current local storage values.
        $("#fname").val(entryItem.fname[1]);
        $("#lname").val(entryItem.lname[1]);
        $("#email").val(entryItem.email[1]);
        $("#date").val(entryItem.date[1]);
        $('input#' + entryItem.sex[1].toLowerCase()).attr('checked', true).checkboxradio('refresh');
        $("#kidRange").val(entryItem.kidRange[1]);
        $("#greetings").val(entryItem.greetings[1]).selectmenu("refresh");
        $("#comments").val(entryItem.comments[1]);
        //Change submit button value to edit button
        $("#newEntry div form#addentryItem div.ui-field-contain.ui-body.ui-br div.ui-btn.ui-shadow.ui-btn-corner-all.ui-fullsize.ui-btn-block.ui-btn-up-b span.ui-btn-inner.ui-btn-corner-all span.ui-btn-text").text("Save Log Edit");
        //Save the key value established in this function as a property of #addentryItem
        $("#submit").attr("key", key);




    };

    var deleteItem = function(){
        var ask = confirm("Are you sure?");
        var key = localStorage.key();
        if(ask){
            localStorage.removeItem(key);
            alert("Entry was deleted.");

        }else{
            alert("Entry was NOT deleted.");
        };

    };



    //clear local storage
    var clearData = function() {
        if(localStorage.length === 0){
            alert("There is no data to clear.");
        }else{
            var ask = confirm("Deleting ALL entries,  this can NOT be undone!");
            if(ask){
                localStorage.clear();
                alert("All items are deleted!");
                $("#entryList").empty();
            }else{
                alert("Items NOT deleted.");
            };
        };
    };
    /*$("#displayLog, #news").on("click", getData);*/
    $("#clear").on("click", clearData);
});
