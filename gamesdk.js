/**
 * Created by a1 on 2016/12/13.
 */

var curTime=0;
var url ="//imasdk.googleapis.com/js/sdkloader/outstream.js";
var script = document.createElement("script");
script.src = url;
document.getElementsByTagName("body")[0].appendChild(script);
var adHeight =  window.innerHeight;
var adWidth =  document.body.clientWidth;
var BigadContainer = document.createElement('DIV');
BigadContainer.id = 'BigadContainer';
BigadContainer.style.width = adWidth+"px";
BigadContainer.style.height = adHeight+"px";
BigadContainer.style.position = "absolute";
BigadContainer.style.top = 0;
BigadContainer.style.left = "100%";
BigadContainer.style.zIndex = 99999999999;
BigadContainer.style.backgroundColor = "#000";
document.getElementsByTagName("body")[0].appendChild(BigadContainer);
var adContainer = document.createElement('DIV');
adContainer.style.width = adWidth+"px";
adContainer.style.height = adHeight+"px";
adContainer.id = 'adContainer';
BigadContainer.appendChild(adContainer);
adContainer.style.position = "absolute";
adContainer.style.top = 0;
adContainer.style.left = 0;
adContainer.style.zIndex = 9999999999;
var googleVideoAd;
var adTagUrl;
/**
 * Initialize the preloader once the page has loaded.
 */
window.onload = function () {
    adTagUrl = 'http://googleads.g.doubleclick.net/pagead/ads?ad_type=video_image_text&client=ca-video-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&adtest=on';

    var adContainer = document.getElementById('adContainer');
    if (!adContainer) {
        adContainer = document.createElement('DIV');
        adContainer.id = 'adContainer';

    }
    googleVideoAd = new google.outstream.AdsController(
        adContainer,
        onAdLoaded,
        onDone);
    //  document.getElementById('requestAndShow').disabled = false;
    setTimeout(dp_share(),3000)

};

function requestAds() {
    googleVideoAd.initialize();

    // Request ads
    googleVideoAd.requestAds(adTagUrl);
}

/*
 * Callback for when ad has completed loading.
 */
function onAdLoaded() {
    // Play ad
    googleVideoAd.showAd();
}

/*
 * Callback for when ad playback has completed.
 */
function onDone() {
    // Start your game here
   // BigadContainer.style.display = "none";
    BigadContainer.style.left = "100%";
    BigadContainer.style.transition =  'left 0.8s';
    BigadContainer.style.mozTransition =  'left 0.8s';
    BigadContainer.style.webkitTransition =   'left 0.8s';
    BigadContainer.style.oTransition =   'left 0.8s';
}



function dp_share(){
    if(1 * new Date - curTime < 60000){
        console.error("Exceed maximum display times within 60 second");
    }else{
        requestAds(true);
        BigadContainer.style.display = "block";
        BigadContainer.style.left = 0;
        BigadContainer.style.transition =  'left 0.8s';
        BigadContainer.style.mozTransition =  'left 0.8s';
        BigadContainer.style.webkitTransition = 'left 0.8s';
        BigadContainer.style.oTransition = 'left 0.8s';
        curTime = 1* new Date;
    }
}

