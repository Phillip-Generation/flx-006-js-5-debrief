const names = ['Wil','Ify', 'Charles', 'Kenard', 'Sint', 'Phil', 'Belara', 'Sharesse', 'Kathryn', 'Amare']

//function generateName() {
   // var listOfNames = document.createElement('ul');
    //listOfNames.id = 'list-names';
    //document.getElementById('nameList').appendChild(listOfNames)
   // for (i=0; i < 5; i++) {
    //var classNames = names[Math.floor(Math.random() * names.length)];
   // var listItems = document.createElement('li');
   // listItems.id = 'lists';
   // document.getElementById('list-names').appendChild(listItems).innerHTML = classNames
   // }   
//}


//my-button.onclick = generateName
//generateName(4)



function randomNames() {
    const numNames = prompt("How many names?", '0');
    console.log(numNames);
    alert("Pick a number less than 10");
    document.getElementById('nameList').innerHTML = " ";
    var listOfNames = document.createElement('ul');
    listOfNames.id = 'list-names';
    document.getElementById('nameList').appendChild(listOfNames);
    for (let i = 0; i < parseInt(numNames); i++) {
    var classNames = names[Math.floor(Math.random() * names.length)];
    var listItems = document.createElement('li');
    listItems.id = 'lists';
    document.getElementById('list-names').appendChild(listItems).innerHTML = classNames
    
    }
}



function clearNames() { 
    document.getElementById('nameList').innerHTML = " ";
};


myButton.onclick = randomNames;
clearButton.onclick = clearNames;

