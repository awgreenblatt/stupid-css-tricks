var styleElem = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(styleElem);
var s = document.styleSheets[document.styleSheets.length - 1];

var rules = {
    '@-webkit-keyframes curl' : "{from {-webkit-filter: custom(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/vertex/page-curl.vs) mix(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/fragment/page-curl.fs) normal source-atop), 50 50 border-box, transform perspective(1000) scale(1) rotateX(0deg)rotateY(0deg) rotateZ(0deg), curlPosition 0 0, curlDirection 135, curlRadius 0.2, bleedThrough 0.4)} to {-webkit-filter: custom(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/vertex/page-curl.vs) mix(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/fragment/page-curl.fs) normal source-atop), 50 50 border-box, transform perspective(1000) scale(1) rotateX(0deg)rotateY(0deg) rotateZ(0deg), curlPosition 0 0, curlDirection 135, curlRadius 0.1, bleedThrough 0.4)}}",
    '.css-curl' : "{-webkit-animation: curl 3s linear 0s infinite alternate}",
    '@-webkit-keyframes curl' : "{from {-webkit-filter: custom(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/vertex/dissolve.vs) mix(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/fragment/dissolve.fs) multiply source-atop), 50 50 border-box, transform perspective(1000) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg), amount 0)} to {-webkit-filter: custom(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/vertex/dissolve.vs) mix(url(http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/shaders/fragment/dissolve.fs) multiply source-atop), 50 50 border-box, transform perspective(1000) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg), amount 1)}}",
    '.css-dissolve' : "{-webkit-animation: curl 3s linear 0s infinite alternate}"
}

for (var selector in rules) {
    if (s.insertRule) {
        try {
            s.insertRule(selector + rules[selector], s.cssRules.length);
        } catch(e) {}
    }
}
