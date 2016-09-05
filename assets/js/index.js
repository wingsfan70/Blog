/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();
        
        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });
        
        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt") && !$(this).hasClass("emoji"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });
        
    });

    // Changing the class to change the font color and background color if the background image is dark
    // functions checks URL to see if it equals photography which has a dark cover image.
    // TODO: make the function work based on the picture uploaded and not by the actual page name in the URL
    $document.ready(function () {
        var url = window.location.href;
        if(url.search("photography") >= 0) {
            $(".inner").addClass("dark");
        }
    });

}(jQuery));
