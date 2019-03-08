<?php

require('conector.php');

//$resultado = array();

session_start();

if (isset($_SESSION['username'])) {

  $con = new ConectorBD('localhost','root','');
  $response['conexion'] = $con->initConexion('agenda_db');

  if ($response['conexion']=='OK') {
    $resultado_consulta = $con->consultar(['usuarios'],
    ['id'], 'WHERE email="'.$_SESSION['username'].'"');

    if ($resultado_consulta->num_rows != 0) {
      $fila = $resultado_consulta->fetch_assoc();
      $resultado_consulta = $con->consultar(['agenda'], //['*'],
      ['id','title','start','start_hour','end','end_hour','allDay'],
      'WHERE fk_usuario="'.$fila['id'].'"');

      if ($resultado_consulta->num_rows != 0) {
        $i=0;
        while ($array=$resultado_consulta->fetch_array()){
          $arrayauxliar[$i]['id']=$array['id'];
          $arrayauxliar[$i]['title']=$array['title'];
          if ($array['allDay'] == 0) {
            $diaCompleto = false;
            $arrayauxliar[$i]['start']=$array['start'].' '.$array['start_hour'];
            $arrayauxliar[$i]['end']=$array['end'].' '.$array['end_hour'];
          }else {
            $diaCompleto = true;
            $arrayauxliar[$i]['start']=$array['start'];
            $arrayauxliar[$i]['end']="";
          }
          $arrayauxliar[$i]['allDay']=$diaCompleto;
          $i++;
        }
        $response['eventos'] = $arrayauxliar;
      }

      $response['msg']= 'OK';
    }else {
      $response['msg'] = 'Usuario no existe';
    }
  }
}

echo json_encode($response);

$con->cerrarConexion();


 ?>
