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
        console.log("მოცემული სახელით მომხმარებელი არ მოიძებნა");
    } else {
        return username;
    }
}

function passwordMatch(users, username, password) {
    let matches = false;
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
            console.log("პაროლი არასწორია");
        } else {
            return password;
        }
    }
}

function passwordQuality(password) {
    if (password != undefined) {
        if (password.length >= 8) {
            console.log("შეხვედით სისტემაში წარმატებით");
        } else {
            console.log("შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი");
        }
    }
}

let existsUser = userExists(users, "username4156");
let passMatches = passwordMatch(users, existsUser, "pass4567");
passwordQuality(passMatches);
console.log("___--------------___");


let existsUser1 = userExists(users, "username456");
let passMatches1 = passwordMatch(users, existsUser1, "pass45a67");
passwordQuality(passMatches1);
console.log("___--------------___");

let existsUser2 = userExists(users, "username456");
let passMatches2 = passwordMatch(users, existsUser2, "pass4567");
passwordQuality(passMatches2);
console.log("___--------------___");

let existsUser3 = userExists(users, "username123");
let passMatches3 = passwordMatch(users, existsUser3, "pass123");
passwordQuality(passMatches3);
