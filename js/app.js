$(function(){
    $('.blog_filter').filterizr();

    $('.blog_filter_content li').on('click', function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
});

new VenoBox();
AOS.init();