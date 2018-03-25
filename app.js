/*var json = require('json');
var file = require('file-system');

fs.writeFile('act.json');
*/
/****
***** Create a json file
*****/
var fs = require('fs');

/*var obj = []
obj.push(
    {
        year:2018,
        month:3,
        day:15,
        note:'Workout'
    },
    { 
        year:2018,
        month:3,
        day:16,
        note:'Run'
    },
    { 
        year:2018,
        month:2,
        day:1,
        note:'Run'
    }
);
var json = JSON.stringify(obj);
var fs = require('fs');
fs.writeFile('act.json', json, 'utf8', function(){});*/
//-------------------------------------------------


//--------------------Calendar test----------------------------

var calendar = require('./calendar');
//console.log(calendar.module.dayArr); 
//console.log(calendar.module.getDay(2018,11,1))
//console.log(calendar.module.dailyActivities);
/*console.log(calendar.module.daysofMonth(2018,1));
console.log(calendar.module.listDaysofMonth(2018,1));
console.log(calendar.module.restDaysFromLastMonth(2018,1,1));
console.log(calendar.module.getDayIndex(2018,1,2));
console.log(calendar.module.listDaysBesidesCurMonth(2018,1,2));*/
//console.log(calendar.module.insertActivities([{"year":2018,"month":3,"day":15,"note":"Workout"}]));
 jsonObj = require("./act.json");

///-----------------run test server
var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  /*res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    //'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    //'\n\n<h1>Euro 2012 teams</h1>\n' + 
    '<div id="content">'+
    //calendar.module.buildHtml(2018)+
    calendar.module.insertActivities([{"year":2018,"month":3,"day":15,"note":"Workout"}])+
    //calendar.module.test()+
    '</div>' + 
    '\n\n');*/

    //res.write(calendar.module.insertActivities([{"year":2018,"month":3,"day":15,"note":"Workout"}]));
    res.write(calendar.module.insertActivities(jsonObj));
  res.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');
