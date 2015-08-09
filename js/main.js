$("#one, #two, #four, #five").click(function(){
    $("#three").css("display", "inline-block");
    $("#two").css("border", "0");
});

$("#logo").click(function(){
	$("#three").css("display", "hidden");
	$("#two").css("border-right", "1px solid black");
});