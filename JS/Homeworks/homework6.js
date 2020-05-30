let user = {
    username: "username123",
    password: "pass123"
}
let user1 = {
    username: "username321",
    password: "pass321"
}
let user2 = {
    username: "username456",
    password: "pass4567"
}
let user3 = {
    username: "username654",
    password: "pass654"
}
let users = [];
users.push(user);
users.push(user1);
users.push(user2);
users.push(user3);

function userExists(users, username) {
    let exists = false;
    let error = document.getElementById("error");
    if (users.length == 0) {
        return null;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            exists = true;
            i = users.length;
        } else {
            exists = false;
        }
    }
    if (!exists) {
        error.innerHTML = "მოცემული სახელით მომხმარებელი არ მოიძებნა"
        console.log("მოცემული სახელით მომხმარებელი არ მოიძებნა");
    } else {
        return username;
    }
}
function passwordMatch(users, username, password) {
    let matches = false;
    let error = document.getElementById("error");
    if (users.length == 0 || username === undefined) {
        return null;
    } else {
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username && users[i].password === password) {
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
    if (password != undefined) {
        if (password.length >= 8) {
            sessionStorage.setItem("lastname", "Smith");
            window.location = "index.html";
        } else {
            error.innerHTML = "შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი";
            console.log("შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი");
        }
    }
}

function redirectLogin() {
    window.location = "login.html";
}

function loginActionOnBtnClick() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let existsUser = userExists(users, username);
    let passMatches = passwordMatch(users, existsUser, password);
    passwordQuality(passMatches);
}

function togglePassInputType() {
    let pass = document.getElementById('password');
    if (pass.type == "text") {
        pass.type = "password";
    } else {
        pass.type = "text";
    }
}
