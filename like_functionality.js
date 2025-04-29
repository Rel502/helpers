let isLiked = false;


function toggleLike() {
    isLiked = !isLiked;

    setArrayToLocalStorage('isLiked', isLiked);
    setLikeIcon();
}


function setLikeIcon() {
    let likeIcon = document.getElementById('likeIcon');

    isLiked = getArrayFromLocalStorage('isLiked');

    if (isLiked) {
        likeIcon.src = "./assets/img/icons/isLiked.png";
    } else {
        likeIcon.src = "./assets/img/icons/isntLiked.png";
    }
}