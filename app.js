const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';


const tie = 0;
const win = 1;
const lost = 2;

const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const resultText = document.getElementById("star-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


rockBtn.addEventListener('click', ()=>{
play(rock);
});
scissorsBtn.addEventListener('click', ()=>{
play(scissors);
});
paperBtn.addEventListener('click', ()=>{
play(paper);
});

function play(userOption){
    userImg.src = "img/"+ userOption +".svg";

    resultText.innerHTML ="Seleccionando!!";

    const interval = setInterval(function(){
        const machineOption = calcularMachineOption();
        machineImg.src = "img/"+ machineOption +".svg";
    },200);

    setTimeout(function(){

        clearInterval(interval);

        const machineOption = calcularMachineOption();
        const result = calcularResult(userOption, machineOption);
    
        machineImg.src = "img/"+ machineOption +".svg";
    
        switch(result){
            case tie:
                resultText.innerHTML = "Empataste ";
                break;
            case win:
                resultText.innerHTML = "Ganaste ";
                break;
            case lost:
                resultText.innerHTML = "Perdiste";
            break;
        }
    },2000);
 
}

function calcularMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
             return rock;
        case 1:
            return  paper;  
        case 2:
            return scissors;      
    }
}


function calcularResult(userOption, machineOption){
    if(userOption === machineOption){
        return tie;

    }else if(userOption === rock){
    
        if(machineOption === paper) return lost;
        if(machineOption === scissors) return win;

    }else if(userOption === paper){
        
        if(machineOption === rock) return win;
        if(machineOption === scissors) return lost;

    }else if(userOption === scissors ){

        if(machineOption === rock) return lost;
        if(machineOption === paper) return win;
    }
}