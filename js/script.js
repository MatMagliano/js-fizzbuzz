// alert('ciao!!')


//metodo con for

for (var i = 1; i <= 100; i++) {
  if ((i %5 == 0) && (i %3 == 0)) {
    console.log('FizzBuzz');
    document.getElementById('for').innerHTML  += '<li>' + 'FizzBuzz' + '</li>';
  } else if (i % 5 == 0) {
      console.log('Buzz');
      document.getElementById('for').innerHTML  += '<li>' + 'Buzz' + '</li>';
  } else if (i % 3 == 0) {
      console.log('Fizz');
      document.getElementById('for').innerHTML  += '<li>' + 'Fizz' + '</li>';
  } else {
    console.log(i);
    document.getElementById('for').innerHTML  += '<li>' + i + '</li>';
  }
}
document.getElementById('for').classList.add('list_style');


//metodo con while

var i = 1;
while (i <= 100) {
  if ((i %5 == 0) && (i %3 == 0)) {
    console.log('FizzBuzz');
    document.getElementById('while').innerHTML  += '<li>' + 'FizzBuzz' + '</li>';
  } else if (i % 5 == 0) {
      console.log('Buzz');
      document.getElementById('while').innerHTML  += '<li>' + 'Buzz' + '</li>';
  } else if (i % 3 == 0) {
      console.log('Fizz');
      document.getElementById('while').innerHTML  += '<li>' + 'Fizz' + '</li>';
  } else {
    console.log(i);
    document.getElementById('while').innerHTML  += '<li>' + i + '</li>';
  }
  i++;
}
document.getElementById('while').classList.add('list_style');
