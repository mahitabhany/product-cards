$('.white-swatch').click(function(){
  
    var productCard = $(this).parent().parent();
    
    productCard.find('.secondary-img').removeClass('hide-img');
    productCard.find('.primary-img').addClass('hide-img');
    productCard.find('.third-img').addClass('hide-img');
    productCard.find('.black-swatch').removeClass('active-swatch');
    productCard.find('.red-swatch').removeClass('active-swatch');
    $(this).addClass('active-swatch');
    
  });
  
$('.red-swatch').click(function(){
  
    var productCard = $(this).parent().parent();
    
    productCard.find('.third-img').removeClass('hide-img');
    productCard.find('.secondary-img').addClass('hide-img');
    productCard.find('.primary-img').addClass('hide-img');
    productCard.find('.white-swatch').removeClass('active-swatch');
    productCard.find('.black-swatch').removeClass('active-swatch');
    $(this).addClass('active-swatch');
    
  });

  
$('.black-swatch').click(function(){
  
    var productCard = $(this).parent().parent();
    
    productCard.find('.primary-img').removeClass('hide-img');
    productCard.find('.secondary-img').addClass('hide-img');
    productCard.find('.third-img').addClass('hide-img');
    productCard.find('.red-swatch').removeClass('active-swatch');
    productCard.find('.white-swatch').removeClass('active-swatch');
    $(this).addClass('active-swatch');
    
  });