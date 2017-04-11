function getKilometers() {
  kilometers = $("kilometers").value;
  return(kilometers);
}
function weekendTime() {
  // This function runs when the checkIfDayIsWeekend is runt
  // And the weekend if true
  var startTime = $("begin_tijd").value;

  startTime = startTime.replace(":", "");
  if (startTime >= 700 && startTime <= 2200) {
    // No weekend
    console.log("No weekend!");
    return(false);
  }
  else {
    // There is weekend
    console.log("Weekend!");
    return(true);
  }
}
function checkIfDayIsWeekend() {
  // Check if it is weekend
  var vertrek_datum = $("vertrek_datum").value;
  var datum = new Date(vertrek_datum);
  datum = datum.getDay();

  if (datum == 5 || datum == 6 || datum == 0 || datum == 1) {
    // Check if the day is in the weekend day
    if (datum == 5 || datum == 1) {
      // If the weekend day is 5 or one we check the time that if that is also in the weekend time
      return(weekendTime());
    }
    else {
      console.log("Weekend!");
      return(true);
    }
  }
  else {
    // No weekend
    console.log("No weekend");
    return(false);
  }
}
function minuutTime(time_in_min) {
  // calculates the time and price
  var startTime = $("begin_tijd").value;
  startTime = startTime.replace(":", "");

  if (startTime >= 800 && startTime <= 1800) {
    // If the time is in the day time
    return(time_in_min * 0.25);
  }
  else {
    // If it is night
    return(time_in_min * 0.45);
  }
}
function drivePrice() {
    // Cost per kilometer
    var kilometers = $("kilometers").value;
    var price = kilometers * 1;
    return(price);
}

function calculateCosts() {
  // Calculate the cost
  if (validateInput() == true) {
    var time = calculateTravealing();
    // The time we are on our way

    var timePrice = minuutTime(time);
    // Price per minuut to drive

    var kilometers = getKilometers();
    var drivePriceing = drivePrice(kilometers);
    // Price per kilometer

    var weekend = checkIfDayIsWeekend();
    // We check if it is weekend

    var price;

    if (weekend == true) {
      price = timePrice + drivePriceing;
      price = price * 1.15;
    }
    else if (weekend == false) {
      price = timePrice + drivePriceing;
    }
    price = roundUpPrice(price);
    displayPrice(price);
  }
}
function calculateTravealing() {
  // We calculate the time we are traffeling

  var gem_snelheid = 60;
  // In kilometer per uur
  var geredenKM = getKilometers();

  var eind_tijd = geredenKM / gem_snelheid;

  var startTime = $("begin_tijd").value;

  startTime = startTime.replace(":", "");
  // Converting the time to something we can calculate with

  var array = stringToArray(startTime);
  if (typeof(array[3]) == 'undefined') {
    // Check if the array hasn't 2 time stamps for the hour
    // Because the hour will only be in the first array position
    var startTimeInHour = array[0];
    startTimeInHour = parseInt(startTimeInHour);

    var startTimeInMin = array[1];
    startTimeInMin += array[2];
    startTimeInMin = parseInt(startTimeInMin);
  }
  else {
    var startTimeInHour = array[0];
    startTimeInHour += array[1];
    startTimeInHour = parseInt(startTimeInHour);

    var startTimeInMin = array[2];
    startTimeInMin += array[3];
    startTimeInMin = parseInt(startTimeInMin);
    // Converting the string as time to a array so we separete the hour and minuuts
    // After we combine them back we do a parseINT so we can do math with it
  }



  // Converting hours to minuuts and add the minuuts
  startTime = (startTimeInHour * 60) + startTimeInMin;
  endTime = (eind_tijd * 60) + startTime;

  var traffleTime = endTime - startTime;
  // The total traffel time

  return(traffleTime);
}
function validateInput() {
  // This function checks if all input fields are filled in
  var km = $("kilometers").value;
  var start = $("begin_tijd").value;
  // var eind = $("eind_tijd").value;
  var date = $("vertrek_datum").value;

  if (km > '' && start > '' && date > '' && date != 'dd-mm-jjjj') {
    return(true);
  }
  else {
    return(false);
  }
}
function stringToArray(string) {
  var array = string.split("");
  return(array);
}
function roundUpPrice(price) {
  // Round the price up to 2 decimals
  price = Math.round(price * 100) / 100;
  return(price);
}
function roundUp(input) {
  input = Math.round(input);
  return(input);
}
function displayPrice(price) {
  $("prijs").innerHTML = "&euro;"+ price;
}
function $(element) {
  // Get a element by a ID
  element = document.getElementById(element);
  return(element);
}
