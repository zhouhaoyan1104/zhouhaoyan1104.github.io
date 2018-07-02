
var fanhui=document.querySelector(".fanhui");
console.log(fanhui)
    window.onscroll=function(){
        if(document.body.scrollTop>150){
            fanhui.style.opacity="1";
        }else{
          fanhui.style.opacity="0";
        }
    }

$(".fanhui img").click(function(){
    $("html,body").animate({scrollTop:0},500);
})
















