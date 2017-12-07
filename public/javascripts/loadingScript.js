$(document).ready(function () {
    $.getJSON("/donuts", function (data) {
        // get all the data from the json file (which we recive at the given url) 
        // once you get the data compile a string that includes html table tags, then once
        // you have completed the string inject that string into the table on our html
        var donutTable = '';
        $.each(data, function (key, val) {
            donutTable += '<tr>';
            donutTable += '<td>' + key + '</td>';
            donutTable += '<td>' + this.name + '</td>';
            donutTable += '<td>' + this.price + '</td>';
            donutTable += '<td>' + this.calories + '</td>';
            // donutTable += '<td>' + this.id + '</td>';
            donutTable += '</tr>';

        });
        $('table tbody').append(donutTable);
    });
});