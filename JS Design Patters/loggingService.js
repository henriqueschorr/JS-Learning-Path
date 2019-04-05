var LoggingService = function(){
    this.message = 'Logging '
    this.update = function(task){
        console.log(this.message + task.user + ' for task ' + task.name)
    }
}

module.exports = LoggingService