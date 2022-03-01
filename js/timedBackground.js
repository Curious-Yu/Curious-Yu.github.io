var currentTime = new Date().getHours();

if (document.getElementById("homeBackground")) {
    if (currentTime >= 6 && currentTime < 14) {
        document.getElementById("homeBackground").style.background = "url('/img/morning.png')";
    }
    if (currentTime >= 14 && currentTime < 22) {
        document.getElementById("homeBackground").style.background = "url('/img/afternoon.png')";
    }
    else {
        document.getElementById("homeBackground").style.background = "url('/img/night.png')";
    }
}
