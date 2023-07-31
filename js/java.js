$(document).scroll(function(){

  let sec03Ost = $(document).scrollTop();
  let docScrTop = $('#sec03').offset().top;
    if(sec03Ost >= docScrTop-$(window).height()){
      $('.skill span').addClass('active');
        }else{
      $('.skill span').removeClass('active');
    }

});