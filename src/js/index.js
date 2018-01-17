import '../css/style.css'
// import message from 'message.js'
import { firstMessage, delayedMessage } from './message.js'
// import imgNinos from '../../niños.jpg'
import data from './teachers.json'
import render from './render.js'

console.log(data)

data.teachers.forEach((teacher) => {
  const element = document.createElement('li');
  element.textContent = teacher.name;
  render(element);
});

// document.write('Hola mundo! webpack dev server -_-');
document.write(firstMessage);
delayedMessage();

/*const img = document.createElement('img');
img.setAttribute('src', imgNinos);
img.setAttribute('width', 300);
img.setAttribute('height', 300);
document.body.append(img);*/

console.log('Hola mundo! webpack dev server World ');
