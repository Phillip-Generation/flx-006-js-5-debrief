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
  John Doe
  Jane Doe
  Beter Barker
`.toArray();

let button = document.getElementById("generateNamesButton")
button.onclick = refreshNames;

let clearButton = document.getElementById('clearButton')
clearButton.onclick = clearHistory

$(document).on("mouseenter", "#names ul:not(:first-child)", beginHighlight)

$(document).on("mouseleave", "  #names ul:not(:first-child)", stopHighlight)

$(document).on("click", "#names ul:not(:first-child):not([deleting])", function(){
  let key = $(this).attr('id')
  lists[key].remove().done(()=>console.log('done'))

  $('#names ul:not(:first-child):not([deleting])').css("opacity", "+=0.175")
  let delWidth = parseFloat($(this).css('width'))
  $('#names').animate({'margin-left': `+=${delWidth}px`}, 1555)

})
