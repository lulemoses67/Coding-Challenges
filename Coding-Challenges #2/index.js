{

    //select the elements we need the tick and email input
    let email = document.querySelector('#email');
    let tick =  document.querySelector('#tick');

    //Email Regex
    const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //function to add valid css classes to elements
    const validEmail = () => {
        
        if (email.value.match(formatEmail)) {

            tick.classList.add("tick-valid");
            email.classList.remove("invalid");
            email.classList.add("valid");

        } else {

            tick.classList.remove("tick-valid");
            email.classList.remove("valid");
            email.classList.add("invalid");
            
        }
    }
    //Add Event listener
    email.addEventListener("input", validEmail);
    
}



