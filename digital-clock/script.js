function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();

  const hours = (now.getHours() % 12 || 12).toString().padStart(2,"0")
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const amPm = now.getHours() >= 12 ? "PM" : "AM";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
const date = now.toLocaleDateString(undefined, options);

  timeElement.textContent = `${hours}:${minutes}:${seconds}:${amPm}`;
  dateElement.textContent = `${date}`


}

updateClock()
setInterval(updateClock,1000)