/* Menu responsive */
function menu() {
    var leMenu = document.getElementById('leMenu');
    
    if(leMenu.classList.contains('menu_ferme') == true ) {
        leMenu.classList.replace('menu_ferme','menu_ouvert');
    } else {
        leMenu.classList.replace('menu_ouvert', 'menu_ferme');
    }
}