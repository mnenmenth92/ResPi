function refreshActualMassage() {
    activeMassage = document.querySelector('.custom-option.selected').textContent;
    console.log(`Active Massage : ${activeMassage}`);
}

function actualPressureRefresh(pressure) {
    pressure.textContent = `${serverData.pressure} hPa`;
}



function restore_default_view() {
    closeModal(modal);
    runButton.textContent = "RUN";
    runButton.classList.remove('waitButton');
    runButton.classList.remove('activeButton');
    links[0].setAttribute("href", "/lumbar.html");
    links[1].setAttribute("href", "/massage.html");
    links[2].setAttribute("href", "/optivent.html");
}

function alertWhenMassage() {

    menuButtons.forEach((element, index) => {

        if (index <= 1) { // Wziety pod uwage tylko lumbar
            element.addEventListener('click', () => {
                console.log(`ALERT: ${isMassageRunning}`);
                console.log("Modal Opened")
                if (isMassageRunning) openModal(modal, ui.view_change_info);
            })
        }
    })
}

function xor(a, b) {

    return (a && !b) || (!a && b);

}

function handleButtonAfterRestart() {

    // console.log(`massageSequenceRunning: ${massageSequenceRunning}`);
    // console.log(`massageStatus: ${massageSequenceActive}`);
    // console.log(`AND: ${massageSequenceRunning && massageSequenceActive}`);
    // console.log(`XOR: ${xor(massageSequenceActive, massageSequenceRunning)}`);

    if (massageSequenceRunning && massageSequenceActive) {
        isMassageRunning = true;
        runButton.classList.add('activeButton');
        runButton.textContent = "STOP";

        for (var i = 0; i < links.length - 1; i++) {
            links[i].removeAttribute("href");
        }

    } else if (xor(massageSequenceActive, massageSequenceRunning)) {
        isMassageRunning = true;

        for (var i = 0; i < links.length - 1; i++) {
            links[i].removeAttribute("href");
        }

        runButton.classList.remove('activeButton');
        runButton.classList.add('waitButton');
        runButton.textContent = "WAIT FOR FINISH";
    } else {
        isMassageRunning = false;

        runButton.classList.remove('activeButton');
    }
}