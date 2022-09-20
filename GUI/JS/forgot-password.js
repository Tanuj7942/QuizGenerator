function validation() {
    if(document.getElementById("usermail").value.trim() == ""){
        document.getElementById("tooltip-error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("tooltip-error").style.display = "none";
        return true;
    }
}