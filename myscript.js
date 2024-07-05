var icon = document.getElementById('icon');
var logo = document.getElementById('logo');

icon.onclick = function(){
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.src = 'images/sun.ico';
    } else {
        icon.src = 'images/moon.png';
    }
}