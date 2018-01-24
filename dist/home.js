/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(4);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = modules;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(18);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var _message = __webpack_require__(5);

var _teachers = __webpack_require__(8);

var _teachers2 = _interopRequireDefault(_teachers);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _teachers3 = __webpack_require__(9);

var _teachers4 = _interopRequireDefault(_teachers3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import imgNinos from '../../niños.jpg'
(0, _reactDom.render)(_react2.default.createElement(_teachers4.default, { data: _teachers2.default }), document.getElementById('container'));
// import render from './render.js'

// import message from 'message.js'


console.log('Hola somos los teachers ' + _teachers2.default);

// data.teachers.forEach((teacher) => {
//   const element = document.createElement('li');
//   element.textContent = teacher.name;
//   render(element);
// });

// document.write('Hola mundo! webpack dev server -_-');
document.write(_message.firstMessage);
(0, _message.delayedMessage)();

/*const img = document.createElement('img');
img.setAttribute('src', imgNinos);
img.setAttribute('width', 300);
img.setAttribute('height', 300);
document.body.append(img);*/

console.log('Hola mundo! webpack dev server World ');

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _render = __webpack_require__(6);

var _render2 = _interopRequireDefault(_render);

var _makeMessage = __webpack_require__(7);

var _makeMessage2 = _interopRequireDefault(_makeMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mas info sobre Promise.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
var waitTime = new Promise(function (todoOk, todoMal) {
  setTimeout(function () {
    todoOk('Han pasado 3 segundos. :)');
  }, 3000);
});

module.exports = {
  firstMessage: 'Hola mundo desde un module',
  delayedMessage: async function delayedMessage() {
    var message = await waitTime;
    console.log(message);
    // const element = document.createElement('p');
    // element.textContent = message;
    (0, _render2.default)((0, _makeMessage2.default)(message));
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function render(element) {
  document.body.append(element);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function makeMessage(msg) {
  var element = document.createElement('p');
  element.textContent = msg;
  return element;
}

exports.default = makeMessage;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"teachers":[{"name":"John Serrano","twitter":"jandrey15"},{"name":"John Serrano 2","twitter":"jandrey156"},{"name":"John Serrano 3","twitter":"jandrey157"}]}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _teacher = __webpack_require__(10);

var _teacher2 = _interopRequireDefault(_teacher);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* mas info -> https://reactjs.org/docs/lists-and-keys.html */
var Teachers = function (_Component) {
  _inherits(Teachers, _Component);

  function Teachers() {
    _classCallCheck(this, Teachers);

    return _possibleConstructorReturn(this, (Teachers.__proto__ || Object.getPrototypeOf(Teachers)).apply(this, arguments));
  }

  _createClass(Teachers, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'teachers' },
        this.props.data.teachers.map(function (teacherData, index) {
          return _react2.default.createElement(_teacher2.default, _extends({ key: index }, teacherData));
        })
      );
    }
  }]);

  return Teachers;
}(_react.Component);

exports.default = Teachers;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Teacher(props) {
  return _react2.default.createElement(
    "li",
    { className: "teacher" },
    props.name,
    _react2.default.createElement(
      "a",
      { href: "https://twitter.com/" + props.twitter },
      props.twitter
    )
  );
} /* creando componente con react */
exports.default = Teacher;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);