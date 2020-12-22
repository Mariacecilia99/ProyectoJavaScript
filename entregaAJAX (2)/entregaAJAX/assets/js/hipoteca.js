
var error=document.getElementById("error");
var apellido=document.getElementById("apellido");
var nombre=document.getElementById("nombre");
var email=document.getElementById("email");
var cuotas=document.getElementById("cuotas");

/*JQuery index boton eliminar*/ 
$(document).ready(function(){
    $('#eliminar').click(function(){
        alert("Eliminaste tu registro")
    });
  
  });
 /*jQuery index boton enviar*/ 
  $(document).ready(function(){
    $('.enviar').click(function(){
        alert("Formulario enviado!")
    });
  
  });



  function datosUsuario(){
    
    var mensajeError=[]
    if((nombre.value === null) || (nombre.value === "")){
      mensajeError.push("Por favor ingrese un nombre valido");
    }
  
    if((apellido.value === null) || (apellido.value === "")){
      mensajeError.push("Por favor ingrese un apellido valido");
    }
  
  
    if((email.value === null) || (email.value === "")){
      mensajeError.push("Por favor ingrese un mail valido");
    }
  
  

  
   error.innerHTML=mensajeError.join(", ");
   return false;
  
  
  
  
  }
  
  
  
  function enviar(){
    
    function Usuario(nombre, apellido, email,  cuotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.cuotas=cuotas;
      }
  
    var nombreUsuario=document.getElementById("nombre").value;
  
  
    var apellidoUsuario=document.getElementById("apellido").value;
  
    var emailUsuario=document.getElementById("email").value;
  
    var cuotasUsuario=document.getElementById("cuotas").value;
  
   cliente=new Usuario(nombreUsuario,apellidoUsuario, emailUsuario,
       cuotasUsuario);
  
   console.log(cliente);
   agregarUsuario();
  
  }
  var usuarios=[];
  function agregarUsuario(){
      usuarios.push(cliente);
      console.log(usuarios);
      document.getElementById("tabla").innerHTML += '<tr><td>'+cliente.nombre+'</td><td>'+cliente.apellido+'</td><td>'+cliente.email+'</td><td>'+cliente.cuotas+'</td></tr>';
  };
  
  
  /*USUARIO INGRESO*/ 
 

  const userName=document.getElementById('userName');
  const contraseña=document.getElementById('contraseña');
  
  form.addEventListener('submit',function(event){
    event.preventDefault();
    let users = Array(
       {
         usuario:userName.value,
         contraseña:contraseña.value
       }
    );
    localStorage.setItem('user',JSON.stringify(users))
  });
  
    
  



  
  
  /*INICIO SESIÓN*/
function mostrarInicio(){
  document.getElementById('formularioInicio').style.display='block';
}



 


/*INICIO DE SESIÓN USUARIO*/
function formularioInicio(){
  var userName, contraseña;
 
  userName=document.getElementById("userName").value;
  contraseña=document.getElementById("contraseña").value;
 
 if(userName ==="" && contraseña ===""){
   alert("Por favor ingresa un nombre de usuario y contraseña validos");
 }
  else if(userName ===""){
   alert("Por favor completa el nombre de usuario");
 } 
 
 else if(contraseña===""){
   alert("Por favor ingresa una contraseña valida");
 }
 

 else {
    document.getElementById('formularioInicio').style.display='none';
    document.getElementById('bienvenido').innerHTML="Bienvenido "+userName;
    document.getElementById('iniciarSesion').innerHTML="Te deseamos felices fiestas";
    document.getElementById('ingreso').innerHTML="Ingresaste";
 }

 }
 




function ocultarIngreso(){
  document.getElementById('ingresar').style.display='none';
  
}




 /**********************************/
/*SCROLL CON JQUERY*/
 $('j').click( function(e) { 
  e.preventDefault(); 
 
  $('html, body').animate({
      scrollTop: $("#iniciarSesion").offset().top  
  }, 2000);
} );





 $('o').click( function(e) { 
  e.preventDefault(); 
 
  $('html, body').animate({
      scrollTop: $("#opciones").offset().top  
  }, 2000);
} );

 $('e').click( function(e) { 
  e.preventDefault(); 
 
  $('html, body').animate({
      scrollTop: $("#contacto").offset().top  
  }, 2000);
} );

/*¿Que es una hipoteca?*//*ajax con vainilla pero SIN jquery*/ 
document.querySelector('#hipoteca').addEventListener('click', botonHipoteca);

function botonHipoteca(){
  const  xhttp= new XMLHttpRequest();
  xhttp.open('GET', 'hipoteca1.txt', true);
  xhttp.send();
  xhttp.onreadystatechange =function(){
     if(this.readyState == 4 && this.status == 200){
       console.log(this.responseText);
       document.querySelector('#textoHipoteca').innerHTML=this.responseText;
     }
  }

}

/*con jquery por consola*/
$(document).ready(function(){

$("#hipoteca").click(function(){

    $.get("hipoteca1.txt", function(mensaje){

    
  console.log("Una hipoteca es "+mensaje);
})

})
});

