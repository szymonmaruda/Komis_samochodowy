<?php
  include 'conn.php';
  $marka=$_POST["Marka"];
  $model=$_POST["Model"];
  $rok=$_POST["Rok"];
  $cena=$_POST["Cena"];
  $paliwo=$_POST["Paliwo"];
  $kolor=$_POST["Kolor"];
  $pojemnosc=$_POST["Pojemnosc"];
  $przebieg=$_POST["Przebieg"];
  $opis=$_POST["Opis"];


   $nowy="INSERT INTO Samochody (id_auta, marka, model, rok_produkcji, cena, paliwo, kolor, pojemnosc_silnika, przebieg, opis) VALUES (DEFAULT,'$marka', '$model', '$rok', '$cena', '$paliwo', '$kolor', '$pojemnosc', '$przebieg', '$opis')";
try{
   $dbh->exec($nowy);
    //echo "New record created successfully";
    include 'index.php';
    }
catch(PDOException $e)
    {
    echo $nowy . "<br>" . $e->getMessage();
    }

    $dbh = null;

//$conn->close();
?>
