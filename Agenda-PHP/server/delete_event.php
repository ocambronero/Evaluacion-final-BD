<?php

require('conector.php');

//$resultado = array();

session_start();

if (isset($_SESSION['username'])) {

  $con = new ConectorBD('localhost','root','');
  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {
    $llave = "id = '".$_POST['id']."'";

    if ($con->eliminarRegistro('agenda', $llave)) {
      $response['msg']= 'OK';
    }else {
      $response['msg']= 'No se pudo eliminar el evento';
    }
  }
}

echo json_encode($response);

$con->cerrarConexion();


 ?>
