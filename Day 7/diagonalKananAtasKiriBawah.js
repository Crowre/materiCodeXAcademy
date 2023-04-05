const diagonal = (num) => {
    awal = 0;
    for (var i = num; i > 0; i--) {
        var row = '';
        for (var j = 0; j < i - 1; j++) {
            row += ' ';
        }
        row += awal + 2;
        console.log(row);
    }
}
diagonal(7)
