#AngularSeed-MVCDemo

##Synopsis

This project demonstrates using AngularJS Seed as a base. AngularJS makes GET and POST requests to the included WebAPI controller.

How The App Works

###API

My first task was to get the API working and ready to serve data. I created a model in /Areas to contain the EmployeeModel. The WebAPI controller named Employees was created as an EndPoint. This EndPoint contains GET and UPDATE methods for the UI. There is no DB so I mock the data as a List of EmployeeModel with hard coded values. The UPDATE() recieves a JSON string that's automagically binded to the EmployeeModel by the default data binder. For demo purposes, the received data is displayed in your VS debug console and returns HttpStatusCode.OK. If there's an error, it sends out HttpStatusCode.BadRequest.

###UI

The UI is based on Twitter Bootstrap for the layout and AngularJS to handle the data transfer. I used a 3rd-party directive to handle displaying the data in a grid and allowing visitor to update the Employee Grid inline. There's aditional logic/code in this directive so that it calls my Service to send any Employee changes/updates to the API backend. The code I added starts on Line 92 in UI\app\bower_components\simple-grid\src\simple-grid.js. The AngularJS Service/Factory contains $http.GET and $http.POST methods which is injected into the AngularJS View1Ctrl Controller and the simple-grid directive respectfully for Seperation-Of-Concerns. The Grid is populated with the Employee data by the Service $http.GET during the initial page load.

##Installation

This repo has an Angular 1.5.11 app (/UI), and ASP.NET API app (/API).

1. Fork or download the code from this repository.
1. Open the sln file in the /API directory in Visual Studio and start the project in Debug mode.
1. Get the Angular application working.
    1. Be sure NPM and Bower are installed
        * Type `npm` at the command-line. If you don't have it, get it here: [NPM](https://www.npmjs.org/)
        * Type `bower` at the command-line. If you don't have it get it here: [Bower](http://bower.io/)
    1. Navigate to the /UI directory.    
    1. Run `npm start` to start the UI 
 1. Navigate to http://localhost:8000/

You should see two employees listed in a grid which means everything is working.

##Contributors

Marcell Penn

