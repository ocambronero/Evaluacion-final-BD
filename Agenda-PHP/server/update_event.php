<?php

require('conector.php');

//$resultado = array();

session_start();

if (isset($_SESSION['username'])) {

  $con = new ConectorBD('localhost','root','');
  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {

      $llave = "id = '".$_POST['id']."'";
      $data['start'] = "'".$_POST['start_date']."'";
      $data['start_hour'] = "'".$_POST['start_hour']."'";
      $data['end'] = "'".$_POST['end_date']."'";
      $data['end_hour'] = "'".$_POST['end_hour']."'";

      if ($con->actualizarRegistro('agenda', $data, $llave)) {
        $response['msg']= 'OK';
      }else {
        $response['msg']= 'No se pudo realizar la actualizacion de los datos';
      }

  }
}

echo json_encode($response);

$con->cerrarConexion();


 ?>
