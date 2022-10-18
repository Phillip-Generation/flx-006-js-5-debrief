let randonName = ["mo", "khady", "abdou", "jason","abdel", 'Mouhamed', 'seattle']



function generator() {
  document.getElementById("name").innerHTML = randonName[Math.floor(Math.random() * randonName.length)];
 }