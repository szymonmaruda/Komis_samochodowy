<?php
	require('conn.php');
	$strona = $_GET['page'];
	$nazwaFormularza = "";
	switch ($strona) {
		case 'samochody':
		$nazwaFormularza = "carForm";
		break;
		case 'klienci':
		$nazwaFormularza = "customers";
		break;
		case 'pracownicy':
		$nazwaFormularza = "employes";
		break;
		default:
		$nazwaFormularza = "carForm";
	}
	$select = "SELECT * FROM Samochody";
	$stmt = $dbh->prepare($select);
	$stmt->execute();
	$wiersze = Array();
	$stmt->setFetchMode(PDO::FETCH_ASSOC);
	$result = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html>

<head>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="jquery.tablesorter/themes/blue/style.css">
	<!-- Latest compiled and minified JavaScript -->
	<meta charset="utf-8" />
	<script type="text/javascript" src="jquery-3.2.0.min.js"></script>
	<script type="text/javascript" src="jquery.tablesorter/jquery-latest.js"></script>
	<script type="text/javascript" src="jquery.tablesorter/jquery.tablesorter.js"></script>
	<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	-->
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" charset="utf8" src="validator.js"></script>


</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col-12" style="text-align:center;">
				<div class="container">Nagłówek</div>
			</div>
		</div>
		<div class="row">

			<?php include_once  $nazwaFormularza . ".php"; ?>
		</div>
		<div class="row">
			<div class="col-12" style="text-align:center;">
				Stopka
			</div>
		</div>
	</div>
	<script type="text/javascript" charset="utf8" src="tablesort.js"></script>
	<script type="text/javascript" charset="utf8" src="charCounter.js"></script>
</body>

</html>
