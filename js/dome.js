$(function() {
    //背景图片变换展示
    var length = 3;
    $(".index_img li:nth-child(3)").show();
    setInterval(function () {
        var img_index = Math.round(Math.random() * length);
        //alert(img_index);
        $(" .index_img li").eq(img_index).siblings().removeClass("show");
        $(" .index_img li").eq(img_index).siblings().hide();
        $(" .index_img li").eq(img_index).addClass("show");
        $(" .index_img li").eq(img_index).show();
    }, 5000);
    //当页面尺寸发生变化时自适用
    $(window).resize(function() {
       recalc();
    });
    recalc();
    function recalc() {
        var wid = document.documentElement.clientWidth;
        var sizeF = 20 * (wid / 640) + 'px';
        $('html').css('font-size', sizeF);
    }
    //吸顶条
    //文档滚动调用回到顶部函数
    $(document).on('scroll', function () {
         top_back();
    });
    function top_back(){
        var b = $('.menu').offset().top;//返回或设置导航栏相对于文档顶部的偏移(位置)
        var c = $(document).scrollTop();//加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离
        var h = $(window).height();     //当滚动的屏幕距离大于等于导航栏本身离最顶端的距离时（判断条件）给它加样式／
        var m = $('.menu').height();
        if (b <= c && c >= h) {
            $('.menu').addClass('fixed_top');
        } else if (c < h && c<m) {
            console.log(111111111111);
            $('.menu').removeClass('fixed_top');
        }
     }
    //更多菜单下拉展示
    $('.menu').find('img').on('click',function(){
        var off= $('.more_menu').css('display');
        if( off=='none'){
                $('.more_menu').slideDown();
        }else if( off=='block'){
                 $('.more_menu').slideUp();
       }
    });
    //点击下拉菜单展示相应页面
    //小页面换页
    $('.more_menu>li').bind('click',function(){
        var li_index=$(this).index();//获取当前点击li 的序号
        var div_top = $(".pg"+(li_index+1)).offset().top;//获取对应序号的div到文档顶端距离。
        change_page(div_top);
        top_back();
    });
    //大页面换页
    $('.menu_hide>li').bind('click',function(){
        var li_index=$(this).index();//获取当前点击li 的序号
        var div_top = $(".pg"+(li_index+1)).offset().top;//获取对应序号的div到文档顶端距离。
        change_page(div_top);
        top_back();
    });
    //首页关于我
    $(".about_me").bind("click", function () {
        $(".more_menu li:nth-child(1)").click();
    });
    //首页我的作品
    $(".my_works").bind("click", function () {
        $(".more_menu li:nth-child(3)").click();
    });
    //获取要隐藏的距离
    function change_page( obj_top){
       var menu_top=$('.menu').height();
        obj_top=obj_top-menu_top;
        $('html,body').animate({
            scrollTop:obj_top
        });
        $('.more_menu').slideUp();
    }
    $(".circle").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent:90
    });
    $(".circle1").circliful({
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent:85
    });
    //作品文字与蒙版显示
    $('.work').hover(function(){
        $(this).find('p').css('display','block');
       $(this).find('.meng').css("display",'block');
    },
    function(){
        $(this).find('p').css("display",'none');
        $(this).find('.meng').css("display",'none');
    });
});


