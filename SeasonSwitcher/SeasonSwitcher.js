let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");
let seasonSmallImage1 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let seasonSmallImage2 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png"
let seasonSmallImage3 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let seasonSmallImage4 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let seasonSmallImage5 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let seasonSmallImage6 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let seasonSmallImage7 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let seasonSmallImage8 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springButton() {
    seasonSmallImageElement.src = seasonSmallImage1;
    seasonMediumImageElement.src = seasonSmallImage2;
}

function summerButton() {
    seasonSmallImageElement.src = seasonSmallImage3;
    seasonMediumImageElement.src = seasonSmallImage4;
}

function autumnButton() {
    seasonSmallImageElement.src = seasonSmallImage5;
    seasonMediumImageElement.src = seasonSmallImage6;
}

function winterButton() {
    seasonSmallImageElement.src = seasonSmallImage7;
    seasonMediumImageElement.src = seasonSmallImage8;
}
