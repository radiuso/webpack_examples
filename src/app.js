const Navigator = require('./Navigator');

console.log(Navigator);
document.getElementById('title').innerHTML = 'Hello webpack !!';

//set subtitle
let myNavigator = new Navigator();
document.getElementById('subtitle').innerHTML = 'using: ' + myNavigator.getName();
