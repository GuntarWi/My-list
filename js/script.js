/**
 * Created by Wi on 03.10.2015.
 */

$(document).ready(function(){
    $( ".search-btn" ).click(function() {
        $( ".search-bar" ).slideToggle( "hidden" );
    });

    $( ".add-task-btn" ).click(function() {
        $( ".add-task-bar" ).slideToggle( "hidden" );
        $(this).toggleClass("rotation");
    });

    $( ".big-task-content, .details" ).click(function() {
        $( ".details, .claendar " ).toggleClass( "hidden" );
    });

    $( ".set-up-data" ).hover(function() {
        $( ".set-due-date" ).toggleClass( "hidden" );
    });
    
    
    $(".toggleBtn").on('click',function(){
    $(this).children('.fa-circle-thin, .fa-check-circle').toggleClass("fa-check-circle fa-circle-thin");
  
        
        
});
    
    $( ".toggleBtn" ).on( "click", function( event ) {
  $(event.target).closest( ".main-task,.task" ).toggleClass( "checked" );
});

    


})









