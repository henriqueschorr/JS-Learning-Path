const NotificationService = function () {
  this.message = 'Notifying '
  this.update = function test2(task) {
    console.log(`${this.message + task.user} for task ${task.name}`)
  }
}

module.exports = NotificationService