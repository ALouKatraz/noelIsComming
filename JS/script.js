let date = new Date();
let date2 = new Date("December 25, 2024 00:00:00 UTC+1");

// différence des jours
function jour_diff() {
  let time_dif = date2.getTime() - date.getTime();
  let days_diff = Math.ceil(time_dif / (1000 * 3600 * 24));
  return days_diff;
}

document.getElementById("noel").innerHTML =
  "Noël est dans " + jour_diff() + " jours";
