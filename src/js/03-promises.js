const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button[type="submit"]'),
};


refs.form.addEventListener('submit', onFormSubmit);

const firstDelay = refs.delayInput.value;
const step = refs.stepInput.value;
const amount = refs.amountInput.value;
console.log(firstDelay);
console.log(step);
console.log(amount);


// const formInput = {};

function onFormSubmit(event) {
  // new FormData(event.target).forEach((value, name) => {
  //   formInput[name] = value;
  //   console.log(formInput);
  // })


}

for (let i = 1; i <= amount; i += 1) {
  let delay = firstDelay + step * (i - 1);
  return new Promise((resolve, reject) => {

  })
}





// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
