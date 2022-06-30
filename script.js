let a = document.querySelector('a');

a.onclick = function() {
    let mySrc = a.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      a.setAttribute('class','green');
    } else {
      a.setAttribute('class','green');
    }
}
