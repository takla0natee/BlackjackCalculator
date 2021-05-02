//Call elements in each stage

//button on each page
//suite-select
backButtonToWhose= document.getElementById("back-button-to-whose")
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

//turn suit string to emoji
function emojize(suitStr) {
    emoji = new String();
    switch(suitStr){
        case "Hearts":
            emoji = "&hearts;";
            break;
        case "Spades":
            emoji = "&spades;";
            break;
        case "Clubs":
            emoji = "&clubs;";
            break;
        case "Diamonds":
            emoji = "&diamondsuit;"
            break;
    }
    return(emoji);
}

//Array for store cards in the game
playerDeck = createDeck();

playerHands = new Array();
houseHands = new Array();
//for assign card to a deck.
whoseCard = new String();

//Button action
//whose card page
nextButtonToSuit.addEventListener('click', function () {
    whoseCard = getValueRadio("whose-card");
    if (whoseCard == undefined) {
        alert("please select you input");
    }
    else {
        suiteSelect.classList.add("stage");
        suiteSelect.classList.remove("stage-hide");

        whosePage.classList.remove("stage");
        whosePage.classList.add("stage-hide");
    }

});

//set backButton to not show when player pick the first card
backButtonToSum.classList.add("hide");

backButtonToSum.addEventListener('click', function () {
    whosePage.classList.remove("stage");
    whosePage.classList.add("stage-hide");

    summaPage.classList.remove("stage-hide");
    summaPage.classList.add("stage");
});



//SuiteSelectPage
nextButtonToRank.addEventListener('click', function () {
    //grab a variable
    cardSuite = getValueRadio('suite');
    if (cardSuite == undefined) {
        alert("please select you input");
    }
    else {
        //turn to next page
        suiteSelect.classList.remove("stage");
        suiteSelect.classList.add("stage-hide");

        valueSelect.classList.remove("stage-hide");
        valueSelect.classList.add("stage");
    }
});

backButtonToWhose.addEventListener('click', function () {
    whosePage.classList.add("stage");
    whosePage.classList.remove("stage-hide");

    suiteSelect.classList.remove("stage");
    suiteSelect.classList.add("stage-hide");
});


//ValueSelectPage
nextButtonToSum.addEventListener('click', function () {

    cardRank = getValueRadio('rank');
    if (cardRank == undefined) {
        alert("please select your input")
    }
    else {
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
        var card = {
            Value: cardRank, Suit: cardSuite,
            Weight: weight
        };
        playerDeck = removeElementByValue(playerDeck, card);
        switch (whoseCard) {
            case "player":
                playerHands.push(card);
                break;
            case "house":
                houseHands.push(card);
                break;
        }

        //display card 
        //display string
        playerCardsStr = "Your card is <br> ";
        if (playerHands.length > 1) { playerCardsStr = "Your cards are <br>"; }
        for (i = 0; i < playerHands.length; i++) {
            playerCardsStr = playerCardsStr + emojize(playerHands[i].Suit) + playerHands[i].Value
            if (i < playerHands.length - 1) {
                playerCardsStr = playerCardsStr + ", ";
            }
        }
        houseCardsStr = "House's card is <br>";
        for (i = 0; i < houseHands.length; i++) {
            houseCardsStr = houseCardsStr + emojize(houseHands[i].Suit) + houseHands[i].Value
            if (i < houseHands.length - 1) {
                houseCardsStr = houseCardsStr + ", ";
            }
        }
        //display on html
        playerCardDisplay.innerHTML = playerCardsStr;
        houseCardDisplay.innerHTML = houseCardsStr;
        probDisplay.innerHTML = "Busted probability = " 
            + Math.round(bustedProbability(playerDeck, playerHands) * 10000)/100 
            + "%";
    }
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

    //set back button on the next page to show
    backButtonToSum.classList.remove("hide");

    //uncheck radio button to use with the new card
    listOfRadio= ["rank", "suite", "whose-card"];
    for (var j=0; j<listOfRadio.length; j++){
        thatButton = document.getElementsByName(listOfRadio[j]);
        for (var i=0; i<thatButton.length; i++){
            thatButton[i].checked=false;
        }
    }
});
backButtonToRank.addEventListener('click', function () {
    valueSelect.classList.add("stage");
    valueSelect.classList.remove("stage-hide");

    summaPage.classList.add("stage-hide");
    summaPage.classList.remove("stage");
    //if click back we have to pop the lastest element out of the list
    switch (whoseCard) {
        case "player":
            playerHands.pop();
            break;
        case "house":
            houseHands.pop();
            break;
    }
});





