// Dark Mode
$("#darkModeBtn").click(function(){

    $("body").toggleClass("dark-mode");

});

// Alert Order
$("#orderBtn").click(function(){

    alert("Thank you for ordering!");

});

// Contact Form
$("#contactForm").submit(function(e){

    e.preventDefault();

    alert("Message sent successfully!");

});