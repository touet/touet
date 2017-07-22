   $(function(){
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          $('#ios-notice').removeClass('hidden');
          $('.parallax-container').height( $(window).height() * 0.5 | 0 );
          $('.parallax-container2').height( $(window).height() * 0.3 | 50 );
        } else {
          $(window).resize(function(){
            var parallaxHeight = Math.max($(window).height() * 0.5, 200) | 0;
            var parallaxHeight2 = Math.max($(window).height() * 0.3, 0) | 0;

            $('.parallax-container').height(parallaxHeight);
            $('.parallax-container2').height(parallaxHeight2);
          }).trigger('resize');
        }
      });