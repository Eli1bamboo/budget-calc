$(document).ready(function() {
  $('.result strong').html('$0');

  $('input[type=radio]').click(function(){
    var total = 0;

    $('input[type=radio]').each(function(){
      if($(this).is(':checked')){
          total = total + parseInt($(this).val());
      };
    });

    total = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    $('.result strong').html('$'+total);
    $('.final-title p span').html('$'+total);
  });
});
