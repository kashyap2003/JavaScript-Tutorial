// alert("Hello")
// console.log("Hello")

// ! Challang 1 : Your age in Days

function AgeInDays()
{
    let birthYear = prompt('What year were you born... Good friend?')
    let ageInDays = (2022 - birthYear) * 365

    // Creates an instance of the element the specified tag.
    let b = document.createElement('h1') // It's just the inputing type of element(Header1) like <P>, <div>, etc.

    // Creates a text string from the specified value.
    let textAnswer = document.createTextNode('You are ' + ageInDays + ' days old')

    b.setAttribute("id", "AgeInDays") // This will set h1 tag an id which is AgeInDays.  TODO: SEE INSPECT.

    b.appendChild(textAnswer); // This will add text from textAnswer to b
 
    // IN fels-box-result id it will show what's inside b.
    document.getElementById("flex-box-result").appendChild(b); 
}

function reset()
{
    // SEE we have add here AgeInDays instead of flex-box-result Because we have inputed an Id="AgeInDays" in h1 tag.
    // From function AgeinDays()
    // Remenber if you write flex-box-result insted of AgeInDays then it will remove the whole box and we cann't
    // display our next term in screen (Because flex_box was removed).
    document.getElementById('AgeInDays').remove();
}



// ! Challange 2: Cat Generator 

function generateCat()
{
    let image = document.createElement("img"); // This will create an element which is <img>
    let div = document.getElementById("flex-cat-gen"); // This will act on Id = "flex-cat-gen"
    // This is the source of image that will be displayed in the site
    image.src = "https://media.tenor.com/images/5e43669b9573fea08ede20a5bbbbe2df/tenor.gif"
    div.appendChild(image);
}



// ! Challange 3 : Rock, Paper and SCissors

function rpsGame(yourChoice)
{
    console.log(yourChoice);
    // console.log(yourChoice.src);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt()); // It will take value from randToRps and gives to numberToChoice
    console.log('Computer choice: ', botChoice);

    results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won OR [0.5, 0.5] tied
    console.log(results);

    message = finalMessage(results); // {'message': 'You won!', 'color' : 'Green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

// TODO: Read all below comments for better understanding

// * Maths.random() --> Gives random value b/w 0 to 1 but never reach to 1
// * Math.floor() --> COnvert decimal to integers
// * Math.floor(Math.random() * 3);  // This will ive random value b/w 0 to 2. 
// * ['rock', 'paper', 'scissors'][0] --> Gives rock
// * ['rock', 'paper', 'scissors'][1] --> Gives paper
// * ['rock', 'paper', 'scissors'][2] --> Gives scissors
// * ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)] --> Gives random

function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number)
{
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice)
{
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock':0},
    };
    
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore])
{
    if (yourScore === 0)
    {
        return {'message': 'You Lost!', 'color': 'red'}
    }

    else if (yourScore === 1)
    {
        return {'message': 'You Won!', 'color': 'green'}
    }

    else
    {
        return {'message': 'You Tied!', 'color': 'yellow'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    let imagesDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +  "'height=150 width=150 style = 'box-shadow: 0px 10px 50px rgb(0, 0, 255);'>"
    // <h1 style = 'color: green; font-size: 60px; padding: 30px;'> You Won! </h1> --> Actually Written in bottom line
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>" 
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] +  "'height=150 width=150 style = 'box-shadow: 0px 10px 50px rgb(225, 0, 0);'>"

    document.getElementById('flex-box-rps-div').appendChild(botDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
}



// ! Challange 4 : Change the Color of All buttons 

let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons)

let copyAllButton = [];
for (let i=0; i<all_buttons.length; i++)
{
    copyAllButton.push(all_buttons[i].classList[1]);
}
console.log(copyAllButton)

function buttonColorChange(buttonThingy)
{
    if (buttonThingy.value === 'red')
    {
        buttonsRed();
    }
    else if (buttonThingy.value === 'green')
    {
        buttonsGreen();
    }
    else if (buttonThingy.value === 'reset')
    {
        buttonColorReset();
    }
    else if (buttonThingy.value === 'random')
    {
        randomColors();
    }
}

function buttonsRed()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}

function randomColors()
{
    let choices = ["btn-primary", "btn-danger", "btn-warning", "btn-success"]

    for (let i=0; i<all_buttons.length; i++)
    {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}




// ! Challange 5 : Blackjack

let blackjackGame = {
    'you' : {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer' : {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand' : false,
    'turnsOver' : false,
};

const YOU = blackjackGame['you'] // This will give us to access the blackjackGame's 'you'
const DEALER = blackjackGame['dealer'] // This will give us access the blackjackGamr's 'dealer'

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCards();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        console.log(YOU['score']);
    }
}

function randomCards() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {

    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        
        for (i=0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (i=0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = YOU['score'];
        document.querySelector('#dealer-blackjack-result').textContent = DEALER['score'] 

        
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = true;
    }
}

function updateScore(card, activePlayer) {

    if (card === 'A') {
        // If adding 11 keeps me below 21, add 11. Otherwise, add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blackjackStand() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCards();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
    console.log(blackjackGame['turnsOver']);
}

// compute winner and return who just won
// update the wins, draws and losses
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        // Condition: Higher score than dealer or when dealer bust and you're at 21 or under 21
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;
            winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }

        // Condition : When user bust but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;

        // When YOU and the DEALER Both bust
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }

    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = "green";
            winSound.play();

        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();

        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'blue';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}