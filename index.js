/*function getUserChoice(elm){
    elm = document.getElementById("user")
    return elm.value ;
}
console.log(getUserChoice(elm));
let ele = document.getElementById("user");
console.log(ele);*/
const buttons = document.getElementsByTagName("button");
const result = document.getElementById("user");

const buttonClicked = e => {
    result.value = e.target.value;
    console.log(result.value);
}
for (let button of buttons){
    button.addEventListener("click",buttonClicked);
}
document.getElementById("user").value = buttonClicked();

console.log(result.value);

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) +  min);
}
let generated_option = getRandomInt(0,2);
document.getElementById("computer").value = generated_option;
console.log(generated_option);
const game =((val1, val2)=> {
    if (val1 == 0 && val2 == 0){
        document.getElementsByClassName("draw").style.visibility = "visible";
    }
    else if(val1 == 0 && val2 == 1){
        document.getElementsByClassName("result_win").style.visibility = "visible";
    }
    else if(val1 == 0 && val2 == 2){
        document.getElementsByClassName("result_lose").style.visibility = "visible";
    }
    else if (val1 == 1 && val2 == 0){
        document.getElementsByClassName("result_lose").style.visibility = "visible";
    }
    else if(val1 == 1 && val2 == 1){
        document.getElementsByClassName("draw").style.visibility = "visible";
    }
    else if(val1 == 1 && val2 == 2){
        document.getElementsByClassName("result_win").style.visibility = "visible";
    }
    else if (val1 == 2 && val2 == 0){
        document.getElementsByClassName("result_win").style.visibility = "visible";
    }
    else if(val1 == 2 && val2 == 1){
        document.getElementsByClassName("result_lose").style.visibility = "visible";
    }
    else if(val1 == 2 && val2 == 2){
        document.getElementsByClassName("draw").style.visibility = "visible";
    }
    else{
        print("enter valid choice!");
    }
})
game(elm.value,generated_option);