myApp.navigation = {
    init: function(){
        this.navigationFunction();
    },
    navigationFunction: function() {
        var btnMobile = $('.js-doc-trigger-nav');
        var overlay = $('.doc-page-layout__header__overlay');
        btnMobile.click(function (e) { 
            e.preventDefault();
            $('body').addClass('opened-page-layout__header');
        });
        overlay.click(function (e) { 
            e.preventDefault();
            $('body').removeClass('opened-page-layout__header');
        });
    }
}

$(function(){
    myApp.navigation.init();
})