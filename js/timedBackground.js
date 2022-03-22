var currentTime = new Date().getHours();

console.log(currentTime);

if (document.getElementById("homeBackground")) {


    if (currentTime > 20) {
        document.getElementById("homeBackground").style.backgroundImage = "url('/img/night.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "center";
    }

    else if (currentTime > 13) {
        document.getElementById("homeBackground").style.backgroundImage = "url('/img/afternoon.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "center";
    }

    else if (currentTime > 6) {
        document.getElementById("homeBackground").style.backgroundImage = "url('/img/morning.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "right";
    }

    else {
        document.getElementById("homeBackground").style.backgroundImage = "url('/img/night.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "center";
    }
};
