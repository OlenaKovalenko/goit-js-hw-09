import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  // delayInput: document.querySelector('input[name="delay"]'),
  // stepInput: document.querySelector('input[name="step"]'),
  // amountInput: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button[type="submit"]'),
};


refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  
  const firstDelay = event.target.elements.delay.value;
  const step = event.target.elements.step.value;
  const amount = event.target.elements.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    let stepDelay = firstDelay + step * (i - 1);

    createPromise(i, stepDelay)
      .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
  
}
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}






// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
