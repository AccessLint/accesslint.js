export default class Logger {
  constructor() {
    this.logged = []
  }

  warn(violation) {
    if(!this.exists(violation)) {
      console.warn(violation);
      this.logged.push(violation);
    }
  }

  exists(violation) {
    let exists = false;

    this.logged.forEach(function(entry) {
      if (JSON.stringify(entry) === JSON.stringify(violation)) {
        exists = true;
      }
    });

    return exists;
  }
}
