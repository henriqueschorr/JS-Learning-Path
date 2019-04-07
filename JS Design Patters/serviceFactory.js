const Notification = require('./notificationService')
const Logging = require('./loggingService')
const Auditing = require('./auditingService')

let service = null

const ServiceFactory = function () {
  this.createService = function (serviceType) {
    if (serviceType === 'notification') {
      service = new Notification()
    } else if (serviceType === 'logging') {
      service = new Logging()
    } else if (serviceType === 'auditing') {
      service = new Auditing()
    }
    return service
  }
}

module.exports = new ServiceFactory();
