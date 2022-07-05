const numberToSegment = {
  'button-1': ["3", "6"],
  'button-2': ["1", "3", "4", "5", "7"],
  'button-3': ["1", "3", "4", "6", "7"],
  'button-4': ["2", "3", "4", "6"],
  'button-5': ["1", "2", "4", "6", "7"],
  'button-6': ["1", "2", "4", "5", "6", "7"],
  'button-7': ["1", "3", "6"],
  'button-8': ["1", "2", "3", "4", "5", "6", "7"],
  'button-9': ["1", "2", "3", "4", "6", "7"],
  'button-0': ["1", "2", "3", "5", "6", "7"]
};

const resetSegments = () => {
  for (let id = 1; id < 8; id++) {
    const segmentElement = document.getElementById(id);
    const defaultClasses = segmentElement.className.replace('light-on', '');
    segmentElement.className = defaultClasses.trim();
  }
};

const displayNumber = (segments) => {
  for (const segment of segments) {
    const segmentElement = document.getElementById(segment);
    segmentElement.className += ' light-on';
  }
};

const main = () => {
  const numericKeypadElement =
    document.getElementsByClassName('numeric_keypad')[0];

  numericKeypadElement.addEventListener('click', (event) => {
    const number = event.target.value;
    const segments = numberToSegment[`button-${number}`];

    resetSegments();
    displayNumber(segments);
  });
};

window.onload = main;
