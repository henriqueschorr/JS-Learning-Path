var Task = function(data){
    this.name = data.name
    this.priority = data.priority
    this.project = data.project
    this.user = data.user
    this.completed = data.completed
}

//Adding the function to the prototype will not replicate the function for every object
Task.prototype.complete = function(){
    console.log('Completing Task: ' + this.name)
    this.completed = true
}

Task.prototype.save = function(){
    console.log('Saving Task: ' + this.name)
}

module.exports = Task