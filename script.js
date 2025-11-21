let userScore=0;
let compScore=0;
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
const images=document.querySelectorAll(".image");
const msg=document.querySelector("#move");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame=()=>{
        console.log("Game was draw");
        msg.innerText="Its Draw..Play Again..!";
        msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        user.innerText=userScore;
        msg.innerText='Congratulations..You win..!';
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText="You Lose. My Choice Greater Than Your Choice";
        msg.style.backgroundColor="red";
    }
}
images.forEach((image)=>{
    image.addEventListener("click",()=>{
        const userChoice=image.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame=(userChoice)=>{
    console.log("user Choice ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice ",compChoice);
    
    if(userChoice==compChoice){
        drawGame();
    }
    else {
        let userwin=true;
        if(userChoice=="rock"){
            userwin=compChoice==="paper" ?false:true;
        }
        else if(userChoice=="paper"){
            userwin=compChoice==="scissor"?false:true;
        }
        else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
};


