var list = require('./list.json')
var index = require('./index.json')

module.exports = function() {
  return {
    'list.php': list,
    "index.php":index
  }
}
