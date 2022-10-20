class List{
  constructor(names){
    this.names = names;
    this.$ = $(document.createElement("ul")); 
    this.$.addClass('mainList')
  }
}

List.prototype.display = function(parent, listArray){
  let build = "";
  for(let i in this.names) build+=`<li>${this.names[i]}</li>`
  this.$.html($.parseHTML(build))
  
  let id = 'idList_'+Object.keys(listArray).length
  listArray[id] = this;
  this.$.attr('id', id)

  parent.prepend(this.$)

  let autoHeight = this.$.height();
  this.$.height(0).animate({height: autoHeight}, 650 + (this.$.children().length*100));

}

List.prototype.remove = function(){
  let d = $.Deferred();
  this.$.attr('deleting', '')
  this.$.off()
  this.$.children().each(function(){
    $(this).animate({"width": `0px`}, random(850,1503))
  })
  this.$.animate({'width': 0}, 1450, function(){
    $(this).remove()
    return d.resolve()
  });

  return d.promise()
}