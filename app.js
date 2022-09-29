function displayDate() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  let amOrPm = "AM";
  if (hour > 12) {
    amOrPm = "PM";
  }
  if (hour >= 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.querySelector(".box span").innerHTML =
    hour + ":" + min + ":" + sec + " " + amOrPm;
}
setInterval(displayDate, 1000);

let date = new Date();

let options = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric",
};

document.querySelector(".date").innerHTML = date.toLocaleDateString(options);
