
function address_link(username, hostname) {
  var cat = "&#" + "64;";
  var addr = username + cat + hostname + ".c" + "om";
  return "<" + "a" + " " + "href=m" + "ailt" + "o:" + addr + ">" + addr + "<\/a>";
}

function address_link(username, hostname, ext) {
  var cat = "&#" + "64;";
  if(ext==undefined) ext = "c" + "om";
  var addr = username + cat + hostname + "." + ext;
  return "<" + "a" + " " + "href=m" + "ailt" + "o:" + addr + ">" + addr + "<\/a>";
}

function address_plaintext(username, hostname) {
  var cat = "@";
  var addr = username + cat + hostname + ".c" + "om";
  return addr;
}

function DateShortFormat(dt) {
  strMonths = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  return strMonths[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear();
}

function DateLongFormat(dt) {
  strMonths = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  strDays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  return strDays[dt.getDay()] + ", " + strMonths[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear();
}

function TimeFormat(dt) {
  strHour = (dt.getHours() < 13) ? dt.getHours() : dt.getHours() - 12;
  strMinutes = (dt.getMinutes() < 10) ? "0" + dt.getMinutes() : dt.getMinutes();
  return strHour + ":" + strMinutes + " " + ((dt.getHours() < 12) ? "AM" : "PM");
}
