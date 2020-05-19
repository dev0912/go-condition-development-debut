
$(document).ready(function() {
  $('ul.tabs').each(function(){
    var active, content, links = $(this).find('a');
    active = links.first().addClass('active');
    content = $(active.attr('href'));
    links.not(':first').each(function () {
      $($(this).attr('href')).hide();
    });

    $(this).find('a').click(function(e){
      active.removeClass('active');
      content.hide();
      active = $(this);
      content = $($(this).attr('href'));
      active.addClass('active');
      content.show();
      return false;
    });

  });

  // ReCharge Subscription Button Text
  $('body .product-form__controls-group--submit').find('span[data-add-to-cart-text]').text('Subscribe')
    $('#rc_container .rc_block__type').on('change', 'input[type="radio"]', function(e) {
      var optionName = $(this).val()
      var btnName = ''
      if (optionName == 'onetime') btnName = 'Purchase'
      else btnName = 'Subscribe'
      $('body .product-form__controls-group--submit').find('span[data-add-to-cart-text]').text(btnName)
  })

  // Control Qty
  $('body .product-form__controls-group').on('click', '.js-change-quantity', function(e){
    var currentVal = $(this).siblings('input').val()

    if($(this).attr('data-func') === 'minus') {
      if(currentVal == 1) $(this).siblings('input').val(1)
      else $(this).siblings('input').val(--currentVal)
    } else {
      $(this).siblings('input').val(++currentVal)
    }
  })
});
