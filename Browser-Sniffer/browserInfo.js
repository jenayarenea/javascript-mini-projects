window.onload = function getBrowserInfo() {
    var browserVersion = parseFloat(navigator.appVersion);
    var browserWidth = window.innerWidth;
    var browserHeight = window.innerHeight;
    var browserArray = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
    var browserName, userAgent = navigator.userAgent;
    for(var i=0; i < browserArray.length; i++){
        if( userAgent.indexOf(browserArray[i]) > -1 ){
           browserName = browserArray[i];
           break;
        }
    }
   if(browserName == "MSIE" || browserName == "Trident" || browserName == "Edge"){
    browserName = "Internet Explorer";
   }

    document.write("You are using version " + browserVersion + " of the " + browserName + "   browser to view this page in a browser whose inner window is " + browserWidth + " pixels wide and " + browserHeight + " pixels tall.");
}