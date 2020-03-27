function runButtonHandle() {

    console.log(`IsMassageRUnning: ${isMassageRunning}`)

    //==================================================================================
    //========================= Obsługa przycisku RUN ==================================
    //==================================================================================

    // Jeśli masaż zostaje wybrany i naciśnięty przycisk RUN - zostaje wysłana komenda
    // do backendu odpowiadająca nazwie przycisku z masażem który jest aktywny
    //----------------------------------------------------------------------------------
    runButton.addEventListener('touchstart', () => {
        if (!isListOpen) {

            if (!isMassageRunning) {

                isMassageRunning = true;

                runButton.textContent = "STOP";
                runButton.classList.add('activeButton');

                for (var i = 0; i < links.length - 1; i++) {
                    links[i].removeAttribute("href");
                }

                socket.emit('run_sequence', {
                    "seq_type": `${activeMassage}`
                });

            } else {
                runButton.textContent = "WAIT FOR FINISH";
                runButton.classList.remove('activeButton');
                runButton.classList.add('waitButton');
                socket.emit('terminate_massage');

            }
        }
    });
}