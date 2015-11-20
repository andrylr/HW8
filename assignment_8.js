    /*File:  /~alora/assignment_8.js
    91.461 Assignment:8
    Andry Lora, UMass Lowell Computer Science, Andrylr@gmail.com
    Copyright (c) 2015 by Andry Lora.  All rights reserved.  
    File created:October 14,2015
    updated by Andry Lora on November 19, 2015
    */
        

$().ready(function() {
/*This adds a mehod which get the values for comparision and if the value is larger than the the minimum
value it will not print out the message but if min number is larger than value it will print out the message.
provided from http://stackoverflow.com/questions/14347177/how-can-i-validate-that-the-max-field-is-greater-than-the-min-field
*/
$.validator.addMethod("greaterThan",

function (value, element, param) {
  var $min = $(param);
  if (this.settings.onfocusout) {
    $min.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
      $(element).valid();
    });
  }
  return parseInt(value) > parseInt($min.val());
}, "Max must be greater than min");


/*These are the rules for each of the fields that specifics are in each of them and the 
method created at the top is used within the rules */
$("#valueinput").validate({
            rules: {              
                row_start: {
                    required: true,
                    min:1,
                    max: 10,
                    number: true

                },
                row_end: {
                    required: true,
                    min:1,
                    max: 10,
                    number: true,
                    greaterThan: '#row_start'
                },
                column_start: {
                    required: true,
                    min:1,
                    max: 10,
                    number: true
                    
                },
                column_end: {
                    required: true,
                    min:1,
                    max: 10,
                    number: true,
                    greaterThan: '#column_start'
                },

                
            },
            /*These are the custom messages for each of the errors to make them
            more specific than the generic ones*/
            
            messages: {
                
                row_start: {
                    required: "multiplier start requires a value between 1 and 10",
                    max: "Value for multiplier start is larger than 10 or a letter, insert value between 1 and 10",
                    min: "Value for multiplier start is less than 1 or a letter, insert value between 1 and 10"


                },
                row_end: {
                    required: "multiplier end requires a value between 1 and 10",
                    max: "Value for multiplier end is larger than 10 or a letter, insert value between 1 and 10", 
                    min: "Value for multiplier end is less than 1 or a letter, insert value between 1 and 10",
                    greaterThan:"Value for multiplier start is larger than multiplier end please correct this "
                    
                },
                column_start: {
                    required: "multiplicand start requires a value between 1 and 10",
                    max: "Value for multiplicand start is larger than 10 or a letter, insert value between 1 and 10",
                    min: "Value for multiplicand start is less than 1 or a letter, insert value between 1 and 10"
                    
                },
                column_end: {
                    required: "multiplicand end requires a value between 1 and 10",
                    max: "Value for multiplicand end is larger than 10 or a letter, insert value between 1 and 10",
                    min: "Value for multiplicand end is less than 1 or a letter, insert value between 1 and 10",
                     greaterThan:"Value for multiplicand start is larger than multiplicand end please correct this "
                    
                },
            },
            /*creates a label for errors for styling later on and puts the errors in a list*/
        errorLabelContainer: '#errors',
    wrapper:'li',
    /*In the styling when there is an error in the validator it puts a red border around it
    but it is not removed when the error is gone so when there is a succesful validation it
    removes the red border styling*/
    success : function( error, element ) {
    $(element).css( { "border" : "" } ) ;
}
        });

/* Creating the sliders using set conditions for min and max and updating the slider based
on the input from the form and updating the form box based on the slider and before creating
the table dynamically checking if it passes all the validations*/
//ROW START
$("#sliderRstart").slider({
    value: 10,
    step: 1,
    min: 1,
    max: 10,
    slide: function( event, ui ) {
             $("#row_start").val(ui.value);
             if( $('#valueinput').valid() == true){ 
                TableStart(); 
             }
           }
  });
$("#row_start").change(function () {
    var value = this.value;
    $("#sliderRstart").slider("value", parseInt(value));
    if( $('#valueinput').valid() == true){ 
        TableStart(); 
             }
  });


//ROW END
$("#sliderRend").slider({
    value: 10,
    step: 1,
    min: 1,
    max: 10,
    slide: function( event, ui ) {
             $("#row_end").val(ui.value);
             if( $('#valueinput').valid() == true){ 
                TableStart(); 
             }
           }
  });
$("#row_end").change(function () {
    var value = this.value;
    $("#sliderRend").slider("value", parseInt(value));
    if( $('#valueinput').valid() == true){ 
        TableStart(); 
             }
  });


