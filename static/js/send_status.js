//const socket = io.connect();
const title_ind = document.querySelector('.title');
var title = new String("AC");
var AC_found = 0
var TV_found = 0
title = title_ind.textContent
AC_found = title.search("AC")
TV_found = title.search("TV")

// ask for status e.g. after site change or reload
console.log(title)
if (AC_found >= 0) {
  console.log('AC')
  socket.emit('send_status_ac');
}
else if (TV_found >= 0)  {
  console.log('TV')
    socket.emit('send_status_tv');
}
else{
  console.log('other site')
}


