var parseLogItemForm = function(data){

    console.log(data);
};
var storeData = function(key){

    if(!key){
        var id = Math.floor(Math.random()*100000001);
    }else{

        id = key;
    }

    var entryItem = {};
    entryItem.greetings = ["Select Appropriate Greeting:", $("#greetings").val()];
    entryItem.fname = ["First Name:", $("#fname").val()];
    entryItem.lname = ["Last Name:", $("#lname").val()];
    entryItem.email = ["Email Address:", $("#email").val()];
    entryItem.sex = ["Male or Female:", $('input[name="sex"]:checked', '#addLogItem').val()];
    entryItem.kidRange = ["How many kids?:", $("#kidRange").val()];
    entryItem.date = ["Submit Date:", $("#date").val()];
    entryItem.submitTime = ["Submit Time:", $("#submitTime").val()];
    entryItem.comments = ["Comments:", $("#comments").val()];
    //Saving data into local storage using Stringify
    localStorage.setItem(id, JSON.stringify(entryItem));
    alert("Entry Added!");

};

//edit single item
var editItem =function(id) {

    $("#greetings").val(entryItem.value.greetings[1]).selectmenu("refresh");
    $("#fname").val(entryItem.value.fname[1]);
    $("#lname").val(entryItem.value.lname[1]);
    $("#email").val(entryItem.value.email[1]);
    $('input#' + entryItem.value.sex[1].toLowerCase()).attr('checked', true).checkboxradio('refresh');
    $("#kidRange").val(entryItem.value.kidRange[1]);
    $("#date").val(entryItem.value.date[1]);
    $("#submitTime").val(entryItem.value.submitTime[1]);
    $("#comments").val(entryItem.value.comments[1]);
    //Change submit button value to edit button
    $("#addLogForm div form#addLogItem div.ui-field-contain.ui-body.ui-br div.ui-btn.ui-shadow.ui-btn-corner-all.ui-fullsize.ui-btn-block.ui-btn-up-b span.ui-btn-inner.ui-btn-corner-all span.ui-btn-text").text("Save Log Edit");
    //Save the key value established in this function as a property of #addLogItem
    $("#submit").attr("key", key);




};
//delete single list item
var deleteItem = function(){
    var ask = confirm("Are you sure you want to delete this entry?");
    var key = localStorage.key(i);
    if(ask){
        localStorage.removeItem(key);
        alert("Entry was deleted.");
        $("#entryitemList").listview('refresh');
    }else{
        alert("Entry WAS NOT deleted.");
    };

};
//clearing local storage
var clearData = function() {
    if(localStorage.length === 0){
        alert("There is no data to clear.");
    }else{
        var ask = confirm("Delete items? This CAN NOT be undone.");
        if(ask){
            localStorage.clear();
            alert("Items HAVE BEEN deleted!");
            $("#entryitemList").empty();
        }else{
            alert("Items WERE NOT deleted.");
        };
    };
};

$("#home").on('pageinit', function(){
    console.log("Let's go!")
    $("#jsonButton").on("click", function(){
        console.log("Loading JSON");
        $("#entryitemList").empty();
        $.ajax({
            url      : "_view/entryitems",
            type     : "GET",
            dataType : "json",
            success  : function(json){
                console.log(json);
                $.each(json.rows, function(i, entryItem){
                    console.log(i + " " + entryItem.value.fname[0] + " " + entryItem.value.fname[1]);


                    var makeli = $("<li id='listItem"+i+"'></li>");
                    var optSubText = $( "<img src='"+entryItem.value.greetings[1]+".png'/>"+

                        "<h3>"+entryItem.value.currentTime[1]+"</h3>"+
                        "<p>"+entryItem.value.fname[0]+" "+entryItem.value.fname[1]+"</p>"+
                        "<p>"+entryItem.value.lname[0]+" "+entryItem.value.lname[1]+"</p>"+
                        "<p>"+entryItem.value.email[0]+" "+entryItem.value.email[1]+"</p>"+
                        "<p>"+entryItem.value.sex[0]+" "+entryItem.value.sex[1]+"</p>"+
                        "<p>"+entryItem.value.condition[0]+" "+entryItem.value.condition[1]+"</p>"+
                        "<p>"+entryItem.value.treatments[0]+" "+entryItem.value.treatments[1]+"</p>"+
                        "<h3>"+entryItem.value.date[1]+"</h3>"+
                        "<p>"+entryItem.value.comments[0]+" "+entryItem.value.comments[1]+"</p>");
                    //Create Edit Link
                    var editLink = $("<a href='#addLogForm' id='edit"+i+"'> Edit Entry</a>");
                    editLink.on('click', function(){
                        editItem(this.id);

                    });
                    //Create Delete Link
                    var deleteLink = $("<a href='#list' id='delete"+i+"'>Delete Entry</a>");
                    deleteLink.on('click', function(){
                        deleteItem(this.id);
                    });

                    editLink.html(optSubText);

                    makeli.append(editLink, deleteLink).appendTo("#entryitemList");

                });
                $("#entryitemList").listview('refresh');

            },
            error: function(){
                alert("JSON Error");
            }
        });

    });
});

