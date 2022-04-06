function entrar(){
    let user, pass, element;
    user = document.getElementById("user").value;
    pass = document.getElementById("senha").value;

    element = document.getElementById("user");

    if(user.length > 0)
    {
        user_pass(user, pass);
    }else
    {
        window.alert("The fields are empty. Check it!");
    }
}

function user_pass(user, pass)
{
    let _user = "admin";
    let _pass = "123";

    if(_user == user && _pass == pass)
    {
        window.alert("Logado com sucesso!");
    }else{
        window.alert("Username or password is incorrect!");
    }
}
function color_select()
{
    let _verf = document.getElementById("country").value;
    if(_verf == "Choose a country")
    {
        document.getElementById("country").style.backgroundColor = "red";
   }else{
        document.getElementById("country").style.backgroundColor = "blue";
   }
}