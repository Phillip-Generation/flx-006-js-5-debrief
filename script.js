const randomNames = ['Zachary', 'Amare', 'Belara', 'Shareese', 'Golder', 'Sarah', 'Phillip', 'Kathyrn', 'Zoe', 'Eric'];
const randomNamesButton = document.getElementById('btn-names');
const randomClearButton = document.getElementById('btn-clear');
const randomAppendList = document.getElementById('append-list');

function generateRandomNames() {
    document.getElementById('append-list').innerHTML = ' ';
    const nameList = document.createElement('ul');
    nameList.id = 'name-list';
    randomAppendList.appendChild(nameList);

    

    for (let i = 0; i <= 3; i++) {

        let newRandomName  = randomNames[Math.floor(Math.random() * randomNames.length)];

        const name = document.createElement('li');
        name.id = 'name';
        name.innerHTML = newRandomName;
        nameList.appendChild(name);
    };
};

//function for clear names
function clearNames() {
    document.getElementById('name-list').innerHTML = ' ';
}


//onclick genrate names
randomNamesButton.onclick = generateRandomNames;
randomClearButton.onclick = clearNames;
