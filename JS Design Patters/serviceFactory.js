var Notification = require('./notificationService')
var Logging = require('./loggingService')
var Auditing = require('./auditingService')

var serviceFactory = function () {

    this.createService = function (serviceType) {
        if (serviceType === 'notification') {
            var notificationService = new Notification() 
            return notificationService
        } else if (serviceType === 'logging') {
            var loggingService = new Logging() 
            return loggingService
        } else if (serviceType === 'auditing') {
            var auditingService = new Auditing() 
            return auditingService
        }
    }
}

module.exports = new serviceFactory;


