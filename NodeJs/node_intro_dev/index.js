const cron = require('node-cron');
let secondsTimer = 1;
let minutesTimer = 1;
const Queue = require('bull');


cron.schedule('*/2 * * * *', () => {
    console.log('runing every 2 seconds', secondsTimer)
    secondsTimer++;
})


const audioQueue = Queue.create('audioQueue');

audioQueue.process((job, done) => {
    if(job) {
        console.log(job);
    }else{
        console.log(err);
    }
    return done()
}) 