// Module
(function(global) {

  /**
   *
   * @constructor
   */
  var Model = function() {
    this.id = Date.now(); //
    this._attributes = {};
  };

  /**
   * Get the value of a name.
   * 
   * @param {String} name
   * 
   */
  Model.prototype.get = function(name) {
    return this._attributes[name];
  };

  /**
   * Updating the data and save oldValue
   * 
   * @param {String} name
   * @param {*} value
   */
  Model.prototype.set = function(name, value) {
    
      var oldValue = this._attributes[name];
      this._attributes[name] = value;
    
  };
  
  if (global) {
    global.App = global.App || {};
    global.App.Model = Model;
  }

  console.log("Model constructor loaded into global.App.Model ");

}(window));
