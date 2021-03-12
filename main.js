$(".input").on('input', function(){

    var number1 = document.getElementById('num1').value;
    number1 = parseFloat(number1);

    var number2 = document.getElementById('num2').value;
    number2 = parseFloat(number2);

    document.getElementById('result').value = number1 * number2;
});