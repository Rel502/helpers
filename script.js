function init() {
    console.log("läuft...");
}


/**
 * This function is used to load external HTML files into elements that have the 'w3-include-html'
 * attribute. It fetches the specified files and replaces the innerHTML of the elements with the
 * fetched content.
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
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


/**
 * This function is used to convert the first character of a string to upper case
 * 
 * @param {string} string 
 * @returns - the converted string with first character in upper case
 */
function convertFirstLetterUp(string) {
    let stringInUpperCase = string.toUpperCase();

    let firstLetter = stringInUpperCase.slice(0, 1);
    let elseLetters = string.slice(1);

    return firstLetter + elseLetters;
}


/**
 * This function is used to show a loading spinner and enables the body scrollbar
 * 
 */
function showSpinner() {
    let container = document.getElementById('loadingSpinner');
    container.classList.remove('d-none');
    toggleScrollbar('hide');
}


/**
 * This function is used to hide a loading spinner and disables the body scrollbar
 * 
 */
function hideSpinner() {
    let container = document.getElementById('loadingSpinner');
    container.classList.add('d-none');
    toggleScrollbar('show');
}


/**
 * Formats a number to a price string with two decimals and a comma as decimal separator.
 * 
 * @param {number} number 
 * @returns the price as a string
 */
function formattPrice(number) {
    let fixedNumber = number.toFixed(2);
    return fixedNumber.replace('.', ',');
}