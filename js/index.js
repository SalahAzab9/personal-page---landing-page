$(window).scroll(function(){
    if($(this).scrollTop() >=200){
        $("#navbar").addClass("transparent");
    }else{
        $("#navbar").removeClass("transparent") ;
    }

});
    
$(document).ready(function(){
    $(".circle").circleProgress({
        startAngle : -Math.PI / 2,
        fill :"#0575e6"
    }).on('circle-animation-progress', function(event, progress,stepvalue) {
        $(this).find('span').html(Math.round(100 * stepvalue) + '<i>%</i>');
      });
    $(function(){
        $("#form-product").validate()
    });
    var year = document.getElementById("span");
    year.innerHTML=new Date().getFullYear();
})    

