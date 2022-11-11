$("h1").css("color", "red"); // here we select the h1 and we put the css with the color property and then 
//put the color but all in ""

console.log($("h1").css("font-size"));
console.log($("h1").css("color"));

$("h1").addClass("bigstyle margin-50"); //here we add aclass of bigstyle in to our h1 tag after creating it in css
//if u want to remove class we write .removeClass, if u want to check if the element has that class we 
//type hasClass
$("button").text("Dont click me")
$("a").attr("href", "https://www.goal.com"); //this one selects attrivutes and href is the atrribue anf goal.com is wat it is set 2
//("h1").attr("class");  usually selects the classes of the h1 tag
$("h1").click(function() {

    $("h1").css("color", "purple");
}); //this function is for adding event listners

$("button").click(function() {
    //so here we select the button element and the we say if it detects a click , we open a function wic is annonmous and 
    //it consists of the code below

    $("h1").css("color", "yellow");
}); //here we add an event listner wic is click witha function selecting the css and changing the color of the required element

// $("input").keypress(function(event) { //this code is for recognizing the key pressed and creating a function event
//     //which is later console logged with a event.key function
//     console.log(event.key);
//     //note :- if u want to select the whole document,u select it using the document replacing it with input

// });
$(document).keypress(function(event) {
    //detects key presses

    $("h1").text(event.key);
});

$("h1").on("mouseover", function() { //this is a simpler way of writing j querry or u can select click
    $("h1").css("color", "grey");

});

$("h1").before(" <button> goal</button>"); //this code puts the button element before the heading
$("h1").after("<button>after</button>"); //this code puts the button elements after the heading
$("h1").append("<button>append</button>"); //this one puts it on the right hand side og the heading
$("h1").prepend("<button>prepend</button>"); //this one puts it on the left hand side of the code


$("button").on("click", function() {

    $("h1").fadeToggle(); //this one selects the events wic are clicks and then toggles() them on and off 
    //if u want to switch on u say .show() and if u want to hide .hide()
    //so i decided to use fadeToggle() to fade it out
    //so we can also slideUp(); and we slideDown();
    //so if u want to slide toggle it u write slideToggle();

});
$("button").on("click", function() {

    $("input").slideToggle();
});
$("h2").addClass("htwo");

$("button").on("click", function() {
    $("h2").slideUp().slideDown().animate({ opacity: 0.5 });
    //here we chain our animations all together 


})