// For C Button
let number1 = document.querySelector("#number1")
let clickButton = "upper";
let clicke = () => {
    document.getElementById("result").value = "";
    if(clickButton == "upper"){
        clickButton = "red";
        setTimeout(() => {
            number1.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number1.classList.add("btn");
        },150);
    }
    else{
        clickButton = "upper";
        setTimeout(() => {
            number1.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number1.classList.remove("btns");
        },150);
    }
}
number1.addEventListener("click", clicke);
// For Delete Button
let number2 = document.querySelector("#number2")
let delClick = "upper";
let ClickDel = () => {
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
    if(delClick == "upper"){
        delClick = "red";
        setTimeout(() => {
            number2.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number2.classList.add("btn");
        },150);
    }
    else{
        delClick = "upper";
        setTimeout(() => {
            number2.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number2.classList.remove("btns");
        },150);
    }
}
number2.addEventListener("click", ClickDel);
// For % Button
let number3 = document.querySelector("#number3")
let perClick = "upper";
let clickPer = () => {
    document.getElementById("result").value += "%";
    if(perClick == "upper"){
        perClick = "red";
        setTimeout(() => {
            number3.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number3.classList.add("btn");
        },150);
    }
    else{
        perClick = "upper";
        setTimeout(() => {
            number3.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number3.classList.remove("btns");
        },150);
    }
}
number3.addEventListener("click", clickPer);
// For / Button
let number4 = document.querySelector("#number4")
let divClick = "upper";
let clickDiv = () => {
    document.getElementById("result").value += "/";
    if(divClick == "upper"){
        divClick = "red";
        setTimeout(() => {
            number4.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number4.classList.add("btn");
        },150);
    }
    else{
        divClick = "upper";
        setTimeout(() => {
            number4.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number4.classList.remove("btns");
        },150);
    }
}
number4.addEventListener("click", clickDiv);
// For 7 Button
let number5 = document.querySelector("#number5")
let sevenClick = "upper";
let clickSeven = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 7;
    }
    else{
        document.getElementById("result").value += 7;
    }    if(sevenClick == "upper"){
        sevenClick = "red";
        setTimeout(() => {
            number5.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number5.classList.add("btn");
        },150);
    }
    else{
        sevenClick = "upper";
        setTimeout(() => {
            number5.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number5.classList.remove("btns");
        },150);
    }
}
number5.addEventListener("click", clickSeven);
// For 8 Button
let number6 = document.querySelector("#number6")
let eightClick = "upper";
let clickEight = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 8;
    }
    else{
        document.getElementById("result").value += 8;
    }    if(eightClick == "upper"){
        eightClick = "red";
        setTimeout(() => {
            number6.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number6.classList.add("btn");
        },150);
    }
    else{
        eightClick = "upper";
        setTimeout(() => {
            number6.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number6.classList.remove("btns");
        },150);
    }
}
number6.addEventListener("click", clickEight);
// For 9 Button
let number7 = document.querySelector("#number7")
let nineClick = "upper";
let clickNine = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 9;
    }
    else{
        document.getElementById("result").value += 9;
    }    if(nineClick == "upper"){
        nineClick = "red";
        setTimeout(() => {
            number7.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number7.classList.add("btn");
        },150);
    }
    else{
        nineClick = "upper";
        setTimeout(() => {
            number7.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number7.classList.remove("btns");
        },150);
    }
}
number7.addEventListener("click", clickNine);
// For x Button
let number8 = document.querySelector("#number8")
let multiClick = "upper";
let clickMulti = () => {
    document.getElementById("result").value += "*";
    if(multiClick == "upper"){
        multiClick = "red";
        setTimeout(() => {
            number8.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number8.classList.add("btn");
        },150);
    }
    else{
        multiClick = "upper";
        setTimeout(() => {
            number8.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number8.classList.remove("btns");
        },150);
    }
}
number8.addEventListener("click", clickMulti);
// For 4 Button
let number9 = document.querySelector("#number9")
let fourClick = "upper";
let clickFour = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 4;
    }
    else{
        document.getElementById("result").value += 4;
    }
    if(fourClick == "upper"){
        fourClick = "red";
        setTimeout(() => {
            number9.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number9.classList.add("btn");
        },150);
    }
    else{
        fourClick = "upper";
        setTimeout(() => {
            number9.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number9.classList.remove("btns");
        },150);
    }
}
number9.addEventListener("click", clickFour);
// For 5 Button
let number10 = document.querySelector("#number10")
let fiveClick = "upper";
let clickFive = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 5;
    }
    else{
        document.getElementById("result").value += 5;
    }
    if(fiveClick == "upper"){
        fiveClick = "red";
        setTimeout(() => {
            number10.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number10.classList.add("btn");
        },150);
    }
    else{
        fiveClick = "upper";
        setTimeout(() => {
            number10.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number10.classList.remove("btns");
        },150);
    }
}
number10.addEventListener("click", clickFive);
// For 6 Button
let number11 = document.querySelector("#number11")
let sixClick = "upper";
let clickSix = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 6;
    }
    else{
        document.getElementById("result").value += 6;
    }
    if(sixClick == "upper"){
        sixClick = "red";
        setTimeout(() => {
            number11.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number11.classList.add("btn");
        },150);
    }
    else{
        sixClick = "upper";
        setTimeout(() => {
            number11.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number11.classList.remove("btns");
        },150);
    }
}
number11.addEventListener("click", clickSix);
// For - Button
let number12 = document.querySelector("#number12")
let minusClick = "upper";
let clickMinus = () => {
    document.getElementById("result").value += "-";
    if(minusClick == "upper"){
        minusClick = "red";
        setTimeout(() => {
            number12.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number12.classList.add("btn");
        },150);
    }
    else{
        minusClick = "upper";
        setTimeout(() => {
            number12.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number12.classList.remove("btns");
        },150);
    }
}
number12.addEventListener("click", clickMinus);
// For 1 Button
let number13 = document.querySelector("#number13")
let oneClick = "upper";
let clickOne = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 1;
    }
    else{
        document.getElementById("result").value += 1;
    }
    if(oneClick == "upper"){
        oneClick = "red";
        setTimeout(() => {
            number13.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number13.classList.add("btn");
        },150);
    }
    else{
        oneClick = "upper";
        setTimeout(() => {
            number13.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number13.classList.remove("btns");
        },150);
    }
}
number13.addEventListener("click", clickOne);
// For 2 Button
let number14 = document.querySelector("#number14")
let twoClick = "upper";
let clickTwo = () => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 2;
    }
    else{
        document.getElementById("result").value += 2;
    }
    if(twoClick == "upper"){
        twoClick = "red";
        setTimeout(() => {
            number14.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number14.classList.add("btn");
        },150);
    }
    else{
        twoClick = "upper";
        setTimeout(() => {
            number14.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number14.classList.remove("btns");
        },150);
    }
}
number14.addEventListener("click", clickTwo);
// For 3 Button
let number15 = document.querySelector("#number15")
let threeClick = "upper";
let clickThree = (val) => {
    if(document.getElementById("result").value === '0'){
        document.getElementById("result").value = 3;
    }
    else{
        document.getElementById("result").value += 3;
    }
    if(threeClick == "upper"){
        threeClick = "red";
        setTimeout(() => {
            number15.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number15.classList.add("btn");
        },150);
    }
    else{
        threeClick = "upper";
        setTimeout(() => {
            number15.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number15.classList.remove("btns");
        },150);
    }
}
number15.addEventListener("click", clickThree);
// For + Button
let number16 = document.querySelector("#number16")
let plusClick = "upper";
let clickPlus = () => {
    document.getElementById("result").value += "+";
    if(plusClick == "upper"){
        plusClick = "red";
        setTimeout(() => {
            number16.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number16.classList.add("btn");
        },150);
    }
    else{
        plusClick = "upper";
        setTimeout(() => {
            number16.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number16.classList.remove("btns");
        },150);
    }
}
number16.addEventListener("click", clickPlus);
// For 00 Button
let number17 = document.querySelector("#number17")
let dblzeroClick = "upper";
let number = /[1-9]/;
let clickDblZero = () => {
    if(document.getElementById("result").value.match(number)){
        document.getElementById("result").value += "00";
    }
    else{
        document.getElementById("result").value = 0;
    }
    if(dblzeroClick == "upper"){
        dblzeroClick = "red";
        setTimeout(() => {
            number17.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number17.classList.add("btn");
        },150);
    }
    else{
        dblzeroClick = "upper";
        setTimeout(() => {
            number17.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number17.classList.remove("btns");
        },150);
    }
}
number17.addEventListener("click", clickDblZero);
// For 0 Button
let number18 = document.querySelector("#number18")
let zeroClick = "upper";
let num = /[1-9]/ 
let clickZero = () => {
    if(document.getElementById("result").value.match(num)){
        document.getElementById("result").value += 0;
    }
    else{
        document.getElementById("result").value = 0;
    }
    if(zeroClick == "upper"){
        zeroClick = "red";
        setTimeout(() => {
            number18.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number18.classList.add("btn");
        },150);
    }
    else{
        zeroClick = "upper";
        setTimeout(() => {
            number18.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number18.classList.remove("btns");
        },150);
    }
}
number18.addEventListener("click", clickZero);
// For Point(.) Button
let number19 = document.querySelector("#number19")
let pointClick = "upper";
let clickPoint = () => {
    document.getElementById("result").value += ".";
    if(pointClick == "upper"){
        pointClick = "red";
        setTimeout(() => {
            number19.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number19.classList.add("btn");
        },150);
    }
    else{
        pointClick = "upper";
        setTimeout(() => {
            number19.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number19.classList.remove("btns");
        },150);
    }
}
number19.addEventListener("click", clickPoint);
// For = Button
let number20 = document.querySelector("#number20")
let equalClick = "upper";
let clickEqual = () => {
    document.getElementById("result").value = eval(document.getElementById("result").value.replace("%","/100*"));
    if(equalClick == "upper"){
        equalClick = "red";
        setTimeout(() => {
            number20.classList.add("btns");
        }, 0);
        setTimeout(() => {
            number20.classList.add("btn");
        },150);
    }
    else{
        equalClick = "upper";
        setTimeout(() => {
            number20.classList.remove("btn");
        }, 0);
        setTimeout(() => {
            number20.classList.remove("btns");
        },150);
    }
}
number20.addEventListener("click", clickEqual);