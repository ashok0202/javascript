let puppyImageElement = document.getElementById("puppyImage");
let puppyLikedElement = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyImageElement.src = puppyLikedElement;
        document.getElementById("likeButton").style.backgroundColor = "#0967d2";
        document.getElementById("likeButton").style.color = "#ffffff";
        document.getElementById("likeIcon").style.color = "#0967d2";
        isImageLiked = true;
    } else {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        document.getElementById("likeButton").style.backgroundColor = "#cbd2d9";
        document.getElementById("likeButton").style.color = "#9aa5b1";
        document.getElementById("likeIcon").style.color = "#cbd2d9";
        isImageLiked = false;
    }
}
