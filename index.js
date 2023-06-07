const playgame = (userChoice) => {
    const choices = ['snake','water','gun'];
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];

    const userchoiceinput = document.getElementById('user-choice');
    const computerchoiceinput = document.getElementById('computer-choice');
    userchoiceinput.value = userChoice;
    computerchoiceinput.value = computerchoice;

    let result;
    if(userChoice === computerchoice){
        result= "It's draw!!🙂";
    }
    else if(
        (userChoice === 'snake' && computerchoice === 'water') ||
        (userChoice === 'water' && computerchoice === 'gun') ||
        (userChoice === 'gun' && computerchoice === 'snake') 
    ){
        result = "You WIN!!🤩";
    } else{
        result= " You LOSE!!😥";
    }
    const resultelement = document.getElementById('result');
    resultelement.textContent = result; 

};
