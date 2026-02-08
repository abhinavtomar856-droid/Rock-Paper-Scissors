let user_score = 0;
let comp_score = 0;

// Document Object Model (DOM)
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

// Generate Computer Choice
const gencompchoice = () => {
  const option = ["Rock", "Paper", "Scissors"];
  const ranidx = Math.floor(Math.random() * 3);
  return option[ranidx];
};


const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    user_score++;
    userscorepara.innerText = user_score;
    msg.innerText = `You Win. Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    comp_score++;
    compscorepara.innerText = comp_score;
    msg.innerText = `You Lose. Computer ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const draw = () => {
  msg.innerText = "Game was draw .Play again.";
  msg.style.backgroundColor = "#45b1e8";
};

const playgame = (userchoice) => {
  console.log("User choice =", userchoice);
  const compchoice = gencompchoice();// Call computer choice function to take computer choice
  console.log("Computer choice =", compchoice);

  if (userchoice == compchoice) {
    draw();// Draw Function
  } 
  else{
    let userwin = true;
    if (userchoice == "Rock") {
      //Computer choice = Paper , Scissors
      userwin = compchoice == "Paper" ? false : true;
    } else if (userchoice == "Paper") {
      //Computer choice = Rock , Scissors
      userwin = compchoice == "Scissors" ? false : true;
    } else {
      //Computer choice = Rock , Paper
      userwin = compchoice == "Rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
