$(function(){
  var listItems = $(".ingredients li");
  console.log(listItems);
  $(".ingredients li").each(function(index, item){
    var first = $(item).text();
    var words = first.split(" ");
    words[0] = '<span class="first">'+words[0]+'</span>';
    var text = words.join(" ");
    $(item).html(text);
  });

  // code to retrieve recipe id and show related recipe
  var params = new URL(window.location.href)
  var recipeId = params.searchParams.get("recipe-id");
  if(recipeId !== null){
    var recipeElement = $("#recipe-"+recipeId);
    recipeElement.show();
    var recipeTitle = recipeElement.data("recipe-title");
    $("header p").text(recipeTitle);
  }
});
