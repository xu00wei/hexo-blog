(function () {
  "use strict";
  
  function 生成简历(){
    console.log("功能开发中")
  }

  var Theme = {};

  Theme.backToTop = {
    register: function () {
      var $backToTop = $('#back-to-top');

      $(window).scroll(function () {
        if($(window).scrollTop() > 100) {
          $backToTop.fadeIn(1000);
        } else {
          $backToTop.fadeOut(1000);
        }
      });

      $backToTop.click(function () {
        $('body,html').animate({ scrollTop: 0 });
      });
    }
  };

  Theme.fancybox = {
    register: function () {
      if ($.fancybox){
        $('.post').each(function () {
          $(this).find('img').each(function () {
            $(this).wrap('<a class="fancybox" href="' + this.src + '" title="' + this.alt + '"></a>')
          });
        });

        $('.fancybox').fancybox({
          openEffect	: 'elastic',
          closeEffect	: 'elastic'
        });
      }
    }
  };

  Theme.dropHeader = {
    register: function () {
      var $dropHeader = $('#drop-header');
      $dropHeader.click()
    }
  };
