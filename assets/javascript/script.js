let names = `
  Carney Burns
  Jose Hernandez
  Laurie Walter
  Clardene Jones
  Pathik Nisher
  Jon Jackson
  Mouhamed Diop
  Shara Belton
  Joe M.
  Candice N.
  Imagine Dracon
  Dees N.
`
//Convert names into an array.
namesToArray();

let button = document.getElementById("generateNamesButton")
button.onclick = refreshNames;

let clearButton = document.getElementById('clearButton')
clearButton.onclick = clearHistory