const form = document.getElementById("invitationForm");

const card = document.getElementById("card");
const cardEventName = document.getElementById("cardEventName");
const cardHostName = document.getElementById("cardHostName");
const cardDate = document.getElementById("cardDate");
const cardTime = document.getElementById("cardTime");
const cardVenue = document.getElementById("cardVenue");
const cardMessage = document.getElementById("cardMessage");

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const formatTime = (timeString) => {
  if (!timeString) return "";
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const eventName = document.getElementById("eventName").value.trim();
  const hostName = document.getElementById("hostName").value.trim();
  const eventDate = document.getElementById("eventDate").value;
  const eventTime = document.getElementById("eventTime").value;
  const eventVenue = document.getElementById("eventVenue").value.trim();
  const eventMessage = document.getElementById("eventMessage").value.trim();
  const themeColor = document.getElementById("themeColor").value;

  cardEventName.textContent = eventName;
  cardHostName.textContent = hostName;
  cardDate.textContent = formatDate(eventDate);
  cardTime.textContent = formatTime(eventTime);
  cardVenue.textContent = eventVenue;
  cardMessage.textContent = eventMessage;
  card.style.setProperty("--theme", themeColor);
});
