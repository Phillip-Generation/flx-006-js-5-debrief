const names = ["Jon","Priya", "Phillip", "Alisha", "Amber", "Yessi", "Perom", "Anthony", "Alexandra", "Willis"]

const getNamesButton = document.getElementById('get-names');
const clearNamesButton = document.getElementById('clear-names');
const nameDiv = document.getElementById('name-div');


function generateRandomName(){
   const numOfNames = window.prompt("How many names do you want? (up to 20)");
    if(numOfNames >  20){
        alert('Please enter a number lower than 20')      
    }else{
        while(nameDiv.firstChild){
                nameDiv.removeChild(nameDiv.firstChild);
        }

        const nameList = document.createElement('ul');
        nameList.id = 'name-list';
        document.getElementById('name-div').appendChild(nameList);

        for(i = 0; i < numOfNames; i++){
        
        randomName = names[Math.floor(Math.random()* names.length)]
        
        const name = document.createElement('li');
        name.id = 'name';
        name.innerHTML = randomName;
        document.getElementById('name-list').appendChild(name);
        } 
    }
}

function clearNames(){
    document.getElementById('name-list').remove();
}

getNamesButton.onclick = generateRandomName;
clearNamesButton.onclick = clearNames;
