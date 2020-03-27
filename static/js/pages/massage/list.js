let isListOpen;



function createMassageList(data) {

    //Pętla po każdym przycisku załadowanego z JSONa
    data.names.forEach(element => {

        // ============= LISTA ===========
        const item = `
      <span class="custom-option" data-value="${element}">${element}</span>
                  `;
        const position = 'afterbegin';
        list.insertAdjacentHTML(position, item);
    });
}



function massageListHandle(data) {

    createMassageList(data);


    let optionName = document.querySelector('.custom-select__trigger span');
    const listField = document.querySelector('.custom-select-wrapper');

    // wyswietl aktualnie wybrany masaz na belce wyboru z listy
    optionName.textContent = data.current;

    // zaktualizuj aktualnie wybrany masaz 
    activeMassage = optionName.textContent;



    // Event listener na belce listy rozwijanej
    listField.addEventListener('click', function () {

        const listFieldInternal = this.querySelector('.custom-select');


        if (!isMassageRunning) {
            listFieldInternal.classList.toggle('open');
        } else {

            openModal(modal, ui.list_info);

            window.setTimeout(() => {
                closeModal(modal);
            }, 2000);
        }

        isListOpen = listFieldInternal.classList.contains('open');

        isListOpen ? overlay.classList.add('active') : overlay.classList.remove('active');

        overlay.addEventListener('click', () => {

            if (isListOpen) {

                listFieldInternal.classList.remove('open');
                overlay.classList.remove('active');
                isListOpen = false;
            }

        });


    });

    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function () {

            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
            }
            activeMassage = document.querySelector('.custom-option.selected').textContent;
            socket.emit('massage_selected', `${activeMassage}`);
        })
    }
}



// if (isListOpen) {

//     document.addEventListener('click', dupsko);

//     // listFieldInternal.classList.remove('open');
// } else {
//     document.removeEventListener('click', dupsko);
// }