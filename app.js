  var config = {
    apiKey: "AIzaSyAtWlr_-YF4WauPc5n5ay66J2SshsN5ZZw",
    authDomain: "test-3874d.firebaseapp.com",
    databaseURL: "https://test-3874d.firebaseio.com",
    projectId: "test-3874d",
    storageBucket: "test-3874d.appspot.com",
    messagingSenderId: "212687594532"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

$(document).ready(function(){

 list();
  

 })

  var btn_create = $("#btn_create");
  var form_create = $("#form_create");

  var first_name = $("#first_name").val();
  var last_name = $("#last_name").val();

  btn_create.on('click', e => {

      database.ref('/alumnos/').push({

            first_Name: first_name,  
            last_Name: last_name,

          })

      form_create[0].reset();
  })

function list(){

  var alumnos = database.ref("/alumnos/");

    alumnos.on('child_added', (data) =>{
       var data = data.val();

        var html = ` 

          <td>${ data.first_name } </td>
          <td>${ data.last_name } </td>

          <td><a class="btn btn-default" href="#" role="button">Editar</a>
          <td><a class="btn btn-default" href="#" role="button">Eliminar</a></td> 

            `
       var tr = $("<tr>").html(html);

       $("#list_Alumn").append(tr)
    })
}