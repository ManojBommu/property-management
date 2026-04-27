function register(){
    let users=JSON.parse(localStorage.getItem("users"))||[];
    users.push({name:name.value,email:email.value,password:password.value});
    localStorage.setItem("users",JSON.stringify(users));
    alert("Registered");
    window.location="login.html";
}

function login(){
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let valid=users.find(u=>u.email===email.value && u.password===password.value);
    if(valid){
        localStorage.setItem("user",JSON.stringify(valid));
        window.location="dashboard.html";
    }else alert("Invalid");
}