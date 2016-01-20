"use strict";angular.module("newAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule"]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controllerAs:"contact"}).when("/gallery",{templateUrl:"views/gallery.html",controllerAs:"gallery"}).otherwise({redirectTo:"/"})}]),angular.module("newAppApp").controller("MainCtrl",["$scope","localStorageService",function(a,b){var c=b.get("todos");a.todos=c||[],a.$watch("todos",function(){b.set("todos",a.todos)},!0),a.addTodo=function(){a.todos.push(a.todo),a.todo=""},a.removeTodo=function(b){a.todos.splice(b,1)}}]),angular.module("newAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("newAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<!-- <p>This is the about view.\n\n\nWhat does this view do?\n\n\n</p>\n\n--><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <title>MapIDcc050e32aa3</title> <meta http-equiv="content-type" content="text/html;charset=utf-8"> <!-- \n<style type="text/css">\nbody {\n  color: #444444;\n  font-family: Arial,Helvetica,sans-serif;\n  font-size: 75%;\n  }\n  a {\n  color: #4D87C7;\n  text-decoration: none;\n}\n</style>\n--> </head> <body> <!-- Map generated in R 3.2.2 by googleVis 0.5.10 package --> <!-- Fri Jan 15 13:50:00 2016 --> <!-- jsHeader --> <script type="text/javascript">// jsData \nfunction gvisDataMapIDcc050e32aa3 () {\nvar data = new google.visualization.DataTable();\nvar datajson =\n[\n [\n 10.8,\n-35.5,\n"Tropical Depression<BR>Pressure=1010<BR>Speed=25" \n],\n[\n 11.2,\n-37.4,\n"Tropical Depression<BR>Pressure=1009<BR>Speed=30" \n],\n[\n 11.7,\n-39.6,\n"Tropical Depression<BR>Pressure=1008<BR>Speed=30" \n],\n[\n 12.3,\n-42,\n"Tropical Storm<BR>Pressure=1006<BR>Speed=35" \n],\n[\n 13.1,\n-44.2,\n"Tropical Storm<BR>Pressure=1003<BR>Speed=35" \n],\n[\n 13.6,\n-46.2,\n"Tropical Storm<BR>Pressure=1002<BR>Speed=40" \n],\n[\n 14.1,\n-48,\n"Tropical Storm<BR>Pressure=1001<BR>Speed=45" \n],\n[\n 14.6,\n-49.9,\n"Tropical Storm<BR>Pressure=1000<BR>Speed=45" \n],\n[\n 15.4,\n-51.8,\n"Tropical Storm<BR>Pressure=1000<BR>Speed=45" \n],\n[\n 16.3,\n-53.5,\n"Tropical Storm<BR>Pressure=1001<BR>Speed=45" \n],\n[\n 17.2,\n-55.3,\n"Tropical Storm<BR>Pressure=1002<BR>Speed=45" \n],\n[\n 18,\n-56.9,\n"Tropical Storm<BR>Pressure=1005<BR>Speed=45" \n],\n[\n 18.8,\n-58.3,\n"Tropical Storm<BR>Pressure=1007<BR>Speed=45" \n],\n[\n 19.8,\n-59.3,\n"Tropical Storm<BR>Pressure=1011<BR>Speed=40" \n],\n[\n 20.7,\n-60,\n"Tropical Storm<BR>Pressure=1013<BR>Speed=40" \n],\n[\n 21.7,\n-60.7,\n"Tropical Storm<BR>Pressure=1015<BR>Speed=40" \n],\n[\n 22.5,\n-61.5,\n"Tropical Storm<BR>Pressure=1014<BR>Speed=40" \n],\n[\n 23.2,\n-62.4,\n"Tropical Storm<BR>Pressure=1014<BR>Speed=45" \n],\n[\n 23.9,\n-63.3,\n"Tropical Storm<BR>Pressure=1010<BR>Speed=45" \n],\n[\n 24.4,\n-64.2,\n"Tropical Storm<BR>Pressure=1007<BR>Speed=50" \n],\n[\n 24.8,\n-64.9,\n"Tropical Storm<BR>Pressure=1004<BR>Speed=50" \n],\n[\n 25.3,\n-65.9,\n"Tropical Storm<BR>Pressure=1000<BR>Speed=55" \n],\n[\n 25.6,\n-67,\n"Tropical Storm<BR>Pressure=994<BR>Speed=60" \n],\n[\n 25.8,\n-68.3,\n"Hurricane<BR>Pressure=981<BR>Speed=70" \n],\n[\n 25.7,\n-69.7,\n"Hurricane<BR>Pressure=969<BR>Speed=80" \n],\n[\n 25.6,\n-71.1,\n"Hurricane<BR>Pressure=961<BR>Speed=90" \n],\n[\n 25.5,\n-72.5,\n"Hurricane<BR>Pressure=947<BR>Speed=105" \n],\n[\n 25.4,\n-74.2,\n"Hurricane<BR>Pressure=933<BR>Speed=120" \n],\n[\n 25.4,\n-75.8,\n"Hurricane<BR>Pressure=922<BR>Speed=135" \n],\n[\n 25.4,\n-77.5,\n"Hurricane<BR>Pressure=930<BR>Speed=125" \n],\n[\n 25.4,\n-79.3,\n"Hurricane<BR>Pressure=937<BR>Speed=120" \n],\n[\n 25.6,\n-81.2,\n"Hurricane<BR>Pressure=951<BR>Speed=110" \n],\n[\n 25.8,\n-83.1,\n"Hurricane<BR>Pressure=947<BR>Speed=115" \n],\n[\n 26.2,\n-85,\n"Hurricane<BR>Pressure=943<BR>Speed=115" \n],\n[\n 26.6,\n-86.7,\n"Hurricane<BR>Pressure=948<BR>Speed=115" \n],\n[\n 27.2,\n-88.2,\n"Hurricane<BR>Pressure=946<BR>Speed=115" \n],\n[\n 27.8,\n-89.6,\n"Hurricane<BR>Pressure=941<BR>Speed=120" \n],\n[\n 28.5,\n-90.5,\n"Hurricane<BR>Pressure=937<BR>Speed=120" \n],\n[\n 29.2,\n-91.3,\n"Hurricane<BR>Pressure=955<BR>Speed=115" \n],\n[\n 30.1,\n-91.7,\n"Tropical Storm<BR>Pressure=973<BR>Speed=80" \n],\n[\n 30.9,\n-91.6,\n"Tropical Storm<BR>Pressure=991<BR>Speed=50" \n],\n[\n 31.5,\n-91.1,\n"Tropical Depression<BR>Pressure=995<BR>Speed=35" \n],\n[\n 32.1,\n-90.5,\n"Tropical Depression<BR>Pressure=997<BR>Speed=30" \n],\n[\n 32.8,\n-89.6,\n"Tropical Depression<BR>Pressure=998<BR>Speed=30" \n],\n[\n 33.6,\n-8.4,\n"Tropical Depression<BR>Pressure=999<BR>Speed=25" \n],\n[\n 34.4,\n-86.7,\n"Tropical Depression<BR>Pressure=1000<BR>Speed=20" \n],\n[\n 35.4,\n-84,\n"Tropical Depression<BR>Pressure=1000<BR>Speed=20" \n] \n];\ndata.addColumn(\'number\',\'Latitude\');\ndata.addColumn(\'number\',\'Longitude\');\ndata.addColumn(\'string\',\'Tip\');\ndata.addRows(datajson);\nreturn(data);\n}\n \n// jsDrawChart\nfunction drawChartMapIDcc050e32aa3() {\nvar data = gvisDataMapIDcc050e32aa3();\nvar options = {};\noptions["showTip"] = true;\noptions["showLine"] = false;\noptions["enableScrollWheel"] = true;\noptions["mapType"] = "satellite";\noptions["useMapTypeControl"] = true;\noptions["width"] =    800;\noptions["height"] =    400;\n\n\n    var chart = new google.visualization.Map(\n    document.getElementById(\'MapIDcc050e32aa3\')\n    );\n    chart.draw(data,options);\n    \n\n}\n  \n \n// jsDisplayChart\n(function() {\nvar pkgs = window.__gvisPackages = window.__gvisPackages || [];\nvar callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];\nvar chartid = "map";\n  \n// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)\nvar i, newPackage = true;\nfor (i = 0; newPackage && i < pkgs.length; i++) {\nif (pkgs[i] === chartid)\nnewPackage = false;\n}\nif (newPackage)\n  pkgs.push(chartid);\n  \n// Add the drawChart function to the global list of callbacks\ncallbacks.push(drawChartMapIDcc050e32aa3);\n})();\nfunction displayChartMapIDcc050e32aa3() {\n  var pkgs = window.__gvisPackages = window.__gvisPackages || [];\n  var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];\n  window.clearTimeout(window.__gvisLoad);\n  // The timeout is set to 100 because otherwise the container div we are\n  // targeting might not be part of the document yet\n  window.__gvisLoad = setTimeout(function() {\n  var pkgCount = pkgs.length;\n  google.load("visualization", "1", { packages:pkgs, callback: function() {\n  if (pkgCount != pkgs.length) {\n  // Race condition where another setTimeout call snuck in after us; if\n  // that call added a package, we must not shift its callback\n  return;\n}\nwhile (callbacks.length > 0)\ncallbacks.shift()();\n} });\n}, 100);\n}\n \n// jsFooter</script> <!-- jsChart --> <script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMapIDcc050e32aa3"></script> <!-- divChart --> <div id="MapIDcc050e32aa3" style="width: 800; height: 400"> </div> </body> </html>'),a.put("views/contact.html",'<!DOCTYPE html> <html lang="en-US"> <body> <div ng-app=""> <p>Enter your name please: <input type="text" ng-model="name"></p> <h1>Your name is {{name}}</h1> </div> </body> </html>'),a.put("views/gallery.html",'<!DOCTYPE html> <html lang="en-US"> <body> <div ng-app=""> <p>Enter your last name please: <input type="text" ng-model="name"></p> <h1>Your name is {{name}}</h1> </div> </body> </html>'),a.put("views/main.html",'<div class="container"> <p>My todos</p> <form role="form" ng-submit="addTodo()"> <div class="row"> <div class="input-group"> <input type="text" ng-model="todo" placeholder="What needs to be done?" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="add"> </span> </div> </div> </form> <p></p> <div ui-sortable ng-model="todos"> <p class="input-group" ng-repeat="todo in todos" style="padding:5px; 10px; cursor: move"> <input type="text" ng-model="todo" class="form-control"> <span class="input-group-btn"> <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button> </span> </p> </div> </div>')}]);