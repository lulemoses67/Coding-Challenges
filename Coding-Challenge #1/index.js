$(() => {

    { //Function to toggle the nav 
        $(".nav").hide();
        $('#menuBtn').on('click', () => {
            $('#menuBtn').toggleClass('fa-bars fa-close');
            $(".nav").animate({
                width: 'toggle'
              });
        });
        
    }

});