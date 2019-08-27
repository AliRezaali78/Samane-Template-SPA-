$(function() {
  let navOpen = true;
  $("#bigBar").click(function() {
    if (navOpen) {
      $(this).addClass('clicked');
      $(".nav-wrapper, .sidebar, .createdBy").animate({
        right: "-250px"
      });
      $(".content-area").animate({
        "margin-right": "0"
      });
    } else {
      $(this).removeClass('clicked');
      $(".nav-wrapper, .sidebar, .createdBy").animate({
        right: "0"
      });
      $(".content-area").animate({
        "margin-right": "250px"
      });
    }
    navOpen = !navOpen;
  });

  //Small Devices
  let navOpenSmall = navOpen;
  $("#smallBar").click(function(){
    $(this).children(".fa-bars").addClass('clicked');
    if(navOpenSmall){
      $('.sidebar').slideUp();
    }
    else{
      $(this).children(".fa-bars").removeClass('clicked');
      $('.sidebar').slideDown();
    }
    navOpenSmall = !navOpenSmall;
  });
  

  $(".sidebar button.sidebar-button").on("click", function(event) {
    event.stopPropagation();
    $(this).append('<div class="btn-effect"></div>');
    setTimeout(() => {
      $(".btn-effect").remove();
    }, 310);
  });

  $(".sidebar button.sidebar-dropdown").on("click", function(event) {
    let has = $(this).hasClass("open");

    if (!has) {
      $(this)
        .addClass("open")
        .find(".fa-caret-left")
        .css({
          transition: "all 0.3s ease-in-out",
          transform: "rotate(-90deg)"
        }).addClass("text-info");
    }
    else
    {
      $(this)
      .removeClass("open")
      .find(".fa-caret-left")
      .css({
        transition: "all 0.3s ease-in-out",
        transform: "rotate(0)"
      }).removeClass("text-info");
    }
  });
});
