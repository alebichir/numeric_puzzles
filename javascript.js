//find which radio button is cliked
var x = document.getElementsByName("preferred_puzzle");

//if (x.checked = ) {}


$(document).ready(function(){
    $("#p3").click(function(){
        $("#info").hide();
    });
	$("#p4").click(function(){
        $("#info").hide();
    });
	$("#p5").click(function(){
        $("#info").hide();
    });
    $("#home").click(function(){
        $("#info").show();
    });
});