nextButton = document.getElementById("next-button");

//Assign each state to an variable
valueSelect = document.getElementById("value-selection");
suiteSelect = document.getElementById("suite-selection");

nextButton.addEventListener('click', function(){
    console.log('hi');
    suiteSelect.classList.add("stage-hide");
    suiteSelect.classList.remove("stage");

    valueSelect.classList.remove("stage-hide");
    valueSelect.classList.add("stage");
});

