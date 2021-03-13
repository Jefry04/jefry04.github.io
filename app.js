var randomArray = [];

function createNumber() {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var number = [];
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  for (var i = 1; i <= 4; i++) {
    number.push(
      numbers.splice(getRandomInt(0, numbers.length), 1).pop().toString()
    );
  }
  console.log(number.join(' '));
  randomArray = number;
}

function render() {
  location.reload();
}

function ganaste() {
  $('#myModal').modal();
}

$('#start').on('click', function () {
  render();
});

$('form').on('submit', function (e) {
  e.preventDefault();
  var numbers = $('#numbers').val();
  var picas = 0;
  var fijas = 0;
  var numbersArray = numbers.toString().split('');
  var test = /([0-9]).*?\1/.test(numbers); // verifica si hay numeros repetidos en el numero ingresado en el form

  randomArray.forEach(function (item, index) {
    if (item === numbersArray[index]) {
      fijas++;
    } else if (numbersArray.indexOf(item) !== -1) {
      picas++;
    }
  });

  if (numbers.toString().length === 4 && !test) {
    if (fijas === 4) {
      ganaste();
    }
    $('#numbers').parent().removeClass('has-error');
    $('p').html('Ingresa cuatro numeros diferentes y oprime enter');
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
  } else {
    $('#numbers').parent().addClass('has-error');
    $('p').html(
      'escriba ' +
        '<b class="text-danger">' +
        ' cuatro numeros diferentes ' +
        '</b>' +
        ' y presione enter'
    );
  }
});

$(document).ready(function () {
  createNumber();
});
