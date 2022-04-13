jQuery(document).ready(function($) {

    /*------------------------------------------------
                DECLARATIONS
    ------------------------------------------------*/
    
        var loader                  = $('#loader');
        var loader_container        = $('#preloader');
        var scroll                  = $(window).scrollTop();  
        var scrollup                = $('.backtotop');
        var primary_menu_toggle     = $('#masthead .menu-toggle');
        var top_menu_toggle         = $('#top-navigation .menu-toggle');
        var dropdown_toggle         = $('button.dropdown-toggle');
        var primary_nav_menu        = $('#masthead .main-navigation');
        var top_nav_menu            = $('#top-navigation .main-navigation');
    
    /*------------------------------------------------
                PRELOADER
    ------------------------------------------------*/
    
        loader_container.delay(1000).fadeOut();
        loader.delay(1000).fadeOut("slow");
    
    /*------------------------------------------------
                BACK TO TOP
    ------------------------------------------------*/
    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                scrollup.css({bottom:"25px"});
            } 
            else {
                scrollup.css({bottom:"-100px"});
            }
        });
    
        scrollup.click(function() {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });
    
    /*------------------------------------------------
                MAIN NAVIGATION
    ------------------------------------------------*/
    
        primary_menu_toggle.click(function(){
            primary_nav_menu.slideToggle();
            $(this).toggleClass('active');
            $('.menu-overlay').toggleClass('active');
            $('#masthead .main-navigation').toggleClass('menu-open');
        });
    
        top_menu_toggle.click(function(){
            top_nav_menu.slideToggle();
            $(this).toggleClass('active');
            $('.menu-overlay').toggleClass('active');
            $('#top-navigation .main-navigation').toggleClass('menu-open');
            $('#top-navigation').css({ 'z-index' : '30000' });
    
            if( $('#masthead .menu-toggle').hasClass('active') ) {
                primary_nav_menu.slideUp();
                $('#masthead .main-navigation').removeClass('menu-open');
                $('#masthead .menu-toggle').removeClass('active');
                $('.menu-overlay').toggleClass('active');
            }
        });
    
        dropdown_toggle.click(function() {
            $(this).toggleClass('active');
            $(this).parent().find('.sub-menu').first().slideToggle();
        });
    
        $('.main-navigation ul li.search-menu a').click(function(event) {
            event.preventDefault();
            $(this).toggleClass('search-active');
            $('.main-navigation #search').fadeToggle();
            $('.main-navigation .search-field').focus();
        });
    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 210) {
                $('#masthead').addClass('nav-shrink');
            } 
            else {
                $('#masthead').removeClass('nav-shrink');
            }
        });
    
    /*------------------------------------------------
                SLICK SLIDER
    ------------------------------------------------*/
    $('.gallery-slider').slick({
        responsive: [
            {
                breakpoint: 1023,
                    settings: {
                    slidesToShow: 2,
                    arrows: false      
                }
            },
            {
                breakpoint: 700,
                    settings: {
                    slidesToShow: 1     
                }
            }
        ]
    });
    
    $('#blogmax_featured_slider_section').slick({
        responsive: [
            {
                breakpoint: 1024,
                    settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 567,
                    settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
    
    $('.testimonial-slider').slick();
    
    
    /*------------------------------------------------
                    PACKERY
    ------------------------------------------------*/
    
    $('.grid').imagesLoaded( function() {
        $('.grid').packery({
            itemSelector: '.grid-item'
        });
    });
    
    /*--------------------------------------------------------------
 Keyboard Navigation
----------------------------------------------------------------*/

if( $(window).width() < 1024 ) {
    $('#primary-menu').find("li").last().bind( 'keydown', function(e) {
        if( e.which === 9 ) {
            e.preventDefault();
            $('#masthead').find('.menu-toggle').focus();
        }
    });

    $('#secondary-menu').find("li").last().bind( 'keydown', function(e) {
        if( e.which === 9 ) {
            e.preventDefault();
            $('#top-navigation').find('.menu-toggle').focus();
        }
    });

    $('#primary-menu > li:last-child button:not(.active)').bind( 'keydown', function(e) {
        if( e.which === 9 ) {
            e.preventDefault();
            $('#masthead').find('.menu-toggle').focus();
        }
    });

    $('#secondary-menu > li:last-child button:not(.active)').bind( 'keydown', function(e) {
        if( e.which === 9 ) {
            e.preventDefault();
            $('#top-navigation').find('.menu-toggle').focus();
        }
    });

    $('#search').find("button").unbind('keydown');

}
else {
    $('#primary-menu').find("li").unbind('keydown');
    $('#secondary-menu').find("li").unbind('keydown');

    $('#search').find("button").bind( 'keydown', function(e) {
        var tabKey              = e.keyCode === 9;
        var shiftKey            = e.shiftKey;

        if( tabKey ) {
            e.preventDefault();
            $('#search').hide();
            $('.search-menu > a').removeClass('search-active').focus();
        }

        if( shiftKey && tabKey ) {
            e.preventDefault();
            $('#search').show();
            $('.main-navigation .search-field').focus();
            $('.search-menu > a').addClass('search-active');
        }
    });

    $('.search-menu > a').on('keydown', function (e) {
        var tabKey              = e.keyCode === 9;
        var shiftKey            = e.shiftKey;
        
        if( $('.search-menu > a').hasClass('search-active') ) {
            if ( shiftKey && tabKey ) {
                e.preventDefault();
                $('#search').hide();
                $('.search-menu > a').removeClass('search-active').focus();
            }
        }
    });
}

$(window).resize(function() {
    if( $(window).width() < 1024 ) {
        $('#primary-menu').find("li").last().bind( 'keydown', function(e) {
            if( e.which === 9 ) {
                e.preventDefault();
                $('#masthead').find('.menu-toggle').focus();
            }
        });

        $('#secondary-menu').find("li").last().bind( 'keydown', function(e) {
            if( e.which === 9 ) {
                e.preventDefault();
                $('#top-navigation').find('.menu-toggle').focus();
            }
        });

        $('#primary-menu > li:last-child button:not(.active)').bind( 'keydown', function(e) {
            if( e.which === 9 ) {
                e.preventDefault();
                $('#masthead').find('.menu-toggle').focus();
            }
        });

        $('#secondary-menu > li:last-child button:not(.active)').bind( 'keydown', function(e) {
            if( e.which === 9 ) {
                e.preventDefault();
                $('#top-navigation').find('.menu-toggle').focus();
            }
        });

        $('#search').find("button").unbind('keydown');

    }
    else {
        $('#primary-menu').find("li").unbind('keydown');
        $('#secondary-menu').find("li").unbind('keydown');

        $('#search').find("button").bind( 'keydown', function(e) {
            var tabKey              = e.keyCode === 9;
            var shiftKey            = e.shiftKey;

            if( tabKey ) {
                e.preventDefault();
                $('#search').hide();
                $('.search-menu > a').removeClass('search-active').focus();
            }

            if( shiftKey && tabKey ) {
                e.preventDefault();
                $('#search').show();
                $('.main-navigation .search-field').focus();
                $('.search-menu > a').addClass('search-active');
            }
        });

        $('.search-menu > a').on('keydown', function (e) {
            var tabKey              = e.keyCode === 9;
            var shiftKey            = e.shiftKey;
            
            if( $('.search-menu > a').hasClass('search-active') ) {
                if ( shiftKey && tabKey ) {
                    e.preventDefault();
                    $('#search').hide();
                    $('.search-menu > a').removeClass('search-active').focus();
                }
            }
        });
    }
});

primary_menu_toggle.on('keydown', function (e) {
    var tabKey    = e.keyCode === 9;
    var shiftKey  = e.shiftKey;

    if( primary_menu_toggle.hasClass('active') ) {
        if ( shiftKey && tabKey ) {
            e.preventDefault();
            primary_nav_menu.slideUp();
            $('.main-navigation').removeClass('menu-open');
            $('.menu-overlay').removeClass('active');
            primary_menu_toggle.removeClass('active');
        };
    }
});

 top_menu_toggle.on('keydown', function (e) {
        var tabKey    = e.keyCode === 9;
        var shiftKey  = e.shiftKey;

        if( top_menu_toggle.hasClass('active') ) {
            if ( shiftKey && tabKey ) {
                e.preventDefault();
                top_nav_menu.slideUp();
                $('.main-navigation').removeClass('menu-open');
                $('.menu-overlay').removeClass('active');
                top_menu_toggle.removeClass('active');
            };
        }
    });

    
    /*------------------------------------------------
                    END JQUERY
    ------------------------------------------------*/
    
    });