const random = (min, max) => min + Math.random()*(max-min)
const $names = $("#names")
const lists = {};
const beginHighlight = function() { $(this).addClass("highlightItem") }
const stopHighlight = function() { $(this).removeClass("highlightItem") }

const grabRandomName = quanity => {
  let build = [];
  for(let i = 0; i<quanity; i++) build[i] = names[Math.floor(random(0, names.length))];
  return build;
}
const clearHistory = () => {
  $("#desc").html("Cleared history.")
  for(let i in lists) lists[i].remove();
  $names.animate({"margin-left": 0}, 1150)
}
const animateContainer = x => {
  //https://stackoverflow.com/a/5003287
  $(".mainList").removeClass();
  displayNames(x)
  let mainDivWidth = parseFloat($($('#names').children()[1]).css("width"));
  if($names.children().length > 1) $names.animate({"margin-left": `-=${mainDivWidth}px`}, 1000 )
  
  $('ul:not(.mainList)').animate({opacity: "-=0.175"}, 1000)
}
const displayNames = namesArr => {
  if(namesArr.length <= 1) $("#desc").html(`${namesArr.length} randomly chosen name.`)
  else $("#desc").html(`${namesArr.length} randomly chosen names.`)
  
  let a = new List(namesArr);
  a.display($('#names'), lists);
}
const refreshNames = () =>{
  let numNames = parseInt(window.prompt("How many names?"))
  if(numNames > 20) return window.alert("Please enter any number below 20.") 
  else if(numNames === 0) return 
  else if(numNames < 0) return window.alert("...")
  let chosenNames = grabRandomName(numNames)
  animateContainer(chosenNames)
}

String.prototype.toArray = function(){
  let s = this.trim().split("\n");
  for(x in s) s[x] = s[x].trim();
  return s
}