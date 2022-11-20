jQuerOs(document).ready(function () {

jQuerOs("#footer .itp-subscribe .inputbox").attr("placeholder", "Enter your email...");

  //if (jQuerOs("[rel=tooltip]").length) {jQuerOs("[rel=tooltip]").tooltip();}
 // jQuerOs('button').addClass('btn');
// ____________________________________________________________________________________________ resize display

        // var myWidth = 0;
        // myWidth = window.innerWidth;
        // jQuerOs('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // jQuerOs(window).resize(function(){
        //     var myWidth = 0;
        //     myWidth = window.innerWidth;
        //     jQuerOs('#size').remove();
        //     jQuerOs('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // });

// ____________________________________________________________________________________________ responsive menu

	var mainMenu = jQuerOs('.main_menu ul.nav');
  mainMenu.find('li.parent > a').append('<span class="arrow"></span>');
  mainMenu.find('li.parent > .nav-header ').append('<span class="arrow"></span>');
  mainMenu.find(' > li').last().addClass('lastChild');

    jQuerOs(function() {

    mainMenu.find('li.parent').hover(function() {

        if (!jQuerOs(this).children('ul').is(':visible')) {
    jQuerOs(this).children('ul').stop().slideDown(50);
      }
    },
    function() {
        if (jQuerOs(this).children('ul').is(':visible')) {
      jQuerOs(this).children('ul').slideUp(50);
    }
      });
    });;


  jQuerOs('.main_menu button.navbar-toggle').click(function() {
    if (jQuerOs('.main_menu #main-navbar-collapse').hasClass("in")) {
        jQuerOs('.main_menu button.navbar-toggle i').addClass('fa-bars');
       jQuerOs('.main_menu button.navbar-toggle i').removeClass('fa-times');
    } else {
        jQuerOs('.main_menu button.navbar-toggle i').removeClass('fa-bars');
        jQuerOs('.main_menu button.navbar-toggle i').addClass('fa-times');
    }
  });


// ______________________________________________________________________________________________________________
  var wrapheight = jQuerOs(window).outerHeight() - jQuerOs(".header").outerHeight(true) - jQuerOs("#footer").outerHeight(true);
  jQuerOs("#wrapper").css("min-height" , wrapheight);

// ______________________________________________________________________________________________________________ rent form btn

jQuerOs('.rent_form').parent().addClass('rent_form_btn_wrapper')

// _____________________________________________________________________________________________ go to top
  if (jQuerOs(window).scrollTop()>="250") jQuerOs("#Go_Top").removeClass("zoomOut").addClass('animated zoomIn')

 jQuerOs(window).scroll(function(){
  
  if (jQuerOs(window).scrollTop()<="250") jQuerOs("#Go_Top").addClass("animated zoomOut").removeClass('zoomIn')

  else jQuerOs("#Go_Top").removeClass("zoomOut").addClass('zoomIn animated')

 });

 jQuerOs("#Go_Top").click(function(){
  jQuerOs("html, body").animate({scrollTop:0},"3500")
 })

// _____________________________________________________________________________________________ footer to bottom
function footerToBottom() {
     var browserHeight = jQuerOs(window).height(),
          footerOuterHeight = jQuerOs('.footer').outerHeight(true),
          mainHeightMarginPaddingBorder = jQuerOs('#wrapper').outerHeight(true) - jQuerOs('#wrapper').height() + 3;
          jQuerOs('#wrapper').css({
               'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
          });
     };
     footerToBottom();
     jQuerOs(window).resize(function () {
     footerToBottom();
});


});




