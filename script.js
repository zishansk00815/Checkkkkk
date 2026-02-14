let current = 0;
const totalScreens = 5; // now includes giftbox page

function nextScreen() {
  if (current < totalScreens) {
    document.getElementById(`screen-${current}`).classList.remove("active");
    current++;
    document.getElementById(`screen-${current}`).classList.add("active");
  }
}

function prevScreen() {
  if (current > 0) {
    document.getElementById(`screen-${current}`).classList.remove("active");
    current--;
    document.getElementById(`screen-${current}`).classList.add("active");
  }
}

function checkPromise() {
  const check = document.getElementById("promiseCheck");
  if (!check.checked) {
    alert("You have to promise first ❤️");
    return;
  }
  nextScreen();
}
