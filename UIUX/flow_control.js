//Shared variable with 

//define card
cardValue = 0 ;
cardSuite = 0 ;

//define selector
suiteSelector = document.getElementsByClassName("card-suite");

//Call elements in each stage

//suite-select
nextButtonToRank = document.getElementById("next-button-to-rank");
//rank-select
nextButtonToSum = document.getElementById("next-button-to-sum");
backButtonToSuite = document.getElementById("back-button-to-suite");
//summary page
addCardButton = document.getElementById("add-button");
backButtonToRank = document.getElementById("back-button-to-rank");

//Assign each stage to a variable
valueSelect = document.getElementById("value-selection");
suiteSelect = document.getElementById("suite-selection");
summaPage = document.getElementById("cards-summary")

//Button action
//SuiteSelectPage
nextButtonToRank.addEventListener('click', function(){
    suiteSelect.classList.remove("stage");
    suiteSelect.classList.add("stage-hide");

    valueSelect.classList.remove("stage-hide");
    valueSelect.classList.add("stage");
});

//ValueSelectPage
nextButtonToSum.addEventListener('click', function(){
    valueSelect.classList.remove("stage");
    valueSelect.classList.add("stage-hide");
    
    summaPage.classList.remove("stage-hide");
    summaPage.classList.add("stage");
});
backButtonToSuite.addEventListener('click', function(){
    suiteSelect.classList.add("stage");
    suiteSelect.classList.remove("stage-hide");

    valueSelect.classList.add("stage-hide");
    valueSelect.classList.remove("stage");
});

//Summary Page
addCardButton.addEventListener('click', function(){
    suiteSelect.classList.add("stage");
    suiteSelect.classList.remove("stage-hide");

    summaPage.classList.add("stage-hide");
    summaPage.classList.remove("stage");
});
backButtonToRank.addEventListener('click', function(){
    valueSelect.classList.add("stage");
    valueSelect.classList.remove("stage-hide");

    summaPage.classList.add("stage-hide");
    summaPage.classList.remove("stage");
});
