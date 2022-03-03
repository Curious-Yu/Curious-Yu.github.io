var currentTime = new Date().getHours();

console.log(currentTime);

if (document.getElementById("homeBackground")) {


    if (currentTime > 20) {
        document.getElementById("homeBackground").style.background = "url('/img/night.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "left";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
    }

    else if (currentTime > 13) {
        document.getElementById("homeBackground").style.background = "url('/img/afternoon.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "center";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
    }

    else if (currentTime > 6) {
        document.getElementById("homeBackground").style.background = "url('/img/morning.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "right";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
    }

    else {
        document.getElementById("homeBackground").style.background = "url('/img/night.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "left";
        document.getElementById("homeBackground").style.backgroundSize = "cover";
    }
};
