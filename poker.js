/**
 * Created by Administrator on 2017/4/10.
 */
$(function () {
    let arr=[];
    let huasearr=['c','d','h','s'];
    let sign={};
    while (arr.length<52){
        let num=Math.ceil(Math.random()*13);
        let huase=huasearr[Math.floor(Math.random()*huasearr.length)];
        if(!sign[num+'_'+huase]){
            sign[num+'_'+huase]=true;
            arr.push({num,huase})
        }
    }
    let n=0;
    for(let i=0;i<7;i++){
        for (let j=0;j<i+1;j++){
            $('<li class="pai"></li>').attr({'id':i+'_'+j}).attr({'value':arr[n].num}).css({backgroundImage:`url(img/${arr[n].num}${arr[n].huase}.png`}).delay(n*50).animate({left:350-50*i+100*j,top:10+50*i,opacity:1},400).appendTo('ul');
        n++;
        }
    }
    for(;n<52;n++){
        $('<li class="pai zuo"></li>').attr({'id':7+'_'+n}).attr({'value':arr[n].num}).css({backgroundImage:`url(img/${arr[n].num}${arr[n].huase}.png`}).delay(n*50).animate({left:200,top:470,opacity:1}).appendTo('ul');
    }
    let current=null;
    $('.pai').click(function () {
        let x=parseInt($(this).attr('id').split('_')[0]);
        let y=parseInt($(this).attr('id').split('_')[1]);
        if($(`#${x+1}_${y}`).length==1||$(`#${x+1}_${y+1}`).length==1){
            return;
        }
        $(this).delay(1000).toggleClass('active')
        if(!current){
            if(parseInt($(this).attr('value'))==13){
                $(this).animate({left:600,top:0,opacity:0},300,function () {
                    $(this).remove();
                    current=null;
                })
            }
            current=$(this);
        }else{
            if(parseInt(current.attr('value'))+parseInt($(this).attr('value'))===13){
                $('.active').animate({left:600,top:0,opacity:0},300,function () {
                    $('.active').remove();
                    current=null;
                })
            } else {
                setTimeout(function () {
                    $('.active').removeClass('active');
                    current=null;
                },400)
            }
        }

    });
    let index=1;
    $('.right').click(function () {
        $('.zuo').last().addClass('you').removeClass('zuo').css({'z-index':++index}).animate({left:500},400)
    })
    $('.left').click(function () {
        $('.you').addClass('zuo').removeClass('you').css({'z-index':++index}).each(function (index) {
            $(this).delay(index*50)
        }).animate({left:200},400)
    })

});
//   iscroll  hammer