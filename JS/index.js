function validate (email, psw) {

    var reg_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var reg_pass = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,20}$/;

    if(email == "") {
        alert('Please enter your NITK email id!');
        return false;
    }
    else if(psw == "") {
        alert('Please enter your Password');
        return false;
    }
    else if(!email.match(reg_email)) {
        alert("Invalid Email ID! Please enter a valid Email");
        return false;
    }
    else if(!psw.match(reg_pass)) {
        alert("Invalid Password! Please enter a valid Password");
        return false;
    }
}

function signup_validation (email, psw, con_psw) {
    var reg_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var reg_pass = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,20}$/;

    if(email == "") {
        alert('Please enter your NITK email id!');
        return false;
    }
    else if(psw == "") {
        alert('Please enter your Password');
        return false;
    }
    else if(con_psw == "") {
        alert('Please confirm your Password');
        return false;
    }
    else if(!email.match(reg_email)) {
        alert("Invalid Email ID! Please enter a valid Email");
        return false;
    }
    else if(!psw.match(reg_pass)) {
        alert("Invalid Password! Please enter a valid Password");
        return false;
    }
    else if(!con_psw.match(reg_pass)) {
        alert("Invalid Password! Please enter a valid Password");
        return false;
    }
    else if(psw != con_psw) {
        alert("Passwords do not match!");
        return false;
    }
}

function voted() {
    var post = document.getElementById("post").value;
    var candidate = document.getElementById("candidate").value;
    if(post == "0") {
        alert("Please select a post!");
        return false;
    }
    else if(candidate == "0") {
        alert("Please select a candidate!");
        return false;
    }
    else {
        var con = confirm("Are you sure you want to vote for the selected candidate?\nYou cannot vote again once submitted");
        if(con) {
            alert("Your vote has been submitted!\nThank you for your valuable time.");
        }
        else return false;
    }
}

function app_valid() {
    var name = document.getElementById("name").value;
    var sem = document.getElementById("sem").value;
    var dept = document.getElementById("dept").value;
    var why = document.getElementById("why").value;

    if(name == "") {
        alert("Please enter your name!");
        return false;
    }
    else if(sem == "0") {
        alert("Please select your current semester");
        return false;
    }
    else if(dept == "") {
        alert("Please enter your department");
        return false;
    }
    else if(why == "") {
        alert("Please tell us about why do you want apply for this post?")
        return false;
    }
    else {
        alert("Your application has been submitted successfully.\nThank you for applying!");
    }
}

function select_valid() {
    var opt = document.getElementById("options").value;

    if(opt == "0") {
        alert("Please select an option!");
        return false;
    }
}