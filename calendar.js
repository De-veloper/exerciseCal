
var module = (function(){
  var dayArr = ['Sun', 'Mon', 'Tu', 'Wed', 'Thu', 'Fri', 'Sat'];

  var getDay = function(year, month, date){
      var d = new Date(year, month, date);
      return dayArr[d.getDay()];
  } 
    
   
//----- Promise and retrun data
var fs = require('fs');
/*var dailyActivities = '';
var getActJson = new Promise((resolve, reject) => {
    var obj = '';
    var json = '';
    fs.readFile('act.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            //obj.push({id: 2, square:3}); //add some data
            json = JSON.stringify(obj); //convert it back to json
            //fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
        }
    });
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
      resolve(obj); // Yay! Everything went well!
    }, 250);
  });
  getActJson.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    //console.log(successMessage);
    //dailyActivities = successMessage;
    return successMessage;
  });*/
//-----

  var dailyActivities = [
      { 
          year:2018,
          month:1,
          day:22,
          note:'Workout'
      },
      { 
          year:2018,
          month:2,
          day:22,
          note:'Run'
      }
  ];
  var listDaysofMonth = function(year, month){
    var days = '';
    for (var d=1; d<Number(daysofMonth(year,month)); d++){
        days += getDay(year, month, d) + ',';
    }
    return days;
  }
  //When insert, year, month, it will show how many days
  //ex:2018,1 => daysofMonth(2018, 1)
  var daysofMonth = function(year, month){
    //** consider error
    var days = new Date(year, month, 0).getDate();
    return days;
  }

  var restDaysFromLastMonth = function(year, month, date){
     var restDays = [];
     var d = new Date(year, month, date);
     
     if (date==1){
          var s = daysofMonth(year,(month-1))-Number(d.getDay())+1;
          var e = daysofMonth(year,(month-1));
          //console.log(s+'-'+e);
         for (var x = s; x <= e; x++ ) {
             restDays.push(x);
         } 

     } else {
         for (var y = 1; y < (7 - Number(d.getDay())) ; y++ ) {
             restDays.push(y);
         }       
     }

     return restDays+(date==1?',':'');
  }
  //When insert year, month, date, it will convert to day index
  // Sun - 0, Mon - 1, ..
  var getDayIndex = function(year, month, date){
      //** consider error
      var d = new Date(year, month-1, date);
      return d.getDay();
  }
  //List days from previous months from current month
  //date will be first date of month or last date of month
  var listDaysBesidesCurMonth = function(year,month, date){
    var dates = '';
    var days = Number(daysofMonth(year,month));
    var firstDayofMonth = getDayIndex(year, month, date);
    var lastDayofMonth = getDayIndex(year, month, days);

    if(firstDayofMonth!=0 && date == 1){ //When first day of month is not Sun
        if(month-1==0){
          var daysofLastMonth = daysofMonth(year-1,12);//ex:2018,2 =>Last month is 1, so should be 31
          //console.log(daysofLastMonth);
        } else {
          var daysofLastMonth = daysofMonth(year,month-1);//ex:2018,2 =>Last month is 1, so should be 31
        }
        var lastDaysofLastMonth = getDayIndex(year, month, date);
        //console.log(lastDaysofLastMonth)//ex:2018,2,1 ; Last days of Jan is 28,29,30,31; 7 -
        var firstDayofLastDays = daysofLastMonth - (lastDaysofLastMonth-1);//ex:shoudld 28 = 31 -3
        
        //console.log(firstDayofLastDays +'-'+daysofLastMonth);
        for(var b=firstDayofLastDays; b<=daysofLastMonth; b++){
            dates += dayComp(year,month,b,false);
        }
    }
    if(lastDayofMonth!=0 && date!=1){ //When first day of month is not Sun
      for(var a=1; a<(7-lastDayofMonth); a++){
            dates += dayComp(year,month,a,false);
        }
    }

    return dates;
  }

  var dayComp = function(year, month, day, currentMonth){
    var tempText ='';
    var activity = dailyActivities;
    for (var n=0; n < activity.length; n++){
        if (year == activity[n].year 
          && month == activity[n].month
          && day == activity[n].day){
              tempText ='<p>'+ activity[n].note +'</p>';
        }
    }
    //
    var dayArea = '<div style="float:left;width:13%;border:1px #333 solid;height:100px;" >'+dateNumber(day, currentMonth)+tempText+'</div>'; 
    return dayArea;
    
  }
   //list all dates of month
   //When enter year, month, it will show all dates in that month
  var listDatesofMonth = function(year, month){
    var dates = '';
        dates += (month==1?yearHeader(year):'') + monthHeader(month); //Show each month (When Jan, show year)

    var days = Number(daysofMonth(year,month));
    var firstDayofMonth = getDayIndex(year, month, 1);
    var lastDayofMonth = getDayIndex(year, month, days);

    dates += listDaysBesidesCurMonth(year, month, 1);

    for (var d=1; d<=days; d++){
        dates += dayComp(year,month,d,true)+(getDayIndex(year, month, d)==6?'<div style="clear:both;"></div>':'');
    }
    //first dates for next monts
    dates += listDaysBesidesCurMonth(year, month, days);
    return dates;
  }
  //create day component
  var dateNumber = function(day, currentMonth){
      return '<span style="text-align:center;'+(currentMonth?'font-weight:bold;opacity:1':'opacity:0.5')+'">'+day+'</span>';
  }
  var monthHeader = function(month){
      return '<div style="clear:both;"></div><center><h1>'+month+'</h1></center>';
  }
  var yearHeader = function(year){
      return '<div style="clear:both;"></div><center><h1>'+year+'</h1></center>';
  }
  return {
    dayArr:dayArr,
    getDay:getDay,
    //dailyActivities:dailyActivities,
    listDaysofMonth:listDaysofMonth,
    daysofMonth:daysofMonth,
    restDaysFromLastMonth:restDaysFromLastMonth,
    getDayIndex:getDayIndex,
    listDaysBesidesCurMonth:listDaysBesidesCurMonth,
    listDatesofMonth:listDatesofMonth,
    dayComp:dayComp,
    dateNumber:dateNumber,
    monthHeader:monthHeader,
    yearHeader:yearHeader
  }
}());

exports.module = module;


