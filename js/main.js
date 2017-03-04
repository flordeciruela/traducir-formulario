var title = document.getElementById('form-signin-heading');
var email = document.getElementById('inputEmail');
var password = document.getElementById('inputPassword');
var remember = document.getElementsByTagName('span')[0];
var button = document.getElementsByClassName('btn')[0];
var print = document.getElementById('print');

  function translate (){

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
  };

  button.addEventListener('click', function(event){
  event.preventDefault();

  print.innerHTML  =
  "<h3>Datos de Formulario</h3>"+
  "<p>El correo electrónico ingresado es:</p>"+
  "<p>"+ email.value + "</p>"+
  "<p>la clave ingresada es:</p>"+
  "<p>"+ password.value + "</p>";
  });
  translate();
