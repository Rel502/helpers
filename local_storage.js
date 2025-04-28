
/**
 * This function is used to retrieve and parse an array from LocalStorage by key
 * 
 * @param {string} key 
 * @returns
 */
function getArrayFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


/**
 * This function is used to convert an array to JSON and save it in LocalStorage under the given key
 * 
 * @param {string} key 
 * @param {array} array 
 */
function setArrayToLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}