let franceDate = moment()
  .tz("Europe/London")
  .format(`dddd, MMMM Do, YYYY, hh:mm:ss A`);

let tokyoDate = moment()
  .tz("Asia/Tokyo")
  .format(`dddd, MMMM Do, YYYY, hh:mm:ss A`);

let ausDate = moment()
  .tz("Australia/Sydney")
  .format(`dddd, MMMM Do, YYYY, hh:mm:ss A`);

function actionChange(event) {
  let city = event.target.value;
  if (city === "Paris") {
    alert(`It is ${franceDate} in ${city}`);
  }

  if (city === "Tokyo") {
    alert(`It is ${tokyoDate} in ${city}`);
  }

  if (city === "Australia") alert(`It is ${ausDate} in ${city}`);
}

let changeEvent = document.querySelector("#cityName");
changeEvent.addEventListener("change", actionChange);
