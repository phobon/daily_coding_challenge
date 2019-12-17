// What will get logged to the console?

function Logger(prefix) {
  this.prefix = prefix;
}

Logger.prototype.log = function(message) {
  console.log(`${this.prefix}: ${message}`);
};

const actionLogger = new Logger('Action: ');

['MOVEUP', 'OPENDOOR', 'PICKUPITEM'].forEach(actionLogger.log);

// 'MOVEUP', 'OPENDOOR', 'PICKUPITEM'

// 'Action: MOVEUP', 'Action: OPENDOOR', 'Action: PICKUPITEM'

// 'undefined: MOVEUP', 'undefined: OPENDOOR', 'undefined: PICKUPITEM'
// ^^^ this.prefix is not part of the function's prototype, so `this` in the log() does not have access to it

// ': MOVEUP', ': OPENDOOR', ': PICKUPITEM'