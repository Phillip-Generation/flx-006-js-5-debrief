const randomNames = ['Shareese', 'Amare', 'Zachary', 'Belara', 'Golder', 'Sarah', 'Phillip', 'Kathryn', 'Zoe', 'Eric'];
const randomNamesButton = document.getElementById('btn-names');
const clearButton = document.getElementById('btn-clear');
const appendList = document.getElementById('append-list');

// let newRandomNames = Math.floor(Math.random() * randomNames.length);
//create list
//add ID to list
//append element as child of DIV
//add items to list

function generateRandomNames() {
    document.getElementById('append-list').innerHTML = '';
    const nameList = document.createElement('ul');
    nameList.id = 'name-list';
    appendList.appendChild(nameList);
    
    // let listNames = document.createElement('li')
    // nameList.append('listNames')

    for (let i = 0; i <= 4; i++) {
        let newRandomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        const name = document.createElement('li')
        name.id = 'name';
        name.innerHTML = newRandomName;
        nameList.appendChild(name);

    // document.getElementById('btn-name').innerHTML = randomNames[Math.floor(Math.random() + randomNames.length)]

    }
};

//function clear
function clearNames() {
    document.getElementById('name-list').innerHTML = '';
}


//onclick
randomNamesButton.onclick = generateRandomNames;
clearButton.onclick = clearNames;