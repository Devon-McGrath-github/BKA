myApp.videoPlayer = {
    init: function() {
        this.videoPlayerFunction();
    },
    videoPlayerFunction: function() {
        var $placeholder = $(".js-video-placeholder");
        $("body").on("click", ".js-video-placeholder", function () {
        	//alert('hello');
            var video = '<div class="embed-responsive ratio-16by9"><iframe class="embed-responsive-item" src="' + $(this).attr('data-video') + '&autoplay=1" allowfullscreen="true"></iframe></div>';
            $(this).append(video);
        });
    }
}

$(function(){
    myApp.videoPlayer.init();
});
