$(document).ready(function(){
var like = parseInt($(".like").text());
var unlike = parseInt($('.unlike').text());

$("#thumb").click(function(){
	like = like + 1;
	$('.like').text( like + "");
});
$("#down").click(function(){
	unlike = unlike + 1;
	$('.unlike').text( unlike + "");
});

});