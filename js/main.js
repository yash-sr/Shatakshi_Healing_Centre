
'use strict';


$(window).on('load', function () {
    /*------------------
        Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

});

(function ($) {
    /*------------------
        Navigation
    --------------------*/
    $('.main-menu').slicknav({
        appendTo: '.header-section',
        label: '',
        closedSymbol: '<i class="flaticon-right-arrow"></i>',
        openedSymbol: '<i class="flaticon-down-arrow"></i>'
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    /*------------------
        Gallery Slider
    --------------------*/
    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 4
            },
            960: {
                items: 5
            }
        }
    });


    /*------------------
        Accordions
    --------------------*/
    $('.panel-link').on('click', function (e) {
        $('.panel-link').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });


    /*------------------
        Circle progress
    --------------------*/
    $('.circle-progress').each(function () {
        var cpvalue = $(this).data("cpvalue");
        var cpcolor = $(this).data("cpcolor");
        var cptitle = $(this).data("cptitle");
        var cpid = $(this).data("cpid");

        $(this).append('<div class="' + cpid + '"></div><div class="progress-info"><h2>' + cpvalue + '%</h2><p>' + cptitle + '</p></div>');

        if (cpvalue < 100) {

            $('.' + cpid).circleProgress({
                value: '0.' + cpvalue,
                size: 214,
                thickness: 10,
                fill: cpcolor,
                emptyFill: "rgba(0, 0, 0, 0)"
            });
        } else {
            $('.' + cpid).circleProgress({
                value: 1,
                size: 214,
                thickness: 10,
                fill: cpcolor,
                emptyFill: "rgba(0, 0, 0, 0)"
            });
        }
    });

    //     /*-----------------------------
    //     service selection info
    //     -----------------------------*/

    //     var reikiInfo = `
    //     <img class="pointerImage"  src="./img/reikiPointer.png" alt="" />
    //     <div id="serviceTitle" class="sp-title text-center">
    //     <h3>Reiki</h3>
    //   </div>
    //   <div id="service-detail">
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
    //       consequatur magnam delectus aperiam! Asperiores, suscipit, veniam
    //       quidem magni dolor, quod impedit voluptate libero placeat iusto
    //       itaque earum ex ad dicta. Lorem ipsum dolor sit amet consectetur
    //       adipisicing elit. Quibusdam labore modi ratione rem vitae at totam
    //       facere nesciunt, voluptatem, quidem, hic nobis. Quis, fugiat quo
    //       totam itaque delectus alias qui!
    //     </p>

    //   </div>
    //     `;

    //     $("#reikiCourse").hover(function (e) {

    //         $("#serviceInfo .container").html(reikiInfo)
    //     })

    //     var angelInfo = `
    //     <img class="pointerImage"  src="./img/angelPointer.png" alt="" />
    //     <div id="serviceTitle" class="sp-title text-center">
    //     <h3>Angel Therapy</h3>
    //   </div>
    //   <div id="service-detail">
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
    //       consequatur magnam delectus aperiam! Asperiores, suscipit, veniam
    //       quidem magni dolor, quod impedit voluptate libero placeat iusto
    //       itaque earum ex ad dicta. Lorem ipsum dolor sit amet consectetur
    //       adipisicing elit. Quibusdam labore modi ratione rem vitae at totam
    //       facere nesciunt, voluptatem, quidem, hic nobis. Quis, fugiat quo
    //       totam itaque delectus alias qui!
    //     </p>

    //   </div>
    //     `;

    //     $("#angelCourse").hover(function (e) {
    //         $("#serviceInfo .container").html(angelInfo)
    //     })

    //     var tarotInfo = `
    //     <img class="pointerImage"  src="./img/tarotPointer.png" alt="" />
    //     <div id="serviceTitle" class="sp-title text-center">
    //     <h3>Tarot Card</h3>
    //   </div>
    //   <div id="service-detail">
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
    //       consequatur magnam delectus aperiam! Asperiores, suscipit, veniam
    //       quidem magni dolor, quod impedit voluptate libero placeat iusto
    //       itaque earum ex ad dicta. Lorem ipsum dolor sit amet consectetur
    //       adipisicing elit. Quibusdam labore modi ratione rem vitae at totam
    //       facere nesciunt, voluptatem, quidem, hic nobis. Quis, fugiat quo
    //       totam itaque delectus alias qui!
    //     </p>

    //   </div>
    //     `;

    //     $("#tarotCourse").hover(function (e) {
    //         $("#serviceInfo .container").html(tarotInfo)
    //     })

})(jQuery);
