// login  

function login(){
    let email =  $("#email").val();
    let pass =  $("#password").val();
    const user = "admin@admin.com"
    const password = "123456"
    if (email === user  && pass === password)
    {
        alert("login sucsess")
    }
    else{
        alert("Incorrect email or password")
    }
}


