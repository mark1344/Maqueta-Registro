function obtenerDatosForm(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var ident = document.getElementById("ident").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var rol = document.getElementById("rol").value;
    var contraseña = document.getElementById("contraseña").value;
    var confirmar = document.getElementById("confirmar").value;

var datos = document.getElementById("registro-js");
datos.innerHTML = `
  <h2>Datos de usuario</h2>
  <table border="1">
      <tr>
          <td>${nombre}</td>
          <td>${apellido}</td>
          <td>${ident}</td>
          <td>${email}</td>
          <td>${telefono}</td>
          <td>${direccion}</td>
          <td>${rol}</td>
          <td>${contraseña}</td>
          <td>${confirmar}</td>
      </tr>
  </table>
  `;
}