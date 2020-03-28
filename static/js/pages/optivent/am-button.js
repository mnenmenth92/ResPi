function handlePlusButton(){
      am-button.addEventListener('touchstart', () => {
        console.log('button is lets say clicked');

      socket.emit('Increment')


  });

}