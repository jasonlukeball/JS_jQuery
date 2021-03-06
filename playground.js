/**
 * Created by jason_ball on 27/05/15.
 */


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


// parent > child
// get all paragraphs that are inside div's with class "myDiv"
$("div.myDiv p");


// ancestor descendant
// get any li's that have class "a" that are inside a ul
$("ul li.a").css("border", "1px solid red");


// prev + next
// Finds all next elements that are next to a previous element
// get the paragraph's that are next to the unordered list
$("ul + p").css("color","blue");

// prev ~ siblings
// get all the paragraph siblings for #list1
// this means any p tags in the same hierarchical level as the element with the #list1 id
$("#list1 ~ p").css("border", "2px solid black")



// ---------------
// FILTERS
// ---------------

// Filters provide even more fine-grained control over how elements are selected in the document

// Basic Filters
// ----------------------
// Getting the first, last, even or odd numbered items
// http://api.jquery.com/category/selectors/basic-filter-selectors/

$("p:first").css("border", "3px solid red");
$("p:last").css("border", "3px solid red");
$("p:even").css("border", "3px solid red");
$("p:odd").css("border", "3px solid red");
$(".a:first").css("border", "3px solid red");
$(".b:last").css("border", "3px solid red");
$(".b:even").css("border", "3px solid red");

// Select all elements at an index greater than index within the matched set.
// paragraph 1 = index 0, paragraph 2 = index 1 etc
// This gets all paragraphs with an index greater than 1
$("p:gt(1)").css("border","3px solid red");


// Select the element at index n within the matched set.
// Selects paragraph 1
$("p:eq(0)").css("border", "3px solid red");

// Selects all elements that do not match the given selector.
// Selects all paragraphs except paragraph 3 (which has index EQUAL TO 2)
$("p:not(p:eq(2))").css("border", "3px solid red");



// Content Based Filters
// ----------------------
// Filters a set of elements where the text contains "sometext" etc
// http://api.jquery.com/category/selectors/content-filter-selector/

// Finds any p tag that contains "3"
$("p:contains(3)").css("border", "3px solid red");



// Visibility Filters
// ----------------------
// Filters a set of elements using their visibility setting as the test
// http://api.jquery.com/category/selectors/visibility-filter-selectors/

// Find all p tags and make them visible
$("p:parent").css("visibility", "visible");

// Find all p tags and make them invisible
$("p:parent").css("visibility", "hidden");



// Attribute Filters
// ----------------------
// Examines the given attribute to determine if an element should be filtered out
// http://api.jquery.com/category/selectors/attribute-selectors/


// Any p tag with a class attribute
$("p[class]").css("border", "3px solid red");

// Any p tag with an id attribute
$("p[id]").css("border", "3px solid red");

// Any p tag where id = para1
$("p[id=para1]").css("border", "3px solid red");

// Any p tag where the id starts with "para"
$("p[id^=para]").css("border", "3px solid red");

// Any p tag where id starts with "para" and lang contains "en-"
$("p[id^=para][lang*=en-]").css("border", "3px solid red");



// Child Filters
// ----------------------
// Selects elements based on their relationship with their parent element
// http://api.jquery.com/category/selectors/child-filter-selectors/

// Finds all elements that are parents (ie they contain at least one other element, including text)
$("p:parent").css("border", "3px solid red");

// Finds any ul that has a li within it with class "a"
$("ul:has(li[class=a])").css("border", "3px solid red");

// Finds the 3rd li inside a ul
$("ul li:nth-child(3)").css("border", "3px solid red");

// Find every third li within a ul
// This is going to start counting and select every 3rd li in a ul
// When it finds one, the counter returns to zero
$("ul li:nth-child(3n)").css("border", "3px solid red");



// Form Selectors & Filters
// -------------------------
// Specialised filters that operate on form elements
// http://api.jquery.com/category/selectors/form-selectors/

// Find all inputs inside the form (does not include dropdowns and checkboxes)
$("form :input").css("border", "3px solid red");

// Find all text inputs (does not include textarea)
$("form :text").css("border", "3px solid red");

// Find all enabled text inputs
$("form :text:enabled").css("border", "3px solid red");

// Find all inputs in the form that are checked (includes radio buttons and checkboxes)
$("form :checked").css("border", "3px solid red");

// Find all checkboxes in the form that are checked
$("form :checkbox:checked").css("border", "3px solid red");



// -----------------------------
// MANIPULATING CONTENT
// -----------------------------

// Get the HTML for all elements inside the #list1 ul
alert( $("#list1").html() ) ;

// Replace/change the html of the #list1 ul
$("#list1").html("<h1>This WAS a ul</h1>");

// Create a new p set the content of para2 to the new p
var newParagraph = "<p>This is my NEW paragraph</p>";
$("#para2").html(newParagraph);

// Set the text content of the last paragraph
$("p:last").text("THIS IS NEW TEXT");



// -----------------------------
// MANIPULATING ATTRIBUTES
// -----------------------------

// Make all links open in a new tab
$("a").attr("target", "_blank");

// Give the image a tooltip
$("#grass").attr("title", "Yay for grass!");

// remove the a tag's href attribute
$("a").removeAttr("href");

