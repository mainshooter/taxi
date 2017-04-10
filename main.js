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
      return(true);
      console.log("Weekend!");
    }
  }
  else {
    // No weekend
    console.log("No weekend");
    return(false);
  }
}
function minuutTime(time_in_hours) {
  // calculates the time and price
  var startTime = $("begin_tijd").value;
  var endTime = $("eind_tijd").value;

  startTime = startTime.replace(":", "");
  endTime = endTime.replace(":", "");

  if (startTime >= 800 && startTime <= 1800) {
    // If the time is in the day time
    return(time_in_hours * 0.25);
  }
  else {
    // If it is night
    return(time_in_hours * 0.45);
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
  displayPrice(price);
}
function calculateTravealing() {
  // We calculate the time we are traffeling
  var startTime = $("begin_tijd").value;
  var endTime = $("eind_tijd").value;

  startTime = startTime.replace(":", "");
  endTime = endTime.replace(":", "");
  // Converting the time to something we can calculate with

  var traffleTime = endTime - startTime;

  return(traffleTime);
}
function displayPrice(price) {
  $("prijs").innerHTML = price;
}
function $(element) {
  // Get a element by a ID
  element = document.getElementById(element);
  return(element);
}
