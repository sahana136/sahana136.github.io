function validate () {
    var email =login.email.value;
    var psw = login.psw.value;
    if(email == "") {
        alert('Please enter your NITK email id!');
        return false;
    }
    if(psw =="") {
        alert('Please enter your Password');
        return false;
    }
}