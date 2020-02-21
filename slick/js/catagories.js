    $(document).ready(function(){
var like = parseInt($(".like").text());


$("#like").click(function(){
    like = like + 1;
    $('.like').text( like + "");
});

// $('.bxslider').bxSlider({
//   auto: true,
//   autoControls: true
// });
  //     $("#slides").slidesjs({
  //       width: 940,
  //       height: 528
  //     });
  //   });

});