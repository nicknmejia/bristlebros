$("#one, #two, #four, #five").click(function(){
    $("#three").css("display", "inline-block");
    $("#two").css("border", "0");
});

$("#logo").click(function(){
	$("#three").css("display", "hidden");
});


$('.nav-button').on('click', function(){
	if($(window).width() < 768 ){
	    $(".navbar-toggle").click();
	}
});

$('#logo').on('click', function(){
	$('.nav-button').removeClass('active');
})

$(document).ready(function() {
    $(window).resize(function(){
        var $c = $('.container'),
            $w = $('.bb-bulk-well'),
            totalWidth = $('.navbar').outerWidth(),
            wellWidth = $c.outerWidth(),
            diff = totalWidth,
            marg = -Math.floor(diff/2) + 'px';
        $w.each(function(){
            $(this).css({
                'margin-left': marg,
                'margin-right': marg
            });
        })        
    });     
    $(window).resize();
});