//COLUMN START
$("#sliderCstart").slider({
    value: 10,
    step: 1,
    min: 1,
    max: 10,
    slide: function( event, ui ) {
             $("#column_start").val(ui.value);

             if( $('#valueinput').valid() == true){ 
                TableStart(); 
             }
           }
  });
$("#column_start").change(function () {
    var value = this.value;
    $("#sliderCstart").slider("value", parseInt(value));
    if( $('#valueinput').valid() == true){ 
        TableStart(); 
             }
  });

// COLUMN END
$("#sliderCend").slider({
    value: 10,
    step: 1,
    min: 1,
    max: 10,
    slide: function( event, ui ) {
             $("#column_end").val(ui.value);
             if( $('#valueinput').valid() == true){ 
                TableStart(); 
             }
           }
  });
$("#column_end").change(function () {
    var value = this.value;
    $("#sliderCend").slider("value", parseInt(value));
    if( $('#valueinput').valid() == true){ 
        TableStart(); 
             }
  });


/* Creating a tab using the method described in http://jqueryui.com/tabs/#manipulation*/

 
$( "#tabs" ).tabs();
    });



          
    "use strict";
    function TableStart() {
        /* used method described on http://stackoverflow.com/questions/11563638/javascript-get-input-text-value to obtain the value
        in the text boxes*/
    var rowS = document.getElementById('row_start').value
    var rowE = document.getElementById('row_end').value
    var columnS = document.getElementById('column_start').value
    var columnE = document.getElementById('column_end').value

    /* outputed to the console using the method mentioned in http://www.w3schools.com/js/js_output.asp tried using document.write() but it updated the page and 
    removed everything else*/

    console.log(rowS);
    console.log(rowE);
    console.log(columnS);
    console.log(columnE);

    /*Calculates the length of the rows and the height of the column for later 
    use in loops */
    var rowlength = rowE-rowS;
    var columnheight = columnE-columnS;
    
    //console.log(rowlength);
    //console.log(columnheight);


    /*Using the table method describe on http://www.w3schools.com/tags/tag_thead.asp andthe text formatting javascript examples from last homework I created the table,I tried using document.write() but I could not get that to work properly.*/
    var TableContent = "";
    var i,j,multiplicand,multiplier,multiplied; 
       
        
    /*Starts creating the table and use the thead to place the numbers 
    in the top of the header,placed an X to represent multiplication and 
    also to shift all the other header values to the right*/
    TableContent += "<table>";
    TableContent += "<thead>";
    TableContent +="<tr>";
    TableContent += "<th>";
    TableContent += "X";
    TableContent +="</th>";

    /*use a for loop to put the values in the header of the table using 
    the range of values given to us by the user, Also use the Number() function 
    to convert object values to their numbers as explained in 
    http://www.w3schools.com/jsref/jsref_number.asp*/

    for (i = 0; i <= rowlength; i++) {
        TableContent += "<th>";
        TableContent +=Number(rowS) + i
        TableContent +="</th>";
            
        }

    /*Close the head of the table and start the body of the table to insert
    the multiplied values*/

    TableContent += "</thead>";
    TableContent += "<tbody>";
    TableContent += "<tr>";

    /*Picks out the first value inputed in the multiplicand box by the user,converts it into a number using Number() and places it as the first element in the table row,this represents the value that is going to be multiplied out,i increments by one when the value has been stored  */
        TableContent += '<h1>';
    for (i = 0; i <= columnheight; i++) {
        TableContent += "<td>";
        TableContent += (Number(columnS) + i);
        TableContent += "</td>";
        

    /*Similar to the loop above it grabs the multiplicand and stores it into a value,it also does this with the multiplier,it multiplies them out and stores it.At the end of the for loop there is an if statement that makes sure it has properly reached the end of the rowlength and closes the table row */
         
    for (j = 1; j <= rowlength+1; j++) {
        TableContent += "<td>";
        multiplicand = (Number(columnS) + i);
        multiplier = Number(rowS) + (j - 1);
        multiplied = multiplicand* multiplier;
        console.log(multiplied);
        TableContent += multiplied;
        TableContent +="</td>";
        if(j==rowlength+1){
        TableContent += "</tr>";
                    }
                    
            }
            
        }
        /*Closes the table body an the table which were previously opened before loops
        started*/
        TableContent += "</h1>";
        TableContent += "</tbody>";
        TableContent +="</table>";
        document.getElementById("table").innerHTML = TableContent;

        
   }


