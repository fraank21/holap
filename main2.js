document.getElementById("si").addEventListener("click", function() {
    document.getElementById("respuestaSi").style.display = "block";
    document.getElementById("respuestaNo").style.display = "none";
    document.getElementById("siguiente2").style.display = "block";
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("respuestaNo").style.display = "block";
    document.getElementById("respuestaSi").style.display = "none";
    document.getElementById("siguiente2").style.display = "none";
});

document.getElementById("siguiente2").addEventListener("click", function() {
    window.location.href = "3.html";
});
