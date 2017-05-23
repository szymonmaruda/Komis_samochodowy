<div class="col-md-2">

</div>
<div class="col-md-8">
  <div class="row">
  <form id="form1" name="form1" method="post" action="validate.php">

    <div class="form-group">
      <label for="Marka">Marka</label>
      <input type="text" class="form-control" id="Marka" name="Marka" placeholder="Toyota">
    </div>
    <div id="marka_alert"></div>

    <div class="form-group">
      <label for="Model">Model</label>
      <input type="text" class="form-control" id="Model" name="Model" placeholder="Yaris">
    </div>
    <div id="model_alert"></div>

    <div class="form-group">
      <label for="Rok">Rok produkcji</label>
      <input type="text" class="form-control" id="Rok" name="Rok" placeholder="2006">
    </div>
    <div id="rok_alert"></div>

    <div class="form-group">
      <label for="Cena">Cena</label>
      <input type="text" class="form-control" id="Cena" name="Cena" placeholder="19 900.00">
    </div>
    <div id="cena_alert"></div>

    <div class="form-group">
      <label for="Paliwo">Paliwo</label>
      <select class="form-control" id="Paliwo" name="Paliwo">
      <option value="0">Wybierz</option>
      <option value="1">Benzyna</option>
      <option value="2">Diesel</option>
      <option value="3">Hybryda</option>
      <option value="4">Benzyna+LPG</option>
      <option value="5">Elektryczny</option>
    </select>
    </div>
    <div id="paliwo_alert"></div>

    <div class="form-group">
      <label for="Kolor">Kolor</label>
      <input type="text" class="form-control" id="Kolor" name="Kolor" placeholder="Czerwony">
    </div>
    <div id="kolor_alert"></div>

    <div class="form-group">
      <label for="Pojemnosc">Pojemnosc</label>
      <input type="text" class="form-control" id="Pojemnosc" name="Pojemnosc" placeholder="1.8">
    </div>
    <div id="pojemnosc_alert"></div>

    <div class="form-group">
      <label for="Przebieg">Przebieg</label>
      <input type="text" class="form-control" id="Przebieg" name="Przebieg" placeholder="234092">
    </div>
    <div id="przebieg_alert"></div>

    <div class="form-group">
      <label for="Description">Dodatkowy opis</label>
      <textarea class="form-control" rows="3" id="Description" name="Opis" placeholder="Wspomaganie kierownicy, nawigacja itp." maxlength="255"></textarea>
      <div id="counter">Pozostało <span id="charsLeft"></span> znaków.</div>
    </div>
    <div class="row">
    <div class="form-group">
    <button type="submit" class="btn btn-default col-md-4 col-md-offset-4" value="click" id="click">Zapisz</button>
    </div>
  </div>
  </form>
</div>
</div>
<div class="col-md-2">

</div>
<div>
<?php

echo '<table class="tabelaform" border="3">';
echo '<tr>';
echo '<td><b>id</b></td><td><b>Marka</b></td><td><b>Model</b></td><td><b>Rok produkcji</b></td><td><b>Cena</b></td><td><b>Paliwo</b></td><td><b>Kolor</b></td><td><b>Pojemnosc</b></td><td><b>Przebieg</b></td><td><b>Opis</b></td></tr>';
foreach ($result as $wiersz) {
echo '<tr>';
echo '<td>'. $wiersz['id_auta'] .
'</td><td>'. $wiersz['marka'] .
'</td><td>'. $wiersz['model'] .
'</td><td>'. $wiersz['rok_produkcji'] .
'</td><td>'. $wiersz['cena'] .
'</td><td>'. $wiersz['paliwo'] .
'</td><td>'. $wiersz['kolor'] .
'</td><td>'. $wiersz['pojemnosc_silnika'] .
'</td><td>'. $wiersz['przebieg'] .
'</td><td>'. $wiersz['opis'] .
'</td></tr>';
echo '<tr>';
}

echo '</table>';
?>
</div>
