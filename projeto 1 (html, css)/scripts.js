function    leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";

    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia menos";
    }
}

function mostra() {
    document.getElementById('m1').style.display = 'none';
    document.getElementById('m2').style.display = 'block';
}
function mostra_2() {
    document.getElementById('m2').style.display = 'none';
    document.getElementById('m3').style.display = 'block';
    document.getElementById('m4').style.display = 'block';
}
        