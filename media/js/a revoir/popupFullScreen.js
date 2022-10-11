lizMap.events.on({

  lizmappopupdisplayed: function(e) {

        var html = $('#liz_layer_popup').html();

        $('#liz_layer_popup_close').click();

        $('Nice_Al').append('<div style="background-color:white;position:absolute;width:50%;height:50%;bottom:0px;right:0px;z-index:100000;overflow:auto;" id="Nice_Al"></div>');
        $('Nice_Al').html(html);

        $('.olPopupContent').each(function(){
          $(this).css('width', '50%').css('height','50%');
        });

        $('#liz_layer_popup_close').click(function(){
          $('Nice_Al').remove();
        }

        );

  }

});
