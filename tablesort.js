$(document).ready(function() {
    $("#myTable").tablesorter();
    $("#price_ascending").click(function() {
        // set sorting column and direction, this will sort on the first and third column the column index starts at zero
        var sorting = [[0,3]];
        // sort on the first column
        $("#myTable").trigger("sorton",[sorting]);
        // return false to stop default link action
        return false;
    });
});
