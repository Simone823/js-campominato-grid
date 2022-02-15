// Recupero dal dom l'elemento select che contiene le opzioni
const selectElement = document.getElementById("select-difficulty");
console.log(selectElement);

// Recupero dal dom il pulsante play
const playButton = document.querySelector(".play");
console.log(playButton);

// Al clic del pulsante play leggo l'input della select
playButton.addEventListener("click", function() {

    // Costante contenente il valore dell'opzione selezionata
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedOption);
    

    switch (selectedOption) {
        case "easy":
            console.log("difficoltà easy")
            
            break;
    
        case "hard":
            console.log("difficoltà hard");

            break;

        case "crazy":
            console.log("difficoltà crazy")
            break;
    }
})