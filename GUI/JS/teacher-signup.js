function validation() {
    var number = document.getElementById("phone_number").value;
    var user_pass = document.getElementById("user_password").value.trim();
    var confirm_pass = document.getElementById("confirm_password").value.trim();
    alert("hi");
    alert(/\b[6-9]{10}/.test(number) == false);
    let phone_number_validation = /\b[0-5]{10}/;
    if(phone_number_validation.test(number) == false) { 
        document.getElementById("invalid_number").style.visibility = "visible";
        return false;
    } 
    else if(user_pass.length < 8) {
        document.getElementById("short_pass").style.visibility = "visible";
        return false;
    } 
    else {
        alert("4");
        return true;
    }
}