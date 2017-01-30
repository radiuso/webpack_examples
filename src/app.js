import Navigator from './Navigator';

// set title
document.getElementById('title').innerHTML = 'Hello webpack !!';

//set subtitle
let myNavigator = new Navigator();
document.getElementById('subtitle').innerHTML = 'using: ' + myNavigator.getName();
