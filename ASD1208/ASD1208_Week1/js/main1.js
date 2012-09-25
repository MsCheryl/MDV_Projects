var parseItemForm = function(data){
    // uses form data here;
    console.log(data);
};

$("#home").on('pageinit', function(){


    $("#additem").validate({
        invalidHandler: function(form, validator){},
        submitHandler: function(){
            /*localStorage.setItem('formdata', this.serializeArray());*/
            storeData(this.id);
        }
    });

    //getElementByID Function
    var ge = function (x) {
        var theElement = document.getElementById(x);
        return theElement;
    };
    
    var errMsg = $('errors');
    
    function makeCats() {  //added function
        var forTag = document.getElementsByTagName("form")
/*             selectLi = $('select') */
            ;
    }
    
    assistanceSurvey();
    $("#survey").change(function(){
        assistanceSurvey(); 
    });

    
    
/*    
    function getSelectedRadio() {            //Added Function
        var radios = document.forms[0].verify;
        for(var i = 0; i < radios.length; i++) {
            if(radios[i].checked) {
                verifyValue = radios[i].value;
            }
        }
    }
*/

    var radio = document.forms[0].verify;
        for (var i=0; i<radio.length; i++) {
            if (radio[i].value === "kids" && item.verifyValue[1] == "kids") {
                radio[i].setAttribute("checked", "checked");
            } else if (radio[i].value === "prayer" && item.verifyValue[1] == "prayer") {
                radio[i].setAttribute("checked", "checked");
            } else if (radios[i].value === "assistance" && item.verifyValue[1] == "assistance") {
                radio[i].setAttribute("checked", "checked");
            }
        }


    function getCheckBoxValue() {  //Add Function
        if($('male').checked) {
            sex = $('male').value;
        } else {
            sex = "female";
        }
    }
    
    function toggleControls(n) { //Add Function
        switch(n) {
            case "on":
                $('joinUsForm').show();
                $('clearAll').show();
                $('displayData').hide();
                $('addNew').show();
                $('items').hide();
                break;
            
            case "off":
                $('joinUsForm').hide();
                $('clearAll').hide();
                $('displayData').show();
                $('addNew').show();
                $('items').show();
                break;
            
            default:
                return false;

    
    
    
    var storeData = function(key){
        //if there is no key , this is a new item and needs a key
        if(!key){
        var id = Math.floor(Math.random()*100000001);
        }else{
            
            id = key;
        }
        console.log("Submitting data.");
        getSelectedRadio();
        getCheckBoxValue();
        //Get Form Data

        
        var item = {};
            item.fname = ["First Name:", $("#fname").val()];
            item.lname = ["Last Name:", $("#lname").val()];
            item.email = ["Email:", $("email").val()];            
            item.date1 = ["Connection Date:", $("#date1").val()];
            item.date2 = ["Submit Date:", $("#date2").val()];            
            item.currentTime = ["Current Time:", $("#currentTime").val()];
            //item.sex = ["Male or Female:", $('input[name="sex"]:checked', '#additem').val()];
            //item.kids = ["How many kids?:", $("#kids").val()];
            item.greetings = ["Select greetings:", $("#greetings").val()];
            item.comments = ["Comments:", $("#comments").val()];
        //Saving data into local storage using Stringify
        localStorage.setItem(id, JSON.stringify(item));
        alert("Information Saved!");
        
        window.location.reload();
    };
    


    // Links and Submit Click Events
    var submit = $('submit');
    submit.addEventListener("click", validate);
    
    //edit single item
    //var editItem =function(id) {
    
        //grab the data from our item in local storage
        //var key = parseInt(id.match(/\d+/g));
        //var item = JSON.parse(localStorage.getItem(key));
        //Populate the form with current local storage values.
    function editItem(){
        var value = localStorage.getData(this.key);
        var item = JSON.parse(value);
        
        toggleControls("off");
    //}    
        
        
        $("#fname").val(item.fname[1]);
        $("#lname").val(item.lname[1]);
        //$("#date1").val(item.date1[1]);
        //$("#date2").val(item.date2[1]);
        //$("#submitTime").val(item.submitTime[1]);
        //$("#email").val(item.email[1]);
        //$('input#' + item.sex[1].toLowerCase()).attr('checked', true).checkboxradio('refresh');
        //$("#kids").val(item.kids[1]);
        //$("#greetings").val(item.greetings[1]).selectmenu("refresh");
        //$("#comments").val(item.comments[1]);
        
        
        

    
    // Remove the initial listener from the input 'save' button.
        submit.removeEventListener("click", storeData);
        // Change the submit button value to edit
        $('submit').value = "Edit Item";
        var editSubmit = $('submit');
        // Save the key value established in this function as a property oof the editSubmit event
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
    }
    
    
    var deleteItem = function(){
        var ask = confirm("Are you sure you want to delete this entry?");
        var key = localStorage.key();
        if(ask){
            localStorage.removeItem(key);
            alert("Entry was deleted.");
            getData();
        }else{
            alert("Entry was NOT deleted.");
        }
    };


    // Creates the edit and delete links for each item
    function makeItemLinks(key, linksLi) {
        var editLink = document.createElement('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Item";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);
        
        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);
        
        var deleteLink = document.createElement('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Item";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
        
        var hrTag = document.createElement('hr');
        linksLi.appendChild(hrTag);
    }
    
    //Display the data from local storage to screen
/*    var getData = function(){
        if(localStorage.length === 0){
            alert("There is no data in Local Storage so default data was added.");
            autoFillData();
        }
        //Write Data from Local Storage to the browser
        $("#itemList").empty();
        //Making list items
        for(var i=0, len=localStorage.length; i<len;i++){
            var makeli = $("<li id='listItem"+i+"'></li>");
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Converting string from local storage value back to an object using JSON.parse()
            var obj = JSON.parse(localStorage.getItem(key));
            var makeli = $("<li id='listItem"+i+"'></li>");
            //create log item list
            var optSubText = $( "<img src='images/"+obj.greetings[1]+".png'/>"+
                "<h3>"+obj.date1[1]+"</h3>"+
                "<h3>"+obj.currentTime[1]+"</h3>"+
                "<p>"+obj.fname[0]+" "+obj.fname[1]+"</p>"+
                "<p>"+obj.lname[0]+" "+obj.lname[1]+"</p>"+
                "<p>"+obj.email[0]+" "+obj.email[1]+"</p>"+
                //"<p>"+obj.sex[0]+" "+obj.sex[1]+"</p>"+
                "<p>"+obj.kids[0]+" "+obj.kids[1]+"</p>"+
                "<p>"+obj.greetings[0]+" "+obj.greetings[1]+"</p>"+
                "<p>"+obj.comments[0]+" "+obj.comments[1]+"</p>");
            //Creating Edit Link in Item
            var editLink = $("<a href='#add' id='edit"+key+"'> Edit Item</a>");
                editLink.on('click', function(){
                    editItem(this.id);
                });
            //Creating Delete Link in Item
            var deleteLink = $("<a href='#list' id='delete"+key+"'>Delete Item</a>");
                deleteLink.on('click', function(){
                    deleteItem(this.id);
                });
            //Make item data the edit link
            editLink.html(optSubText);
            //Adding edit and delete links to the list
            makeli.append(editLink, deleteLink).appendTo("#itemList");
            };
        $("ul").listview('refresh');            
    };  
*/
    function getData() {
        toggleControls("on");
        if(localStorage.length === 0) {
            alert("There is no data in local storage. Default data has been added.");
            autoFillData();
        }
        console.log("Getting data.");
        document.body.appendChild(document.createElement('br'));
           document.body.appendChild(document.createElement('hr'));
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i < len; i++) {
            var makeli = document.createElement('li');
            var linksLi = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            getImage(obj.select[1],makeSubList);
            for(var n in obj) {
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete links for each item
        }
    }

    //Auto Populate Default data to local storage
    var autoFillData = function(){
        //Store the JSON Object into local storage
        for(var n in json){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    
    };

    // Get the image depending on what value was selected.
    function getImage(catName, makeSubList) {
        var imageLi = document.createElement('li');
        makeSubList.appendChild(imageLi);
        var newImg = document.createElement('img');
        var setSrc = newImg.setAttribute("src", "images/" + catName + ".png");
        console.log("The catName is: " + catName);
        imageLi.appendChild(newImg);
    }
    
    //clear local storage
    var clearData = function() {
        if(localStorage.length === 0){
            alert("There is no data to clear.");
        }else{
            var ask = confirm("Delete ALL entries? This can NOT be undone.");
            if(ask){
                localStorage.clear();
                alert("All entries have been deleted!");
                $("#itemList").empty();
                return false;
            }else{
                alert("Entries not deleted.");
            }
        }
        
            
        
    var clearAll = $('clearAll', clearLocalData);
    clearAll.addEventListener("click", clearLocalData);

    var displayData = $('displayData');
    displayData.addEventListener("click", getData);
    
        
  }; 

    
/*    
    //Change submit button value to edit button
        $("#formSubmitButton").val("Edit Item");
        //Save the key value established in this vunction as a property of #additem
        $("#submit").attr("key", key);
        //Refresh the menu
        $("#itemList").listview("refresh");
        //$("itemList").listview("refresh");
        
    }
*/
    
        
        
}
    
    
    

    // Radio
    
$("#list").listview('refresh');
    }
$("#displayLog").bind("click", getData);
$("#clear").bind("click", clearData);
$("#submit").bind("click", storeData);

)


    var displayLink = $('#displayLink');
    displayLink.on("click", getData);
    var clearLink = $('#clearLink');
    clearLink.on("click", clearLocal);
    var save = $("#save");
    save.on("click", storeData);
    
    
    









