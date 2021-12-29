/* Menu responsive */
var iconMenu = document.getElementById('btn_ouverture');

function menu() {
    var leMenu = document.getElementById('leMenu');
    
    if(leMenu.classList.contains('menu_ferme') == true ) {
        leMenu.classList.replace('menu_ferme','menu_ouvert');
        iconMenu.childNodes.item(1).classList.replace("la-bars", "la-times")
    } else {
        leMenu.classList.replace('menu_ouvert', 'menu_ferme');
        iconMenu.childNodes.item(1).classList.replace("la-times", "la-bars")
    }
}