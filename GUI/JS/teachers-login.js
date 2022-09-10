function teacher_tab(){

    const teach_login = document.querySelectorAll('.teacher-login-panel');
    const stud_login = document.querySelectorAll('.student-login-panel');

    for(const i of teach_login) {
        i.classList.add('active');
    }
    for(const j of stud_login) {
        j.classList.remove('active');
    }
}
function student_tab(){

    const teach_login = document.querySelectorAll('.teacher-login-panel');
    const stud_login = document.querySelectorAll('.student-login-panel');

    for(const i of stud_login) {
        i.classList.add('active');
    }
    for(const j of teach_login) {
        j.classList.remove('active');
    }
}
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