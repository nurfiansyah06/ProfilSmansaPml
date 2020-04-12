function kontak() {
        var x = document.getElementById('profil');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }

function sjrh() {
    var x = document.getElementById('sejarah',);
    x.scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function visimis() {
    var x = document.getElementById('vismis');
    x.scrollIntoView();
}

function home() {
    var x = document.getElementById('hm');
    x.scrollIntoView();
}

function kepsek() {
    var x = document.getElementById('kpsk');
    x.scrollIntoView();
}