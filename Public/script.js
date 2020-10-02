//jshint esversion:6
$(document).ready(function() {

  let i = 0;

  let profile =  $("#Profile");
  let ability =  $("#Abilities");
  let exp = $("#Experience");
  let art =  $("#Art");
  let blog =  $("#Hobbies");
  let contact = $("#Contact");


  let name = [profile, ability, exp, art, blog, contact];
  function inv(name){
    $(name).each(function(){
      $(this).hide();
    });
  }
  function vis(name){
    $(name).each(function(){
      $(this).slideDown();
    });
  }


  let myName = "Siyabonga Webstar Maseko";
  $(".subheading").hide();
  $(".point").hide();
    $(".hLine").hide();
  inv(name);
  $("#navhead").hide();
  function run() {
    if (i < myName.length) {
      $("#name").append(myName.charAt(i));
      i++;
      setTimeout(
        run, 100);
    } else {
      vis(name);
        $(".subheading").slideDown();
        $(".point").slideDown();
        $(".hLine").slideDown();
    }

  }
  run();
$(".light").click(function(){
  if($(".light").hasClass("fa-moon-o")){
    $(".light").removeClass("fa-moon-o");
    $(".light").addClass("fa-sun-o");
    $(".tggl").text("light mode");
    $("body").addClass("dark");
    $(".dim").addClass("grey");
    $(".grey").removeClass("dim");
  }else{
        $("body").toggleClass("dark");
        $(".light").removeClass("fa-sun-o");
        $(".light").addClass("fa-moon-o");
        $(".tggl").text("dark mode");
        $(".grey").addClass("dim");
        $(".dim").removeClass("grey");
  }
});
  $(document).scroll(function() {
    if (window.pageYOffset > 550) {
      $("#navhead").slideDown();
      $(".elemProf").addClass("active");
      $(".elemAr").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemBl").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemExp").removeClass("active");
    }

     else {
      $("#navhead").hide();
    }
    if (window.pageYOffset > 1490) {
      $(".elemAbi").addClass("active");
      $(".elemProf").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemBl").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemExp").removeClass("active");

    }
    if (window.pageYOffset > 2820) {
      $(".elemExp").addClass("active");
      $(".elemProf").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemBl").removeClass("active");
      $(".elemeCont").removeClass("active");
    }
    if (window.pageYOffset > 3890) {
      $(".elemAr").addClass("active");
      $(".elemProf").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemBl").removeClass("active");
      $(".elemeCont").removeClass("active");
    }


    if (window.pageYOffset > 5990) {
      $(".elemeCont").addClass("active");
      $(".elemProf").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemBl").removeClass("active");
    }

  });

  $("a").click(function() {
    let name = $(this).attr("href");
    $(name).slideDown();
    $(name).focus();
    if ($("#navhead").hasClass("responsive") === true) {
      $("#navhead").removeClass("responsive");
    }
  });


  $(".icon").click(function() {
    if ($("#navhead").hasClass("responsive") === false) {
      $("#navhead").addClass("responsive");

    } else {

      $("#navhead").removeClass("responsive");

    }
  });
});
