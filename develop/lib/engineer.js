const Employee = require('./employee')

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        super(name, id, email);

    }

}

module.exports = Engineer;