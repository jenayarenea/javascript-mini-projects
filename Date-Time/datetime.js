function twoDigitMinute(today) 
{ 
  return (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
}
var today = new Date();
  var currentDay = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  
  var hour = today.getHours();
  var currentMonth = today.getMonth();
  var monthlist = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
  var date = today.getDate();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var AMorPM = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (minute == 0)
      minute = 00;
 
  document.write("<b><i>It is currently: " + hour + ":" + twoDigitMinute(today) + AMorPM + "on " + daylist[currentDay]+ ", " + monthlist[currentMonth] + " " + date + ".<i><br>");
