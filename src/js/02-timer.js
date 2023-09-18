import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { convertMs } from "./helper/convertMs";

const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    daysValue: document.querySelector('span[data-days]'),
    hoursValue: document.querySelector('span[data-hours]'),
    minutesValue: document.querySelector('span[data-minutes]'),
    secondsValue: document.querySelector('span[data-seconds]'),
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.startBtn.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      
      if (selectedDates[0] <= Date.now()) {
        Notify.failure("Please choose a date in the future");
      } else {
        refs.startBtn.removeAttribute('disabled');
      }
    },
};

const calendar = flatpickr(refs.inputDate, options);

refs.startBtn.addEventListener('click', onStartClick);

function onStartClick(event) {
  refs.startBtn.disabled = true;
  refs.inputDate = true;
  
  const interalId = setInterval(() => {
    
  const selectedDate = calendar.selectedDates[0];
  const currentDate = Date.now();
  const timeDifference = selectedDate - currentDate;
    
    if (timeDifference < 1000) {
      clearInterval(interalId);
    }

    const timer = convertMs(timeDifference);
     
    refs.daysValue.textContent = addLeadingZero(timer.days);
    refs.hoursValue.textContent = addLeadingZero(timer.hours);
    refs.minutesValue.textContent = addLeadingZero(timer.minutes);
    refs.secondsValue.textContent = addLeadingZero(timer.seconds);
  }, 1000)
}







