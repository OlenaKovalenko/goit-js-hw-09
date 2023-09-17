import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      // console.log(selectedDates[0]);
     
      if (selectedDates[0] <= new Date()) {
        alert("Please choose a date in the future");
        refs.startBtn.disabled = true;
      } else {
        refs.startBtn.disabled = false;
      }

      setInterval(() => {
    const timeDelta = targetDate - currentDate;
}, 1000)
    

    },
};

refs.startBtn.addEventListener('click', onStartClick);

function onStartClick(event) {
    const selectedDate = selectedDates[0]; 
    const currentDate = new Date();

    
}

flatpickr(refs.inputDate, options);

const targetDate = new Date(refs.inputDate.value).getTime();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



setInterval(() => {
    const currentDate = new Date();
    const timeDelta = targetDate - currentDate;
}, 1000)
