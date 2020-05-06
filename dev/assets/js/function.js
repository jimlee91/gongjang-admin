(function($, window, undefined){

    $(function(){
        $('.gnb__col').on('mouseleave', function(){
            $('.gnb__depth').hide();
            $('.gnb__col.show').find('.gnb__depth').css('display', 'flex');
        });
        $('.gnb__col').on('mouseenter', function(){
            $('.gnb__depth').hide();
            $(this).find('.gnb__depth').css('display', 'flex');
        });
    })

})(jQuery, window);

function showModal(el) {
    document.querySelector(el).style.display = 'flex';
}