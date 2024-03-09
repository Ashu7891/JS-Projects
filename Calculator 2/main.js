const allButtons = document.querySelectorAll("#keyboard>div");
const display = document.getElementById("display");
let bag = ""
allButtons.forEach((ele)=>{
    ele.addEventListener("click", (event)=>{
        let currentValue = event.target.innerText
        if(currentValue == "C"){
            bag= ""
            display.innerHTML = ""
        }
        else if(currentValue == "="){
            display.innerHTML = eval(bag)
            bag = ""
        } else{
            bag = bag + currentValue
            display.innerHTML = bag
        }
    })
})