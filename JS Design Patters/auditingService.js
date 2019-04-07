const AuditingService = function () {
  this.message = 'Auditing '
  this.update = function (task) {
    console.log(`${this.message + task.user} for task ${task.name}`)
  }
}

module.exports = AuditingService