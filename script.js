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
 * @param {string} state - the state that the popup should assume (hide or show)
 */
function togglePopup(popupId, state) {
    if (state == 'show') {
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


/**
 * This function is used to toggle the visibility of the header
 * 
 * @param {string} state - the state that the header should assume (hide or show)
 */
function toggleHeader(state) {
    if (state == 'show') {
        document.querySelector('header').classList.remove('d-none');
    } else {
        document.querySelector('header').classList.add('d-none');
    }
}


/**
 * This function is used to toggle the visibility of the scrollbar of the body element
 * 
 * @param {string} state - the state that the scrollbar should assume (hide or show)
 */
function toggleScrollbar(state) {
    if (state == 'show') {
        document.querySelector('body').classList.remove('overflow-hidden');
    } else {
        document.querySelector('body').classList.add('overflow-hidden');
    }
}