$("#dataTypes").on('pageinit', function(){





    $("#xmlButton").on("click", function(){
        console.log("Loading XML");
        $("#entryitemList").empty();

        $.ajax({
            url: "data/data.xml",
            type: "GET",
            dataType: "xml",
            success: function(xml){
                console.log("where is my xml");
                $(xml).find("entry").each(function(){     //xml page  "item"
                    var entry = $(this);
                    console.log("Name: ", entry.find("fname").text());

                    var makeli = $("<li id='entryItem"+entry+"'></li>");

                    //create list
                    var optSubText = $( "<img src='"+entry.find("greetings").text()+".png'/>"+
                        "<p>"+"Select Appropriate Greeting:"+" "+entry.find("greetings").text()+"</p>"+
                        "<p>"+"First Name:"+" "+entry.find("fname").text()+"</p>"+
                        "<p>"+"Last Name:"+" "+entry.find("lname").text()+"</p>"+
                        "<p>"+"Email:"+" "+entry.find("email").text()+"</p>"+
                        "<p>"+"Male or Female:"+" "+entry.find("sex").text()+"</p>"+
                        "<p>"+"kidRange:"+" "+entry.find("kidRange").text()+"</p>"+
                        "<h3>"+entry.find("date").text()+"</h3>"+
                        "<h3>"+entry.find("submitTime").text()+"</h3>"+
                        "<p>"+"Comments:"+" "+entry.find("comments").text()+"</p>");
                    //Edit Link
                    var editLink = $("<a href='#addLogForm' id='edit"+entry+"'> Edit Entry</a>");
                    editLink.on('click', function(){
                        editItem(this.id);

                    });
                    //Delete Link
                    var deleteLink = $("<a href='#list' id='delete"+entry+"'>Delete Entry</a>");
                    deleteLink.on('click', function(){
                        deleteItem(this.id);
                    });

                    editLink.html(optSubText);

                    makeli.append(editLink, deleteLink).appendTo("#entryitemList");


                });
                $("#entryitemList").listview('refresh');
            },
            error: function(){
                alert("XML Error");
            }


        });

    });

    $("#yamlButton").on("click", function(){
        $("#entryitemList").empty();
        YAML.fromURL("data/data.yaml", function(yaml){
            console.log("Loading YAML");
            console.log(yaml);
            var entryItems = {}
            $.extend(entryItems, yaml);
            console.log(entryItems);



            $.each(entryItems, function(i, entryItem){
                console.log(i + " " + " " + entryItem.fname);



                var makeli = $("<li id='listItem"+i+"'></li>");
                var optSubText = $( "<img src='"+entryItem.greetings+".png'/>"+
                    "<p>"+"Current Treament: "+" "+entryItem.greetings+"</p>"+
                    "<p>"+"First Name: "+" "+entryItem.fname+"</p>"+
                    "<p>"+"Last Name: "+" "+entryItem.lname+"</p>"+
                    "<p>"+"Male or Female: "+" "+entryItem.sex+"</p>"+
                    "<p>"+"kidRange: "+" "+entryItem.kidRange+"</p>"+
                    "<h3>"+entryItem.date+"</h3>"+
                    "<h3>"+entryItem.submitTime+"</h3>"+
                    "<p>"+"Comments: "+" "+entryItem.comments+"</p>");
                //Creating Edit Link
                var editLink = $("<a href='#addLogForm' id='edit"+i+"'> Edit Entry</a>");
                editLink.on('click', function(){
                    editItem(this.id);

                });
                //Creating Delete Link
                var deleteLink = $("<a href='#list' id='delete"+i+"'>Delete Entry</a>");
                deleteLink.on('click', function(){
                    deleteItem(this.id);
                });

                editLink.html(optSubText);

                makeli.append(editLink, deleteLink).appendTo("#entryitemList");
            });
            $("#entryitemList").listview('refresh');
        });




    });

});


$("#addLogForm").on('pageinit', function(){



    $("#addLogItem").validate({
        invalidHandler: function(form, validator){},
        submitHandler: function(){
            /*localStorage.setItem('formdata', this.serializeArray());*/
            storeData(this.id);
        }
    });


    //Display the data from local storage to screen
    var getData = function(){
        if(localStorage.length === 0){
            alert("Local Storage is empty; populating with sample data.");
            autoFillData();
            $("#entryitemList").listview('refresh');
        }

        $("#entryitemList").empty();

        for(var i=0, len=localStorage.length; i<len;i++){
            var makeli = $("<li id='listItem"+i+"'></li>");
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);

            var obj = JSON.parse(localStorage.getItem(key));

            //create list
            var optSubText = $( "<img src='"+obj.greetings[1]+".png'/>"+
                "<p>"+obj.greetings[0]+" "+obj.greetings[1]+"</p>"+
                "<p>"+obj.fname[0]+" "+obj.fname[1]+"</p>"+
                "<p>"+obj.lname[0]+" "+obj.lname[1]+"</p>"+
                "<p>"+obj.sex[0]+" "+obj.sex[1]+"</p>"+
                "<p>"+obj.kidRange[0]+" "+obj.kidRange[1]+"</p>"+
                "<h3>"+obj.date[1]+"</h3>"+
                "<h3>"+obj.submitTime[1]+"</h3>"+

                "<p>"+obj.comments[0]+" "+obj.comments[1]+"</p>");
            //Edit
            var editLink = $("<a href='#addLogForm' id='edit"+key+"'> Edit Entry</a>");
            editLink.on('click', function(){
                editItem(this.id);

            });
            //Delete
            var deleteLink = $("<a href='#list' id='delete"+key+"'>Delete Entry</a>");
            deleteLink.on('click', function(){
                deleteItem(this.id);
            });

            editLink.html(optSubText);
            //edit and delete
            makeli.append(editLink, deleteLink).appendTo("#entryitemList");
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








    //clear local storage
    var clearData = function() {
        if(localStorage.length === 0){
            alert("There is no data to clear.");
        }else{
            var ask = confirm("Are you sure you want to REMOVE ALL ENTRIES?");
            if(ask){
                localStorage.clear();
                alert("Entries have been DELETED!");
                $("#entryitemList").empty();
            }else{
                alert("Entries HAVE NOT been deleted.");
            };
        };
    };
    $("#clear").on("click", clearData);
});
