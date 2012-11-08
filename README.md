stupid-chrome-tricks
====================

This project is a collection of fun things you can do with CSS

For starters, try this:

Google Maps Page Curl
---------------------
*At present, this only works on Chrome Canary*

First, make sure you have CSS Shaders enabled:
1. Navigate to chrome://flags
2. Enable CSS Shaders
3. Restart Canary

Now, navigate to http://maps.google.com
Open up the Javascript Console (⌘-Option-J)
Enter the following script:

<code>
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'https://raw.github.com/awgreenblatt/stupid-css-tricks/master/js/css-curl.js';
document.getElementsByTagName("head")[0].appendChild(newScript);
</code>

That just inserted some new CSS rules into the document.

Now, enter the following:

<code>
document.getElementById('map').className += ' css-curl';
</code>

The page should start to curl.
If you want to get the curl to stop, enter the following:

<code>
document.getElementById('map').className = '';
</code>

Btw, you can do this on any element, on any wesbsite.  Just replace 'map' with whatever element ID you want.
Or, if you know that jQuery is loaded on the page, you can do the following to turn the page curl on & off:

$(<selector>).toggleClass('css-curl');

Are we having fun yet?
