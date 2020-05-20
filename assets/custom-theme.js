
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


// Faq page - accordion
var accordionWrapper = document.getElementById("accordion--wrapper");
var acc = document.getElementsByClassName("head_tab");
var i;

function fadeContent (panel) {
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    console.log(e)
    if(this.classList.contains('active')) {
      this.classList.toggle("active")
      fadeContent(this.nextElementSibling)
    } else {
      var expandedPanel = accordionWrapper.querySelector(".active")
      if (expandedPanel){
        expandedPanel.classList.remove("active")

        fadeContent(expandedPanel.nextElementSibling)
      }

      this.classList.toggle("active")
      fadeContent(this.nextElementSibling)
    }
  });
}


// Product main image swipe
var dragDirection = '';
$("body .product-single__media-wrapper").mousedown(function(e) {
  var previous_x_position = e.pageX;
  // var previous_y_position = e.pageY;

  $(window).mousemove(function(event) {
    var x_position = event.pageX;
    // var y_position = event.pageY;

    if (previous_x_position < x_position) {
      // console.log('moving right');
      dragDirection = 'right'

    } else {
      // console.log('moving left');
      dragDirection = 'left'
    }
    // if (previous_y_position < y_position) {
    //   console.log('moving down');
    // } else {
    //   console.log('moving up');
    // }
    $(window).unbind("mousemove");
  });
}).mouseup(function() {
  $(window).unbind("mousemove");
  dragDirection == 'right' ? $('body .product-single__thumbnails').find('.active-thumb').closest('li').next().find('a').trigger('click') : $('body .product-single__thumbnails').find('.active-thumb').closest('li').prev().find('a').trigger('click')
});
