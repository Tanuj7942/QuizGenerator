function validation(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(userName == "" & password == ""){
        alert("Blank Fields");
        return false;
    } else {
        return true;
    }
}