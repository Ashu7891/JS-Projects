const form = document.querySelector("form")
const final = document.querySelector("#final")
window.addEventListener("load",()=>{
    showData()
})
const arr = JSON.parse(localStorage.getItem('data')) || []
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let singInData ={
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("password").value
    }
    document.getElementById("name").value= ""
    document.getElementById("email").value= ""
    document.getElementById("password").value= ""
    arr.push(singInData)
    localStorage.setItem('data', JSON.stringify(arr))
    showData()
})
function showData(){
    final.innerHTML=null
    arr.forEach((element)=>{
        let div = document.createElement("div")
        div.innerHTML = `
            <p>Name:${element.Name}</p>
            <p>E-mail:${element.Email}</p>
            <p>Password:${element.Password}</p>
        `
        div.style.border="1px solid #ddd"
        div.style.padding="0px 10px"
        final.append(div)
    })
}