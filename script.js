function login() {

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let msg = document.getElementById("msg");

    if (user === "admin" && pass === "1234") {
        window.location.href = "home.html";
    } 
    else {
        msg.innerText = "Invalid Login!";
        msg.style.color = "red";
    }
}
