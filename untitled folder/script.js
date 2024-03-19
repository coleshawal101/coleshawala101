$(document).ready(function() {
    $('.eye-btn').click(function() {
      var eyeClass = $(this).data('eye');
      $('.eyes').hide();
      $('.' + eyeClass).show();
    });
  
    // Add similar click event handlers for other customizable parameters
  });
  $(document).ready(function() {
    $('.eye-btn').click(function() {
      $('#eye-btn').show();
      $('#eye-green').hide();
    });
  
    $('.eye-green').click(function() {
      $('#eye-btn').hide();
      $('#eye-green').show();
    });
  });
  $(document).ready(function() {
    $('.hair-1-btn').click(function() {
      $('#hair-1').show();
      $('#hair-2').hide();
    });
  
    $('.hair-2-btn').click(function() {
      $('#hair-1').hide();
      $('#hair-2').show();
    });
  });
  $(document).ready(function() {
    $('.Shirt-1-btn').click(function() {
      $('#Shirt-1').show();
      $('#Shirt-2').hide();
    });
  
    $('.Shirt-2-btn').click(function() {
      $('#Shirt-1').hide();
      $('#Shirt-2').show();
    });
  });
  $(document).ready(function() {
    $('.Pants-1-btn').click(function() {
      $('#Pants-1').show();
      $('#Pants-2').hide();
    });
  
    $('.Pants-2-btn').click(function() {
      $('#Pants-1').hide();
      $('#Pants-2').show();
    });
  });
  $(document).ready(function() {
    $('.Shoes-1-btn').click(function() {
      $('#Shoes-1').show();
      $('#Shoes-2').hide();
    });
  
    $('.Shoes-2-btn').click(function() {
      $('#Shoes-1').hide();
      $('#Shoes-2').show();
    });
  });