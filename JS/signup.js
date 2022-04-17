document.querySelector("form").addEventListener("submit",storeData)

function storeData(){
    event.preventDefault()
    let details={
        email: document.getElementById("email").value,
        password:document.getElementById("password").value,
        confirmPassword:document.getElementById("confirmPassword").value
        
    }
  

    let temp
    let getData=JSON.parse(localStorage.getItem("LoginDetails"))
   

    if(getData===null){
        temp=[]
    }
    else{
        temp=getData
    }

    if(details.password===details.confirmPassword){
    temp.push(details)
    localStorage.setItem("LoginDetails",JSON.stringify(temp))
    alert("Sign up successful!")
    window.location.href="login.html"
    }
    else{
        alert("Confirm Password doesn't match")
    }
}