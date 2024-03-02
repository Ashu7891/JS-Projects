let operators = document.querySelectorAll("#operator");

operators.forEach((operator) => {
    operator.addEventListener("click",  () => {
        let firstNumber = document.getElementById("first").value;
        let secondNumber = document.getElementById("second").value;
        if(operator.value == '+'){
            document.getElementById("result").innerHTML = parseInt(firstNumber) + parseInt(secondNumber)
        }
        else if(operator.value == '-'){
            document.getElementById("result").innerHTML = parseInt(firstNumber) - parseInt(secondNumber)
        }
        else if(operator.value == '*'){
            document.getElementById("result").innerHTML = parseInt(firstNumber) * parseInt(secondNumber)
        }
        else if(operator.value == '/'){
            document.getElementById("result").innerHTML = parseInt(firstNumber) / parseInt(secondNumber)
        }
        else if(operator.value == '%'){
            document.getElementById("result").innerHTML = (parseInt(firstNumber) * parseInt(secondNumber))/100
        }
    })
})