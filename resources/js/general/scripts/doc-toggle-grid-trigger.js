myApp.toggleGridView = {
    init: function() {
        this.toggleGridViewFunction();
    },
    toggleGridViewFunction: function() {
        var $toggleGrid = $(".toggle-grid-view");

        
        $toggleGrid.stick_in_parent({
            offset_top: 40
        });
        
        $toggleGrid.click(function(e) {
            e.preventDefault();
            $(this).parent().parent().toggleClass('show-grid');
        });
    }
}

$(function(){
    myApp.toggleGridView.init();
});
