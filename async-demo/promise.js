
const p = new Promise((resolve, reject) => {
//Kick off some asynch work
//...
  setTimeout(() => {
    resolve(1); //pending => resulved, fulfilled
    reject(new Error('message')); //pending => rejected
  }, 2000);
});

p.then(result => console.log('Result', result));
p.catch(err => console.log('Error', err.message));