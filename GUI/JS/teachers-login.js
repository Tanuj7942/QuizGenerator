function teacher_tab(){

    document.getElementById('teacher-header').classList.add("active");
    document.getElementById('student-header').classList.remove('active');

    document.getElementById('teacher-body').classList.add("active");
    document.getElementById('student-body').classList.remove('active');

}
function student_tab(){

    document.getElementById('student-header').classList.add("active");
    document.getElementById('teacher-header').classList.remove('active');

    document.getElementById('student-body').classList.add("active");
    document.getElementById('teacher-body').classList.remove('active');
    
}
function visibility(visible){
    if(visible.className == "material-icons teacher-visible-icon"){
        toggle_visibility(visible, "teach_password");
    } else {
        toggle_visibility(visible, "stud_password");
    }
}
function toggle_visibility(visible, element_id){
    var login_pass = document.getElementById(element_id);
    if(visible.textContent == "visibility_off"){ 
        visible.textContent = "visibility";
        login_pass.type = "text";

    } else {
        visible.textContent = "visibility_off";
        login_pass.type = "password";
    }
}
function validation(check_class){
    if(check_class.className == "login-essential-teacher") {
        return check_validation("teach_username", "teach_password", "teach-login-tooltip");
    } else {
        return check_validation("stud_username", "stud_password", "stud-login-tooltip");
    }
}
function check_validation(login_username, login_password, login_tooltip) {
    var userName = document.getElementById(login_username).value.trim();
    var password = document.getElementById(login_password).value.trim();
    if(userName == "" || password == ""){
        document.getElementById(login_tooltip).style.visibility = "visible";
        return false;
    }
    else {
        document.getElementById(login_tooltip).style.visibility = "hidden";
        return true;
    }
}