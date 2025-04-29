let isLiked = false;


/** Toggles the liked state, saves it to local storage, and updates the icon. */
function toggleLike() {
    isLiked = !isLiked;

    setArrayToLocalStorage('isLiked', isLiked);
    setLikeIcon();
}


/** Sets the like icon based on the liked state from local storage. */
function setLikeIcon() {
    let likeIcon = document.getElementById('likeIcon');

    isLiked = getArrayFromLocalStorage('isLiked');

    if (isLiked) {
        likeIcon.src = "./assets/img/icons/isLiked.png";
    } else {
        likeIcon.src = "./assets/img/icons/isntLiked.png";
    }
}
