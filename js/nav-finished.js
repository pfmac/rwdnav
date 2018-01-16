(function() {

  window.NAV = {
    $clickOverlay: $("<div class='clickOverlay js-togglesOffCanvas'></div>"),
    $body: $("body"),
    $subMenus: $(".subMenu"),
    
    clear: function() {
      NAV.$body.removeClass("mainMenu-is-open");
      NAV.$subMenus.removeAttr("style");
    },
    
    toggle: function(e) {
      e.preventDefault();
      NAV.$body.toggleClass("mainMenu-is-open");
    },
    
    toggleSubNav: function(e) {
      e.preventDefault();
     
      if ( APP.getState() === "small" ) {
        $(this).siblings("ul").stop().slideToggle("fast");
      }
    },
    
    toggleAnimations: function() {
      if ( APP.getState() === "small" ) {
        NAV.$body.addClass("enableAnimations");
      } else {
        NAV.$body.removeClass("enableAnimations");
      }
    },
    
    bindEvents: function() {
      $(".js-togglesOffCanvas").on("click", NAV.toggle);
      $(".mainNav").on("click", ".js-togglesSubMenu", NAV.toggleSubNav);
    },
    
    init: function() {
      NAV.$clickOverlay.appendTo("body");
      NAV.bindEvents();
      
      mediaCheck({
        media: "(min-width: 30em)",
        entry: function() {
          NAV.clear();
          NAV.toggleAnimations();
        },
        exit: function() {
          NAV.toggleAnimations();
        }
      });
    }
  }
})();

NAV.init();