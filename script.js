// Завдання 1 — delay(ms)


const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms);
  });
};

const delayLogger = time => {
  console.log(`Resolved after ${time}ms`);
};

delay(2000).then(delayLogger);
delay(1000).then(delayLogger);
delay(1500).then(delayLogger);


// Завдання 2 


const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName
        ? { ...user, active: !user.active }
        : user
    );

    resolve(updatedUsers);
  });
};

const usersLogger = updatedUsers => {
  console.table(updatedUsers);
};

toggleUserState(users, 'Mango').then(usersLogger);
toggleUserState(users, 'Lux').then(usersLogger);


// Завдання 3 


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  return new Promise((resolve, reject) => {
    const delayTime = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve([transaction.id, delayTime]);
      } else {
        reject(transaction.id);
      }
    }, delayTime);
  });
};

const logSuccess = ([id, time]) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
