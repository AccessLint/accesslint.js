import _ from "underscore";

export default class Logger {
  constructor() {
    this.logged = []
  }

  warn(violation) {
    if(!this.seen(violation)) {
      window.console.warn(violation.help, violation.nodes);
      this.logged.push(violation);
    }
  }

  seen(violation) {
    return _.any(this.logged, function(message) {
      return _.isEqual(message, violation)
    });
  }
}
