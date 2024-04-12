// Szymon Więzowski

$(document).ready(function() {
    function zrobSzachy() {
        var plansza = $("#plansza");

        for (var row = 0; row < 8; row++) {
            for (var col = 0; col < 8; col++) {
                var colorClass = (row + col) % 2 === 0 ? "white" : "black";

                var cell = $("<div>").addClass(colorClass);
                plansza.append(cell);
            }
        }
    }
    zrobSzachy();
});
