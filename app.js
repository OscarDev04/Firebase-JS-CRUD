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
  var btn_edit = $("#btn_edit");

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

       var contAlumnos = data.val();

        var html = ` 

          <td>${ contAlumnos.first_name } </td>
          <td>${ contAlumnos.last_name } </td>

          <td><a class="btn btn-default" href="#" role="button" data-uid="${ data.key }" id="btn_edit">Editar</a>
          <td><a class="btn btn-default" href="#" role="button" id="delete">Eliminar</a></td> 

            `
           var tr = $("<tr>").html(html);

           $("#list_Alumn").append(tr)
    })
}


 $(document).on("click", '#btn_edit', function() {

     var uid = $(this).data('uid');

      var alumno = database.ref("/alumnos/" + uid);


      $("#form_edit").css({"visibility":"visible"});

        alumno.on('value', (data) => {

                $('#first_name').val(data.val().first_name)
                $('#last_name').val(data.val().last_name)

          })


   btn_edit.on('click', e => {

     var first_name = $("#first_name").val();
      var last_name = $("#last_name").val();

      database.ref('/alumnos/' + uid).update({

                    first_Name: first_name,  
                    last_Name: last_name,

                })

      $("#form_edit")[0].reset();
  })


});


