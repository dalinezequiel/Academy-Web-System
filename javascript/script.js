function access()
{
    let user, pass;

    let _user = "admin";
    let _pass = "123";

    user = document.getElementById("user").value;
    pass = document.getElementById("senha").value;

    var element = document.getElementById("erro");
    element.style.padding = "5px";

    var text;
    
    if(user.length > 0 && pass.length > 0)
    {
        if(_user == user && _pass == pass)
        {
            element.style.backgroundColor = "rgb(19, 192, 19)";
            text = "Access granted!";
            element.innerHTML = text;
        }else{
            element.style.backgroundColor = "#fe8b8e";
            text = "Username or password is incorrect!";
            element.innerHTML = text;
        }
        return true;
    }else
    {
        element.style.backgroundColor = "#fe8b8e";
        text = "The fields are empty. Check it!";
        element.innerHTML = text;
        return false;
    }
}
