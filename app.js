// Recupero dal dom l'elemento select che contiene le opzioni
const selectElement = document.getElementById("select-difficulty");
console.log(selectElement);

// Recupero dal dom il pulsante play
const playButton = document.querySelector(".play");
console.log(playButton);

// Recupero dal dom il div container_main
const containerMain = document.querySelector(".container_main");
console.log(containerMain);


// Al clic del pulsante play leggo l'input della select
playButton.addEventListener("click", function() {

    containerMain.innerHTML = "";

    // Costante contenente il valore dell'opzione selezionata
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedOption);
    

    switch (selectedOption) {


        case "easy":
            console.log("difficoltà easy");

            // Ciclo for per creare div square e numeri fino a 100
            for (let i = 1; i < 101; i++) {

                // Creo il div con classe square
                let square = document.createElement("div");
                square.classList.add("square");
                square.style.width = `calc(100% / 10)`;

                // Aggiunto i quadratini dentro il container_main
                containerMain.append(square);

                // Aggiungo i numeri all'interno di square
                square.innerHTML = i;
            }

            
            break;
    
        case "hard":
            console.log("difficoltà hard");

            // Ciclo for per creare div square e numeri fino a 100
            for (let i = 1; i < 82; i++) {

                // Creo il div con classe square
                let square = document.createElement("div");
                square.classList.add("square" + -i);
                square.style.width = `calc(100% / 9)`;

                // Aggiunto i quadratini dentro il container_main
                containerMain.append(square);

                // Aggiungo i numeri all'interno di square
                square.innerHTML = i;


                
            }

            break;

        case "crazy":
            console.log("difficoltà crazy");


            // Ciclo for per creare div square e numeri fino a 100
            for (let i = 1; i < 50; i++) {

                // Creo il div con classe square
                let square = document.createElement("div");
                square.classList.add("square" + -i);
                square.style.width = `calc(100% / 7)`;
                

                // Aggiunto i quadratini dentro il container_main
                containerMain.append(square);

                // Aggiungo i numeri all'interno di square
                square.innerHTML = i;
            }
            break;
    }
        
})