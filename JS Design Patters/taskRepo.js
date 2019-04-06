var repo = {
    tasks: {},
    commands: [],

    get: function(id){
        console.log('Getting task ' + id)
        return{
            name: 'new task from db'
        }
    },
    save: function(task){
        repo.tasks[task.id] = task
        console.log('Saving ' + task.name + ' to the db')
    },

    //If something happen like a connection error and the program stops, you can reexecute the method and get it all back again
    replay: function(){
        for (var i=0; i<repo.commands.length; i++){
            var command = repo.commands[i]

            repo.executeNoLog(command.name, command.obj)
        }
    }
}

repo.executeNoLog = function(name){
    var args = Array.prototype.slice.call(arguments, 1)

    if(repo[name]){
        return repo[name].apply(repo, args)
    }
    return false
}

repo.execute = function(name){
    var args = Array.prototype.slice.call(arguments, 1)

    repo.commands.push({
        name,
        obj: args[0]
    })

    if(repo[name]){
        return repo[name].apply(repo, args)
    }
    return false
}

module.exports = repo
