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
`.toArray();

let button = document.getElementById("generateNamesButton")
button.onclick = refreshNames;

let clearButton = document.getElementById('clearButton')
clearButton.onclick = clearHistory

$(document).on("mouseenter", "#names ul:not(:first-child)", function(){
  $(this).addClass("highlightItem")
})

$(document).on("mouseleave", "#names ul:not(:first-child)", function(){
  $(this).removeClass("highlightItem")
})

$(document).on("click", "#names ul:not(:first-child):not([deleting])", function(){
  $(this).attr('deleting', '')
  $(this).off()
  $('#names ul:not(:first-child):not([deleting])').css("opacity", "+=0.175")
  let delWidth = parseFloat($(this).css('width'))
  $('#names').animate({'margin-left': `+=${delWidth}px`}, 1505)

  $(this).children().each(function(){
    $(this).animate({"width": `0px`}, random(1300,1603))
  })
  $(this).animate({'width': 0}, 1500, function(){
    $(this).remove()
  });
})