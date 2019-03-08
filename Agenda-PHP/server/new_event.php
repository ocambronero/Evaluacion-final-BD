<?php

require('conector.php');

session_start();

if (isset($_SESSION['username'])) {

  $con = new ConectorBD('localhost','root','');
  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {
    //Consultar el ID del usuario conectado
    $resultado_consulta = $con->consultar(['usuarios'],
    ['id'], 'WHERE email="'.$_SESSION['username'].'"');

    if ($resultado_consulta->num_rows != 0) {
      if ($_POST['allDay']) {
        $data['allDay'] = "1";
      }else {
        $data['allDay'] = "0";
      }
      $fila = $resultado_consulta->fetch_assoc();
      $data['fk_usuario'] = "'".$fila['id']."'";
      $data['title'] = "'".$_POST['titulo']."'";
      $data['start'] = "'".$_POST['start_date']."'";
      $data['start_hour'] = "'".$_POST['start_hour']."'";
      $data['end'] = "'".$_POST['end_date']."'";
      $data['end_hour'] = "'".$_POST['end_hour']."'";

      $reponse["id"]=$con->insertData('agenda', $data);

      $response['msg']= 'OK';
    }else {
      $response['msg'] = 'Usuario no existe';
    }
  }
}

echo json_encode($response);

$con->cerrarConexion();


 ?>
