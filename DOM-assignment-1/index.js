let signUp = document.getElementById("signup")
let name = document.getElementById("name")
let email = document.getElementById("email")
let country = document.getElementById("country")
let phone = document.getElementById("phone")
let password = document.getElementById("password")

signUp.addEventListener('submit', (e)=>{
    e.preventDefault();
    let signUpData = {
        Name: name.value,
        Email: email.value,
        Country: country.value,
        Phone: phone.value,
        Password: password.value
    }
    const signUpDatas = document.querySelector("#signUpData")
    signUpDatas.innerHTML = `
        <h1>Sign Up</h1>
        <td>Name :</td>
        <td>${name.value}</td><br><br>
        <td>Email Address :</td>
        <td>${email.value}</td><br><br>
        <td>Country :</td>
        <td>${country.value}</td><br><br>
        <td>Phone :</td>
        <td>${phone.value}</td><br><br>
        <td>Password:</td>
        <td>${password.value}</td> <br><br><br><br>
    `
    name.value = ""
    email.value = ""
    country.value = ""
    phone.value = ""
    password.value = ""
})

let signIn = document.getElementById("signin")
let signInName = document.getElementById("signin-name")
let signInEmail = document.getElementById("signin-email")
let signInPassword = document.getElementById("signin-password")

signIn.addEventListener('submit', (event)=>{
    event.preventDefault();
    let signInData = {
        Name: signInName.value,
        Email: signInEmail.value,
        Password: signInPassword.value
    }
    const signInDatas = document.querySelector("#signInData")
    signInDatas.innerHTML = `
        <h1>Sign In</h1>
        <td>Name :</td>
        <td>${signInName.value}</td><br><br>
        <td>Email Address :</td>
        <td>${signInEmail.value}</td><br><br>
        <td>Password :</td>
        <td>${signInPassword.value}</td>
    `
    signInName.value = ""
    signInEmail.value = ""
    signInPassword.value = ""
})