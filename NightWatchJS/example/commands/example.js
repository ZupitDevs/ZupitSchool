/**
  * An example of custom command.
  * call it with client.example() in your test
  */
exports.command = function() {
    // Add your custom code here
    return this.click('#button');
}
