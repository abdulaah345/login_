
  var x= document.getElementById("Login")
  var y= document.getElementById("Register")
  var z= document.getElementById("btn")

  function Register(){
      x.style.left="-400px"
      y.style.left="50px"
      z.style.left="110px"

  }
  
  function Login() {
      x.style.left="50px"
      y.style.left="450px"
      z.style.left="0px"

  }
let user_btn=document.querySelector(".submit-btn");
 user_btn.addEventListener('click',validate);
function validate()
{
    
    
    var us=document.getElementById("username").value;
    var pass=document.getElementById("Password").value ;
    if(us>=5 || pass>=4)
    {
    if(us==="abdo"&& pass==="123")
    {
        alert("login successfuly!");
    }
    else
    {
        alert("login failed!");
    }
}else{
    return 0;
}
}
// validate();