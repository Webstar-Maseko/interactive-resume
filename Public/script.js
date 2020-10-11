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
  let dev = $("#Dev");
  let darkMode = localStorage.getItem("darkMode");
  var index = 1;

  const enableDarkMode = function() {
    $(".light").removeClass("fa-moon-o");
    $(".light").addClass("fa-sun-o");
    $(".tggl").text("light mode");
    $("body").addClass("dark");
    $(".grey").removeClass("dim");
    $(".dim").addClass("grey");
    localStorage.setItem("darkMode", 'set');
  };
  var moveUp = function(name, size) {

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

  $("#navhead").hide();

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
    prof = $(profile).offset().top;
    ele_exp = $(exp).offset().top;
    ele_ab = $(ability).offset().top;
    ele_hob = $(hobby).offset().top;
    ele_cont = $(contact).offset().top;
    ele_dev = dev.offset().top;


    if (scroll_pos_top > (prof - 95)) {
      $("#navhead").slideDown();
      $(".elemProf").addClass('active');
      $(".elemAr").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemDev").removeClass('active');

    } else {
      $("#navhead").fadeOut();

    }

    if (scroll_pos_top > (ele_ab - 200)) {

      $(".elemAbi").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemDev").removeClass('active');

    }
    if (scroll_pos_top > (ele_exp - 200)) {

      $(".elemExp").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemDev").removeClass('active');

    }


    if (scroll_pos_top > (ele_hob - 200)) {

      $(".elemAr").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemeCont").removeClass("active");
      $(".elemDev").removeClass('active');
    }
    if (scroll_pos_top > (ele_dev - 200)) {
      $(".elemDev").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemBl").removeClass("active");
      $(".elemeCont").removeClass('active');

    }

    if (scroll_pos_top > (ele_cont - 200)) {
      $(".elemeCont").addClass('active');
      $(".elemProf").removeClass("active");
      $(".elemExp").removeClass("active");
      $(".elemAbi").removeClass("active");
      $(".elemAr").removeClass("active");
      $(".elemBl").removeClass("active");
      $(".elemDev").removeClass('active');

    }
  });

  function slide(n) {
    cards = $(".card");
    if (n >= cards.length) {
      index = 1;
    }
    if(n < 1) {
      index = cards.length -1;
    }
    for (let i = 0; i < cards.length; i++) {
      $(cards[i]).css("display", 'none');
    }

    $(cards[index]).css("display", 'block');
  }
  slide(index);
  $(".prev").click(function() {

    slide(index -= 1);
    console.log(index);
  });
  $(".next").click(function() {
    slide(index += 1);
    console.log(index);
  });


  $("a").click(function() {
    let name = $(this).attr("href");
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
