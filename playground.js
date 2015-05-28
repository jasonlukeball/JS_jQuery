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

// Finds any p tag that contains "3"
$("p:contains(3)").css("border", "3px solid red");

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



// Form Filters
// ----------------------
// Specialised filters that operate on form elements
// http://api.jquery.com/category/selectors/form-selectors/







