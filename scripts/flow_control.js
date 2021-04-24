//Call elements in each stage

//button on each page
//suite-select
nextButtonToRank = document.getElementById("next-button-to-rank");
//rank-select
nextButtonToSum = document.getElementById("next-button-to-sum");
backButtonToSuite = document.getElementById("back-button-to-suite");
//summary page
addCardButton = document.getElementById("add-button");
backButtonToRank = document.getElementById("back-button-to-rank");
//whose-card page
nextButtonToSuit = document.getElementById("next-button-to-suit");
backButtonToSum = document.getElementById("back-button-to-sum");


//Assign each stage to a variable
valueSelect = document.getElementById("value-selection");
suiteSelect = document.getElementById("suite-selection");
summaPage = document.getElementById("cards-summary");
whosePage = document.getElementById("whose-card");

//Display element in summary page
playerCardDisplay = document.getElementById("playerCard");
houseCardDisplay = document.getElementById("houseCard");
probDisplay = document.getElementById("probDisplay");

// //Export variables
// //export variable 
// export {nextButtonToRank,nextButtonToSum,
//     backButtonToRank,backButtonToSuite,
//     addCardButton,valueSelect,
//     suiteSelect,summaPage}

//get value from radio button
function getValueRadio(name) {
    var radios = document.getElementsByName(name)
    var len = radios.length;
    for (var i = 0; i < len; i++) {
        if (radios[i].checked) {
            console.log(radios[i].value)
            return (radios[i].value);
        }
    }
}
//Array for store cards in the game
playerDeck = createDeck();

playerHands = new Array();
houseHands = new Array();
//the first card is player's card (can be changed later)
whoseCard =  "player";

//Button action
//SuiteSelectPage
nextButtonToRank.addEventListener('click', function () {
    //grab a variable
    cardSuite = getValueRadio('suite');
    //turn to next page
    suiteSelect.classList.remove("stage");
    suiteSelect.classList.add("stage-hide");

    valueSelect.classList.remove("stage-hide");
    valueSelect.classList.add("stage");
});

//ValueSelectPage
nextButtonToSum.addEventListener('click', function () {

    cardRank = getValueRadio('rank');

    valueSelect.classList.remove("stage");
    valueSelect.classList.add("stage-hide");

    summaPage.classList.remove("stage-hide");
    summaPage.classList.add("stage");

    //action on the summary page
    //construct a card and added to the list
    if (cardRank == "J" || cardRank == "Q" || cardRank == "K") {
        weight = 10;
    } else if (cardRank == "A") {
        weight = 1;
    } else {
        weight = parseInt(cardRank);
    }
    //create card
    var card = { Value: cardRank, Suit: cardSuite, 
        Weight: weight};
    playerDeck = removeElementByValue(playerDeck,card);
    switch (whoseCard){
        case "player":
            playerHands.push(card);  
            break;
        case "house":
            houseHands.push(card);
            break;
    }
    

    //display card 
    //display string
    playerCardsStr = "Your card is ";
    if (playerHands.length>1){playerCardsStr = "Your cards are ";}
    playerCardsStr = "Your card is ";
    for (i=0;i<playerHands.length;i++){
        playerCardsStr = playerCardsStr+playerHands[i].Suit + playerHands[i].Value
        if (i<playerHands.length-1) {
            playerCardsStr= playerCardsStr+", ";
        }
    }
    houseCardsStr = "House's card is ";
    for (i=0;i<houseHands.length;i++){
        houseCardsStr = houseCardsStr+houseHands[i].Suit + houseHands[i].Value
        if (i<houseHands.length-1) {
            houseCardsStr = houseCardsStr+", ";
        }
    }
    //display on html
    playerCardDisplay.innerHTML = playerCardsStr;
    houseCardDisplay.innerHTML = houseCardsStr;
    probDisplay.innerHTML = "Busted probability = "+bustedProbability(playerDeck,playerHands)*100+"%";
    // if(houseHands.length>0){
    //     probDisplay.innerHTML = houseBustedProbability(playerDeck, houseHands[0]) ;
    // }
    

});

backButtonToSuite.addEventListener('click', function () {
    suiteSelect.classList.add("stage");
    suiteSelect.classList.remove("stage-hide");

    valueSelect.classList.add("stage-hide");
    valueSelect.classList.remove("stage");
});

//Summary Page
addCardButton.addEventListener('click', function () {
    whosePage.classList.add("stage");
    whosePage.classList.remove("stage-hide");
    
    summaPage.classList.add("stage-hide");
    summaPage.classList.remove("stage");
});
backButtonToRank.addEventListener('click', function () {
    valueSelect.classList.add("stage");
    valueSelect.classList.remove("stage-hide");
    
    summaPage.classList.add("stage-hide");
    summaPage.classList.remove("stage");
});

//whose card page
nextButtonToSuit.addEventListener('click', function () {
    whoseCard = getValueRadio("whose-card");

    suiteSelect.classList.add("stage");
    suiteSelect.classList.remove("stage-hide");

    whosePage.classList.remove("stage");
    whosePage.classList.add("stage-hide");
});

backButtonToSum.addEventListener('click', function () {
    whosePage.classList.remove("stage");
    whosePage.classList.add("stage-hide");

    summaPage.classList.remove("stage-hide");
    summaPage.classList.add("stage");
});





