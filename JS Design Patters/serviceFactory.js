var serviceFactory = function () {

    this.createService = function (serviceType) {
        if (serviceType === 'notification') {
            if (!this.Notification) {
                var Notification = require('./notificationService')
            }
            var notificationService = new Notification() 
            return notificationService
        } else if (serviceType === 'logging') {
            if (!this.Logging) {
                var Logging = require('./loggingService')
            }
            var loggingService = new Logging() 
            return loggingService
        } else if (serviceType === 'auditing') {
            if (!this.Auditing) {
                var Auditing = require('./auditingService')
            }
            var auditingService = new Auditing() 
            return auditingService
        }
    }
}

module.exports = new serviceFactory;


