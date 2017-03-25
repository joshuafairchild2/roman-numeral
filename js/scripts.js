//business logic
//Number method that returns the Roman Numeral of an integer
Number.prototype.toRomanNum = function() {
  //2 arrays where matching indices ("conversion index") create the default conversions from integer to roman numeral
  var numberVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanVal = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  //first var stores the roman numeral as it is being constructed, second var stores the value of the integer when the method is called
  var romanNumeral = '';
  var integer = Math.floor(this.valueOf());

  //iterate over each conversion index (arr[i] of the 2 arrays)
  for (var i = 0; i <= numberVal.length; i++) {

    //check if the integer is greater than that of the current conversion index (i)
    while (integer >= numberVal[i]) {

      //add the letter of the current conversion index to the end of romanNumeral
      romanNumeral += romanVal[i];
      //subtract the value of the conversion index from the integer
      integer -= numberVal[i];
    }
  }
  return romanNumeral;
}


//ui logic
$(function() {
  $('form#enter-integer').submit(function(event) {

    //get the submitted value and reset the form
    var inputInteger = Number($("input#user-input").val());
    $(this).trigger('reset');

    if (inputInteger && inputInteger < 4000) {

      //get the roman numeral of the submitted value and insert it into the DOM
      var result = inputInteger.toRomanNum();
      $('#output').text(result).show();
    } else {

      //validate the form
      alert('Please enter an integer between 1 and 3999');
      $('#output').empty().hide();
    }
    event.preventDefault();
  });
});
