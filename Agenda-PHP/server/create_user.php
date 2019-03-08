<?php
  require('conector.php');

  $con = new ConectorBD('localhost','admin_user','12345');

  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {

    if ($con->eliminarRegistro('usuarios', 'email = "ocambronero@gmail.com"')) {
      echo "Los datos del usuario 1 se eliminaron correctamente<br/>";
    }else echo "Se ha producido un error en la inserción<br/>";

    if ($con->eliminarRegistro('usuarios', 'email = "oc@gmail.com"')) {
      echo "Los datos del usuario 2 se eliminaron correctamente<br/>";
    }else echo "Se ha producido un error en la inserción<br/>";

    if ($con->eliminarRegistro('usuarios', 'email = "ecalvo@gmail.com"')) {
      echo "Los datos del usuario 3 se eliminaron correctamente<br/>";
    }else echo "Se ha producido un error en la inserción<br/>";

    $datos['email'] = "'ocambronero@gmail.com'";
    $datos['psw'] = "'".password_hash('12345', PASSWORD_DEFAULT)."'";
    $datos['nombre'] = "'Oscar Cambronero'";
    $datos['fecha_nacimiento'] = "'1969-09-06'";

    if ($con->insertData('usuarios', $datos)) {
      echo "Los datos del usuario 1 Se ingresaron correctamente<br/>";
    }else echo "Se ha producido un error en la inserción<br/>";

    $datos['email'] = "'oc@gmail.com'";
    $datos['psw'] = "'".password_hash('12345', PASSWORD_DEFAULT)."'";
    $datos['nombre'] = "'Olman Campos'";
    $datos['fecha_nacimiento'] = "'1996-04-05'";

    if ($con->insertData('usuarios', $datos)) {
      echo "Los datos del usuario 2 Se ingresaron correctamente<br/>";
    }else echo "Se ha producido un error en la inserción<br/>";

    $datos['email'] = "'ecalvo@gmail.com'";
    $datos['psw'] = "'".password_hash('12345', PASSWORD_DEFAULT)."'";
    $datos['nombre'] = "'Erick Calvo'";
    $datos['fecha_nacimiento'] = "'1987-12-24'";

    if ($con->insertData('usuarios', $datos)) {
      echo "Los datos del usuario 3 Se ingresaron correctamente<br/>";
    }else echo "Se ha producido un error en la inserción<br/>";

    $con->cerrarConexion();

  }else {
    echo "Se presentó un error en la conexión";
  }


 ?>
