var currentTime = new Date().getHours();

console.log(currentTime);

if (document.getElementById("homeBackground")) {
    document.getElementById("homeBackground").style.backgroundSize = "cover";

    if (currentTime > 20) {
        console.log("1");
        document.getElementById("homeBackground").style.background = "url('/img/night.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "left";
    }

    else if (currentTime > 13) {
        console.log("2");
        document.getElementById("homeBackground").style.background = "url('/img/afternoon.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "center";
    }

    else if (currentTime > 6) {
        console.log("3");
        document.getElementById("homeBackground").style.background = "url('/img/morning.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "right";
    }

    else {
        console.log("4");
        document.getElementById("homeBackground").style.background = "url('/img/night.png')";
        document.getElementById("homeBackground").style.backgroundPosition = "left";
    }
};
