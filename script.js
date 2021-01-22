$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:2  
            },
            eMail:{
                required:true,
                email:true
            },
            message:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Name is required",
                minlength:"Atleast two characters required"
            },
            eMail:{
                required:"Enter a valid email address",
                email:"This email is not valid"
            }
        }
    })
        
})