//jshint esversion:6
$(document).ready(function(){

  let  i =0;

  let myName = "Siyabonga Webstar Maseko";
  $(".subheading").hide();
   // $("#navhead").hide();
function run( ){
  if(i < myName.length){
    $("#name").append(myName.charAt(i));
    i++;
    setTimeout(
    run,100);
  }
  else{
      $(".subheading").slideDown();
  }

}
run();






    $(".icon").click(function(){

      if($("#navhead").hasClass("responsive") === false){
        $("#navhead").addClass("responsive");
        console.log("works");
      }
      else{

        $("#navhead").removeClass("responsive");

      }
    });
});
