let boxes = document.querySelectorAll(".box"); // Corrected from boxex to boxes
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn"); // Corrected from newGameTbn to newGameBtn
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); // Corrected from docment to document
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach(box => {
    box.addEventListener("click", () => { // Corrected from addEventlistener to addEventListener
        console.log("box was clicked");
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X"; // Changed lowercase "x" to uppercase "X"
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Corrected from disables to disabled
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Corrected from disables to disabled
        box.innerText = "";
    }
}

const showWinner = (winner) => { // Added winner parameter
    msg.innerText = `Congratulations, Winner is ${winner}`; // Fixed template literal
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame); // Fixed syntax for event listener
resetBtn.addEventListener("click", resetGame); // Fixed syntax for event listener
