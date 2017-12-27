# Notes using Node and Npm

A simple node.js CRUD api application with to learn for a beginner on how node.js  can be used to build a simple web application. it involves
•	organizing the project structure
•	creating routes
•	creating apis using express
•	Integration of all these

This project is re-used and internally used by another anuglar project of mine 
https://github.com/praveenit219/CustomerPanelDashboard
for mongo schema, please refer the models under app-models
for installation on mongo please refer : https://docs.mongodb.com/manual/installation/

pm2 and usage :

as the project is reusable, i use pm2 node application to start and stop easily with a single command. you can even build the node and use pm2 to start , restart, stop and update the project easily. for pm2 details please refer 
https://www.npmjs.com/package/pm2


Disclaimer: This project is to just try and learn using node, also installation of mongo and usage of mongoose in node.js is out of the project scope. pm2 is also out of scope from the project it uses the basic feature of stop and start the node project. the purpose is only to code using node at beginner level by referring sample apps or other free opensource websites.

This project was generated with  using node and express init, mongoose

## Development  and running of server

Run `npm install` for a all latest packages to be download from npm repository.  you can use watch for this to automatically load with latest changes.

## further help 

on npm and node setup and installation please refer
https://nodejs.org/en/download/
https://github.com/nodejs/node/blob/master/README.md

## if you see the node_modules are added .please delete by followin below steps
add 'node_modules' to .gitignore file
execute
1)git rm -r --cached node_modules
2)git commit -m 'Remove the now ignored directory node_modules'
3)git push origin master
