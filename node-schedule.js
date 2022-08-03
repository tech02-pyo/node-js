const schedule = require('node-schedule'); //node-schedule npm install

let scheduleObj = null;

const set = (s) => { //스케줄 추가
    var rule = new schedule.RecurrenceRule(); //반복룰
    //rule.dayOfWeek = [0, new schedule.Range(4, 6)];
    rule.dayOfWeek = s.dayOfWeek; //수요일, 목요일
    rule.hour = s.hour;
    rule.minute = s.minute;

    var job = schedule.scheduleJob(rule, function(){
     console.log('Scheduler has excuted!');
    });

    scheduleObj =  job;
};

const cancel = () => { //기존 스케줄 삭제
    if(scheduleObj != null){
        scheduleObj.cancel();
    }
};

const setScheduler = (s) => {
    cancel();
    set(s);
};

const scheduleData = {
    dayOfWeek : [3, 4],
    hour : 10,
    minute : 59

};
setScheduler(scheduleData);
