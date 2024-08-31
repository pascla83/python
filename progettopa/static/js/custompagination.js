"use_strict";
$('li[name="page').on("click", function(e){
    var num_page = $(this).text();
  
    $('li[class="page-item active"]').removeClass('active');
    $(this).addClass("active");
  
    getDataTable(num_page);
  })
  
  $('#center_page').on("click", function(e) {
      var num_page = $(this).text();
  
      $('li[class="page-item active"]').removeClass('active');
      $(this).addClass("active");
  
      $('#prev_page').removeClass('disabled');
      $('#next_page').removeClass('disabled');
  
      getDataTable(num_page);
  
  });
  
  $('#left_page').on("click", function(e) {
      var num_page = $(this).text();
      var left_value = $(this).text();
      var final_value = $('#final_page').text();
      var initial_value = 1 // sarà sempre 1
  
      if(left_value - initial_value >= 3){
          
          $('#right_page a').html($('#center_page').text());
  
          $('li[class="page-item active"]').removeClass('active');
  
          $('#center_page').html('<a class="page-link" href="#">'+ left_value +' </a>').addClass('active');
         
          $('#left_page a').html((parseInt(left_value-1))).blur();
          
      }else{
         
          $('#left_dot a').html((parseInt($(this).text())-1)).blur();
  
          $('#left_dot').removeClass('disabled');
  
          $('li[class="page-item active"]').removeClass('active');
  
          $(this).addClass("active");
      }
  
      var right_value = $('#right_page').text(); // prendo il valore solo ora perchè l'if potrebbe cambiarlo
  
      if(final_value - right_value >= 3){
          $('#right_dot').addClass('disabled');
  
          $('#right_dot').html('<a class="page-link" href="#">...</a>')
      }
  
      $('#prev_page').removeClass('disabled');
      $('#next_page').removeClass('disabled');
  
      getDataTable(num_page);
  
  });
  
  
  $('#right_page').on("click", function(e) {
  
      var num_page = $(this).text();
      var initial_value = 1;
      var right_value = $(this).text();
      var final_value = $('#final_page').text();
  
      if(final_value - right_value >= 3){
          
          $('#left_page a').html($('#center_page').text());
          
          $('li[class="page-item active"]').removeClass('active');
  
          $('#center_page').html('<a class="page-link" href="#">'+ $(this).text() +' </a>').addClass('active');
          
          $('#right_page a').html((parseInt(right_value)+1)).blur();
          
      }else{
          
          $('#right_dot a').html((parseInt($(this).text())+1)).blur();
  
          $('#right_dot').removeClass('disabled');
  
          $('li[class="page-item active"]').removeClass('active');
  
          $(this).addClass("active");
      }
  
      var left_value = $(this).text(); // prendo il valore solo ora perchè l'if potrebbe cambiarlo
  
      if(left_value - initial_value >= 3){
  
          $('#left_dot').addClass('disabled');
  
          $('#left_dot').html('<a class="page-link" href="#">...</a>')
      }
      
      $('#prev_page').removeClass('disabled');
      $('#next_page').removeClass('disabled');
  
      getDataTable(num_page);
  });
  
  
  $('#right_dot').on("click", function(e) {
      var num_page = $(this).text();
  
      $('#prev_page').removeClass('disabled');
      $('#next_page').removeClass('disabled');
  
      $('li[class="page-item active"]').removeClass('active');  
      $(this).addClass("active");
      getDataTable(num_page);
  });
  
  $('#left_dot').on("click", function(e) {
      var num_page = $(this).text();
  
      $('li[class="page-item active"]').removeClass('active');
      $(this).addClass("active");
      
      $('#prev_page').removeClass('disabled');
      $('#next_page').removeClass('disabled');
  
      getDataTable(num_page);
  });
  
  
  $('#final_page').on("click", function(e) {
      
      var num_page = $(this).text();
  
      $('#right_dot a').html((parseInt($(this).text())-1)).blur();
      $('#right_dot').removeClass('disabled');
    
      $('li[class="page-item active"]').removeClass('active'); 
      $(this).addClass("active");
  
      // se si clicca direttamente alla page finale
      $('#left_dot').addClass('disabled');
      $('#left_dot').html('<a class="page-link" href="#">...</a>');
  
      $('#right_page a').html((parseInt($('#right_dot').text())-1));
      $('#center_page a').html((parseInt($('#right_page').text())-1));
      $('#left_page a').html((parseInt($('#center_page').text())-1));
  
      $('#prev_page').removeClass('disabled');
      $('#next_page').addClass('disabled');
  
      getDataTable(num_page);
  });
  
  
  $('#initial_page').on("click", function(e) {
  
      var num_page = $(this).text();
  
      $('#left_dot a').html((parseInt($(this).text())+1)).blur();
      $('#left_dot').removeClass('disabled');
      $('li[class="page-item active"]').removeClass('active');
      
      $(this).addClass("active");
      $('#right_dot').addClass('disabled');
      $('#right_dot').html('<a class="page-link" href="#">...</a>');
  
      $('#left_page a').html((parseInt($('#left_dot').text())+1));
      $('#center_page a').html((parseInt($('#left_page').text())+1));
      $('#right_page a').html((parseInt($('#center_page').text())+1));
      
      $('#prev_page').addClass('disabled');
      $('#next_page').removeClass('disabled');
  
      getDataTable(num_page);
  });
  
  $('#next_page').on("click", function(e) {
  
      $('li[class="page-item active"]').next().click();
      
  });
  
  $('#prev_page').on("click", function(e) {
  
      $('li[class="page-item active"]').prev().click();
  });
  

  function getDataTable(num_page){
    kpi_name = $('#id_pages').data('kpi_name')
      $.ajax({
          type: 'GET',
          url: 'pagina-ordini/',
          data:{'num': num_page, 'kpi': kpi_name},
          success: function (response) {
            $('#table_ordini').html(response); //solo se il search aggiorna
            //$('#delete_button').prop('disabled', true)
           
          },
          error: function (response) {
              // alert the error if any error occured
              alert(response["responseJSON"]["instance"]);
          }
        });
  }
  