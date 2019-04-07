const Task = require('./task')
const Repo = require('./taskRepo')
const ServiceFactory = require('./serviceFactory')

function ObserverList() {
  this.observerList = []
}

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj)
}

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index]
  }
  return false
}

ObserverList.prototype.count = function () {
  return this.observerList.length
}

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1)
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
  let i = startIndex

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i
    }
    i++
  }

  return -1
}

const ObservableTask = function (data) {
  Task.call(this, data)
  this.observers = new ObserverList()
}

ObservableTask.prototype.addObserver = function (observer) {
  this.observers.add(observer)
}

ObservableTask.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0))
}

ObservableTask.prototype.notify = function (context) {
  const observerCount = this.observers.count()
  for (let i = 0; i < observerCount; i++) {
    // Here the observer method is called, for example nottificationService.update()
    this.observers.get(i)(context)
  }
}

ObservableTask.prototype.save = function () {
  this.notify(this)
  Task.prototype.save.call(this)
}

const mediator = (function () {
  const channels = {}

  const subscribe = function (channel, context, func) {
    if (!mediator.channels[channel]) {
      mediator.channels[channel] = []
    }
    mediator.channels[channel].push({
      context,
      func,
    })
  }

  const publish = function (channel, ...args) {
    if (!this.channels[channel]) {
      return false
    }

    // const args = Array.prototype.slice.call(arguments, 1)prefer-rest-params

    for (let i = 0; i < mediator.channels[channel].length; i++) {
      const sub = mediator.channels[channel][i]
      sub.func.apply(sub.context, args)
    }
    return true
  }

  return {
    channels,
    subscribe,
    publish,
  }
}())

const task1 = new ObservableTask({ name: 'Create Demo', user: 'Jon' })

const notificationService = ServiceFactory.createService('notification')
// var notificationService2 = ServiceFactory('notification')
// var loggingService = ServiceFactory.createService('logging')
// var auditingService = ServiceFactory.createService('auditing')

// Add the method to the list
// task1.addObserver(not.update)
// task1.addObserver(ls.update)
// task1.addObserver(audit.update)

// task1.save()

// task1.removeObserver(ls.update)

// task1.save()

mediator.subscribe('complete', notificationService, notificationService.update)
// notificationService.update(task1)

task1.complete = function () {
  mediator.publish('complete', this)
  Task.prototype.complete.call(this)
}

// task1.complete()

Repo.execute('save', {
  id: 1,
  name: 'Task 1',
  complete: false,
})

Repo.execute('save', {
  id: 2,
  name: 'Task 2',
  complete: false,
})

Repo.execute('save', {
  id: 3,
  name: 'Task 3',
  complete: false,
})

Repo.execute('save', {
  id: 4,
  name: 'Task 4',
  complete: false,
})

console.log(Repo.tasks)
Repo.tasks = {}
console.log(Repo.tasks)

Repo.replay()
console.log(Repo.tasks)
