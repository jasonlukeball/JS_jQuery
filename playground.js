/**
 * Created by jason_ball on 27/05/15.
 */


// ---------------
// EVENTS
// ---------------

// DOCUMENT READY
$("document").ready(function() {
    // When the DOM has loaded, flash an alert
    // This does NOT include ALL resources such as images etc
    // ...
});

// WINDOW LOAD
$(window).load(function(){
    // Runs after ALL the resources, images, css, js etc are completely loaded
    // ...
});



// ---------------
// SELECTORS
// ---------------

// tagName
// Finds all elements with the tag "tagName"
$("li");
// Finds all <li> tags

// #id
// Finds all elements with the #id
$("#123");

// .className
// Finds all elements that have a class attribute of "myClass"
$(".myClass");


// tag.ClassName
// Finds elements of type "tag" with the class attribute of "className"
$("h2.myClass");

// tag#id.className
// Finds all elements with the tag "tag", the id of "#id" and the class of "className"
$("h2#123.myClass");

// *
// Wildcard operator, finds ALL elements on the page
$("*");


// selector,selector
// You can provide a comma separated list of all selectors to find on
// Finds all <h1> and all <h2>
$("h1,h2");


// .class1.class2
// Finds any elements that have BOTH class1 and class2 attributes (elements with multiple classes)
$(".myClass.myClass2");
