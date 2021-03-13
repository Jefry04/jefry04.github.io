var randomNumber = Math.floor(1000 + Math.random() * 9000);
var randomArray = randomNumber.toString().split('');
console.log(randomNumber);
console.log(randomArray);

$('form').on('submit', function (e) {
  e.preventDefault();
  var numbers = $('#numbers').val();
  var picas = 0;
  var fijas = 0;
  var numbersArray = numbers.toString().split('');

  console.log(numbersArray);

  randomArray.forEach(function (item, index) {
    if (item === numbersArray[index]) {
      fijas++;
    } else if (numbersArray.indexOf(item) !== -1) {
      picas++;
    }
  });

  if (numbers.toString().length === 4) {
    if (numbers == randomNumber) {
      alert('se acabo el juego');
      // CREAR FUNCION PARA INICIALIZAR  JUEGO
    }
    $('tbody').append(
      '<tr>' +
        '<td>' +
        numbers +
        '</td>' +
        '<td>' +
        picas +
        '</td>' +
        '<td>' +
        fijas +
        '</td>' +
        '</tr>'
    );
  } else alert('escribiste mas o menos de 4 numeros');
});
