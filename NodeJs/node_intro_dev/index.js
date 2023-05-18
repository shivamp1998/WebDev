const cron = require('node-cron');
let secondsTimer = 1;
let minutesTimer = 1;


cron.schedule('*/2 * * * *', () => {
    console.log('runing every 2 seconds', secondsTimer)
    secondsTimer++;
})
