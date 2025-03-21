class Observable {
  constructor(value) {
    this._value = value;
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  set value(newValue) {
    if (this._value !== function State() {
      this.actions = {};
      this.subscriptions = [];
      this.history = [];
    }
    
    State.prototype.subscribe = function(element, action, callback) {
      this.subscriptions[action] = this.subscriptions[action] || [];
      this.subscriptions[action].push(function(data) {
        callback.apply(element, data);
      });
    }
    
    State.prototype.dispatch = function(action, data) {
      data = data || [];
      
      // Store history of actions (not strictly neccessary)
      this.history.push([action, data]);
        
      // Call action reducers
      if ("function" === typeof this[action]) {
        this[action].apply(this, data);
      }
      
      // Add the action and state as final arguments
      data.push(action);
      data.push(this);
      
      // Call subscribers
      this.subscriptions[action] = this.subscriptions[action] || [];
      this.subscriptions[action].forEach(
        function(subscription) {
           subscription(data);
        }
      );
    }newValue) {
      this.listeners.forEach((callback) => callback(this._value, newValue));
      this._value = newValue;
    }
  }

  get value() {
    return this._value;
  }
}
