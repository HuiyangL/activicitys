$(function(){
    //////////////////////////图片加载/////////////////////////////////
    $("section").each(function(){
        $(this).css({display:"none"})
    })
    $("section.index").css({display:"block"})
    var imgs=$('img');
    imgs.each(function(i){
        $(this).attr("src",`img/${$(this).attr("imgData")}.png`)
        if(i==Math.round(imgs.length/3*1)){
            $('.full').animate({left:"-70%"},0)
        }
        if(i==Math.round(imgs.length/3*2)){
            $('.full').animate({left:"-40%"},0)
        }
        if(i==imgs.length-1){
            $('.full').animate({left:0},0).queue(function(){
                $("section").each(function(){
                    $(this).css({display:"none"})
                })
                $("section.start").css({display:"block"})
                $(this).dequeue();
            });

        }
    })
})
