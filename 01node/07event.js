const events = require('events');
//创建eventsEmitter对象
const eventsEmitter = new events.EventEmitter();
//绑定事件处理程序 定好一个主题
eventsEmitter.on('coon',()=>{
    console.log('连接成功');
    eventsEmitter.emit('commit')
});

eventsEmitter.on('commit',()=>{
    console.log('数据接收成功');
})
//观察者 观察相应的主题
eventsEmitter.emit('coon');

console.log('程序执行完毕');