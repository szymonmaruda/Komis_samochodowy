<?php

  try {
  $dbh = new PDO('mysql:host=mysql.hostinger.pl;dbname=u657292145_auto', 'u657292145_auto', 'Ciasteczko1');
  //echo "polaczylem";
  }
  catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

 ?>
