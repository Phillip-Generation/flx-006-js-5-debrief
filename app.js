/* 1. Selects from a pool of at least ten names of your classmates
2. Contains `Generate Random Names` button that initiates the selection of 4 random names (duplicate names are OK)
3. The selected random names are displayed to the browser
4. Each time the `Generate Random Names` button is pressed, a new set of names appears (replacing the previous set of 4 random names)
5. Contains button named `Clear` that removes the populated list from the screen
6. Once you have completed steps 1-6, try to complete the Stretch Goals listed below. */

let poolOfNames = ['Iyadunni', 'Carlos', 'Paris', 'Jack', 'Dunamis', 'Jocelyn', 'Godzilla', 'LeBron', 'Clark Kent', 'Bruce'];

const button = document.getElementById("genName");

button.addEventListener("click", getFour);

function getFour() {
    let i = (Math.floor(Math.random() * 10));
    let j = (Math.floor(Math.random() * 10));
    let k = (Math.floor(Math.random() * 10));
    let l = (Math.floor(Math.random() * 10));
    showNames(i, j, k, l);
}; 

function showNames (i, j, k, l) {
    document.getElementById("names").textContent = `Here are four random names: ${poolOfNames[i]} ${poolOfNames[j]} ${poolOfNames[k]} ${poolOfNames[l]}`;
};

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearNames);

function clearNames () {
    document.getElementById("names").textContent = ' ';
};




/* for (let j = 0; poolOfNames.length < 5; j++) {
    
};

let j = 0;
    while (poolOfNames < 5) {
        console.log(poolOfNames); 
    };*/