var currentTime = new Date().getHours();

if (document.getElementById("homeBackground")) {
    if (currentTime >= 6 || currentTime < 14) {
        document.getElementById("homeBackground").style.background = "url('/img/morning.png')";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
        document.getElementById("homeBackground").style.backgroundPosition = "right";
    }
    if (currentTime >= 14 || currentTime < 22) {
        document.getElementById("homeBackground").style.background = "url('/img/afternoon.png')";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
        document.getElementById("homeBackground").style.backgroundPosition = "center";
    }
    else {
        document.getElementById("homeBackground").style.background = "url('/img/night.png')";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
        document.getElementById("homeBackground").style.backgroundPosition = "left";
    }
}

background-position: center
