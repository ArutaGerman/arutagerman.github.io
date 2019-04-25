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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/footer/footer.js":
/*!*************************************!*\
  !*** ./src/blocks/footer/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2Zvb3Rlci9mb290ZXIuanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/footer/footer.js\n");

/***/ }),

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/header/header.js\n");

/***/ }),

/***/ "./src/blocks/main/main.js":
/*!*********************************!*\
  !*** ./src/blocks/main/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Feedback carousel\n\n\nvar slider = function (config) {\n  var ClassName = {\n    INDICATOR_ACTIVE: 'slider__indicator_active',\n    ITEM: 'slider__item',\n    ITEM_LEFT: 'slider__item_left',\n    ITEM_RIGHT: 'slider__item_right',\n    ITEM_PREV: 'slider__item_prev',\n    ITEM_NEXT: 'slider__item_next',\n    ITEM_ACTIVE: 'slider__item_active'\n  };\n  var _isSliding = false,\n      // индикация процесса смены слайда\n  _interval = 0,\n      // числовой идентификатор таймера\n  _transitionDuration = 700,\n      // длительность перехода\n  _slider = {},\n      // DOM элемент слайдера\n  _items = {},\n      // .slider-item (массив слайдов) \n  _sliderIndicators = {},\n      // [data-slide-to] (индикаторы)\n  _config = {\n    selector: '',\n    // селектор слайдера\n    isCycling: true,\n    // автоматическая смена слайдов\n    direction: 'next',\n    // направление смены слайдов\n    interval: 5000,\n    // интервал между автоматической сменой слайдов\n    pause: true // устанавливать ли паузу при поднесении курсора к слайдеру\n\n  };\n\n  var // функция для получения порядкового индекса элемента\n  _getItemIndex = function _getItemIndex(_currentItem) {\n    var result;\n\n    _items.forEach(function (item, index) {\n      if (item === _currentItem) {\n        result = index;\n      }\n    });\n\n    return result;\n  },\n      // функция для подсветки активного индикатора\n  _setActiveIndicator = function _setActiveIndicator(_activeIndex, _targetIndex) {\n    if (_sliderIndicators.length !== _items.length) {\n      return;\n    }\n\n    _sliderIndicators[_activeIndex].classList.remove(ClassName.INDICATOR_ACTIVE);\n\n    _sliderIndicators[_targetIndex].classList.add(ClassName.INDICATOR_ACTIVE);\n  },\n      // функция для смены слайда\n  _slide = function _slide(direction, activeItemIndex, targetItemIndex) {\n    var directionalClassName = ClassName.ITEM_RIGHT,\n        orderClassName = ClassName.ITEM_PREV,\n        activeItem = _items[activeItemIndex],\n        // текущий элемент\n    targetItem = _items[targetItemIndex]; // следующий элемент\n\n    var _slideEndTransition = function _slideEndTransition() {\n      activeItem.classList.remove(ClassName.ITEM_ACTIVE);\n      activeItem.classList.remove(directionalClassName);\n      targetItem.classList.remove(orderClassName);\n      targetItem.classList.remove(directionalClassName);\n      targetItem.classList.add(ClassName.ITEM_ACTIVE);\n      window.setTimeout(function () {\n        if (_config.isCycling) {\n          clearInterval(_interval);\n\n          _cycle();\n        }\n\n        _isSliding = false;\n        activeItem.removeEventListener('transitionend', _slideEndTransition);\n      }, _transitionDuration);\n    };\n\n    if (_isSliding) {\n      return; // завершаем выполнение функции если идёт процесс смены слайда\n    }\n\n    _isSliding = true; // устанавливаем переменной значение true (идёт процесс смены слайда)\n\n    if (direction === \"next\") {\n      // устанавливаем значение классов в зависимости от направления\n      directionalClassName = ClassName.ITEM_LEFT;\n      orderClassName = ClassName.ITEM_NEXT;\n    }\n\n    targetItem.classList.add(orderClassName); // устанавливаем положение элемента перед трансформацией\n\n    _setActiveIndicator(activeItemIndex, targetItemIndex); // устанавливаем активный индикатор\n\n\n    window.setTimeout(function () {\n      // запускаем трансформацию\n      targetItem.classList.add(directionalClassName);\n      activeItem.classList.add(directionalClassName);\n      activeItem.addEventListener('transitionend', _slideEndTransition);\n    }, 0);\n  },\n      // функция для перехода к предыдущему или следующему слайду\n  _slideTo = function _slideTo(direction) {\n    var activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE),\n        // текущий элемент\n    activeItemIndex = _getItemIndex(activeItem),\n        // индекс текущего элемента \n    lastItemIndex = _items.length - 1,\n        // индекс последнего элемента\n    targetItemIndex = activeItemIndex === 0 ? lastItemIndex : activeItemIndex - 1;\n\n    if (direction === \"next\") {\n      // определяем индекс следующего слайда в зависимости от направления\n      targetItemIndex = activeItemIndex == lastItemIndex ? 0 : activeItemIndex + 1;\n    }\n\n    _slide(direction, activeItemIndex, targetItemIndex);\n  },\n      // функция для запуска автоматической смены слайдов в указанном направлении\n  _cycle = function _cycle() {\n    if (_config.isCycling) {\n      _interval = window.setInterval(function () {\n        _slideTo(_config.direction);\n      }, _config.interval);\n    }\n  },\n      // обработка события click\n  _actionClick = function _actionClick(e) {\n    var activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE),\n        // текущий элемент\n    activeItemIndex = _getItemIndex(activeItem),\n        // индекс текущего элемента\n    targetItemIndex = e.target.getAttribute('data-slide-to');\n\n    if (!(e.target.hasAttribute('data-slide-to') || e.target.classList.contains('slider__control'))) {\n      return; // завершаем если клик пришёлся на не соответствующие элементы\n    }\n\n    if (e.target.hasAttribute('data-slide-to')) {\n      // осуществляем переход на указанный сдайд \n      if (activeItemIndex === targetItemIndex) {\n        return;\n      }\n\n      _slide(targetItemIndex > activeItemIndex ? 'next' : 'prev', activeItemIndex, targetItemIndex);\n    } else {\n      e.preventDefault();\n\n      _slideTo(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');\n    }\n  },\n      // установка обработчиков событий\n  _setupListeners = function _setupListeners() {\n    // добавление к слайдеру обработчика события click\n    _slider.addEventListener('click', _actionClick); // остановка автоматической смены слайдов (при нахождении курсора над слайдером)\n\n\n    if (_config.pause && _config.isCycling) {\n      _slider.addEventListener('mouseenter', function (e) {\n        clearInterval(_interval);\n      });\n\n      _slider.addEventListener('mouseleave', function (e) {\n        clearInterval(_interval);\n\n        _cycle();\n      });\n    }\n  }; // init (инициализация слайдера)\n\n\n  for (var key in config) {\n    if (key in _config) {\n      _config[key] = config[key];\n    }\n  }\n\n  _slider = typeof _config.selector === 'string' ? document.querySelector(_config.selector) : _config.selector;\n  _items = _slider.querySelectorAll('.' + ClassName.ITEM);\n  _sliderIndicators = _slider.querySelectorAll('[data-slide-to]'); // запуск функции cycle\n\n  _cycle();\n\n  _setupListeners();\n\n  return {\n    next: function next() {\n      // метод next \n      _slideTo('next');\n    },\n    prev: function prev() {\n      // метод prev \n      _slideTo('prev');\n    },\n    stop: function stop() {\n      // метод stop\n      clearInterval(_interval);\n    },\n    cycle: function cycle() {\n      // метод cycle \n      clearInterval(_interval);\n\n      _cycle();\n    }\n  };\n}({\n  selector: '.slider',\n  isCycling: false,\n  direction: 'next',\n  interval: 5000,\n  pause: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21haW4vbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWFpbi9tYWluLmpzP2MwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmVlZGJhY2sgY2Fyb3VzZWxcbid1c2Ugc3RyaWN0JztcblxudmFyIHNsaWRlciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBJTkRJQ0FUT1JfQUNUSVZFOiAnc2xpZGVyX19pbmRpY2F0b3JfYWN0aXZlJyxcbiAgICBJVEVNOiAnc2xpZGVyX19pdGVtJyxcbiAgICBJVEVNX0xFRlQ6ICdzbGlkZXJfX2l0ZW1fbGVmdCcsXG4gICAgSVRFTV9SSUdIVDogJ3NsaWRlcl9faXRlbV9yaWdodCcsXG4gICAgSVRFTV9QUkVWOiAnc2xpZGVyX19pdGVtX3ByZXYnLFxuICAgIElURU1fTkVYVDogJ3NsaWRlcl9faXRlbV9uZXh0JyxcbiAgICBJVEVNX0FDVElWRTogJ3NsaWRlcl9faXRlbV9hY3RpdmUnXG4gIH07XG4gIHZhciBfaXNTbGlkaW5nID0gZmFsc2UsXG4gICAgICAvLyDQuNC90LTQuNC60LDRhtC40Y8g0L/RgNC+0YbQtdGB0YHQsCDRgdC80LXQvdGLINGB0LvQsNC50LTQsFxuICBfaW50ZXJ2YWwgPSAwLFxuICAgICAgLy8g0YfQuNGB0LvQvtCy0L7QuSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDRgtCw0LnQvNC10YDQsFxuICBfdHJhbnNpdGlvbkR1cmF0aW9uID0gNzAwLFxuICAgICAgLy8g0LTQu9C40YLQtdC70YzQvdC+0YHRgtGMINC/0LXRgNC10YXQvtC00LBcbiAgX3NsaWRlciA9IHt9LFxuICAgICAgLy8gRE9NINGN0LvQtdC80LXQvdGCINGB0LvQsNC50LTQtdGA0LBcbiAgX2l0ZW1zID0ge30sXG4gICAgICAvLyAuc2xpZGVyLWl0ZW0gKNC80LDRgdGB0LjQsiDRgdC70LDQudC00L7QsikgXG4gIF9zbGlkZXJJbmRpY2F0b3JzID0ge30sXG4gICAgICAvLyBbZGF0YS1zbGlkZS10b10gKNC40L3QtNC40LrQsNGC0L7RgNGLKVxuICBfY29uZmlnID0ge1xuICAgIHNlbGVjdG9yOiAnJyxcbiAgICAvLyDRgdC10LvQtdC60YLQvtGAINGB0LvQsNC50LTQtdGA0LBcbiAgICBpc0N5Y2xpbmc6IHRydWUsXG4gICAgLy8g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDRgdC80LXQvdCwINGB0LvQsNC50LTQvtCyXG4gICAgZGlyZWN0aW9uOiAnbmV4dCcsXG4gICAgLy8g0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDRgdC80LXQvdGLINGB0LvQsNC50LTQvtCyXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgLy8g0LjQvdGC0LXRgNCy0LDQuyDQvNC10LbQtNGDINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0Lkg0YHQvNC10L3QvtC5INGB0LvQsNC50LTQvtCyXG4gICAgcGF1c2U6IHRydWUgLy8g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNGC0Ywg0LvQuCDQv9Cw0YPQt9GDINC/0YDQuCDQv9C+0LTQvdC10YHQtdC90LjQuCDQutGD0YDRgdC+0YDQsCDQuiDRgdC70LDQudC00LXRgNGDXG5cbiAgfTtcblxuICB2YXIgLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQv9C+0YDRj9C00LrQvtCy0L7Qs9C+INC40L3QtNC10LrRgdCwINGN0LvQtdC80LXQvdGC0LBcbiAgX2dldEl0ZW1JbmRleCA9IGZ1bmN0aW9uIF9nZXRJdGVtSW5kZXgoX2N1cnJlbnRJdGVtKSB7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIF9pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgaWYgKGl0ZW0gPT09IF9jdXJyZW50SXRlbSkge1xuICAgICAgICByZXN1bHQgPSBpbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gICAgICAvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC00YHQstC10YLQutC4INCw0LrRgtC40LLQvdC+0LPQviDQuNC90LTQuNC60LDRgtC+0YDQsFxuICBfc2V0QWN0aXZlSW5kaWNhdG9yID0gZnVuY3Rpb24gX3NldEFjdGl2ZUluZGljYXRvcihfYWN0aXZlSW5kZXgsIF90YXJnZXRJbmRleCkge1xuICAgIGlmIChfc2xpZGVySW5kaWNhdG9ycy5sZW5ndGggIT09IF9pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfc2xpZGVySW5kaWNhdG9yc1tfYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLklORElDQVRPUl9BQ1RJVkUpO1xuXG4gICAgX3NsaWRlckluZGljYXRvcnNbX3RhcmdldEluZGV4XS5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5JTkRJQ0FUT1JfQUNUSVZFKTtcbiAgfSxcbiAgICAgIC8vINGE0YPQvdC60YbQuNGPINC00LvRjyDRgdC80LXQvdGLINGB0LvQsNC50LTQsFxuICBfc2xpZGUgPSBmdW5jdGlvbiBfc2xpZGUoZGlyZWN0aW9uLCBhY3RpdmVJdGVtSW5kZXgsIHRhcmdldEl0ZW1JbmRleCkge1xuICAgIHZhciBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5JVEVNX1JJR0hULFxuICAgICAgICBvcmRlckNsYXNzTmFtZSA9IENsYXNzTmFtZS5JVEVNX1BSRVYsXG4gICAgICAgIGFjdGl2ZUl0ZW0gPSBfaXRlbXNbYWN0aXZlSXRlbUluZGV4XSxcbiAgICAgICAgLy8g0YLQtdC60YPRidC40Lkg0Y3Qu9C10LzQtdC90YJcbiAgICB0YXJnZXRJdGVtID0gX2l0ZW1zW3RhcmdldEl0ZW1JbmRleF07IC8vINGB0LvQtdC00YPRjtGJ0LjQuSDRjdC70LXQvNC10L3RglxuXG4gICAgdmFyIF9zbGlkZUVuZFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfc2xpZGVFbmRUcmFuc2l0aW9uKCkge1xuICAgICAgYWN0aXZlSXRlbS5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5JVEVNX0FDVElWRSk7XG4gICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgdGFyZ2V0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKG9yZGVyQ2xhc3NOYW1lKTtcbiAgICAgIHRhcmdldEl0ZW0uY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICB0YXJnZXRJdGVtLmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLklURU1fQUNUSVZFKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9jb25maWcuaXNDeWNsaW5nKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChfaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgX2N5Y2xlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfaXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9zbGlkZUVuZFRyYW5zaXRpb24pO1xuICAgICAgfSwgX3RyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfTtcblxuICAgIGlmIChfaXNTbGlkaW5nKSB7XG4gICAgICByZXR1cm47IC8vINC30LDQstC10YDRiNCw0LXQvCDQstGL0L/QvtC70L3QtdC90LjQtSDRhNGD0L3QutGG0LjQuCDQtdGB0LvQuCDQuNC00ZHRgiDQv9GA0L7RhtC10YHRgSDRgdC80LXQvdGLINGB0LvQsNC50LTQsFxuICAgIH1cblxuICAgIF9pc1NsaWRpbmcgPSB0cnVlOyAvLyDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9C10YDQtdC80LXQvdC90L7QuSDQt9C90LDRh9C10L3QuNC1IHRydWUgKNC40LTRkdGCINC/0YDQvtGG0LXRgdGBINGB0LzQtdC90Ysg0YHQu9Cw0LnQtNCwKVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICAgIC8vINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0LrQu9Cw0YHRgdC+0LIg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC90LDQv9GA0LDQstC70LXQvdC40Y9cbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLklURU1fTEVGVDtcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLklURU1fTkVYVDtcbiAgICB9XG5cbiAgICB0YXJnZXRJdGVtLmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpOyAvLyDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9C+0LvQvtC20LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQsCDQv9C10YDQtdC0INGC0YDQsNC90YHRhNC+0YDQvNCw0YbQuNC10LlcblxuICAgIF9zZXRBY3RpdmVJbmRpY2F0b3IoYWN0aXZlSXRlbUluZGV4LCB0YXJnZXRJdGVtSW5kZXgpOyAvLyDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC40L3QtNC40LrQsNGC0L7RgFxuXG5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0YLRgNCw0L3RgdGE0L7RgNC80LDRhtC40Y5cbiAgICAgIHRhcmdldEl0ZW0uY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICBhY3RpdmVJdGVtLmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgYWN0aXZlSXRlbS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX3NsaWRlRW5kVHJhbnNpdGlvbik7XG4gICAgfSwgMCk7XG4gIH0sXG4gICAgICAvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QtdGA0LXRhdC+0LTQsCDQuiDQv9GA0LXQtNGL0LTRg9GJ0LXQvNGDINC40LvQuCDRgdC70LXQtNGD0Y7RidC10LzRgyDRgdC70LDQudC00YNcbiAgX3NsaWRlVG8gPSBmdW5jdGlvbiBfc2xpZGVUbyhkaXJlY3Rpb24pIHtcbiAgICB2YXIgYWN0aXZlSXRlbSA9IF9zbGlkZXIucXVlcnlTZWxlY3RvcignLicgKyBDbGFzc05hbWUuSVRFTV9BQ1RJVkUpLFxuICAgICAgICAvLyDRgtC10LrRg9GJ0LjQuSDRjdC70LXQvNC10L3RglxuICAgIGFjdGl2ZUl0ZW1JbmRleCA9IF9nZXRJdGVtSW5kZXgoYWN0aXZlSXRlbSksXG4gICAgICAgIC8vINC40L3QtNC10LrRgSDRgtC10LrRg9GJ0LXQs9C+INGN0LvQtdC80LXQvdGC0LAgXG4gICAgbGFzdEl0ZW1JbmRleCA9IF9pdGVtcy5sZW5ndGggLSAxLFxuICAgICAgICAvLyDQuNC90LTQtdC60YEg0L/QvtGB0LvQtdC00L3QtdCz0L4g0Y3Qu9C10LzQtdC90YLQsFxuICAgIHRhcmdldEl0ZW1JbmRleCA9IGFjdGl2ZUl0ZW1JbmRleCA9PT0gMCA/IGxhc3RJdGVtSW5kZXggOiBhY3RpdmVJdGVtSW5kZXggLSAxO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICAgIC8vINC+0L/RgNC10LTQtdC70Y/QtdC8INC40L3QtNC10LrRgSDRgdC70LXQtNGD0Y7RidC10LPQviDRgdC70LDQudC00LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC90LDQv9GA0LDQstC70LXQvdC40Y9cbiAgICAgIHRhcmdldEl0ZW1JbmRleCA9IGFjdGl2ZUl0ZW1JbmRleCA9PSBsYXN0SXRlbUluZGV4ID8gMCA6IGFjdGl2ZUl0ZW1JbmRleCArIDE7XG4gICAgfVxuXG4gICAgX3NsaWRlKGRpcmVjdGlvbiwgYWN0aXZlSXRlbUluZGV4LCB0YXJnZXRJdGVtSW5kZXgpO1xuICB9LFxuICAgICAgLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINC30LDQv9GD0YHQutCwINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0Lkg0YHQvNC10L3RiyDRgdC70LDQudC00L7QsiDQsiDRg9C60LDQt9Cw0L3QvdC+0Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQuFxuICBfY3ljbGUgPSBmdW5jdGlvbiBfY3ljbGUoKSB7XG4gICAgaWYgKF9jb25maWcuaXNDeWNsaW5nKSB7XG4gICAgICBfaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBfc2xpZGVUbyhfY29uZmlnLmRpcmVjdGlvbik7XG4gICAgICB9LCBfY29uZmlnLmludGVydmFsKTtcbiAgICB9XG4gIH0sXG4gICAgICAvLyDQvtCx0YDQsNCx0L7RgtC60LAg0YHQvtCx0YvRgtC40Y8gY2xpY2tcbiAgX2FjdGlvbkNsaWNrID0gZnVuY3Rpb24gX2FjdGlvbkNsaWNrKGUpIHtcbiAgICB2YXIgYWN0aXZlSXRlbSA9IF9zbGlkZXIucXVlcnlTZWxlY3RvcignLicgKyBDbGFzc05hbWUuSVRFTV9BQ1RJVkUpLFxuICAgICAgICAvLyDRgtC10LrRg9GJ0LjQuSDRjdC70LXQvNC10L3RglxuICAgIGFjdGl2ZUl0ZW1JbmRleCA9IF9nZXRJdGVtSW5kZXgoYWN0aXZlSXRlbSksXG4gICAgICAgIC8vINC40L3QtNC10LrRgSDRgtC10LrRg9GJ0LXQs9C+INGN0LvQtdC80LXQvdGC0LBcbiAgICB0YXJnZXRJdGVtSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKTtcblxuICAgIGlmICghKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sJykpKSB7XG4gICAgICByZXR1cm47IC8vINC30LDQstC10YDRiNCw0LXQvCDQtdGB0LvQuCDQutC70LjQuiDQv9GA0LjRiNGR0LvRgdGPINC90LAg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40LUg0Y3Qu9C10LzQtdC90YLRi1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKSkge1xuICAgICAgLy8g0L7RgdGD0YnQtdGB0YLQstC70Y/QtdC8INC/0LXRgNC10YXQvtC0INC90LAg0YPQutCw0LfQsNC90L3Ri9C5INGB0LTQsNC50LQgXG4gICAgICBpZiAoYWN0aXZlSXRlbUluZGV4ID09PSB0YXJnZXRJdGVtSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfc2xpZGUodGFyZ2V0SXRlbUluZGV4ID4gYWN0aXZlSXRlbUluZGV4ID8gJ25leHQnIDogJ3ByZXYnLCBhY3RpdmVJdGVtSW5kZXgsIHRhcmdldEl0ZW1JbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3NsaWRlVG8oZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2xfbmV4dCcpID8gJ25leHQnIDogJ3ByZXYnKTtcbiAgICB9XG4gIH0sXG4gICAgICAvLyDRg9GB0YLQsNC90L7QstC60LAg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINGB0L7QsdGL0YLQuNC5XG4gIF9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQuiDRgdC70LDQudC00LXRgNGDINC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0YHQvtCx0YvRgtC40Y8gY2xpY2tcbiAgICBfc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2FjdGlvbkNsaWNrKTsgLy8g0L7RgdGC0LDQvdC+0LLQutCwINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0Lkg0YHQvNC10L3RiyDRgdC70LDQudC00L7QsiAo0L/RgNC4INC90LDRhdC+0LbQtNC10L3QuNC4INC60YPRgNGB0L7RgNCwINC90LDQtCDRgdC70LDQudC00LXRgNC+0LwpXG5cblxuICAgIGlmIChfY29uZmlnLnBhdXNlICYmIF9jb25maWcuaXNDeWNsaW5nKSB7XG4gICAgICBfc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XG4gICAgICB9KTtcblxuICAgICAgX3NsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfaW50ZXJ2YWwpO1xuXG4gICAgICAgIF9jeWNsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9OyAvLyBpbml0ICjQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00LXRgNCwKVxuXG5cbiAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xuICAgIGlmIChrZXkgaW4gX2NvbmZpZykge1xuICAgICAgX2NvbmZpZ1trZXldID0gY29uZmlnW2tleV07XG4gICAgfVxuICB9XG5cbiAgX3NsaWRlciA9IHR5cGVvZiBfY29uZmlnLnNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX2NvbmZpZy5zZWxlY3RvcikgOiBfY29uZmlnLnNlbGVjdG9yO1xuICBfaXRlbXMgPSBfc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQ2xhc3NOYW1lLklURU0pO1xuICBfc2xpZGVySW5kaWNhdG9ycyA9IF9zbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGUtdG9dJyk7IC8vINC30LDQv9GD0YHQuiDRhNGD0L3QutGG0LjQuCBjeWNsZVxuXG4gIF9jeWNsZSgpO1xuXG4gIF9zZXR1cExpc3RlbmVycygpO1xuXG4gIHJldHVybiB7XG4gICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIC8vINC80LXRgtC+0LQgbmV4dCBcbiAgICAgIF9zbGlkZVRvKCduZXh0Jyk7XG4gICAgfSxcbiAgICBwcmV2OiBmdW5jdGlvbiBwcmV2KCkge1xuICAgICAgLy8g0LzQtdGC0L7QtCBwcmV2IFxuICAgICAgX3NsaWRlVG8oJ3ByZXYnKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAvLyDQvNC10YLQvtC0IHN0b3BcbiAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcbiAgICB9LFxuICAgIGN5Y2xlOiBmdW5jdGlvbiBjeWNsZSgpIHtcbiAgICAgIC8vINC80LXRgtC+0LQgY3ljbGUgXG4gICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XG5cbiAgICAgIF9jeWNsZSgpO1xuICAgIH1cbiAgfTtcbn0oe1xuICBzZWxlY3RvcjogJy5zbGlkZXInLFxuICBpc0N5Y2xpbmc6IGZhbHNlLFxuICBkaXJlY3Rpb246ICduZXh0JyxcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIHBhdXNlOiB0cnVlXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/main/main.js\n");

/***/ }),

/***/ "./src/js/import/blocks.js":
/*!*********************************!*\
  !*** ./src/js/import/blocks.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %blocks%/header/header.js */ \"./src/blocks/header/header.js\");\n/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %blocks%/footer/footer.js */ \"./src/blocks/footer/footer.js\");\n/* harmony import */ var _blocks_footer_footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blocks_main_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %blocks%/main/main.js */ \"./src/blocks/main/main.js\");\n/* harmony import */ var _blocks_main_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_main_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L2Jsb2Nrcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9pbXBvcnQvYmxvY2tzLmpzPzU0MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiJWJsb2NrcyUvaGVhZGVyL2hlYWRlci5qc1wiO1xuaW1wb3J0IFwiJWJsb2NrcyUvZm9vdGVyL2Zvb3Rlci5qc1wiO1xuaW1wb3J0IFwiJWJsb2NrcyUvbWFpbi9tYWluLmpzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/import/blocks.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _import_blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/blocks.js */ \"./src/js/import/blocks.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2ltcG9ydC9ibG9ja3MuanNcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });