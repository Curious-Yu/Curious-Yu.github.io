var currentTime = new Date().getHours();

console.log(currentTime);

if (document.getElementById("homeBackground")) {
    if (currentTime > 6 && currentTime <= 13) {
        document.getElementById("homeBackground").style.background = "url('/img/morning.png')";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
        document.getElementById("homeBackground").style.backgroundPosition = "right";
    }
    if (currentTime > 13 && currentTime <= 20) {
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
