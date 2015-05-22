This sample has been created in the goal of allowing adal.js and angular-adal.js to work in a sandboxed environment.
The iframe is sandboxed with the following restrictions "allow-scripts allow-forms allow-same-origin ms-allow-popups allow-popups"

To reproduce the problem we must have two different origins
    - one for the "parent environment". Think for example outlook web access that is hosted at https://office365.outlook.com
    - one for the "sandboxed environment", which is our app that is hosted at https://whateverwebsiter.azurewebsite.net

Therefore create two websites (on different port of course).
Visit what will be the sandboxed iframe at http://localhost:XXXX/sandboxedSample/sandboxed.html

Then in the file sandboxer.html, for the source of the iframe put the url above...
visit the sandboxer page at http://localhost:YYYY/sandboxedSample/sandboxer.html

Update your Azure AD app configuration to support as valid origin.
http://localhost:XXXX/sandboxedSample/sandboxed.html

Update the hardcorded endpoints in App.module.js