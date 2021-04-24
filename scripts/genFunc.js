function getValue(Hand) {
    sumValue = 0;
    hasAce = false; //see if the hand has an Ace or not
    for (let i = 0; i < Hand.length; i++) {
        sumValue += parseInt(Hand[i].Weight);
        if (Hand[i].Value == "A") hasAce = true;
    }
    //if the hand has ace and the value is less than 12 then the value of Ace will be 11
    if (hasAce && sumValue < 12) sumValue += 10;
    return sumValue;
}
function removeElementByValue(array, elem) {
    var index = array.map(x=>x.Value).indexOf(elem.Value);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array);
}

function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array);
}