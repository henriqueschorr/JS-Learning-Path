const Task = require('./task')
const ServiceFactory = require('./serviceFactory')

function ObserverList(){
    this.observerList = []
}

ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj)
}

ObserverList.prototype.get = function(index){
    if(index > -1 && index < this.observerList.length){
        return this.observerList[index]
    }
}

ObserverList.prototype.count = function(){
    return this.observerList.length
}

ObserverList.prototype.removeAt = function(index){
    this.observerList.splice(index, 1)
}

ObserverList.prototype.indexOf = function(obj, startIndex){
    var i = startIndex

    while(i < this.observerList.length){
        if(this.observerList[i] === obj){
            return i
        }
        i++
    }

    return -1
}

var ObservableTask = function(data){
    Task.call(this, data)
    this.observers = new ObserverList()
}

ObservableTask.prototype.addObserver = function(observer){
    this.observers.add(observer)
}

ObservableTask.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer, 0))
}

ObservableTask.prototype.notify = function(context){
    var observerCount = this.observers.count()
    for(var i=0; i<observerCount; i++){
        //Here the observer method is called, for example nottificationService.update()
        this.observers.get(i)(context)
    }
}

ObservableTask.prototype.save = function(){
    this.notify(this)  
    Task.prototype.save.call(this)
}

var task1 = new ObservableTask({name:'Create Demo', user:'Jon'})

var notificationService = ServiceFactory.createService('notification')
// var notificationService2 = ServiceFactory('notification')
// var loggingService = ServiceFactory.createService('logging')
// var auditingService = ServiceFactory.createService('auditing')

//Add the method to the list
// task1.addObserver(not.update)
// task1.addObserver(ls.update)
// task1.addObserver(audit.update)

// task1.save()

// task1.removeObserver(ls.update)

// task1.save()

notificationService.update(task1)