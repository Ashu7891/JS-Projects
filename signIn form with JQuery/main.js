$(document).ready(()=>{
    window.addEventListener('load',()=>{
        showOnDom(arr)
    })
    let arr = JSON.parse(localStorage.getItem("signInData")) || []
    $("#signup").submit((e)=>{
        e.preventDefault()
        const name = $("#name").val()
        const email = $("#email").val()
        const phone = $("#phone").val()
        const country = $("#country").val()
        const password = $("#password").val()
        const data = {
            name,
            email,
            phone,
            country,
            password
        }
        let isValid = true
        if(name == ""){
            findError("Name");
            isValid = false
        }else{
            $("#NameError").empty()
        }
        if(email == ""){
            findError("Email");
            isValid = false
        }else{
            $("#EmailError").empty()
        }
        if(country == ""){
            findError("Country");
            isValid = false
        }else{
            $("#CountryError").empty()
        }
        if(phone == ""){
            findError("Phone");
            isValid = false
        }else{
            $("#PhoneError").empty()
        }
        if(password == ""){
            findError("Password");
            isValid = false
        }else{
            $("#PasswordError").empty()
        }
        if(isValid){
            alert("Form sumbitted Successfully.")
            $("#name").val("")
            $("#email").val("")
            $("#phone").val("")
            $("#country").val("")
            $("#password").val("")
            arr.push(data)
            localStorage.setItem("signInData", JSON.stringify(arr))
            showOnDom(arr)
        }
    })
    function findError(id){
        $(`#${id}Error`).text(`${id} Can't be blank.`).css("color", "red")
    }
    function showOnDom(arr){
        $("#container2").text(null)
        arr.forEach((element)=>{
            let div = document.createElement("div")
            div.style.border = "2px solid black"
            div.style.padding = "0px 10px"
            div.innerHTML = `
                <p>Name: ${element.name}</p>
                <p>Email: ${element.email}</p>
                <p>Country: ${element.phone}</p>
                <p>Phone: ${element.country}</p>
                <p>Password: ${element.password}</p>
            `
            $("#container2").append(div)
        })
    }
})