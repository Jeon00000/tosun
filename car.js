$(document).ready(function(){
    $(document).keydown(function(e){
        //console.log(e.keyCode);
        switch(e.keyCode){
            case 37:
                $('.cloud').show();
                $('.mycar').css('transform','rotate(270deg)').stop().animate({left: '-=100px'},500, function(){
                    $('.cloud').hide();});   
            break;
            case 38:
                $('.cloud').show();
                $('.mycar').css('transform','rotate(0deg)').stop().animate({top: '-=100px'},500,function(){
                    $('.cloud').hide();});  
            break;
            case 39:
                $('.cloud').show();
                $('.mycar').css('transform','rotate(90deg)').stop().animate({left: '+=100px'},500,function(){
                    $('.cloud').hide();}); 
            break;
            case 40:
                $('.cloud').show();
                $('.mycar').css('transform','rotate(180deg)').stop().animate({top: '+=100px'},500,function(){
                    $('.cloud').hide();});
            break;
        }

    });

});//jQuery

// 38 위  39 오른쪽 40 아래 37 왼쪽