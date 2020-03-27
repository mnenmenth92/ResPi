function alertWhenMassageisRunning() {
  if (massageSequenceRunning) {

    //links[0] -> lumbar.html
    links[0].removeAttribute("href");

    links[0].addEventListener('click', () => {
      console.log("Modal Opened")
      if (massageSequenceRunning) {
        openModal(modal, ui.view_change_info);
      }
    })
  }
}