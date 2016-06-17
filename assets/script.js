/*function aaaa (){
var user, Pass

  user="Johanna"
  Pass="hola"
  alert(user+ ' '+Pass)
};*/

$(document).ready(function(){
  $("#login").mouseover(function(){
  $("#login").css("background-color","#dde0a6");

});
$("#login").mouseout(function(){
$("#login").css("background-color","#28b395");
});
});

function validar(){
  var username, password
  username = $('#username').val()
  password = $('#password').val()
  
  if ((username === undefined || username === '') || (password === undefined || password === '')) {
    $(".table").css("border-color","#db1325")
  } else {
    $(".table").css("border-color","#2fdb13")
  };
};
