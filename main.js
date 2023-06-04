var clicks = 0;
let volumePrinter = document.getElementById("volumenPrinter");
let secondsPrinter = document.getElementById("secondsPrinter");
printVolume(clicks);
printSeconds("initial");

function printVolume(volume) {
    volumePrinter.innerHTML = "Volume: " + volume;
}

function printSeconds(seconds) {
    if (seconds == "initial") {
        secondsPrinter.innerHTML = "Time remaining: 10 seconds";
        return;
    }
    secondsPrinter.innerHTML = "Time remaining: " + seconds + " seconds";
}

function clickCounter() {
    if (clicks >= 100) {
        return;
    } else {
        clicks += 1;
    }
    printVolume(clicks);
}

function timeCounter(seconds) {
    setTimeout(function () {
        if (seconds === 0) {
            printSeconds(seconds);
            clicks = 0;
            printVolume(clicks);
            seconds = 10;
            timeCounter(10);
            return;
        }

        if (seconds === 0) {
            clicks = 0;
            printVolume(clicks);
        }

        timeCounter(seconds - 1);
        printSeconds(seconds);
    }, 1000);
}

timeCounter(10);
