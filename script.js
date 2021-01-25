    $(function(){
    $("#submitform").validate({
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
        },
        submitHandler:(submitform,e)=>{
            e.preventDefault()
            $.ajax({
             url:"https://script.google.com/macros/s/AKfycbzxZNtnbldiXegeriTZS-KBZdExRfgc_MwOGa40z4bGzySypLskdETc/exec",
             data:$("#submitform").serialize(),
             method:"post",
             success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
             },
             error:function (err){
                alert("Something Error")
             }
            })
        }
    })
}) 
