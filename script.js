
       const nameList = ["Osa", "Phil", "Josephine", "Wenbo", "Andrew", "John", "Mike", "Gowri", "Tammara", "Kathryn", "Golder", "Shareese", "Trenteka", "Belara", "Gionne", "Danielle", "Phillip", "Chloe", "Zoe", "Eric"];

       let output = document.getElementById('outputOfNames');
       let button = document.getElementById('Generate');
       let button2 = document.getElementById('Clear');
    

       const randomName = () => {
          let listOfRandoms = [];
          let numOfNames = window.prompt("How many names do you want? (up to 20)");
          if (numOfNames > 20) {
              alert('Please enter a number lower than 20');
            }
           for (let i = 0; i < numOfNames; i++){
                let random = Math.floor(Math.random() * nameList.length);
                listOfRandoms.push(nameList[random]);
                if (listOfRandoms.length === parseInt(numOfNames)) {
                    output.innerHTML = listOfRandoms;
                }                         
            }
        
       };
    


       const clearOutput = () => {
        output.innerHTML = "";
       }

       button.onclick = randomName;
       button2.onclick = clearOutput;
       

