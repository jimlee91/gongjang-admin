(function($, window, undefined){

    $(function(){
        $('.datepicker').datepicker();
        $('.feed__slider').slick({
            dots: true,
            arrows: true,
            adaptiveHeight: true,
        })


        if( $('.feed__images').length > 0 ) {
            $('.feed__images').niceScroll({
                cursorwidth:4,
                cursoropacitymin:1,
                cursorcolor:'#383433',
                cursorborder:'none',
                cursorborderradius:4,
                autohidemode:'leave'
            });
        }

        $('button.prd__section-tab').on('click', function(){
            $(this).parents('.prd__section').find('.prd__section-content').stop().slideToggle();
        })
        $('.gnb__col').on('mouseleave', function(){
            $('.gnb__depth').hide();
            $('.gnb__col.show').find('.gnb__depth').css('display', 'flex');
        });
        $('.gnb__col').on('mouseenter', function(){
            $('.gnb__depth').hide();
            $(this).find('.gnb__depth').css('display', 'flex');
        });

        $('.header__menu').on('click', function(){
            $('.header__links-tab').toggle();
        })

        $('.js-modal-close').on('click', function(e){
            e.preventDefault();
            $(this).parents('.modal').hide();
        })


        $('#addFile input[type="file"]').on('change', function(e){
            // 등록된 파일 객체
            console.dir(e.target);

            if ( e.target.files.length > 0 ) {
                // 등록된 파일이 있을때,
                $('#fileField-list').show();
                $('#fileField-empty').hide();
                $(this).parents('label').addClass('has-files');
            } else {
                // 등록된 파일이 없을떄,
                $('#fileField-list').hide();
                $('#fileField-empty').show();
                $(this).parents('label').removeClass('has-files')
            }

            var html = '';
            for ( var i = 0; i < e.target.files.length; i++ ) {
                console.dir(e.target.files[i]); // 각각의 파일 객체
                html += '<li class="fileField-item"><p>'+e.target.files[i]['name']+'</p><a href="" class="remove-fileField-item">삭제</a></li>';
            }
            $('#fileField-list').append(html);
        });

        $(document).on('click', '.remove-fileField-item', function(e){
            e.preventDefault();
            // 삭제
            $(this).parents('.fileField-item').remove();
            if ( $('.fileField-item').length === 0 ) {
                $('#fileField-list').hide();
                $('#fileField-empty').show();
            }
        })

    })



})(jQuery, window);

function showModal(el) {
    document.querySelector(el).style.display = 'flex';
}