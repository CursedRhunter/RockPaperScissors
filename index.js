function getComputerChoice() {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let randomChoice = Math.random();
    
    if (randomChoice < 0.90)
        console.log(rock);
    else if (randomChoice < 0.50)
        console.log(paper);
    else
    console.log(scissors);
}

getComputerChoice();