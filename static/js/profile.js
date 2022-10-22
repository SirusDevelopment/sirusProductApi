$(document).ready(() => {
  var body = $("body");
  var header = $("header");
  var products_con = $(".h-products-con");
  var height = header.height();

  header.css("height", height);
  if (products_con.children().length > 3) {
    products_con.css("height", "auto");
  }


  // menu
  var menu_btn = $(".menu-btn");
  var close_btn = $(".close-btn");
  var menu_con = $(".menu-con");
  var f_con = $(".full-con");
  var m = false;

  menu_btn.click(() => open_menu());

  close_btn.click(() => close_menu());

  var close_menu = () => {
    m = false;

    scroll_body();
    menu_con.fadeOut(250);
  };

  var open_menu = () => {
    m = true;

    unscroll_body();
    menu_con.fadeIn(250);
  };

  f_con.click(() => {
    if (m == true) {
      close_menu();
    }
  });

  // end of menu


  // for menu filter sort load
  let scroll_body = () => {
    body.css("height",
      "auto");
    body.css("overflow",
      "auto");
  }

  let unscroll_body = () => {
    body.css("height",
      "100vh");
    body.css("overflow",
      "hidden");
  }
  // end for menu filter sort load

  // profile pic con
  var profile_pic = $("#f-p-pic");

  profile_pic.change(function(event) {
    var url = URL.createObjectURL(event.target.files[0]);


    if (url !== null ||
      url !== undefined ||
      url !== "") {
      var fs = $(".fs-con");
      var f_p_pic = $(".f-p-pic");

      f_p_pic.attr("src", url);
      f_p_pic.removeClass("svg-icons");

      fs.append("<p id='a'>SUCCESSFUL</p>");
      fs.css("display", "flex");

      setTimeout(() => {
        var a = $("#a");

        fs.fadeOut();
        a.remove();
      }, 3000);
    } else {
      var fs = $(".fs-con");

      fs.append("<p id='a'>FAILED</p>");

      fs.css("color", "#ff0000");
      fs.css("display", "flex");

      setTimeout(() => {
        var a = $("#a");

        fs.fadeOut();
        a.remove();
      }, 3000);
    }

  });
  // end of profile pic
});