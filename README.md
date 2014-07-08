#Kii Javascript SDK 101 (v0.2)

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

##3. PhoneGap Integration
PhoneGap wraps a native web application written in HTML, CSS and JavaScript in a native application of a given platform such as iOS, Android, Windows8 and more.

[Here](http://www.smashingmagazine.com/2014/02/11/four-ways-to-build-a-mobile-app-part3-phonegap/) it is possible to find a more detailed tutorial about hot to build a mobile application using PhoneGap.

###PhoneGap vs Cordova
>PhoneGap is a distribution of Apache Cordova. You can think of Apache Cordova as the engine that powers PhoneGap, similar to how WebKit is the engine that powers Chrome or Safari.

More [here](http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/)

###Prepare the environment
- [Install Node.js](http://nodejs.org/download/)
- Install PhoneGap

    ``` npm install -g cordova ```
- To debug install [Apache Ripple emulator](http://www.raymondcamden.com/index.cfm/2013/11/5/Ripple-is-Reborn)

    ```$ npm install -g ripple-emulator```

- Install Android SDK

####Note for OSX users
To simplify the installation of all the required packages install [Homebrew](http://brew.sh/) and use it to install NodeJs, Android SDK and so on.


###The approach
There are different way to develop a web application and then wrap it into a _PhoneGap container_. The approach chosen in this brief tutorial is developing a web application and finally put it inside of an empty PhoneGap project.

The web application can be developed for instance in an online editor such as [Plunkr](http://plnkr.co/) or in  an editor such as Atom or Sublime and let node serving the page.

### Create a basic Cordova project
####Step 1
Run the command

    $ cordova create kii101phonegap com.kii.phonegap Kii101PhoneGap

This command will create a project named ```Kii101PhoneGap``` in the folder ```kii101phonegap```.

####Step 2
Switch to folder ```kii101phonegap``` and add the supported platforms, for instance iOS and Android

    $ cordova platform add ios
    $ cordova platform add android

####Step 3
Build the application and test it in each platform before added. For iOS

    $ cordova build ios
    $ cordova emulate ios

The application for the iOS platform is built and the emulator is started. Wait some seconds to see appearing the default Cordova project.
For Android

    $ cordova build android
    $ cordova emulate android


####Android Emulation on OSX
- install android skd using homebrew
- check packages on adroid sdk running ```android``` and install the ones you need
- configure an adv running ```android adv``` which is the virtual device to test the app
- hardware acceleration [check](http://stackoverflow.com/questions/10761696/running-the-new-intel-emulator-for-android/10772162#10772162)
- before check the compatibility for the processor [here](http://ark.intel.com/)
- direct link to [download](https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager)
