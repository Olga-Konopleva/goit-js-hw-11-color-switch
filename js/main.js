const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  refs = {
      start: document.querySelector('[data-action="start"]'),
      stop: document.querySelector('[data-action="stop"]'),
  }

  refs.start.addEventListener('click', onSwitchColor);
  refs.stop.addEventListener('click', offSwitchColor);

  let intervalId = null;

  function onSwitchColor (event) {
      intervalId = setInterval(function() {
          
          const randomColor = randomIntegerFromInterval(1,6);
          document.body.style.backgroundColor = colors[randomColor];
      }, 1000);
      refs.start.setAttribute("disabled", "disabled");
  }

  function offSwitchColor (event) {
      clearInterval(intervalId);
      refs.start.removeAttribute('disabled');
  }

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };