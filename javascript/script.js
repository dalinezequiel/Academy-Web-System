function access()
{
    let user, pass;

    let _user = "tester";
    let _pass = "da2022";

    user = document.getElementById("user").value;
    pass = document.getElementById("senha").value;

    var element = document.getElementById("erro");
    var text;
    
    if(user.length > 0 && pass.length > 0)
    {
        if(_user == user && _pass == pass)
        {
            window.location.href = "../page/dashboard.html";
            element.style.color = "rgb(19, 192, 19)";
            text = "Access granted!";
            element.innerHTML = text;
            window.location.href = "../page/dashboard.html";
        }else{
            element.style.color = "#fe8b8e";
            text = "Inavlid username and password!";
            element.innerHTML = text;
        }
        return true;
    }else
    {
        element.style.color = "#fe8b8e";
        text = "The fields are empty. Check it!";
        element.innerHTML = text;
        return false;
    }
}

function getId(btn)
{
    let id = btn.id;
    
    if(id == "basic")
    {
        localStorage.setItem("PLAN", id);
    }else{
        if(id == "advanced")
        {
            localStorage.setItem("PLAN", id);
        }else
        {
            localStorage.setItem("PLAN", id);
        }
    }
}

window.addEventListener('load', () =>{
    var basic = document.getElementById(localStorage.getItem("PLAN"));
    basic.selected = true;
    localStorage.removeItem("PLAN");
});