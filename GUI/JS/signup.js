function validation() {
    var phone_num = (document.getElementById("phone_number").value.trim());
    var user_pass = document.getElementById("user_password").value.trim();
    var confirm_pass = document.getElementById("confirm_password").value.trim();
    error_msg_visibility()

    if (/^[6-9]\d{9}$/.test(phone_num) == false) {
        document.getElementById("invalid_number").style.visibility = "visible";
        return false;
    } else if (/[ ]/.test(user_pass)) {
        document.getElementById("white_space_pass").style.visibility = "visible";
        return false;
    } else if (user_pass !== confirm_pass) {
        document.getElementById("no_match_pass").style.visibility = "visible";
        return false;
    }
}

function error_msg_visibility() {
    var error_messages = document.getElementsByClassName("error_msg");
    for (var i = 0; i < error_messages.length; i++) {
        error_messages[i].style.visibility = "hidden";
    }
}