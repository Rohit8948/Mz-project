$(document).ready(function(){
    //click functions
    $(document).on('click','a[href^="#"]',function(event) {
        $('html,body').animate({
            scrollTop : $($.attr(this,'href')).offset().top
        },900);
    });
});