function init() {
    console.log("läuft...");
}

/**
 * This function is used to toggle the visibility of a button
 * 
 * @param {string} id - the id of the button that shall be toggled
 * @param {string} state - The state that the button should assume
 */
function toggleButton(id, state) {
    let button = document.getElementById(id);
    
    if (state == 'hide') {
        button.classList.add('d-none');
    } else if (state == 'show') {
        button.classList.remove('d-none');
    }
}