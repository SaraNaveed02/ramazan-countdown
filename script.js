const endDate = new Date("17 feb, 2026").getTime();
const startDate = new Date().getTime();

function updateDate() {
  const currentDate = new Date().getTime();
  const distanceCovered = currentDate - startDate;
  const distancePending = endDate - currentDate;

  const days = Math.floor(distancePending / (1000 * 60 * 60 * 24));
  const hours = Math.floor(distancePending % (1000 * 60 * 60 * 24) / (60 * 60 * 1000));
  const mins = Math.floor(distancePending % (1000 * 60 * 60) / (60 * 1000));
  const sec = Math.floor(distancePending % (1000 * 60) / 1000);

  document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = mins;
    document.getElementById("seconds").innerText = sec;
}

setInterval(updateDate, 1000);
