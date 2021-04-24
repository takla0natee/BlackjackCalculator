function createDeck() {
    deck = new Array();
    for (var i = 0; i < values.length; i++) {
        for (var x = 0; x < suits.length; x++) {
            var weight = parseInt(values[i]);//assign weight to each card return NaN for JQKA
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 1; //we'll talk about value of ACE more in value function
            var card = { Value: values[i], Suit: suits[x], Weight: weight }; //create a card
            deck.push(card); //push the card into the deck
        }
    }
    return(deck);
}
function bustedProbability(deckCards, playerCards) {
    //this if for calculating chance of getting busted
    // need to input both the remainning card in the deck
    // and card in the player hand
    // The output is a possible combination of card dealt cards
    // together with cards on playerHand
    
    //assign to new var to avoid conflict
    tempDeckCards = Array.from(deckCards);

    tempPlayerCards = Array.from(playerCards);

    weightInHand = getValue(playerCards); 
    // This part calculate weight in player hand
    
    possibleValues = [];
    possibilities = Number(deckCards.length); //for counting #possibilities
    busted = 0; //for counting #busted scenarios
    allComb = [];
    for(i=0; i<deckCards.length; i++){
        tempCards = Array.from(tempPlayerCards); //for storing card in each scenario
        tempCards.push(tempDeckCards[i]); //dealt a card to hand
        allComb.push(tempCards);
        aPossibleValue = getValue(tempCards);
        possibleValues.push(getValue(tempCards));
        if(aPossibleValue>21){busted+=1;}
    }
    console.log(busted/possibilities)
    return(busted/possibilities);
}
function houseBustedProbability(deckCards, houseCard) {
    //input houseCard is a variable, NOT an array
    //This is a function for finding the probability that the house will bust (limit max card that house can hold to 5)
    // assign a new deck for each case
    possibilities = 0;
    busted = 0;
    tempDeckCards = Array.from(deckCards);
    tempCards = new Array;
    for(i = 0;i<deckCards.length;i++){
        tempCards = []; //refreshings the tempcard for each loop
        tempCards[0] = houseCard;
        tempCards.push(tempDeckCards[i]);//draw the first card
        if(getValue(tempCards)<17){
            for(j=0;i<deckCards.length;i++){
                if(j!==i){ //check so that we don't draw the same card
                 tempCards[2]=tempDeckCards[j];//draw the second card
                    if(getValue(tempCards)<17){
                        for(k=0;k<deckCards.length;i++){
                            if(k!==i && k!==j){ //check so that we don't draw the same card
                                tempCards[3]=tempDeckCards[k];//draw the third card
                                if(getValue(tempCards)>21){ //check if busted
                                    busted++;
                                    possibilities++;
                                }
                                else if(getValue(tempCards)>16){//check if house stands or not
                                    possibilities++;
                                }
                                else{// if not, then draw the fourth card
                                    for(l=0;l<deckCards.length;l++){
                                        if(l!==i&&l!==j&&l!==k){//check so that we have four different cards
                                            tempCards[4]=tempDeckCards[l];
                                            if(getValue(tempCards)>21){//check for busted
                                                busted++;
                                                possibilities++;
                                            }
                                            else {
                                                possibilities++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if(getValue(tempCards)>21){
                        busted++;
                        possibilities++;
                    }
                    else{
                    possibilities++;
                    }
                }
            }
        }
        else{
            possibilities++;
        }
    }
    console.log(busted/possibilities);
    return(busted/possibilities);
}
