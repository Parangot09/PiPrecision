


let button = document.getElementById("check");
let answer = document.getElementById("ans");
let points = 0;

button.onclick = function(){

    const  ans1 = document.getElementById("op1");
    const  ans2 = document.getElementById("op2");
    const  ans3 = document.getElementById("op3");

    if(ans1.checked){

        answer.innerHTML = "Incorrect";
        answer.style.color = "red";
        button.disabled = "true";
        
    }
    else if(ans2.checked){

        answer.innerHTML = "Correct! You have scored 50 points";
        answer.style.color = "green";
        button.disabled = "true";
        points++;
    }

    else{
        answer.innerHTML = "Incorrect";
        answer.style.color = "red";
        button.disabled = "true";
    }

}