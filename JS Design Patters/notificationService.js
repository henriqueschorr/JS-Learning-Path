var NotificationService = function(){
    this.message = 'Notifying '
    this.update = function(task){
        console.log(this.message + task.user + ' for task ' + task.name)
    }
}

module.exports = NotificationService