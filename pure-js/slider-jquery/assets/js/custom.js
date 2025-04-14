//sayfa açınılnca slider resimlerinden sadece ilkini gösterme
$(document).ready(function(){
    $(".slider li:first").show();
    index = 0;
    slider_count = $(".slider li").length -1;
    slider = slider_count +1;
    //slider butonlarının üretilmesi
    for(i=1; i<=slider;i++) {
        $(".navigation").append("<li><a href='#'>"+i+"</a></li>")
    }
    $(".navigation li a:first").addClass("active");
     //slider butonlarına tıklanınca istenilen resmin gelmesi
    $(".navigation li").click(function(){
        index = $(this).index();
        $(".slider li").hide();
        $(".slider li:eq("+index+")").fadeIn(1000);
        $(".navigation li a").removeClass("active");
        $(this).find("a").addClass("active");
    }) 
    //slider butonlarının üzerine gelindiğinde ilgili resmin gelmesi
    //$(".navigation li").hover(function(){
    //    let index = $(this).index();
    //    $(".slider li").hide();
    //   $(".slider li:eq("+index+")").fadeIn(1000);
    //    $(".navigation li a").removeClass("active");
    //    $(this).find("a").addClass("active");
    // },function(){
    //})
})
$("#prev").click(function(){
    if(index == 0){
        index = slider_count;
    }else {
        index--;
    }
    $(".slider li").hide();
    $(".slider li:eq("+index+")").fadeIn(1000);
    $(".navigation li a").removeClass("active");
    $(".navigation li:eq("+index+")").find("a").addClass("active");
})
$("#next").click(function(){
    if(index == slider_count){
        index = 0;
    }else {
        index++;
    }
    $(".slider li").hide();
    $(".slider li:eq("+index+")").fadeIn(1000);
    $(".navigation li a").removeClass("active");
    $(".navigation li:eq("+index+")").find("a").addClass("active");
})