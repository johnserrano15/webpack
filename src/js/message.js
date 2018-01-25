import render from './render';
import makeMessage from './makeMessage';

// mas info sobre Promise.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(() => {
    todoOk('Han pasado 3 segundos. :)');
  }, 3000)
})

module.exports = {
  firstMessage: 'Hola mundo desde un module',
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message);
    // const element = document.createElement('p');
    // element.textContent = message;
    render(makeMessage(message));
  },
}
