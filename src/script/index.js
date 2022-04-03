const result = document.getElementById("result");
const repeat = document.getElementById("repeatedpassword");
const newpassword = document.getElementById("newpassword");
const submiter = document.getElementById("submiter");


const handleSubmit =()=>{
    if(repeat.value == newpassword.value){
        result.innerHTML = "";
        location.href = "confirm.html";
    }
    else{
        result.innerHTML = "Hasła nie są takie same";
    }
}

submiter.addEventListener("click", handleSubmit);

