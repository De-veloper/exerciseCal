/*var json = require('json');
var file = require('file-system');

fs.writeFile('act.json');
*/
var fs = require('fs');
var obj = []
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
fs.writeFile('act.json', json, 'utf8', function(){});
//-------------------------------------------------


//------------------------------------------------

var calendar = require('./calendar');
//console.log(calendar.module.dayArr); 
//console.log(calendar.module.getDay(2018,11,1))
//console.log(calendar.module.dailyActivities);
console.log(calendar.module.daysofMonth(2018,1));
console.log(calendar.module.listDaysofMonth(2018,1));
console.log(calendar.module.restDaysFromLastMonth(2018,1,1));
console.log(calendar.module.getDayIndex(2018,1,2));
console.log(calendar.module.listDaysBesidesCurMonth(2018,1,2));
