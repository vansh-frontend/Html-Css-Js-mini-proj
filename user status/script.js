function show() {
  alert("this show your intenet status you are online or offline");
}

function updateUserStatus() {
  const statusElement = document.getElementById("status");

  if (navigator.onLine) {
    statusElement.textContent = "user status is: Online";
    statusElement.style.backgroundColor = "green"; //if use is online color id green
    alert("your are now online👍");
  } else {
    statusElement.textContent = "user status is: Offline";
    statusElement.style.backgroundColor = "red"; //if use is offline color id green
    alert("you are offline turn on the internet connection👎🏼.");
  }
}

window.addEventListener("online", function (event) {
  updateUserStatus();
});

window.addEventListener("offline", function (event) {
  updateUserStatus();
});

updateUserStatus();
