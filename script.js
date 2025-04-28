function init() {
    console.log("läuft...");
}

/**
 * This function is used to toggle the visibility of a button
 * 
 * @param {string} id - the id of the button that shall be toggled
 * @param {string} state - The state that the button should assume (hide or show)
 */
function toggleButton(id, state) {
    let button = document.getElementById(id);
    
    if (state == 'hide') {
        button.classList.add('d-none');
    } else if (state == 'show') {
        button.classList.remove('d-none');
    }
}


/**
 * This function is used to show or hide a popup
 * 
 * @param {string} popupId - the ID of the popup element
 * @param {string} param - the state that the popup should assume (hide or show)
 */
function togglePopup(popupId, param) {
    if (param == 'show') {
        document.getElementById(popupId).classList.remove('d-none');
    } else {
        document.getElementById(popupId).classList.add('d-none');
    }
}


/**
 * This function is used to close a popup, if user clicks outside the popup content
 * 
 */
document.addEventListener("click", (event) => {
    let window = document.getElementById('popupOverlayBg');

    if (event.target == window) {
        closePopup();
    }
});