// give the img tag a different src attribute AND tooltip text
$("img").attr({ src: "images/Spring.jpg", title: "Yay for flowers!" });



// -----------------------------
// INSERTING CONTENT
// -----------------------------

// Add content to the end of each p tag
$("p").append(" with some content appended");

// Add content to the start of each p tag
$("p").prepend("Hello! ");

// Grab the third p tag and add after the first
$("p:eq(2)").appendTo("p:first");

// Grab the last p tag and put it before the first
$("p:last").prependTo("p:first");



// -----------------------------
// WRAPPING CONTENT
// -----------------------------

// Wrap each individual p tags inside it's own div
$("p").wrap("<div style='background-color: red; color: white'/>");

// Wrap all p tags inside a single div
$("p").wrapAll("<div style='background-color: red; color: white'/>");



// -----------------------------
// REPLACING CONTENT
// -----------------------------

// Replace all p tags with h1 tags
$( "<h1>Hello</h1>" ).replaceAll( "p" );



// -----------------------------
// REMOVING CONTENT
// -----------------------------

// Removes the selected element from the DOM
//$("ul").remove();

// Remove the child elements from the selected element
$("ul").empty();



// -----------------------------
// CSS FUNCTIONS
// -----------------------------


// Give an h1 tag a css property of color and a value of red
$("h1").css("color", "red");

// get the css value of color and log it to the console
// returns "rgb(255, 0, 0)" (red)
console.log( $("h1").css("color") );

// Get CSS Properties on #theDiv
$("#theDiv").width();
$("#theDiv").height();
$("#theDiv").innerHeight();
$("#theDiv").innerWidth();
$("#theDiv").outerHeight();
$("#theDiv").outerWidth();
$("#theDiv").offset().top;
$("#theDiv").offset().left;




// -----------------------------
// EVENTS
// -----------------------------

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

// Mouseover / Mouseleave (this will do the same as hover in this case)
$("#evtTarget").on("mouseover mouseleave", function() {
    $("#evtTarget").toggleClass("highlighted");
});

// Hover Event
$("#evtTarget").hover(function() {
    $("#evtTarget").toggleClass("highlighted");
});

// Click Event
$("#evtTarget").click(function() {
    $("#evtTarget").html("Single Click!");
});

// Double Click Event
$("#evtTarget").dblclick(function() {
    $("#evtTarget").html("Double Click!");
});



// -----------------------------
// ANIMATION
// -----------------------------


// Show / Hide Elements
// ----------------------

// Show theDiv
$("#show").click(function() {
    $("#theDiv").show("normal");
});

// Hide theDiv
$("#hide").click(function() {
    $("#theDiv").hide("normal");
});

// Toggle Show/Hide theDiv
$("#toggle").click(function() {
    $("#theDiv").toggle("slow");
});


// Fade Elements
// ----------------------

// Fade in
$("#fadein").click(function() {
    $("#theDiv").fadeIn("normal");
});

// Fade out
$("#fadeout").click(function() {
    $("#theDiv").fadeOut("normal");
});

// Fade to 40% Opacity
$("#fadeto3").click(function() {
    $("#theDiv").fadeTo("slow", 0.4);
});

// Fade to 100% Opacity
$("#fadeup").click(function() {
    $("#theDiv").fadeTo("slow", 1.0);
});


// Slide Elements
// ----------------------

// Slide up
$("#slideup").click(function() {
    $("#theDiv").slideUp("normal");
});

// Slide down
$("#slidedown").click(function() {
    $("#theDiv").slideDown("normal");
});

// Slide Toggle
$("#toggle").click(function() {
    $("#theDiv").slideToggle("slow");
});


// Animate CSS Changes
// ----------------------

// Change the width of the div
$("#right").click(function() {
    $("#theDiv").animate({ width: "500px" }, 1000);
});

// Change the font size
$("#text").click(function() {
    $("#theDiv").animate({ fontSize: "24pt" }, 1000);
});

// Move the div to left: 500
$("#toggle").click(function() {
    $("#theDiv").animate({ left: "500" }, 1000, "swing");
});


// -----------------------------
// AJAX
// -----------------------------


$("document").ready(function() {
    getData();
});


// AJAX REQUEST
function getData() {

    $.ajax({
        url:      "testdata.txt",
        type:     "GET",
        dataType: "text",
        success:  successFn,
        error:    errorFn,
        complete: function() { console.log("AJAX Request Complete!"); }
    });

}


// SUCCESS FUNCTION
function successFn(result) {
    console.log("SUCCESS");
    $("#content").append(result);
}


// ERROR FUNCTION
function errorFn(xhr, status, strErr) {
    console.log(xhr.responseText);
    console.log(status);
    console.log(strErr);
}




// HELPER FUNCTIONS
// --------------------------

// Load data from the server using a HTTP GET request.
jQuery.get();

// Load JSON-encoded data from the server using a GET HTTP request.
jQuery.getJSON();

// Load a JavaScript file from the server using a GET HTTP request, then execute it.
jQuery.getScript();

// Load data from the server using a HTTP POST request.
jQuery.post();

// Load data from the server and place the returned HTML into the matched element.
// This is the shorthand way to GET data and load it into an element
.load();



