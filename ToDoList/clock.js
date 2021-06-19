const clockContainer = document.querySelector(".js_clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hours = date.getHours();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`} : ${
    min < 10 ? `0${min}` : `${min}`
  } : ${sec < 10 ? `0${sec}` : `${sec}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
