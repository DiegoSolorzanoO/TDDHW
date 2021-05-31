const _ = require('lodash')

class Storage {
    constructor() {
        this.items = {}
    }

    size() {
        return _.size(this.items)
    }

    clear() {
        this.items = {}
    }

    add(id, item) {
        if (!this.items[id]) {
            this.items[id] = item
            return [id, item]
        }
        return false
    }

    exists(item) {
        let found = false
        _.forEach(this.items, (value, key) => {
            if (item === value) {
                found = true
            }
        })
        return found
    }

    get(id) {
        return this.items[id] ? this.items[id] : false
    }

    search(item) {
        let found = false
        _.forEach(this.items, (value, id) => {
            if (item === value) {
                found = id
            }
        })
        return found
    }

    remove(id) {
        if (this.items[id]) {
            delete this.items[id]
            return true
        }
        return false
    }
}

module.exports = new Storage()