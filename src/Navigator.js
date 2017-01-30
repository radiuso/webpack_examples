// Navigator class

function Navigator() {
}

Navigator.prototype.getName = function() {
  return navigator.appCodeName + ' (' + navigator.appName + ')';
}

module.exports = Navigator;
