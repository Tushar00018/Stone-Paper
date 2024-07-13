let userScore=document.querySelector(".you-score")
let yourScore=0;
let compScore=document.querySelector(".comp-score")
let oppScore=0;
let msg=document.querySelector(".msg-display")

const choices = document.querySelectorAll(".choice")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
const genCompChoice=()=>{
    let arr=["rock","paper","scissor"]
    let idx=Math.floor(Math.random()*3);
    return arr[idx]
}
const playGame=(userChoice)=>{
   console.log(`user choice = ${userChoice}`)
   let compChoice =genCompChoice()
   console.log(`Comp Choice = ${compChoice}`)

   if(userChoice===compChoice){
    console.log("DRAW MATCH")
    msg.innerText="draw match"
    msg.style.backgroundColor="#081b31"
   }else{
    let track = true;
    if(userChoice==="rock" && compChoice==="paper" ||
     userChoice==="paper" && compChoice==="scissor" || 
     userChoice==="scissor" && compChoice==="rock"){
        track=false
        oppScore++;
        compScore.innerText =oppScore;
        msg.innerText="OOPs! You lost the Match"
        msg.style.backgroundColor="red"
    }else if(userChoice==="rock" && compChoice==="scissor" ||
               userChoice==="paper" && compChoice==="rock" || 
               userChoice==="scissor" && compChoice==="paper"){
        track=true;
        yourScore++
        userScore.innerText =yourScore;
        msg.innerText="Kheoo You Won the Match"
        msg.style.backgroundColor="green"
    }
    winner(track)
   }
}
let winner=(track)=>{
    if(track){
        console.log(`YOU WON THE GAME`)
    }else{
        console.log(`COMPUTER WON THE GAME`)
    }
}
