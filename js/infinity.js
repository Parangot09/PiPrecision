box1 = document.getElementById("input1");

box2 = document.getElementById("input2");

bigbox = document.getElementById("user");

button = document.getElementById("verify");

res = document.getElementById("result");

corr = document.getElementById("corr");

wrong = document.getElementById("wrong");



let answer,ran_num,check_bit = 0,c_count = 0,w_count = 0,streak = 0;

button.onclick = function(){

        if(check_bit == 0){

            box2.value =   Math.floor((Math.random()*10));
            button.innerHTML = "Verify";
            check_bit = 1;
        }

        else{
            answer = box1.value * box2.value;
            if(bigbox.value == answer){

                //res.innerHTML = "Correct &#9989";
                box2.value =   Math.floor((Math.random()*10));
               //res.style.color = "#0b53be";
                c_count++;
                streak++;
                if(streak>2){
                    
                    res.innerHTML = streak;
                }
                corr.innerHTML = c_count;
            }

            else{
                streak = 0;
                box2.value =   Math.floor((Math.random()*10));
                res.innerHTML = streak;
                w_count++;
                wrong.innerHTML = w_count;
            }
        }



   }

