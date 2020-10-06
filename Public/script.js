//jshint esversion:6

$(window).on("load", function() {
  function load() {
    $(".loader").css("display", "none");
    $(".wrapper").css("display", "block");

  }
  setTimeout(load, 2000);
  let profile = $("#Profile");
  let ability = $("#Abilities");
  let exp = $("#Experience");
  let hobby = $("#Hobbies");
  let contact = $("#Contact");
  let darkMode = localStorage.getItem("darkMode");


  const enableDarkMode = function() {
    $(".light").removeClass("fa-moon-o");
    $(".light").addClass("fa-sun-o");
    $(".tggl").text("light mode");
    $("body").addClass("dark");
    $(".grey").removeClass("dim");
    $(".dim").addClass("grey");
    localStorage.setItem("darkMode", 'set');
  };

  const disableDark = function() {
    $("body").toggleClass("dark");
    $(".light").removeClass("fa-sun-o");
    $(".light").addClass("fa-moon-o");
    $(".tggl").text("dark mode");
    $(".grey").addClass("dim");
    $(".dim").removeClass("grey");
    localStorage.setItem("darkMode", null);

  };
  if (darkMode === 'set') {
    enableDarkMode();
  }
  let name = [profile, ability, exp, hobby, contact];

  function inv(name) {
    $(name).each(function() {
      $(this).hide();
    });
  }

  function vis(name) {
    $(name).each(function() {
      $(this).slideDown();
    });
  }

  $(".subheading").hide();
  $(".point").hide();
  $(".hLine").hide();
  inv(name);
  $("#navhead").hide();

  function run() {
    vis(name);
    $(".subheading").slideDown();
    $(".point").slideDown();
    $(".hLine").slideDown();

  }

  run();
  $(".light").click(function() {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'set') {
      enableDarkMode();
    } else {
      disableDark();
    }
  });

  $(document).on("scroll", function() {
    scroll_pos_top = $(window).scrollTop();
    prof = $(profile).offset().top ;
    ele_exp = $(exp).offset().top;
    ele_ab = $(ability).offset().top  ;
    ele_hob = $(hobby).offset().top;
    ele_cont = $(contact).offset().top ;




    if ( scroll_pos_top >= (prof-95) ) {
      $("#navhead").slideDown();
      $(".elemProf").addClass('active');
      $(".elemAr").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemExp").removeClass("active");

    } else {
      $("#navhead").fadeOut();

    }

    if (scroll_pos_top >= ele_ab) {

      $(".elemAbi").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemExp").removeClass("active");

    }
    if (scroll_pos_top >= ele_exp) {

      $(".elemExp").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemeCont").removeClass("active");
      $('.col-2').addClass("animate__animated animate__lightSpeedInRight");
      $('.col-1').addClass("animate__animated animate__lightSpeedInLeft");
      console.log("we are here");
    }
    else{
      $('.col-2').removeClass("animate__animated animate__lightSpeedInRight");
      $('.col-1').removeClass("animate__animated animate__lightSpeedInLeft");
    }

    if (scroll_pos_top >= ele_hob) {

      $(".elemAr").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".hobbies").addClass("animate__animated animate__fadeInTopLeft");
    }
    else{
      $(".hobbies").removeClass("animate__animated animate__fadeInTopLeft");
    }
    if (scroll_pos_top >= ele_cont) {

      $(".elemeCont").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemBl").removeClass("active");
      $("form").addClass("animate__animated animate__fadeInTopLeft");

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
    if ($("#navhead").hasClass("responsive")) {
      $("#navhead").removeClass("responsive");

    } else {
      $("#navhead").addClass("responsive");
    }
  });
});
