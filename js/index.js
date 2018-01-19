$(function(){

   /* wxConfig = function() {
        $.ajax({
            type: 'post',
            url: "http://api-activity.91yuebei.com/share",
            data:{"urlName":window.location.href.split('#')[0]},
            async: false,
            success: function (data) {
                var key = data;
                wx.config({
                    debug     : false,
                    appId     : key.appId,
                    timestamp : key.timestamp,
                    nonceStr  : key.noncestr,
                    signature : key.signature,
                    jsApiList : ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','startRecord','stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice','chooseImage','previewImage','uploadImage','downloadImage','translateVoice','getNetworkType','openLocation','getLocation','hideOptionMenu','showOptionMenu','hideMenuItems','showMenuItems','hideAllNonBaseMenuItem','showAllNonBaseMenuItem','closeWindow','scanQRCode','chooseWXPay','openProductSpecificView','addCard','chooseCard','openCard']
                });
            }
        });
    };*/





    var close = $(".close");
    /*var list = [
        {id:0,title:"请问你听到了几个鹅？",options:['19','20','21','22'],answer:'21',url:'music/1.m4a'},

        {id:1,title:"请问钱是谁被谁骗去偷的？",options:['四舅是被五舅骗去偷的','五舅是被六舅骗去偷的','六舅是被七舅骗去偷的','八舅是被九舅骗去偷的'],answer:'四舅是被五舅骗去偷的',url:'music/2.m4a'},

        {id:2,title:"请问钱是谁偷的？",options:['四舅偷的','六舅偷的','七舅偷的','十舅偷的'],answer:'四舅偷的',url:'music/3.m4a'},

        {id:3,title:"请问钱是谁借给谁的？",options:['钱是五舅借给四舅的','钱是六舅借给五舅的','钱是七舅借给六舅的','钱是九舅借给十舅的'],answer:'钱是九舅借给十舅的',url:'music/4.m4a'},

        {id:4,title:"请问辉辉用的是什么杯子？",options:['灰黑杯','灰灰杯','黑黑杯','黑灰杯'],answer:'黑灰杯',url:'music/5.m4a'},

        {id:5,title:"请问第二个徒弟会干嘛？",options:['会撞钟','会吹管','会捧笙','会念经'],answer:'会撞钟',url:'music/6.m4a'},

        {id:6,title:"请问第七个徒弟会干嘛？",options:['会念经','会扫地','会打鼓','会点灯'],answer:'会扫地',url:'music/7.m4a'},

        {id:7,title:"请问第八个徒弟会干嘛？",options:['会打磬','会吹管','会点灯','会念经'],answer:'会点灯',url:'music/8.m4a'},

        {id:8,title:"请问你听到的歌叫什么？",options:['《红尘客栈》','《天地一斗》','《烟花易冷》','《告白气球》'],answer:'《告白气球》',url:'music/9.m4a'},

        {id:9,title:"请问你听到的歌叫什么？",options:['《演员》','《绅士》','《暧昧》','《消愁》'],answer:'《演员》',url:'music/10.m4a'},

        {id:10,title:"请问你听到的歌叫什么？",options:['《说好的幸福呢》','《蒲公英的约定》','《彩虹》','《回到过去》'],answer:'《说好的幸福呢》',url:'music/11.m4a'},

        {id:11,title:"请问你听到的歌叫什么？",options:['《PPAP》','《PAAP》','《APPLE》','《PAPP》'],answer:'《PPAP》',url:'music/12.m4a'},

        {id:12,title:"请问你听到的歌叫什么？",options:['《气球》','《红的黄的橙的灰的》','《她的》','《我愿意》'],answer:'《气球》',url:'music/13.m4a'},

        {id:13,title:"请问你听到的是哪里的民歌？",options:['四川民歌','青海民歌','蒙古民歌','云南民歌'],answer:'青海民歌',url:'music/14.m4a'},

        {id:14,title:"请问你听到的歌叫什么？",options:['《易燃易爆炸》','《奇妙能力歌》','《如烟》','《小半》'],answer:'《易燃易爆炸》',url:'music/15.m4a'},

        {id:15,title:"请问语音中的姑娘，是哪个少数民族的人？",options:['黎族','苗族','彝族','高山族'],answer:'高山族',url:'music/16.m4a'},

        {id:16,title:"请问你听到的歌词内容是？",options:['三分天注定，其他靠打拼，爱拼才会赢','三分天注定，七分靠打拼，爱拼才会赢','三分命注定，其他靠打拼，爱拼才会赢','三分命注定，其他靠打拼，爱拼才会赢'],answer:'三分天注定，七分靠打拼，爱拼才会赢',url:'music/17.m4a'},

        {id:17,title:"请问你听到的是哪里的方言？",options:['陕西话','温州话','东北话','闽南语'],answer:'闽南语',url:'music/18.m4a'},

        {id:18,title:"请问他是怎么了？",options:['他在马路上把脑子摔坏了','他在马路上把胳膊摔坏了','他在马路上把膝盖摔坏了 ','他在马路上把手掌摔坏了'],answer:'他在马路上把膝盖摔坏了 ',url:'music/19.m4a'},

        {id:19,title:"请问你听到的台词是来自哪部电影？",options:['《盗梦空间》','《致命魔术》','《超时空效应》','《盗走达芬奇》'],answer:'《盗梦空间》',url:'music/20.m4a'},

        {id:20,title:"请问你听到的台词是来自哪部电影？",options:['《心动》','《天下无贼》','《无间道》','《东邪西毒》'],answer:'《东邪西毒》',url:'music/21.m4a'},

        {id:21,title:"请问你听到的台词是来自哪部动漫？",options:['《大鱼海棠》','《你的名字》','《天空之城》','《声之形》'],answer:'《大鱼海棠》',url:'music/22.m4a'},

        {id:22,title:"请问你听到的台词是来自哪部电影？",options:['《艺伎回忆录》','《泰坦尼克号》','《霸王别姬》','《归来》'],answer:'《泰坦尼克号》',url:'music/23.m4a'},

        {id:23,title:"请问你听到的台词是来自哪部电视？",options:['《致青春》','《你好，旧时光》','《谁的青春不迷茫》','《匆匆那年》'],answer:'《谁的青春不迷茫》',url:'music/24.m4a'},

        {id:24,title:"这段话来自周星驰的哪部电影？",options:['《算死草》','《百变星君》','《大话西游》','《破坏之王》'],answer:'《破坏之王》',url:'music/25.m4a'},

        {id:25,title:"这段话来自周星驰的哪部电影？",options:['《赌神》','《英雄本色》','《上海滩》','《卧虎藏龙》'],answer:'《英雄本色》',url:'music/26.m4a'},

        {id:26,title:"以上的那段话来自《人民的名义》中，说这段话的演员是？",options:['侯勇','侯亮平','赵德汉','高育良'],answer:'侯勇',url:'music/27.m4a'},

        {id:27,title:"这2句口头禅出自哪两部动漫?",options:['《火影忍者》《海贼王》','《名侦探柯南》《海贼王》','《海贼王》《名侦探柯南》','《名侦探柯南》《火影忍者》'],answer:'《名侦探柯南》《海贼王》',url:'music/28.m4a'},

        {id:28,title:"请问你听到的是剧中哪两个人物的对白？",options:['张国荣和张丰毅','项羽和虞姬','程蝶衣和段小楼','段小楼和菊仙'],answer:'程蝶衣和段小楼',url:'music/29.m4a'},

        {id:29,title:"请问你听到的是佩奇和谁的对话？",options:['苏西','乔治','瑞贝卡','佩德罗'],answer:'乔治',url:'music/30.m4a'}

    ];*/
    var result = [
       {id:0,title:"",desc:"",img:["img/zero1.png","img/zero2.png","img/zero3.png","img/zero4.png"]},
       {id:1,title:"img/oneTitle.png",desc:"客官，再答对4题就可以获得人家嘿嘿嘿的礼物了哟",img:["img/one1.png","img/one2.png","img/one3.png"]},
       {id:2,title:"img/twoTitle.png",desc:"客官，再答对3题就可以获得人家嘿嘿嘿的礼物了哟",img:["img/two1.png","img/two2.png","img/two3.png","img/two4.png"]},
       {id:3,title:"img/threeTitle.png",desc:"客官，再答对2题就可以获得人家嘿嘿嘿的礼物了哟",img:["img/three1.png","img/three2.png","img/three3.png"]},
       {id:4,title:"img/fourTitle.png",desc:"客官，再答对1题就可以获得人家嘿嘿嘿的礼物了哟",img:["img/four1.png","img/four2.png"]},
       {id:5,title:"img/fiveTitle.png",desc:"哎呦，大官人你获得了冒冒的超私密礼物！快去冒泡公众号走一波。",img:["img/five1.png","img/five2.png"]},
   ];

    var playnum;//已玩次数



    var audio = $('audio')[0];
    var num;
    var songlist;
    var index;
    var xuhao;
    var right;//答对题的数目
    var t;
    var time;
    var flag=false;
    var locker = 1;
    var openId;


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







    ///////////////////////////开始测试部分///////////////////////////////////
    $(".img7").click(function(){
        $(".shengming").css({display:"block"});
    })
    $(".img9").click(function(){
        $(".shengming").css({display:"none"});
    })
    $(".img8").click(function(){
        $(".img9").trigger('click')
    })

//开始测试按钮
    $(".img6").click(function(){

        openId=location.search.slice(location.search.indexOf('=')+1);

        $.ajax({
            // contentType: 'application/json',
            type:"post",
            dataType:'json',
            data:{"openId":openId},
            url:'http://api-activity.91yuebei.com/active/geRandomFive',
            // url:'http://192.168.118.98:8007/active/geRandomFive',
            success:function(datas){
                console.log(datas)
                if(datas.code==6008){
                    $('.official').css({display:"block"});
                    return;
                }else if(datas.code==1000){
                    playnum=datas.data.gameCount;
                    songlist = datas.data.list;
                    index = 0;
                    xuhao = $(".tihao1>li");
                    right = 0;//答对题的数目
                    time=30;
                    flag = false;
                    $(".test .voice").css({
                        display:"none"
                    })
                    $(".test .time").html("30");
                    $(".test .hand").css({display:"block"})

                    $('.next1').removeClass('hidden');
                    $('.next2').addClass('hidden');
                    render(songlist[index]);
                    $("section").each(function(){
                        $(this).css({display:"none"})
                    })
                    $("section.test").css({display:"block"})
                }
            }

        })



    })


  ////////////////////////////答题部分///////////////////////////
    function click(){
        if(locker == 1){
            clearInterval(t);
            audio.pause();
            flag=true;
            if(index==4 && flag==true){
                $('.next1').addClass('hidden');
                $('.next2').removeClass('hidden');
            }
            var answer = $(this).find('.optionBox').attr('data');
            var select = $(this).find('p').children('span').html().substr(0,1);

            if(select==answer){
                $(this).find('img').attr({
                    "src" : "img/14.png",
                    "imgData" : "14"
                })
                right++;
                if(right==5){
                    alert(5)
                    $('.again1').addClass('hidden');
                    $('.prize').removeClass('hidden');
                }

            }else{
                $(this).find('img').attr({
                    "src" : "img/15.png",
                    "imgData" : "15"
                })
            }
            locker--;
            setTimeout(function(){
                $('.next1').trigger('click');
            },500);
            setTimeout(function(){
                locker = 1;
            },1000)
        }else{

        }
    }

    /*马上领奖*/
    $('.prize').click(function(){
        $.ajax({
            // contentType: 'application/json',
            type:"post",
            dataType:'json',
            data:{"openId":openId},
            url:'http://api-activity.91yuebei.com/active/geWinCode',
            // url:'http://192.168.118.98:8007/active/geRandomFive',
            success:function(win){
                 $('.code').html(win.data);
            }

        })
        $("section").each(function(){
            $(this).css({display:"none"})
        })
        $("section.winner").css({display:"block"})
    })


    $('.next1').click(function(){
            time=30;
            flag=false;
            clearInterval(t);
            index++;
            if(index>4){
                flag=false;
                index=4;
                return;
            }

            $(".test .voice").css({
                display:"none"
            })
            $(".test .time").html("30");
            $(".test .hand").css({display:"block"})
            render(songlist[index]);

        })

    $(".test .question").on('click','li',click)



    $(".test .hand").click(function(){
            var durationTime = Math.ceil(audio.duration);
            var redundant=time-durationTime;//剩余时间
            audio.play();
            $(".test .hand").css({display:"none"});
            $(".test .voice").css({
                display:"block"
            })

            t = setInterval(function(){
                if(time<=1){
                    audio.pause();
                    window.clearInterval(t);
                    if(flag==false){
                        $(".optionBox").each(function(){
                            $(this).find('img').attr({
                                "src" : "img/15.png",
                                "imgData" : "15"
                            })
                            flag=true;
                        })
                    }

                    // time=31;
                    /*setTimeout(function(){
                        $('.next1').trigger('click');
                    },500);*/

                }
                time--;
                // console.log(time)
                /*if(time==redundant){
                    alert(1)
                    $(".test .hand").css({display:"block"});
                    $(".test .voice").css({
                        display:"none"
                    })
                }*/
                $(".test .time").html(function(){
                    return time;
                })
            },1000)
           /* if(t==0){
                clearInterval(t);
            }*/
        })







    function render(data){
            for(let i=0;i<xuhao.length;i++){
                xuhao.eq(i).removeClass('active');
            }
            for(let i=0;i<index+1;i++){
                xuhao.eq(i).addClass('active');
            }
            audio.src=`${data.mediaUrl}`;
            var str = `
       <div class="title">
            ${data.content}
        </div>
        <ul class="optionCont">
            <li>
                <div class="optionBox" data="${data.correctKey}">
                     <img src="" alt="" imgData="" class="option">
                </div>
                <p><span class="option">${data.optionA}</span></p>
            </li>
            <li>
                <div class="optionBox" data="${data.correctKey}">
                     <img src="" alt="" imgData="" class="option"> 
                </div>
                <p><span class="option">${data.optionB}</span></p>
            </li>
            <li>
                <div class="optionBox" data="${data.correctKey}">
                     <img src="" alt="" imgData="" class="option">
                </div>
                <p><span class="option">${data.optionC}</span></p>
            </li>
            <li>
                <div class="optionBox" data="${data.correctKey}">
                     <img src="" alt="" imgData="" class="option">
                </div>
                <p><span class="option">${data.optionD}</span></p>
            </li>
        </ul>
       `;
            $(".test .question").html(str);

        }





    $('.next2').click(function(){
            clearInterval(t);
            flag=false;
            audio.pause();
            if(right==0){
                $('.zero1').eq(0).attr({
                    "src" : `${result[0].img[Math.floor(Math.random()*result[0].img.length)]}`
                })
                $("section").each(function(){
                    $(this).css({display:"none"})
                })
                $("section.zero").css({display:"block"})

            }else{
                $('.oneTitle').attr({
                    "src" : `${result[right].title}`
                })
                $('.yes').attr({
                    "src" : `${result[right].img[Math.floor(Math.random()*result[right].img.length)]}`
                })
                $('.desc').html(`${result[right].desc}`);

                $("section").each(function(){
                    $(this).css({display:"none"})
                })
                $("section.more").css({display:"block"})

            }
        })







//////////////////答题结果///////////////////////////////////
    $('.again').on("click",function(){
        playnum--;
        if(playnum==0){
            $('.official').css({display:"block"});
            return;
        }
        $("section").each(function(){
            $(this).css({display:"none"})
        })
        $("section.start").css({display:"block"})
    })

    close.click(function(){
           $(this).closest(".official").css({
               display:"none"
           })
       })

    $('.official').each(function(){
        var parent=$(this).children("img").first();
        parent.click(function(){
            close.trigger('click')
        })
    })

////////////////////////////分享页面/////////////////////
    $('.show').click(function(){
        $('.back').css({display:'block'})
    })
    $('.back').click(function(){
        $(this).css({display:'none'})
    })

})


/////////////////////////用户信息//////////////////////////
console.log($('.code'))
$('.code').click(function(){
    $("section").each(function(){
        $(this).css({display:"none"})
    })
    $("section.register").css({display:"block"})
})

