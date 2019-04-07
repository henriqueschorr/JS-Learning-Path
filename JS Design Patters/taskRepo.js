const repo = {
  tasks: {},
  commands: [],

  get(id) {
    console.log(`Getting task ${id}`)
    return {
      name: 'new task from db',
    }
  },
  save(task) {
    repo.tasks[task.id] = task
    console.log(`Saving ${task.name} to the db`)
  },

  // If something happen like a connection error and the program stops, you can reexecute the method and get it all back again
  replay() {
    for (let i = 0; i < repo.commands.length; i++) {
      const command = repo.commands[i]

      repo.executeNoLog(command.name, command.obj)
    }
  },
}

repo.executeNoLog = function (name, ...args) {
  // const args = Array.prototype.slice.call(arguments, 1)

  if (repo[name]) {
    return repo[name](...args)
  }
  return false
}

repo.execute = function (name, ...args) {
  // const args = Array.prototype.slice.call(arguments, 1)

  repo.commands.push({
    name,
    obj: args[0],
  })

  if (repo[name]) {
    return repo[name](...args)
  }
  return false
}

module.exports = repo
