var calendar = require('./calendar');
console.log(calendar.module.dayArr); 
console.log(calendar.module.getDay(2018,11,1))
console.log(calendar.module.dailyActivities);
console.log(calendar.module.daysofMonth(2018,1));
console.log(calendar.module.listDaysofMonth(2018,1));
console.log(calendar.module.restDaysFromLastMonth(2018,1,1));
console.log(calendar.module.getDayIndex(2018,1,2));
console.log(calendar.module.listDaysBesidesCurMonth(2018,1,2));



