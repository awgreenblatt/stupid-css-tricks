stupid-css-tricks
====================

This project is a collection of fun things you can do with CSS

For starters, try this:

Page Curl & Dissolve
--------------------
**At present, this only works on Chrome Canary!**

First, make sure you have CSS Shaders enabled:

* Navigate to chrome://flags
* Enable CSS Shaders
* Restart Canary

Now, navigate to http://maps.google.com, open up the Javascript Console (⌘-Option-J) and enter the following script:

    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://raw.github.com/awgreenblatt/stupid-css-tricks/master/js/shader-rules.js';
    document.getElementsByTagName("head")[0].appendChild(newScript);

That just inserted some new CSS rules into the document.

Now, enter the following:

    document.getElementById('map').className += ' css-curl';

The page should start to curl.
If you want to get the curl to stop, enter the following:

    document.getElementById('map').className = '';

Dissolve:

    document.getElementById('map').className = ' css-dissolve';

Btw, you can do this on any element, on any wesbsite.  Just replace 'map' with whatever element ID you want.
Or, if you know that jQuery is loaded on the page, you can do the following to turn the page curl on & off:

    $(<selector>).toggleClass('css-curl');

Are we having fun yet?
