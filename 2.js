var number_one;
var number_two;
var symbol;


function calc(number) {
  if (number_one == undefined) {
    number_one = number
    document.getElementById('calculator').value += number
  }
  else if(symbol == undefined && number_one != undefined){
      document.getElementById('error').textContent = 'Ошибка'
  }
  else if(number_two == undefined){
      number_two = number
      document.getElementById('calculator').value += number
      if(symbol == '+'){
          document.getElementById('sum').textContent = Number(number_one) + Number(number_two)
          document.getElementById('error').textContent = undefined
      }
      else if(symbol == '-'){
          document.getElementById('sum').textContent = Number(number_one) - Number(number_two)
          document.getElementById('error').textContent = undefined
      }
  }
  else if(number_one !=undefined && symbol != undefined && number_two != undefined){
      number_one = number
      symbol = undefined
      number_two = undefined
      document.getElementById('calculator').value = number
      document.getElementById('error').textContent = undefined
  }
  }
  function sumb(sym){
  if(symbol == undefined && number_one != undefined)
  {
      symbol = sym
      document.getElementById('calculator').value += sym
      document.getElementById('error').textContent = undefined
  }
}
function cle () // Очистить AC
{
	document.getElementById("calculator").value=null;
}
