var menuOpen = false;

function rotateButton() {
  if (menuOpen) {
    document.getElementById('menuButton').style.transform = 'rotate(0deg)';
    document.getElementById('menu').style.left = '-250px';
    menuOpen = false;
  } else {
    document.getElementById('menuButton').style.transform = 'rotate(135deg)';
    document.getElementById('menu').style.left = '0';
    menuOpen = true;
  }
}
