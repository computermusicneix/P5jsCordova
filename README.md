# P5jsCordova
Simple instructions for use P5.js and P5.sound.js on Apache Cordova

Try the system:

npm install -g cordova

cordova create MyApp

cd MyApp

cordova platform add browser

cordova run browser

------------------------------------------------

ADD JAVA_HOME:

sudo gedit .bashrc

add this lines on the end

export JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64/"
export PATH=$PATH:$JAVA_HOME/bin

reboot

--------------------------------------------------

Setup GRADLE

download gradle-6.7.1-bin.zip
on https://gradle.org/install/

sudo gedit .bashrc

add this line on the end:

$ export PATH=$PATH:/opt/gradle/gradle-6.7.1/bin


/opt/gradle refers to your downloads folder.

-----------------------------------------------------

Run on android

Connect your android device with usb and USB depuration and file transfer

cd MyApp
cordova run android

or build debug apk

cordova build android

-------------------------------------------------------

Make the p5.sound app

- Copy p5.js and p5.sound.js on /MyApp/www/js
- Copy index.html to /MyApp/www/js/index.html 
- Copy sketch.js to /MyApp/www/js
- Add audio to /MyApp/www/assets

Achtung!! The preload method from P5 don't work.

-------------------------------------------------------------

Use capacitor: https://capacitorjs.com/

cd to project

-$ npm install @capacitor/core @capacitor/cli
-$ npx cap init
-$ npx cap add android

npx cap open android 

to launch Android Studio






