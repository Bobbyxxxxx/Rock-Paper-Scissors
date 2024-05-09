const choices = [
  "/Rock-Paper-Scissors/img/rock.jpg", 
  "/Rock-Paper-Scissors/img/paper.jpg",
  "/Rock-Paper-Scissors/img/scissorsImage.jpg"
]

const rpsValues = document.querySelectorAll(".values");
const customPlayer = document.querySelector(".container1");
const botPlayer = document.querySelector(".container2");
const result = document.querySelector(".result");
const choiceImage = document.getElementById("choiceImage");
const botChoiceImage = document.getElementById("botChoiceImg");
const gameResult = document.querySelector(".result");



rpsValues.forEach((value)=>{
    value.addEventListener("click", (e)=>{
      
      if(e.target.textContent == "ROCK"){
        // console.log(e.textContent);
        choiceImage.src = choices[0];

        botChoice()
      } else if(e.target.textContent == "PAPER"){
        // console.log(e.textContent);
        choiceImage.src = choices[1]

        botChoice()
        } else{
          choiceImage.src = choices[2]

          botChoice()
        }

        // if(choiceImage.src === choices[0]){
        //   console.log("fuck this")
        //   gameResult.classList.add("showResult");
        // }
    })

    
});



// player 2(bot) random choice
const botChoice = () =>{
  let randomIndex = Math.floor(Math.random() * choices.length);
  botChoiceImage.src = choices[randomIndex]

  
}