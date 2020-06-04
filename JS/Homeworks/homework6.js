let user = {
    email: "username123@mail.com",
    username: "username123",
    password: "pass123"
}
let user1 = {
    email: "username321@mail.com",
    username: "username321",
    password: "pass321"
}
let user2 = {
    email: "username456@mail.com",
    username: "username456",
    password: "Pass4567"
}
let user3 = {
    email: "username654@mail.com",
    username: "username654",
    password: "pass654"
}
let users = [];
users.push(user);
users.push(user1);
users.push(user2);
users.push(user3);

function userExists(users, email) {
    let exists = false;
    let error = document.getElementById("error");
    if (users.length == 0) {
        return null;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            exists = true;
            i = users.length;
        } else {
            exists = false;
        }
    }
    if (!exists) {
        error.innerHTML = "მოცემული მეილით მომხმარებელი არ მოიძებნა"
        console.log("მოცემული სახელით მომხმარებელი არ მოიძებნა");
    } else {
        return email;
    }
}
function passwordMatch(users, email, password) {
    let matches = false;
    let error = document.getElementById("error");
    if (users.length == 0 || email === undefined) {
        return null;
    } else {
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && users[i].password === password) {
                matches = true;
                i = users.length;
            } else {
                matches = false;
            }
        }
        if (!matches) {
            error.innerHTML = "პაროლი არასწორია";
            console.log("პაროლი არასწორია");
        } else {
            return password;
        }
    }
}

function passwordQuality(password) {
    let error = document.getElementById("error");
    let res = passwordPattern(password);

    if (password != undefined) {
        if (res) {
            window.location = "index.html";
        } else {
            error.innerHTML = "შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი";
            console.log("შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი");
        }
    }
}

function passwordPattern(pass) {
    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(^\S*$)/;
    let result = pattern.exec(pass);
    return result !== null;
}

function emailPattern(email) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\[a-z]{2,3})/;
    let result = pattern.exec(email);
    return result !== null;
}

function redirectLogin() {
    window.location = "login.html";
}

function loginActionOnBtnClick() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (emailPattern(username)) {
        let existsUser = userExists(users, username);
        let passMatches = passwordMatch(users, existsUser, password);
        passwordQuality(passMatches);
    } else {
        error.innerHTML = "გთხოვთ მეილი შეიყვანოთ სწორ ფორმატში";
    }
}

function togglePassInputType() {
    let pass = document.getElementById('password');
    if (pass.type == "text") {
        pass.type = "password";
    } else {
        pass.type = "text";
    }
}
