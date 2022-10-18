const random = (min, max) => min + (Math.random()*max)
const $names = $("#names")

const grabRandomName = x => {
  //x = quanity
  let build = [];
  for(let i = 0; i<x; i++){
    build[i] = names[Math.floor(random(0, names.length))];
  }
  return build;
}
const animateNames = x => {
  //https://stackoverflow.com/a/5003287
  displayNames(x)
  let $mainList = $('.mainList');

  $mainList.css('height', 'auto');
  let autoHeight = $mainList.height();

  let mainDivWidth = parseInt($($('#names').children()[1]).css("width"));
  if($names.children().length > 1) $names.animate({"margin-left": `-=${mainDivWidth}px`}, 1000 )
  
  $mainList.height(0).animate({height: autoHeight}, 450);

    
}
const displayNames = x => {
  //x = array of names we wish to display
  //Displays arrays by building html in a string.
  if(x.length <= 1) $("#desc").html(`${x.length} randomly chosen name.`)
  else $("#desc").html(`${x.length} randomly chosen names.`)
  
  let build = ""
  build+="<ul class='mainList'>";
  for(let i in x) build+=`<li>${x[i]}</li>`
  build+="</ul>"
  //document.getElementById('names').innerHTML = build
  $names.prepend($.parseHTML(build))

}

const pushToHistory = () =>{
  $(".mainList").removeClass();
}
const refreshNames = () =>{
  let numNames = parseInt(window.prompt("How many names?"))
  if(numNames > 20) return window.alert("Please enter any number below 20.") 
  if(numNames === 0) return 
  let chosenNames = grabRandomName(numNames)
  pushToHistory();
  animateNames(chosenNames)


}

const namesToArray = () =>{
  names = names.trim().split("\n");
  for(x in names) names[x] = names[x].trim();
}