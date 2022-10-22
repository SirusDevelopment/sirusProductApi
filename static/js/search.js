$(document).ready(() => {
  var body = $("body");
  var header = $("header");
  var height = header.height();
  var full_con = $('.full-con');
  var view = $(window);

  if (full_con.height() < view.height()) {
    full_con.css("height", "100vh");
  }

  header.css("height", height);
  
  // search
  var search_btn_1 = $("#search-btn-1");
  var cart = $(".cart-con");
  var title = $("#title");
  var menu = $(".menu-btn-con");
  var search_con = $(".search-con");
  var search = $("#search");

  search_btn_1.click(() => {
    cart.fadeOut();
    title.fadeOut();
    menu.fadeOut();
    search_btn_1.fadeOut();


    setTimeout(() => {
      search_con.css("justify-content", "center");
      search.fadeIn();
    }, 400);
  });

  search.change(() => {
    search.fadeOut();


    setTimeout(() => {
      search_con.css("justify-content", "end");
      cart.fadeIn();
      title.fadeIn();
      menu.fadeIn();
      search_btn_1.fadeIn();
    }, 400);

    if (search.val() !== "") {
      // send to backend
    }
  });
  // end of search


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


  // image slider
  $(".slider").children().first().addClass("active");

  $(".active").fadeIn(100);

  $(".next-btn").click(() => {
    if ($(".slider").children().length > 1) {
      next_image();
    }
  });

  $(".prev-btn").click(() => {
    if ($(".slider").children().length > 1) {
      prev_image();
    }
  });

  let next_image = () => {
    var slider = $(".slider");
    var s_children = slider.children();
    var first_img = s_children.first();
    var current_img = $(".active");
    var next_img = current_img.next();

    var indicator = $(".img-inc");
    var i_children = indicator.children();
    var first_inc = i_children.first();
    var inc = $(".active-inc");
    var next_inc = inc.next();

    if (next_img.length) {
      current_img.fadeOut(100, () => {
        current_img.removeClass("active");
        next_img.addClass("active");

        inc.removeClass("active-inc");
        next_inc.addClass("active-inc");
        $(".active").fadeIn(100);
      });
    } else {
      current_img.fadeOut(100, () => {
        current_img.removeClass("active");
        first_img.addClass("active");

        inc.removeClass("active-inc");
        first_inc.addClass("active-inc");
        $(".active").fadeIn(100);
      });
    }
  }

  let prev_image = () => {
    var slider = $(".slider");
    var last_img = slider.children().last();
    var current_img = $(".active");
    var prevImg = current_img.prev();

    var indicator = $(".img-inc");
    var i_children = indicator.children();
    var last_inc = i_children.last();
    var inc = $(".active-inc");
    var prev_inc = inc.prev();
  }

  setInterval(() => {
    if ($(".slider").children().length > 1) {
      next_image();
    }
  },
    5000);
  // end of image slider

  // filter sort
  var filter_btn = $(".filter-btn");
  var sort_btn = $(".sort-btn");
  var f_cancel_btn = $(".f-cancel-btn");
  var s_cancel_btn = $(".s-cancel-btn");
  var f_apply_btn = $(".f-apply-btn");
  var s_apply_btn = $(".s-apply-btn");
  var filter_con = $(".filter-l-con");
  var sort_con = $(".sort-l-con");
  var load_con = $(".load-con");

  filter_btn.click(() => {
    unscroll_body();
    filter_con.fadeIn();
  });

  f_cancel_btn.click(() => {
    scroll_body();
    filter_con.fadeOut();
  });

  f_apply_btn.click(() => {
    unscroll_body();
    load_con.css("display", "flex");
    filter_con.fadeOut();

    setTimeout(() => {
      scroll_body();
      load_con.fadeOut();
    }, 3000);
  });

  sort_btn.click(() => {
    unscroll_body();
    sort_con.fadeIn();
  });

  s_cancel_btn.click(() => {
    scroll_body();
    sort_con.fadeOut();
  });

  s_apply_btn.click(() => {
    unscroll_body();
    load_con.css("display", "flex");
    sort_con.fadeOut();

    setTimeout(() => {
      scroll_body();
      load_con.fadeOut();
    }, 3000);
  });
  // end filter sort

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
});