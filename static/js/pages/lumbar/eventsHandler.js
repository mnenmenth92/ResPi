// Serwer wysyła event, o zatrzymaniu funkcji


socket.on('FunctionTerminated', (serverData) => {


    // If button released, but event came
    if (buttonIDState === `${actualButtonID}_stop`) {

        console.log("Button released but event came");
        document.getElementById(actualButtonID).classList.remove('buttonActiveRed');

    } else {


        switch (actualButtonID) {

            case 'forward':
                showMessage(ui.lumbar_forward_finished);
                break;
            case 'reward':
                showMessage(ui.lumbar_reward_finished);
                break;
            case 'up':
                showMessage(ui.lumbar_up_finished);
                break;
            case 'down':
                showMessage(ui.lumbar_down_finished);
                break;
            case 'one_bladder_inflate':
                showMessage(ui.one_bladder_inflate_finished);
                break;
            case 'one_bladder_deflate':
                showMessage(ui.one_bladder_deflate_finished);
                break;
        }
        console.log('Function Stop !');
        if (document.getElementById(actualButtonID) != null) {
            document.getElementById(actualButtonID).classList.add('buttonActiveRed');
        }

        popup.classList.add('lumbar-info-max');

    }
});