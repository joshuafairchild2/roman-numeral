Number.prototype.toRomanNum = function() {
  
  var numberVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanVal = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

   called
  var romanNumeral = '';
  var integer = Math.floor(this.valueOf());


  for (var i = 0; i <= numberVal.length; i++) {

    
    while (integer >= numberVal[i]) {

      
      romanNumeral += romanVal[i];
      
      integer -= numberVal[i];
    }
  }
  return romanNumeral;
}


//ui logic
$(function() {
  $('form#enter-integer').submit(function(event) {

    
    var inputInteger = Number($("input#user-input").val());
    $(this).trigger('reset');

    if (inputInteger && inputInteger < 4000) {

      
      var result = inputInteger.toRomanNum();
      $('#output').text(result).show();
    } else {

      
      alert('Please enter an integer between 1 and 3999');
      $('#output').empty().hide();
    }
    event.preventDefault();
  });
});
