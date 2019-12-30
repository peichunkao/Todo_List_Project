$("ul").on("click", "li",function (e) { 
  /*
  if($(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  } else {
    $(this).css({
      color: "grey",
      textDecoration: "line-through"
    });
  }*/
  $(this).toggleClass("completed");
});

$("ul").on("click", "span",function (e) { 
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

 $("input[type='text']").keypress(function (e) { 
    if(e.which === 13){
      var todoText = $(this).val();
      //create a new li and add to ul
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
 });

 $(".fa-plus").on("click", function () {
    $("input").fadeToggle(200);
 });