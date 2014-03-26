#Kii Javascript SDK 101 (v0.1)

We want to explore how to create a simple HTML5 mobile application based on the new Kii Javascript SDK. Basically Kii Company offers a rich cloud mobile backend to help the development of a mobile application providing some services out of the box such as user registration and login.

###Quick Links
* <a href="https://developer.kii.com/#/sdks" target="_blank">Kii Cloud SDKs</a>
* <a href="http://documentation.kii.com/references/js/storage/latest/" target="_blank">Kii Javascript SDK doc</a>
* <a href="http://documentation.kii.com/en/guides/javascript/" target="_blank">Kii Javascript Guide</a>
* <a href="https://developer.kii.com/downloads/270/download" target="_blank">Kii Javascript SDK v2.1.1</a>
* Preview of the application in <a href="http://plnkr.co/edit/mSrWyzmmgOeSzCDKRWk8?p=preview" target="_blank">Plunker</a>

###Preview of the application in Plunker
What we are going to implement can be seen and tested in <a href="http://plnkr.co/edit/mSrWyzmmgOeSzCDKRWk8?p=preview" target="_blank">Plunker</a> using username/password test/test or creating a new user.

In order to make it work I had to brutally copy/paste the content of the Kii Javascript SDK in a file because Plunker seems not allowing file upload.

##1. Create a Kii cloud application
First of all create a new Kii application, put the name and select the HTML5 logo. Now download the <a href="https://developer.kii.com/downloads/270/download" target="_blank">Kii Javascript SDK</a>.

##2. Create a signup and signin user interface
In the index.html file a minimal form has been implemented to allow registration and login of a user. Just to make a bit more fancy the UI, Boostrap framework has been added to use some styles.

###Local test with node.js
In order to display and test the application we are going to develop, we have to set up a server to serve files declared in the html page. Download and install <a href="http://nodejs.org/download/" target="_blank">node.js</a>. For instance on mac you can use <a href="http://www.macports.org/" target="_blank">macports</a> or <a href="http://brew.sh/"target="_blank">homebrew</a> then use npm to install connect ``npm install connect``.

Then copy the file ``server.js`` in your project folder and run the command ``node server.js``. Type in a browser tab ``http://127.0.0.1:8081/`` to load the web page.
