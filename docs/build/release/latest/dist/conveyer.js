/*
Copyright (c) 2022-present NAVER Corp.
name: @egjs/conveyer
license: MIT
author: NAVER Crop.
repository: https://github.com/naver/egjs-conveyer
version: 0.1.0
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Conveyer = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }

    /*! Hammer.JS - v2.0.17-rc - 2019-12-16
     * http://naver.github.io/egjs
     *
     * Forked By Naver egjs
     * Copyright (c) hammerjs
     * Licensed under the MIT license */
    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    /**
     * @private
     * extend object.
     * means that properties in dest will be overwritten by the ones in src.
     * @param {Object} target
     * @param {...Object} objects_to_assign
     * @returns {Object} target
     */
    var assign;

    if (typeof Object.assign !== 'function') {
      assign = function assign(target) {
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];

          if (source !== undefined && source !== null) {
            for (var nextKey in source) {
              if (source.hasOwnProperty(nextKey)) {
                output[nextKey] = source[nextKey];
              }
            }
          }
        }

        return output;
      };
    } else {
      assign = Object.assign;
    }

    var assign$1 = assign;

    var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
    var TEST_ELEMENT = typeof document === "undefined" ? {
      style: {}
    } : document.createElement('div');
    var TYPE_FUNCTION = 'function';
    var round = Math.round,
        abs = Math.abs;
    var now = Date.now;

    /**
     * @private
     * get the prefixed property
     * @param {Object} obj
     * @param {String} property
     * @returns {String|Undefined} prefixed
     */

    function prefixed(obj, property) {
      var prefix;
      var prop;
      var camelProp = property[0].toUpperCase() + property.slice(1);
      var i = 0;

      while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = prefix ? prefix + camelProp : property;

        if (prop in obj) {
          return prop;
        }

        i++;
      }

      return undefined;
    }

    /* eslint-disable no-new-func, no-nested-ternary */
    var win;

    if (typeof window === "undefined") {
      // window is undefined in node.js
      win = {};
    } else {
      win = window;
    }

    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
    function getTouchActionProps() {
      if (!NATIVE_TOUCH_ACTION) {
        return false;
      }

      var touchMap = {};
      var cssSupports = win.CSS && win.CSS.supports;
      ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        return touchMap[val] = cssSupports ? win.CSS.supports('touch-action', val) : true;
      });
      return touchMap;
    }

    var TOUCH_ACTION_COMPUTE = 'compute';
    var TOUCH_ACTION_AUTO = 'auto';
    var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

    var TOUCH_ACTION_NONE = 'none';
    var TOUCH_ACTION_PAN_X = 'pan-x';
    var TOUCH_ACTION_PAN_Y = 'pan-y';
    var TOUCH_ACTION_MAP = getTouchActionProps();

    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    var SUPPORT_TOUCH = 'ontouchstart' in win;
    var SUPPORT_POINTER_EVENTS = prefixed(win, 'PointerEvent') !== undefined;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
    var INPUT_TYPE_TOUCH = 'touch';
    var INPUT_TYPE_PEN = 'pen';
    var INPUT_TYPE_MOUSE = 'mouse';
    var INPUT_TYPE_KINECT = 'kinect';
    var COMPUTE_INTERVAL = 25;
    var INPUT_START = 1;
    var INPUT_MOVE = 2;
    var INPUT_END = 4;
    var INPUT_CANCEL = 8;
    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;
    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
    var PROPS_XY = ['x', 'y'];
    var PROPS_CLIENT_XY = ['clientX', 'clientY'];

    /**
     * @private
     * walk objects and arrays
     * @param {Object} obj
     * @param {Function} iterator
     * @param {Object} context
     */
    function each(obj, iterator, context) {
      var i;

      if (!obj) {
        return;
      }

      if (obj.forEach) {
        obj.forEach(iterator, context);
      } else if (obj.length !== undefined) {
        i = 0;

        while (i < obj.length) {
          iterator.call(context, obj[i], i, obj);
          i++;
        }
      } else {
        for (i in obj) {
          obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
      }
    }

    /**
     * @private
     * let a boolean value also be a function that must return a boolean
     * this first item in args will be used as the context
     * @param {Boolean|Function} val
     * @param {Array} [args]
     * @returns {Boolean}
     */

    function boolOrFn(val, args) {
      if (typeof val === TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
      }

      return val;
    }

    /**
     * @private
     * small indexOf wrapper
     * @param {String} str
     * @param {String} find
     * @returns {Boolean} found
     */
    function inStr(str, find) {
      return str.indexOf(find) > -1;
    }

    /**
     * @private
     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
     * @param {String} actions
     * @returns {*}
     */

    function cleanTouchActions(actions) {
      // none
      if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
      }

      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
      // for different directions, e.g. horizontal pan but vertical swipe?)
      // we need none (as otherwise with pan-x pan-y combined none of these
      // recognizers will work, since the browser would handle all panning

      if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
      } // pan-x OR pan-y


      if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
      } // manipulation


      if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
      }

      return TOUCH_ACTION_AUTO;
    }

    /**
     * @private
     * Touch Action
     * sets the touchAction property or uses the js alternative
     * @param {Manager} manager
     * @param {String} value
     * @constructor
     */

    var TouchAction =
    /*#__PURE__*/
    function () {
      function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
      }
      /**
       * @private
       * set the touchAction value on the element or enable the polyfill
       * @param {String} value
       */


      var _proto = TouchAction.prototype;

      _proto.set = function set(value) {
        // find out the touch-action by the event handlers
        if (value === TOUCH_ACTION_COMPUTE) {
          value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
          this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }

        this.actions = value.toLowerCase().trim();
      };
      /**
       * @private
       * just re-set the touchAction value
       */


      _proto.update = function update() {
        this.set(this.manager.options.touchAction);
      };
      /**
       * @private
       * compute the value for the touchAction property based on the recognizer's settings
       * @returns {String} value
       */


      _proto.compute = function compute() {
        var actions = [];
        each(this.manager.recognizers, function (recognizer) {
          if (boolOrFn(recognizer.options.enable, [recognizer])) {
            actions = actions.concat(recognizer.getTouchAction());
          }
        });
        return cleanTouchActions(actions.join(' '));
      };
      /**
       * @private
       * this method is called on each input cycle and provides the preventing of the browser behavior
       * @param {Object} input
       */


      _proto.preventDefaults = function preventDefaults(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection; // if the touch action did prevented once this session

        if (this.manager.session.prevented) {
          srcEvent.preventDefault();
          return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
          // do not prevent defaults if this is a tap gesture
          var isTapPointer = input.pointers.length === 1;
          var isTapMovement = input.distance < 2;
          var isTapTouchTime = input.deltaTime < 250;

          if (isTapPointer && isTapMovement && isTapTouchTime) {
            return;
          }
        }

        if (hasPanX && hasPanY) {
          // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
          return;
        }

        if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
          return this.preventSrc(srcEvent);
        }
      };
      /**
       * @private
       * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
       * @param {Object} srcEvent
       */


      _proto.preventSrc = function preventSrc(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
      };

      return TouchAction;
    }();

    /**
     * @private
     * find if a node is in the given parent
     * @method hasParent
     * @param {HTMLElement} node
     * @param {HTMLElement} parent
     * @return {Boolean} found
     */
    function hasParent(node, parent) {
      while (node) {
        if (node === parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }

    /**
     * @private
     * get the center of all the pointers
     * @param {Array} pointers
     * @return {Object} center contains `x` and `y` properties
     */

    function getCenter(pointers) {
      var pointersLength = pointers.length; // no need to loop when only one touch

      if (pointersLength === 1) {
        return {
          x: round(pointers[0].clientX),
          y: round(pointers[0].clientY)
        };
      }

      var x = 0;
      var y = 0;
      var i = 0;

      while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
      }

      return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
      };
    }

    /**
     * @private
     * create a simple clone from the input used for storage of firstInput and firstMultiple
     * @param {Object} input
     * @returns {Object} clonedInputData
     */

    function simpleCloneInputData(input) {
      // make a simple copy of the pointers because we will get a reference if we don't
      // we only need clientXY for the calculations
      var pointers = [];
      var i = 0;

      while (i < input.pointers.length) {
        pointers[i] = {
          clientX: round(input.pointers[i].clientX),
          clientY: round(input.pointers[i].clientY)
        };
        i++;
      }

      return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
      };
    }

    /**
     * @private
     * calculate the absolute distance between two points
     * @param {Object} p1 {x, y}
     * @param {Object} p2 {x, y}
     * @param {Array} [props] containing x and y keys
     * @return {Number} distance
     */

    function getDistance(p1, p2, props) {
      if (!props) {
        props = PROPS_XY;
      }

      var x = p2[props[0]] - p1[props[0]];
      var y = p2[props[1]] - p1[props[1]];
      return Math.sqrt(x * x + y * y);
    }

    /**
     * @private
     * calculate the angle between two coordinates
     * @param {Object} p1
     * @param {Object} p2
     * @param {Array} [props] containing x and y keys
     * @return {Number} angle
     */

    function getAngle(p1, p2, props) {
      if (!props) {
        props = PROPS_XY;
      }

      var x = p2[props[0]] - p1[props[0]];
      var y = p2[props[1]] - p1[props[1]];
      return Math.atan2(y, x) * 180 / Math.PI;
    }

    /**
     * @private
     * get the direction between two points
     * @param {Number} x
     * @param {Number} y
     * @return {Number} direction
     */

    function getDirection(x, y) {
      if (x === y) {
        return DIRECTION_NONE;
      }

      if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }

    function computeDeltaXY(session, input) {
      var center = input.center; // let { offsetDelta:offset = {}, prevDelta = {}, prevInput = {} } = session;
      // jscs throwing error on defalut destructured values and without defaults tests fail

      var offset = session.offsetDelta || {};
      var prevDelta = session.prevDelta || {};
      var prevInput = session.prevInput || {};

      if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
          x: prevInput.deltaX || 0,
          y: prevInput.deltaY || 0
        };
        offset = session.offsetDelta = {
          x: center.x,
          y: center.y
        };
      }

      input.deltaX = prevDelta.x + (center.x - offset.x);
      input.deltaY = prevDelta.y + (center.y - offset.y);
    }

    /**
     * @private
     * calculate the velocity between two points. unit is in px per ms.
     * @param {Number} deltaTime
     * @param {Number} x
     * @param {Number} y
     * @return {Object} velocity `x` and `y`
     */
    function getVelocity(deltaTime, x, y) {
      return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
      };
    }

    /**
     * @private
     * calculate the scale factor between two pointersets
     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} scale
     */

    function getScale(start, end) {
      return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }

    /**
     * @private
     * calculate the rotation degrees between two pointersets
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} rotation
     */

    function getRotation(start, end) {
      return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }

    /**
     * @private
     * velocity is calculated every x ms
     * @param {Object} session
     * @param {Object} input
     */

    function computeIntervalInputData(session, input) {
      var last = session.lastInterval || input;
      var deltaTime = input.timeStamp - last.timeStamp;
      var velocity;
      var velocityX;
      var velocityY;
      var direction;

      if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;
        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);
        session.lastInterval = input;
      } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
      }

      input.velocity = velocity;
      input.velocityX = velocityX;
      input.velocityY = velocityY;
      input.direction = direction;
    }

    /**
    * @private
     * extend the data with some usable properties like scale, rotate, velocity etc
     * @param {Object} manager
     * @param {Object} input
     */

    function computeInputData(manager, input) {
      var session = manager.session;
      var pointers = input.pointers;
      var pointersLength = pointers.length; // store the first input to calculate the distance and direction

      if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
      } // to compute scale and rotation we need to store the multiple touches


      if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
      } else if (pointersLength === 1) {
        session.firstMultiple = false;
      }

      var firstInput = session.firstInput,
          firstMultiple = session.firstMultiple;
      var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
      var center = input.center = getCenter(pointers);
      input.timeStamp = now();
      input.deltaTime = input.timeStamp - firstInput.timeStamp;
      input.angle = getAngle(offsetCenter, center);
      input.distance = getDistance(offsetCenter, center);
      computeDeltaXY(session, input);
      input.offsetDirection = getDirection(input.deltaX, input.deltaY);
      var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
      input.overallVelocityX = overallVelocity.x;
      input.overallVelocityY = overallVelocity.y;
      input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
      input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
      input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
      input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
      computeIntervalInputData(session, input); // find the correct target

      var target = manager.element;
      var srcEvent = input.srcEvent;
      var srcEventTarget;

      if (srcEvent.composedPath) {
        srcEventTarget = srcEvent.composedPath()[0];
      } else if (srcEvent.path) {
        srcEventTarget = srcEvent.path[0];
      } else {
        srcEventTarget = srcEvent.target;
      }

      if (hasParent(srcEventTarget, target)) {
        target = srcEventTarget;
      }

      input.target = target;
    }

    /**
     * @private
     * handle input events
     * @param {Manager} manager
     * @param {String} eventType
     * @param {Object} input
     */

    function inputHandler(manager, eventType, input) {
      var pointersLen = input.pointers.length;
      var changedPointersLen = input.changedPointers.length;
      var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
      var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
      input.isFirst = !!isFirst;
      input.isFinal = !!isFinal;

      if (isFirst) {
        manager.session = {};
      } // source event is the normalized value of the domEvents
      // like 'touchstart, mouseup, pointerdown'


      input.eventType = eventType; // compute scale, rotation etc

      computeInputData(manager, input); // emit secret event

      manager.emit('hammer.input', input);
      manager.recognize(input);
      manager.session.prevInput = input;
    }

    /**
     * @private
     * split string on whitespace
     * @param {String} str
     * @returns {Array} words
     */
    function splitStr(str) {
      return str.trim().split(/\s+/g);
    }

    /**
     * @private
     * addEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */

    function addEventListeners(target, types, handler) {
      each(splitStr(types), function (type) {
        target.addEventListener(type, handler, false);
      });
    }

    /**
     * @private
     * removeEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */

    function removeEventListeners(target, types, handler) {
      each(splitStr(types), function (type) {
        target.removeEventListener(type, handler, false);
      });
    }

    /**
     * @private
     * get the window object of an element
     * @param {HTMLElement} element
     * @returns {DocumentView|Window}
     */
    function getWindowForElement(element) {
      var doc = element.ownerDocument || element;
      return doc.defaultView || doc.parentWindow || window;
    }

    /**
     * @private
     * create new input type manager
     * @param {Manager} manager
     * @param {Function} callback
     * @returns {Input}
     * @constructor
     */

    var Input =
    /*#__PURE__*/
    function () {
      function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.

        this.domHandler = function (ev) {
          if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
          }
        };

        this.init();
      }
      /**
       * @private
       * should handle the inputEvent data and trigger the callback
       * @virtual
       */


      var _proto = Input.prototype;

      _proto.handler = function handler() {};
      /**
       * @private
       * bind the events
       */


      _proto.init = function init() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
      };
      /**
       * @private
       * unbind the events
       */


      _proto.destroy = function destroy() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
      };

      return Input;
    }();

    /**
     * @private
     * find if a array contains the object using indexOf or a simple polyFill
     * @param {Array} src
     * @param {String} find
     * @param {String} [findByKey]
     * @return {Boolean|Number} false when not found, or the index
     */
    function inArray(src, find, findByKey) {
      if (src.indexOf && !findByKey) {
        return src.indexOf(find);
      } else {
        var i = 0;

        while (i < src.length) {
          if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
            // do not use === here, test fails
            return i;
          }

          i++;
        }

        return -1;
      }
    }

    var POINTER_INPUT_MAP = {
      pointerdown: INPUT_START,
      pointermove: INPUT_MOVE,
      pointerup: INPUT_END,
      pointercancel: INPUT_CANCEL,
      pointerout: INPUT_CANCEL
    }; // in IE10 the pointer types is defined as an enum

    var IE10_POINTER_TYPE_ENUM = {
      2: INPUT_TYPE_TOUCH,
      3: INPUT_TYPE_PEN,
      4: INPUT_TYPE_MOUSE,
      5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

    };
    var POINTER_ELEMENT_EVENTS = 'pointerdown';
    var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

    if (win.MSPointerEvent && !win.PointerEvent) {
      POINTER_ELEMENT_EVENTS = 'MSPointerDown';
      POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
    }
    /**
     * @private
     * Pointer events input
     * @constructor
     * @extends Input
     */


    var PointerEventInput =
    /*#__PURE__*/
    function (_Input) {
      _inheritsLoose(PointerEventInput, _Input);

      function PointerEventInput() {
        var _this;

        var proto = PointerEventInput.prototype;
        proto.evEl = POINTER_ELEMENT_EVENTS;
        proto.evWin = POINTER_WINDOW_EVENTS;
        _this = _Input.apply(this, arguments) || this;
        _this.store = _this.manager.session.pointerEvents = [];
        return _this;
      }
      /**
       * @private
       * handle mouse events
       * @param {Object} ev
       */


      var _proto = PointerEventInput.prototype;

      _proto.handler = function handler(ev) {
        var store = this.store;
        var removePointer = false;
        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
        var isTouch = pointerType === INPUT_TYPE_TOUCH; // get index of the event in the store

        var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
          if (storeIndex < 0) {
            store.push(ev);
            storeIndex = store.length - 1;
          }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
          removePointer = true;
        } // it not found, so the pointer hasn't been down (so it's probably a hover)


        if (storeIndex < 0) {
          return;
        } // update the event in the store


        store[storeIndex] = ev;
        this.callback(this.manager, eventType, {
          pointers: store,
          changedPointers: [ev],
          pointerType: pointerType,
          srcEvent: ev
        });

        if (removePointer) {
          // remove from the store
          store.splice(storeIndex, 1);
        }
      };

      return PointerEventInput;
    }(Input);

    /**
     * @private
     * convert array-like objects to real arrays
     * @param {Object} obj
     * @returns {Array}
     */
    function toArray(obj) {
      return Array.prototype.slice.call(obj, 0);
    }

    /**
     * @private
     * unique array with objects based on a key (like 'id') or just by the array's value
     * @param {Array} src [{id:1},{id:2},{id:1}]
     * @param {String} [key]
     * @param {Boolean} [sort=False]
     * @returns {Array} [{id:1},{id:2}]
     */

    function uniqueArray(src, key, sort) {
      var results = [];
      var values = [];
      var i = 0;

      while (i < src.length) {
        var val = key ? src[i][key] : src[i];

        if (inArray(values, val) < 0) {
          results.push(src[i]);
        }

        values[i] = val;
        i++;
      }

      if (sort) {
        if (!key) {
          results = results.sort();
        } else {
          results = results.sort(function (a, b) {
            return a[key] > b[key];
          });
        }
      }

      return results;
    }

    var TOUCH_INPUT_MAP = {
      touchstart: INPUT_START,
      touchmove: INPUT_MOVE,
      touchend: INPUT_END,
      touchcancel: INPUT_CANCEL
    };
    var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
    /**
     * @private
     * Multi-user touch events input
     * @constructor
     * @extends Input
     */

    var TouchInput =
    /*#__PURE__*/
    function (_Input) {
      _inheritsLoose(TouchInput, _Input);

      function TouchInput() {
        var _this;

        TouchInput.prototype.evTarget = TOUCH_TARGET_EVENTS;
        _this = _Input.apply(this, arguments) || this;
        _this.targetIds = {}; // this.evTarget = TOUCH_TARGET_EVENTS;

        return _this;
      }

      var _proto = TouchInput.prototype;

      _proto.handler = function handler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);

        if (!touches) {
          return;
        }

        this.callback(this.manager, type, {
          pointers: touches[0],
          changedPointers: touches[1],
          pointerType: INPUT_TYPE_TOUCH,
          srcEvent: ev
        });
      };

      return TouchInput;
    }(Input);

    function getTouches(ev, type) {
      var allTouches = toArray(ev.touches);
      var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

      if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
      }

      var i;
      var targetTouches;
      var changedTouches = toArray(ev.changedTouches);
      var changedTargetTouches = [];
      var target = this.target; // get target touches from touches

      targetTouches = allTouches.filter(function (touch) {
        return hasParent(touch.target, target);
      }); // collect touches

      if (type === INPUT_START) {
        i = 0;

        while (i < targetTouches.length) {
          targetIds[targetTouches[i].identifier] = true;
          i++;
        }
      } // filter changed touches to only contain touches that exist in the collected target ids


      i = 0;

      while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
          changedTargetTouches.push(changedTouches[i]);
        } // cleanup removed touches


        if (type & (INPUT_END | INPUT_CANCEL)) {
          delete targetIds[changedTouches[i].identifier];
        }

        i++;
      }

      if (!changedTargetTouches.length) {
        return;
      }

      return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
      uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
    }

    var MOUSE_INPUT_MAP = {
      mousedown: INPUT_START,
      mousemove: INPUT_MOVE,
      mouseup: INPUT_END
    };
    var MOUSE_ELEMENT_EVENTS = 'mousedown';
    var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
    /**
     * @private
     * Mouse events input
     * @constructor
     * @extends Input
     */

    var MouseInput =
    /*#__PURE__*/
    function (_Input) {
      _inheritsLoose(MouseInput, _Input);

      function MouseInput() {
        var _this;

        var proto = MouseInput.prototype;
        proto.evEl = MOUSE_ELEMENT_EVENTS;
        proto.evWin = MOUSE_WINDOW_EVENTS;
        _this = _Input.apply(this, arguments) || this;
        _this.pressed = false; // mousedown state

        return _this;
      }
      /**
       * @private
       * handle mouse events
       * @param {Object} ev
       */


      var _proto = MouseInput.prototype;

      _proto.handler = function handler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

        if (eventType & INPUT_START && ev.button === 0) {
          this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
          eventType = INPUT_END;
        } // mouse must be down


        if (!this.pressed) {
          return;
        }

        if (eventType & INPUT_END) {
          this.pressed = false;
        }

        this.callback(this.manager, eventType, {
          pointers: [ev],
          changedPointers: [ev],
          pointerType: INPUT_TYPE_MOUSE,
          srcEvent: ev
        });
      };

      return MouseInput;
    }(Input);

    /**
     * @private
     * Combined touch and mouse input
     *
     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
     * This because touch devices also emit mouse events while doing a touch.
     *
     * @constructor
     * @extends Input
     */

    var DEDUP_TIMEOUT = 2500;
    var DEDUP_DISTANCE = 25;

    function setLastTouch(eventData) {
      var _eventData$changedPoi = eventData.changedPointers,
          touch = _eventData$changedPoi[0];

      if (touch.identifier === this.primaryTouch) {
        var lastTouch = {
          x: touch.clientX,
          y: touch.clientY
        };
        var lts = this.lastTouches;
        this.lastTouches.push(lastTouch);

        var removeLastTouch = function removeLastTouch() {
          var i = lts.indexOf(lastTouch);

          if (i > -1) {
            lts.splice(i, 1);
          }
        };

        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
      }
    }

    function recordTouches(eventType, eventData) {
      if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
      }
    }

    function isSyntheticEvent(eventData) {
      var x = eventData.srcEvent.clientX;
      var y = eventData.srcEvent.clientY;

      for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x);
        var dy = Math.abs(y - t.y);

        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
          return true;
        }
      }

      return false;
    }

    var TouchMouseInput =
    /*#__PURE__*/
    function () {
      var TouchMouseInput =
      /*#__PURE__*/
      function (_Input) {
        _inheritsLoose(TouchMouseInput, _Input);

        function TouchMouseInput(_manager, callback) {
          var _this;

          _this = _Input.call(this, _manager, callback) || this;

          _this.handler = function (manager, inputEvent, inputData) {
            var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
            var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;

            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
              return;
            } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


            if (isTouch) {
              recordTouches.call(_assertThisInitialized(_assertThisInitialized(_this)), inputEvent, inputData);
            } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized(_assertThisInitialized(_this)), inputData)) {
              return;
            }

            _this.callback(manager, inputEvent, inputData);
          };

          _this.touch = new TouchInput(_this.manager, _this.handler);
          _this.mouse = new MouseInput(_this.manager, _this.handler);
          _this.primaryTouch = null;
          _this.lastTouches = [];
          return _this;
        }
        /**
         * @private
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */


        var _proto = TouchMouseInput.prototype;

        /**
         * @private
         * remove the event listeners
         */
        _proto.destroy = function destroy() {
          this.touch.destroy();
          this.mouse.destroy();
        };

        return TouchMouseInput;
      }(Input);

      return TouchMouseInput;
    }();

    /**
     * @private
     * create new input type manager
     * called by the Manager constructor
     * @param {Hammer} manager
     * @returns {Input}
     */

    function createInputInstance(manager) {
      var Type; // let inputClass = manager.options.inputClass;

      var inputClass = manager.options.inputClass;

      if (inputClass) {
        Type = inputClass;
      } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
      } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
      } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
      } else {
        Type = TouchMouseInput;
      }

      return new Type(manager, inputHandler);
    }

    /**
     * @private
     * if the argument is an array, we want to execute the fn on each entry
     * if it aint an array we don't want to do a thing.
     * this is used by all the methods that accept a single and array argument.
     * @param {*|Array} arg
     * @param {String} fn
     * @param {Object} [context]
     * @returns {Boolean}
     */

    function invokeArrayArg(arg, fn, context) {
      if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
      }

      return false;
    }

    var STATE_POSSIBLE = 1;
    var STATE_BEGAN = 2;
    var STATE_CHANGED = 4;
    var STATE_ENDED = 8;
    var STATE_RECOGNIZED = STATE_ENDED;
    var STATE_CANCELLED = 16;
    var STATE_FAILED = 32;

    /**
     * @private
     * get a unique id
     * @returns {number} uniqueId
     */
    var _uniqueId = 1;
    function uniqueId() {
      return _uniqueId++;
    }

    /**
     * @private
     * get a recognizer by name if it is bound to a manager
     * @param {Recognizer|String} otherRecognizer
     * @param {Recognizer} recognizer
     * @returns {Recognizer}
     */
    function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
      var manager = recognizer.manager;

      if (manager) {
        return manager.get(otherRecognizer);
      }

      return otherRecognizer;
    }

    /**
     * @private
     * get a usable string, used as event postfix
     * @param {constant} state
     * @returns {String} state
     */

    function stateStr(state) {
      if (state & STATE_CANCELLED) {
        return 'cancel';
      } else if (state & STATE_ENDED) {
        return 'end';
      } else if (state & STATE_CHANGED) {
        return 'move';
      } else if (state & STATE_BEGAN) {
        return 'start';
      }

      return '';
    }

    /**
     * @private
     * Recognizer flow explained; *
     * All recognizers have the initial state of POSSIBLE when a input session starts.
     * The definition of a input session is from the first input until the last input, with all it's movement in it. *
     * Example session for mouse-input: mousedown -> mousemove -> mouseup
     *
     * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
     * which determines with state it should be.
     *
     * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
     * POSSIBLE to give it another change on the next cycle.
     *
     *               Possible
     *                  |
     *            +-----+---------------+
     *            |                     |
     *      +-----+-----+               |
     *      |           |               |
     *   Failed      Cancelled          |
     *                          +-------+------+
     *                          |              |
     *                      Recognized       Began
     *                                         |
     *                                      Changed
     *                                         |
     *                                  Ended/Recognized
     */

    /**
     * @private
     * Recognizer
     * Every recognizer needs to extend from this class.
     * @constructor
     * @param {Object} options
     */

    var Recognizer =
    /*#__PURE__*/
    function () {
      function Recognizer(options) {
        if (options === void 0) {
          options = {};
        }

        this.options = _extends({
          enable: true
        }, options);
        this.id = uniqueId();
        this.manager = null; // default is enable true

        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
      }
      /**
       * @private
       * set options
       * @param {Object} options
       * @return {Recognizer}
       */


      var _proto = Recognizer.prototype;

      _proto.set = function set(options) {
        assign$1(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

        this.manager && this.manager.touchAction.update();
        return this;
      };
      /**
       * @private
       * recognize simultaneous with an other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */


      _proto.recognizeWith = function recognizeWith(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
          return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

        if (!simultaneous[otherRecognizer.id]) {
          simultaneous[otherRecognizer.id] = otherRecognizer;
          otherRecognizer.recognizeWith(this);
        }

        return this;
      };
      /**
       * @private
       * drop the simultaneous link. it doesnt remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */


      _proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
          return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
      };
      /**
       * @private
       * recognizer can only run when an other is failing
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */


      _proto.requireFailure = function requireFailure(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
          return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

        if (inArray(requireFail, otherRecognizer) === -1) {
          requireFail.push(otherRecognizer);
          otherRecognizer.requireFailure(this);
        }

        return this;
      };
      /**
       * @private
       * drop the requireFailure link. it does not remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */


      _proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
          return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);

        if (index > -1) {
          this.requireFail.splice(index, 1);
        }

        return this;
      };
      /**
       * @private
       * has require failures boolean
       * @returns {boolean}
       */


      _proto.hasRequireFailures = function hasRequireFailures() {
        return this.requireFail.length > 0;
      };
      /**
       * @private
       * if the recognizer can recognize simultaneous with an other recognizer
       * @param {Recognizer} otherRecognizer
       * @returns {Boolean}
       */


      _proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
      };
      /**
       * @private
       * You should use `tryEmit` instead of `emit` directly to check
       * that all the needed recognizers has failed before emitting.
       * @param {Object} input
       */


      _proto.emit = function emit(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
          self.manager.emit(event, input);
        } // 'panstart' and 'panmove'


        if (state < STATE_ENDED) {
          emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) {
          // additional event(panleft, panright, pinchin, pinchout...)
          emit(input.additionalEvent);
        } // panend and pancancel


        if (state >= STATE_ENDED) {
          emit(self.options.event + stateStr(state));
        }
      };
      /**
       * @private
       * Check that all the require failure recognizers has failed,
       * if true, it emits a gesture event,
       * otherwise, setup the state to FAILED.
       * @param {Object} input
       */


      _proto.tryEmit = function tryEmit(input) {
        if (this.canEmit()) {
          return this.emit(input);
        } // it's failing anyway


        this.state = STATE_FAILED;
      };
      /**
       * @private
       * can we emit?
       * @returns {boolean}
       */


      _proto.canEmit = function canEmit() {
        var i = 0;

        while (i < this.requireFail.length) {
          if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
            return false;
          }

          i++;
        }

        return true;
      };
      /**
       * @private
       * update the recognizer
       * @param {Object} inputData
       */


      _proto.recognize = function recognize(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign$1({}, inputData); // is is enabled and allow recognizing?

        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
          this.reset();
          this.state = STATE_FAILED;
          return;
        } // reset when we've reached the end


        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
          this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
        // so trigger an event

        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
          this.tryEmit(inputDataClone);
        }
      };
      /**
       * @private
       * return the state of the recognizer
       * the actual recognizing happens in this method
       * @virtual
       * @param {Object} inputData
       * @returns {constant} STATE
       */

      /* jshint ignore:start */


      _proto.process = function process(inputData) {};
      /* jshint ignore:end */

      /**
       * @private
       * return the preferred touch-action
       * @virtual
       * @returns {Array}
       */


      _proto.getTouchAction = function getTouchAction() {};
      /**
       * @private
       * called when the gesture isn't allowed to recognize
       * like when another is being recognized or it is disabled
       * @virtual
       */


      _proto.reset = function reset() {};

      return Recognizer;
    }();

    /**
     * @private
     * This recognizer is just used as a base for the simple attribute recognizers.
     * @constructor
     * @extends Recognizer
     */

    var AttrRecognizer =
    /*#__PURE__*/
    function (_Recognizer) {
      _inheritsLoose(AttrRecognizer, _Recognizer);

      function AttrRecognizer(options) {
        if (options === void 0) {
          options = {};
        }

        return _Recognizer.call(this, _extends({
          pointers: 1
        }, options)) || this;
      }
      /**
       * @private
       * Used to check if it the recognizer receives valid input, like input.distance > 10.
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {Boolean} recognized
       */


      var _proto = AttrRecognizer.prototype;

      _proto.attrTest = function attrTest(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
      };
      /**
       * @private
       * Process the input and return the state for the recognizer
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {*} State
       */


      _proto.process = function process(input) {
        var state = this.state;
        var eventType = input.eventType;
        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
          return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
          if (eventType & INPUT_END) {
            return state | STATE_ENDED;
          } else if (!(state & STATE_BEGAN)) {
            return STATE_BEGAN;
          }

          return state | STATE_CHANGED;
        }

        return STATE_FAILED;
      };

      return AttrRecognizer;
    }(Recognizer);

    /**
     * @private
     * direction cons to string
     * @param {constant} direction
     * @returns {String}
     */

    function directionStr(direction) {
      if (direction === DIRECTION_DOWN) {
        return 'down';
      } else if (direction === DIRECTION_UP) {
        return 'up';
      } else if (direction === DIRECTION_LEFT) {
        return 'left';
      } else if (direction === DIRECTION_RIGHT) {
        return 'right';
      }

      return '';
    }

    /**
     * @private
     * Pan
     * Recognized when the pointer is down and moved in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */

    var PanRecognizer =
    /*#__PURE__*/
    function (_AttrRecognizer) {
      _inheritsLoose(PanRecognizer, _AttrRecognizer);

      function PanRecognizer(options) {
        var _this;

        if (options === void 0) {
          options = {};
        }

        _this = _AttrRecognizer.call(this, _extends({
          event: 'pan',
          threshold: 10,
          pointers: 1,
          direction: DIRECTION_ALL
        }, options)) || this;
        _this.pX = null;
        _this.pY = null;
        return _this;
      }

      var _proto = PanRecognizer.prototype;

      _proto.getTouchAction = function getTouchAction() {
        var direction = this.options.direction;
        var actions = [];

        if (direction & DIRECTION_HORIZONTAL) {
          actions.push(TOUCH_ACTION_PAN_Y);
        }

        if (direction & DIRECTION_VERTICAL) {
          actions.push(TOUCH_ACTION_PAN_X);
        }

        return actions;
      };

      _proto.directionTest = function directionTest(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY; // lock to axis?

        if (!(direction & options.direction)) {
          if (options.direction & DIRECTION_HORIZONTAL) {
            direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
            hasMoved = x !== this.pX;
            distance = Math.abs(input.deltaX);
          } else {
            direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
            hasMoved = y !== this.pY;
            distance = Math.abs(input.deltaY);
          }
        }

        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
      };

      _proto.attrTest = function attrTest(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) && ( // replace with a super call
        this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
      };

      _proto.emit = function emit(input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;
        var direction = directionStr(input.direction);

        if (direction) {
          input.additionalEvent = this.options.event + direction;
        }

        _AttrRecognizer.prototype.emit.call(this, input);
      };

      return PanRecognizer;
    }(AttrRecognizer);

    var defaults = {
      /**
       * @private
       * set if DOM events are being triggered.
       * But this is slower and unused by simple implementations, so disabled by default.
       * @type {Boolean}
       * @default false
       */
      domEvents: false,

      /**
       * @private
       * The value for the touchAction property/fallback.
       * When set to `compute` it will magically set the correct value based on the added recognizers.
       * @type {String}
       * @default compute
       */
      touchAction: TOUCH_ACTION_COMPUTE,

      /**
       * @private
       * @type {Boolean}
       * @default true
       */
      enable: true,

      /**
       * @private
       * EXPERIMENTAL FEATURE -- can be removed/changed
       * Change the parent input target element.
       * If Null, then it is being set the to main element.
       * @type {Null|EventTarget}
       * @default null
       */
      inputTarget: null,

      /**
       * @private
       * force an input class
       * @type {Null|Function}
       * @default null
       */
      inputClass: null,

      /**
       * @private
       * Some CSS properties can be used to improve the working of Hammer.
       * Add them to this method and they will be set when creating a new Manager.
       * @namespace
       */
      cssProps: {
        /**
         * @private
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: "none",

        /**
         * @private
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: "none",

        /**
         * @private
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: "none",

        /**
         * @private
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: "none",

        /**
         * @private
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: "none",

        /**
         * @private
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };

    var STOP = 1;
    var FORCED_STOP = 2;
    /**
     * @private
     * add/remove the css properties as defined in manager.options.cssProps
     * @param {Manager} manager
     * @param {Boolean} add
     */

    function toggleCssProps(manager, add) {
      var element = manager.element;

      if (!element.style) {
        return;
      }

      var prop;
      each(manager.options.cssProps, function (value, name) {
        prop = prefixed(element.style, name);

        if (add) {
          manager.oldCssProps[prop] = element.style[prop];
          element.style[prop] = value;
        } else {
          element.style[prop] = manager.oldCssProps[prop] || "";
        }
      });

      if (!add) {
        manager.oldCssProps = {};
      }
    }
    /**
     * @private
     * trigger dom event
     * @param {String} event
     * @param {Object} data
     */


    function triggerDomEvent(event, data) {
      var gestureEvent = document.createEvent("Event");
      gestureEvent.initEvent(event, true, true);
      gestureEvent.gesture = data;
      data.target.dispatchEvent(gestureEvent);
    }
    /**
    * @private
     * Manager
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */


    var Manager =
    /*#__PURE__*/
    function () {
      function Manager(element, options) {
        var _this = this;

        this.options = assign$1({}, defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function (item) {
          var recognizer = _this.add(new item[0](item[1]));

          item[2] && recognizer.recognizeWith(item[2]);
          item[3] && recognizer.requireFailure(item[3]);
        }, this);
      }
      /**
       * @private
       * set options
       * @param {Object} options
       * @returns {Manager}
       */


      var _proto = Manager.prototype;

      _proto.set = function set(options) {
        assign$1(this.options, options); // Options that need a little more setup

        if (options.touchAction) {
          this.touchAction.update();
        }

        if (options.inputTarget) {
          // Clean up existing event listeners and reinitialize
          this.input.destroy();
          this.input.target = options.inputTarget;
          this.input.init();
        }

        return this;
      };
      /**
       * @private
       * stop recognizing for this session.
       * This session will be discarded, when a new [input]start event is fired.
       * When forced, the recognizer cycle is stopped immediately.
       * @param {Boolean} [force]
       */


      _proto.stop = function stop(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
      };
      /**
       * @private
       * run the recognizers!
       * called by the inputHandler function on every movement of the pointers (touches)
       * it walks through all the recognizers and tries to detect the gesture that is being made
       * @param {Object} inputData
       */


      _proto.recognize = function recognize(inputData) {
        var session = this.session;

        if (session.stopped) {
          return;
        } // run the touch-action polyfill


        this.touchAction.preventDefaults(inputData);
        var recognizer;
        var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`

        var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
        // or when we're in a new session

        if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
          session.curRecognizer = null;
          curRecognizer = null;
        }

        var i = 0;

        while (i < recognizers.length) {
          recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
          // 1.   allow if the session is NOT forced stopped (see the .stop() method)
          // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
          //      that is being recognized.
          // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
          //      this can be setup with the `recognizeWith()` method on the recognizer.

          if (session.stopped !== FORCED_STOP && ( // 1
          !curRecognizer || recognizer === curRecognizer || // 2
          recognizer.canRecognizeWith(curRecognizer))) {
            // 3
            recognizer.recognize(inputData);
          } else {
            recognizer.reset();
          } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
          // current active recognizer. but only if we don't already have an active recognizer


          if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
            session.curRecognizer = recognizer;
            curRecognizer = recognizer;
          }

          i++;
        }
      };
      /**
       * @private
       * get a recognizer by its event name.
       * @param {Recognizer|String} recognizer
       * @returns {Recognizer|Null}
       */


      _proto.get = function get(recognizer) {
        if (recognizer instanceof Recognizer) {
          return recognizer;
        }

        var recognizers = this.recognizers;

        for (var i = 0; i < recognizers.length; i++) {
          if (recognizers[i].options.event === recognizer) {
            return recognizers[i];
          }
        }

        return null;
      };
      /**
       * @private add a recognizer to the manager
       * existing recognizers with the same event name will be removed
       * @param {Recognizer} recognizer
       * @returns {Recognizer|Manager}
       */


      _proto.add = function add(recognizer) {
        if (invokeArrayArg(recognizer, "add", this)) {
          return this;
        } // remove existing


        var existing = this.get(recognizer.options.event);

        if (existing) {
          this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;
        this.touchAction.update();
        return recognizer;
      };
      /**
       * @private
       * remove a recognizer by name or instance
       * @param {Recognizer|String} recognizer
       * @returns {Manager}
       */


      _proto.remove = function remove(recognizer) {
        if (invokeArrayArg(recognizer, "remove", this)) {
          return this;
        }

        var targetRecognizer = this.get(recognizer); // let's make sure this recognizer exists

        if (recognizer) {
          var recognizers = this.recognizers;
          var index = inArray(recognizers, targetRecognizer);

          if (index !== -1) {
            recognizers.splice(index, 1);
            this.touchAction.update();
          }
        }

        return this;
      };
      /**
       * @private
       * bind event
       * @param {String} events
       * @param {Function} handler
       * @returns {EventEmitter} this
       */


      _proto.on = function on(events, handler) {
        if (events === undefined || handler === undefined) {
          return this;
        }

        var handlers = this.handlers;
        each(splitStr(events), function (event) {
          handlers[event] = handlers[event] || [];
          handlers[event].push(handler);
        });
        return this;
      };
      /**
       * @private unbind event, leave emit blank to remove all handlers
       * @param {String} events
       * @param {Function} [handler]
       * @returns {EventEmitter} this
       */


      _proto.off = function off(events, handler) {
        if (events === undefined) {
          return this;
        }

        var handlers = this.handlers;
        each(splitStr(events), function (event) {
          if (!handler) {
            delete handlers[event];
          } else {
            handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
          }
        });
        return this;
      };
      /**
       * @private emit event to the listeners
       * @param {String} event
       * @param {Object} data
       */


      _proto.emit = function emit(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
          triggerDomEvent(event, data);
        } // no handlers, so skip it all


        var handlers = this.handlers[event] && this.handlers[event].slice();

        if (!handlers || !handlers.length) {
          return;
        }

        data.type = event;

        data.preventDefault = function () {
          data.srcEvent.preventDefault();
        };

        var i = 0;

        while (i < handlers.length) {
          handlers[i](data);
          i++;
        }
      };
      /**
       * @private
       * destroy the manager and unbinds all events
       * it doesn't unbind dom events, that is the user own responsibility
       */


      _proto.destroy = function destroy() {
        this.element && toggleCssProps(this, false);
        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
      };

      return Manager;
    }();

    /*
    Copyright (c) 2015 NAVER Corp.
    name: @egjs/agent
    license: MIT
    author: NAVER Corp.
    repository: git+https://github.com/naver/agent.git
    version: 2.3.0
    */
    function some(arr, callback) {
      var length = arr.length;

      for (var i = 0; i < length; ++i) {
        if (callback(arr[i], i)) {
          return true;
        }
      }

      return false;
    }
    function find(arr, callback) {
      var length = arr.length;

      for (var i = 0; i < length; ++i) {
        if (callback(arr[i], i)) {
          return arr[i];
        }
      }

      return null;
    }
    function getUserAgent(agent) {
      var userAgent = agent;

      if (typeof userAgent === "undefined") {
        if (typeof navigator === "undefined" || !navigator) {
          return "";
        }

        userAgent = navigator.userAgent || "";
      }

      return userAgent.toLowerCase();
    }
    function execRegExp(pattern, text) {
      try {
        return new RegExp(pattern, "g").exec(text);
      } catch (e) {
        return null;
      }
    }
    function hasUserAgentData() {
      if (typeof navigator === "undefined" || !navigator || !navigator.userAgentData) {
        return false;
      }

      var userAgentData = navigator.userAgentData;
      var brands = userAgentData.brands || userAgentData.uaList;
      return !!(brands && brands.length);
    }
    function findVersion(versionTest, userAgent) {
      var result = execRegExp("(" + versionTest + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", userAgent);
      return result ? result[3] : "";
    }
    function convertVersion(text) {
      return text.replace(/_/g, ".");
    }
    function findPreset(presets, userAgent) {
      var userPreset = null;
      var version = "-1";
      some(presets, function (preset) {
        var result = execRegExp("(" + preset.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", userAgent);

        if (!result || preset.brand) {
          return false;
        }

        userPreset = preset;
        version = result[3] || "-1";

        if (preset.versionAlias) {
          version = preset.versionAlias;
        } else if (preset.versionTest) {
          version = findVersion(preset.versionTest.toLowerCase(), userAgent) || version;
        }

        version = convertVersion(version);
        return true;
      });
      return {
        preset: userPreset,
        version: version
      };
    }
    function findPresetBrand(presets, brands) {
      var brandInfo = {
        brand: "",
        version: "-1"
      };
      some(presets, function (preset) {
        var result = findBrand(brands, preset);

        if (!result) {
          return false;
        }

        brandInfo.brand = preset.id;
        brandInfo.version = preset.versionAlias || result.version;
        return brandInfo.version !== "-1";
      });
      return brandInfo;
    }
    function findBrand(brands, preset) {
      return find(brands, function (_a) {
        var brand = _a.brand;
        return execRegExp("" + preset.test, brand.toLowerCase());
      });
    }

    var BROWSER_PRESETS = [{
      test: "phantomjs",
      id: "phantomjs"
    }, {
      test: "whale",
      id: "whale"
    }, {
      test: "edgios|edge|edg",
      id: "edge"
    }, {
      test: "msie|trident|windows phone",
      id: "ie",
      versionTest: "iemobile|msie|rv"
    }, {
      test: "miuibrowser",
      id: "miui browser"
    }, {
      test: "samsungbrowser",
      id: "samsung internet"
    }, {
      test: "samsung",
      id: "samsung internet",
      versionTest: "version"
    }, {
      test: "chrome|crios",
      id: "chrome"
    }, {
      test: "firefox|fxios",
      id: "firefox"
    }, {
      test: "android",
      id: "android browser",
      versionTest: "version"
    }, {
      test: "safari|iphone|ipad|ipod",
      id: "safari",
      versionTest: "version"
    }]; // chromium's engine(blink) is based on applewebkit 537.36.

    var CHROMIUM_PRESETS = [{
      test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
      id: "chrome",
      versionTest: "chrome"
    }, {
      test: "chromium",
      id: "chrome"
    }, {
      test: "whale",
      id: "chrome",
      versionAlias: "-1",
      brand: true
    }];
    var WEBKIT_PRESETS = [{
      test: "applewebkit",
      id: "webkit",
      versionTest: "applewebkit|safari"
    }];
    var WEBVIEW_PRESETS = [{
      test: "(?=(iphone|ipad))(?!(.*version))",
      id: "webview"
    }, {
      test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
      id: "webview"
    }, {
      // test webview
      test: "webview",
      id: "webview"
    }];
    var OS_PRESETS = [{
      test: "windows phone",
      id: "windows phone"
    }, {
      test: "windows 2000",
      id: "window",
      versionAlias: "5.0"
    }, {
      test: "windows nt",
      id: "window"
    }, {
      test: "iphone|ipad|ipod",
      id: "ios",
      versionTest: "iphone os|cpu os"
    }, {
      test: "mac os x",
      id: "mac"
    }, {
      test: "android",
      id: "android"
    }, {
      test: "tizen",
      id: "tizen"
    }, {
      test: "webos|web0s",
      id: "webos"
    }];

    function parseUserAgentData(osData) {
      var userAgentData = navigator.userAgentData;
      var brands = (userAgentData.uaList || userAgentData.brands).slice();
      var isMobile = userAgentData.mobile || false;
      var firstBrand = brands[0];
      var browser = {
        name: firstBrand.brand,
        version: firstBrand.version,
        majorVersion: -1,
        webkit: false,
        webkitVersion: "-1",
        chromium: false,
        chromiumVersion: "-1",
        webview: !!findPresetBrand(WEBVIEW_PRESETS, brands).brand
      };
      var os = {
        name: "unknown",
        version: "-1",
        majorVersion: -1
      };
      browser.webkit = !browser.chromium && some(WEBKIT_PRESETS, function (preset) {
        return findBrand(brands, preset);
      });
      var chromiumBrand = findPresetBrand(CHROMIUM_PRESETS, brands);
      browser.chromium = !!chromiumBrand.brand;
      browser.chromiumVersion = chromiumBrand.version;

      if (!browser.chromium) {
        var webkitBrand = findPresetBrand(WEBKIT_PRESETS, brands);
        browser.webkit = !!webkitBrand.brand;
        browser.webkitVersion = webkitBrand.version;
      }

      if (osData) {
        var platform_1 = osData.platform.toLowerCase();
        var result = find(OS_PRESETS, function (preset) {
          return new RegExp("" + preset.test, "g").exec(platform_1);
        });
        os.name = result ? result.id : platform_1;
        os.version = osData.platformVersion;
      }

      var browserBrand = findPresetBrand(BROWSER_PRESETS, brands);

      if (browserBrand.brand) {
        browser.name = browserBrand.brand;
        browser.version = osData ? osData.uaFullVersion : browserBrand.version;
      }

      if (navigator.platform === "Linux armv8l") {
        os.name = "android";
      } else if (browser.webkit) {
        os.name = isMobile ? "ios" : "mac";
      }

      if (os.name === "ios" && browser.webview) {
        browser.version = "-1";
      }

      os.version = convertVersion(os.version);
      browser.version = convertVersion(browser.version);
      os.majorVersion = parseInt(os.version, 10);
      browser.majorVersion = parseInt(browser.version, 10);
      return {
        browser: browser,
        os: os,
        isMobile: isMobile,
        isHints: true
      };
    }

    function parseUserAgent(userAgent) {
      var nextAgent = getUserAgent(userAgent);
      var isMobile = !!/mobi/g.exec(nextAgent);
      var browser = {
        name: "unknown",
        version: "-1",
        majorVersion: -1,
        webview: !!findPreset(WEBVIEW_PRESETS, nextAgent).preset,
        chromium: false,
        chromiumVersion: "-1",
        webkit: false,
        webkitVersion: "-1"
      };
      var os = {
        name: "unknown",
        version: "-1",
        majorVersion: -1
      };

      var _a = findPreset(BROWSER_PRESETS, nextAgent),
          browserPreset = _a.preset,
          browserVersion = _a.version;

      var _b = findPreset(OS_PRESETS, nextAgent),
          osPreset = _b.preset,
          osVersion = _b.version;

      var chromiumPreset = findPreset(CHROMIUM_PRESETS, nextAgent);
      browser.chromium = !!chromiumPreset.preset;
      browser.chromiumVersion = chromiumPreset.version;

      if (!browser.chromium) {
        var webkitPreset = findPreset(WEBKIT_PRESETS, nextAgent);
        browser.webkit = !!webkitPreset.preset;
        browser.webkitVersion = webkitPreset.version;
      }

      if (osPreset) {
        os.name = osPreset.id;
        os.version = osVersion;
        os.majorVersion = parseInt(osVersion, 10);
      }

      if (browserPreset) {
        browser.name = browserPreset.id;
        browser.version = browserVersion;

        if (browser.webview && os.name === "ios" && browser.name !== "safari") {
          browser.webview = false;
        }
      }

      browser.majorVersion = parseInt(browser.version, 10);
      return {
        browser: browser,
        os: os,
        isMobile: isMobile,
        isHints: false
      };
    }
    /**
     * Extracts browser and operating system information from the user agent string.
     * @ko 유저 에이전트 문자열에서 브라우저와 운영체제 정보를 추출한다.
     * @function eg.agent#agent
     * @param - user agent string to parse <ko>파싱할 유저에이전트 문자열</ko>
     * @return - agent Info <ko> 에이전트 정보 </ko>
     * @example
    import agent from "@egjs/agent";
    // eg.agent();
    const { os, browser, isMobile } = agent();
     */

    function agent(userAgent) {
      if (typeof userAgent === "undefined" && hasUserAgentData()) {
        return parseUserAgentData();
      } else {
        return parseUserAgent(userAgent);
      }
    }

    /*
    Copyright (c) NAVER Corp.
    name: @egjs/component
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-component
    version: 2.2.2
    */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */

    function isUndefined(value) {
      return typeof value === "undefined";
    }
    /**
     * A class used to manage events in a component
     * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
     * @alias eg.Component
     */


    var Component =
    /*#__PURE__*/
    function () {
      /**
       * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
       */
      function Component() {
        /**
         * @deprecated
         * @private
         */
        this.options = {};
        this._eventHandler = {};
      }
      /**
       * Triggers a custom event.
       * @ko 커스텀 이벤트를 발생시킨다
       * @param {string} eventName The name of the custom event to be triggered <ko>발생할 커스텀 이벤트의 이름</ko>
       * @param {object} customEvent Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
       * @param {any[]} restParam Additional parameters when triggering a custom event <ko>커스텀 이벤트가 발생할 때 필요시 추가적으로 전달할 데이터</ko>
       * @return Indicates whether the event has occurred. If the stop() method is called by a custom event handler, it will return false and prevent the event from occurring. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">Ref</a> <ko>이벤트 발생 여부. 커스텀 이벤트 핸들러에서 stop() 메서드를 호출하면 'false'를 반환하고 이벤트 발생을 중단한다. <a href="https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F">참고</a></ko>
       * @example
       * ```
       * class Some extends eg.Component {
       *   some(){
       *     if(this.trigger("beforeHi")){ // When event call to stop return false.
       *       this.trigger("hi");// fire hi event.
       *     }
       *   }
       * }
       *
       * const some = new Some();
       * some.on("beforeHi", (e) => {
       *   if(condition){
       *     e.stop(); // When event call to stop, `hi` event not call.
       *   }
       * });
       * some.on("hi", (e) => {
       *   // `currentTarget` is component instance.
       *   console.log(some === e.currentTarget); // true
       * });
       * // If you want to more know event design. You can see article.
       * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
       * ```
       */


      var __proto = Component.prototype;

      __proto.trigger = function (eventName) {
        var _this = this;

        var params = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          params[_i - 1] = arguments[_i];
        }

        var handlerList = this._eventHandler[eventName] || [];
        var hasHandlerList = handlerList.length > 0;

        if (!hasHandlerList) {
          return true;
        }

        var customEvent = params[0] || {};
        var restParams = params.slice(1); // If detach method call in handler in first time then handler list calls.

        handlerList = handlerList.concat();
        var isCanceled = false; // This should be done like this to pass previous tests

        customEvent.eventType = eventName;

        customEvent.stop = function () {
          isCanceled = true;
        };

        customEvent.currentTarget = this;
        var arg = [customEvent];

        if (restParams.length >= 1) {
          arg = arg.concat(restParams);
        }

        handlerList.forEach(function (handler) {
          handler.apply(_this, arg);
        });
        return !isCanceled;
      };
      /**
       * Executed event just one time.
       * @ko 이벤트가 한번만 실행된다.
       * @param {string} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```
       * class Some extends eg.Component {
       * hi() {
       *   alert("hi");
       * }
       * thing() {
       *   this.once("hi", this.hi);
       * }
       *
       * var some = new Some();
       * some.thing();
       * some.trigger("hi");
       * // fire alert("hi");
       * some.trigger("hi");
       * // Nothing happens
       * ```
       */


      __proto.once = function (eventName, handlerToAttach) {
        var _this = this;

        if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
          var eventHash = eventName;

          for (var key in eventHash) {
            this.once(key, eventHash[key]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var listener_1 = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            handlerToAttach.apply(_this, args);

            _this.off(eventName, listener_1);
          };

          this.on(eventName, listener_1);
        }

        return this;
      };
      /**
       * Checks whether an event has been attached to a component.
       * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
       * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
       * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
       * @example
       * ```
       * class Some extends eg.Component {
       *   some() {
       *     this.hasOn("hi");// check hi event.
       *   }
       * }
       * ```
       */


      __proto.hasOn = function (eventName) {
        return !!this._eventHandler[eventName];
      };
      /**
       * Attaches an event to a component.
       * @ko 컴포넌트에 이벤트를 등록한다.
       * @param {string} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```
       * class Some extends eg.Component {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.on("hi",this.hi); //attach event
       *   }
       * }
       * ```
       */


      __proto.on = function (eventName, handlerToAttach) {
        if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
          var eventHash = eventName;

          for (var name in eventHash) {
            this.on(name, eventHash[name]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var handlerList = this._eventHandler[eventName];

          if (isUndefined(handlerList)) {
            this._eventHandler[eventName] = [];
            handlerList = this._eventHandler[eventName];
          }

          handlerList.push(handlerToAttach);
        }

        return this;
      };
      /**
       * Detaches an event from the component.
       * @ko 컴포넌트에 등록된 이벤트를 해제한다
       * @param {string} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
       * @param {function} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```
       * class Some extends eg.Component {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.off("hi",this.hi); //detach event
       *   }
       * }
       * ```
       */


      __proto.off = function (eventName, handlerToDetach) {
        var e_1, _a; // Detach all event handlers.


        if (isUndefined(eventName)) {
          this._eventHandler = {};
          return this;
        } // Detach all handlers for eventname or detach event handlers by object.


        if (isUndefined(handlerToDetach)) {
          if (typeof eventName === "string") {
            delete this._eventHandler[eventName];
            return this;
          } else {
            var eventHash = eventName;

            for (var name in eventHash) {
              this.off(name, eventHash[name]);
            }

            return this;
          }
        } // Detach single event handler


        var handlerList = this._eventHandler[eventName];

        if (handlerList) {
          var idx = 0;

          try {
            for (var handlerList_1 = __values(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
              var handlerFunction = handlerList_1_1.value;

              if (handlerFunction === handlerToDetach) {
                handlerList.splice(idx, 1);
                break;
              }

              idx++;
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }

        return this;
      };
      /**
       * Version info string
       * @ko 버전정보 문자열
       * @name VERSION
       * @static
       * @example
       * eg.Component.VERSION;  // ex) 2.0.0
       * @memberof eg.Component
       */


      Component.VERSION = "2.2.2";
      return Component;
    }();

    /*
    Copyright (c) 2015 NAVER Corp.
    name: @egjs/axes
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-axes
    version: 2.8.0
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$1 = function (d, b) {
      extendStatics$1 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
      extendStatics$1(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$1 = function () {
      __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign$1.apply(this, arguments);
    };

    function getInsidePosition(destPos, range, circular, bounce) {
      var toDestPos = destPos;
      var targetRange = [circular[0] ? range[0] : bounce ? range[0] - bounce[0] : range[0], circular[1] ? range[1] : bounce ? range[1] + bounce[1] : range[1]];
      toDestPos = Math.max(targetRange[0], toDestPos);
      toDestPos = Math.min(targetRange[1], toDestPos);
      return toDestPos;
    } // determine outside

    function isOutside(pos, range) {
      return pos < range[0] || pos > range[1];
    }
    function getDuration(distance, deceleration) {
      var duration = Math.sqrt(distance / deceleration * 2); // when duration is under 100, then value is zero

      return duration < 100 ? 0 : duration;
    }
    function isCircularable(destPos, range, circular) {
      return circular[1] && destPos > range[1] || circular[0] && destPos < range[0];
    }
    function getCirculatedPos(pos, range, circular) {
      var toPos = pos;
      var min = range[0];
      var max = range[1];
      var length = max - min;

      if (circular[1] && pos > max) {
        // right
        toPos = (toPos - max) % length + min;
      }

      if (circular[0] && pos < min) {
        // left
        toPos = (toPos - min) % length + max;
      }

      return toPos;
    }

    /* eslint-disable no-new-func, no-nested-ternary */
    var win$1;

    if (typeof window === "undefined") {
      // window is undefined in node.js
      win$1 = {
        navigator: {
          userAgent: ""
        }
      };
    } else {
      win$1 = window;
    }

    function toArray$1(nodes) {
      // const el = Array.prototype.slice.call(nodes);
      // for IE8
      var el = [];

      for (var i = 0, len = nodes.length; i < len; i++) {
        el.push(nodes[i]);
      }

      return el;
    }
    function $(param, multi) {
      if (multi === void 0) {
        multi = false;
      }

      var el;

      if (typeof param === "string") {
        // String (HTML, Selector)
        // check if string is HTML tag format
        var match = param.match(/^<([a-z]+)\s*([^>]*)>/); // creating element

        if (match) {
          // HTML
          var dummy = document.createElement("div");
          dummy.innerHTML = param;
          el = toArray$1(dummy.childNodes);
        } else {
          // Selector
          el = toArray$1(document.querySelectorAll(param));
        }

        if (!multi) {
          el = el.length >= 1 ? el[0] : undefined;
        }
      } else if (param === win$1) {
        // window
        el = param;
      } else if (param.nodeName && (param.nodeType === 1 || param.nodeType === 9)) {
        // HTMLElement, Document
        el = param;
      } else if ("jQuery" in win$1 && param instanceof jQuery || param.constructor.prototype.jquery) {
        // jQuery
        el = multi ? param.toArray() : param.get(0);
      } else if (Array.isArray(param)) {
        el = param.map(function (v) {
          return $(v);
        });

        if (!multi) {
          el = el.length >= 1 ? el[0] : undefined;
        }
      }

      return el;
    }
    var raf = win$1.requestAnimationFrame || win$1.webkitRequestAnimationFrame;
    var caf = win$1.cancelAnimationFrame || win$1.webkitCancelAnimationFrame;

    if (raf && !caf) {
      var keyInfo_1 = {};
      var oldraf_1 = raf;

      raf = function (callback) {
        function wrapCallback(timestamp) {
          if (keyInfo_1[key]) {
            callback(timestamp);
          }
        }

        var key = oldraf_1(wrapCallback);
        keyInfo_1[key] = true;
        return key;
      };

      caf = function (key) {
        delete keyInfo_1[key];
      };
    } else if (!(raf && caf)) {
      raf = function (callback) {
        return win$1.setTimeout(function () {
          callback(win$1.performance && win$1.performance.now && win$1.performance.now() || new Date().getTime());
        }, 16);
      };

      caf = win$1.clearTimeout;
    }
    /**
     * A polyfill for the window.requestAnimationFrame() method.
     * @see  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
     * @private
     */


    function requestAnimationFrame(fp) {
      return raf(fp);
    }
    /**
    * A polyfill for the window.cancelAnimationFrame() method. It cancels an animation executed through a call to the requestAnimationFrame() method.
    * @param {Number} key −	The ID value returned through a call to the requestAnimationFrame() method. <ko>requestAnimationFrame() 메서드가 반환한 아이디 값</ko>
    * @see  https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
    * @private
    */

    function cancelAnimationFrame(key) {
      caf(key);
    }
    function map(obj, callback) {
      var tranformed = {};

      for (var k in obj) {
        k && (tranformed[k] = callback(obj[k], k));
      }

      return tranformed;
    }
    function filter(obj, callback) {
      var filtered = {};

      for (var k in obj) {
        k && callback(obj[k], k) && (filtered[k] = obj[k]);
      }

      return filtered;
    }
    function every(obj, callback) {
      for (var k in obj) {
        if (k && !callback(obj[k], k)) {
          return false;
        }
      }

      return true;
    }
    function equal(target, base) {
      return every(target, function (v, k) {
        return v === base[k];
      });
    }
    var roundNumFunc = {};
    function roundNumber(num, roundUnit) {
      // Cache for performance
      if (!roundNumFunc[roundUnit]) {
        roundNumFunc[roundUnit] = getRoundFunc(roundUnit);
      }

      return roundNumFunc[roundUnit](num);
    }
    function roundNumbers(num, roundUnit) {
      if (!num || !roundUnit) {
        return num;
      }

      var isNumber = typeof roundUnit === "number";
      return map(num, function (value, key) {
        return roundNumber(value, isNumber ? roundUnit : roundUnit[key]);
      });
    }
    function getDecimalPlace(val) {
      if (!isFinite(val)) {
        return 0;
      }

      var v = val + "";

      if (v.indexOf("e") >= 0) {
        // Exponential Format
        // 1e-10, 1e-12
        var p = 0;
        var e = 1;

        while (Math.round(val * e) / e !== val) {
          e *= 10;
          p++;
        }

        return p;
      } // In general, following has performance benefit.
      // https://jsperf.com/precision-calculation


      return v.indexOf(".") >= 0 ? v.length - v.indexOf(".") - 1 : 0;
    }
    function inversePow(n) {
      // replace Math.pow(10, -n) to solve floating point issue.
      // eg. Math.pow(10, -4) => 0.00009999999999999999
      return 1 / Math.pow(10, n);
    }
    function getRoundFunc(v) {
      var p = v < 1 ? Math.pow(10, getDecimalPlace(v)) : 1;
      return function (n) {
        if (v === 0) {
          return 0;
        }

        return Math.round(Math.round(n / v) * v * p) / p;
      };
    }

    function minMax(value, min, max) {
      return Math.max(Math.min(value, max), min);
    }

    var AnimationManager =
    /*#__PURE__*/
    function () {
      function AnimationManager(_a) {
        var options = _a.options,
            itm = _a.itm,
            em = _a.em,
            axm = _a.axm;
        this.options = options;
        this.itm = itm;
        this.em = em;
        this.axm = axm;
        this.animationEnd = this.animationEnd.bind(this);
      }

      var __proto = AnimationManager.prototype;

      __proto.getDuration = function (depaPos, destPos, wishDuration) {
        var _this = this;

        var duration;

        if (typeof wishDuration !== "undefined") {
          duration = wishDuration;
        } else {
          var durations_1 = map(destPos, function (v, k) {
            return getDuration(Math.abs(v - depaPos[k]), _this.options.deceleration);
          });
          duration = Object.keys(durations_1).reduce(function (max, v) {
            return Math.max(max, durations_1[v]);
          }, -Infinity);
        }

        return minMax(duration, this.options.minimumDuration, this.options.maximumDuration);
      };

      __proto.createAnimationParam = function (pos, duration, option) {
        var depaPos = this.axm.get();
        var destPos = pos;
        var inputEvent = option && option.event || null;
        return {
          depaPos: depaPos,
          destPos: destPos,
          duration: minMax(duration, this.options.minimumDuration, this.options.maximumDuration),
          delta: this.axm.getDelta(depaPos, destPos),
          inputEvent: inputEvent,
          input: option && option.input || null,
          isTrusted: !!inputEvent,
          done: this.animationEnd
        };
      };

      __proto.grab = function (axes, option) {
        if (this._animateParam && axes.length) {
          var orgPos_1 = this.axm.get(axes);
          var pos = this.axm.map(orgPos_1, function (v, opt) {
            return getCirculatedPos(v, opt.range, opt.circular);
          });

          if (!every(pos, function (v, k) {
            return orgPos_1[k] === v;
          })) {
            this.em.triggerChange(pos, false, orgPos_1, option, !!option);
          }

          this._animateParam = null;
          this._raf && cancelAnimationFrame(this._raf);
          this._raf = null;
          this.em.triggerAnimationEnd(!!(option && option.event));
        }
      };

      __proto.getEventInfo = function () {
        if (this._animateParam && this._animateParam.input && this._animateParam.inputEvent) {
          return {
            input: this._animateParam.input,
            event: this._animateParam.inputEvent
          };
        } else {
          return null;
        }
      };

      __proto.restore = function (option) {
        var pos = this.axm.get();
        var destPos = this.axm.map(pos, function (v, opt) {
          return Math.min(opt.range[1], Math.max(opt.range[0], v));
        });
        this.animateTo(destPos, this.getDuration(pos, destPos), option);
      };

      __proto.animationEnd = function () {
        var beforeParam = this.getEventInfo();
        this._animateParam = null; // for Circular

        var circularTargets = this.axm.filter(this.axm.get(), function (v, opt) {
          return isCircularable(v, opt.range, opt.circular);
        });
        Object.keys(circularTargets).length > 0 && this.setTo(this.axm.map(circularTargets, function (v, opt) {
          return getCirculatedPos(v, opt.range, opt.circular);
        }));
        this.itm.setInterrupt(false);
        this.em.triggerAnimationEnd(!!beforeParam);

        if (this.axm.isOutside()) {
          this.restore(beforeParam);
        } else {
          this.finish(!!beforeParam);
        }
      };

      __proto.finish = function (isTrusted) {
        this._animateParam = null;
        this.itm.setInterrupt(false);
        this.em.triggerFinish(isTrusted);
      };

      __proto.animateLoop = function (param, complete) {
        if (param.duration) {
          this._animateParam = __assign$1({}, param);
          var info_1 = this._animateParam;
          var self_1 = this;
          var destPos_1 = info_1.destPos;
          var prevPos_1 = info_1.depaPos;
          var prevEasingPer_1 = 0;
          var directions_1 = map(prevPos_1, function (value, key) {
            return value <= destPos_1[key] ? 1 : -1;
          });
          var originalIntendedPos_1 = map(destPos_1, function (v) {
            return v;
          });
          var prevTime_1 = new Date().getTime();
          info_1.startTime = prevTime_1;

          (function loop() {
            self_1._raf = null;
            var currentTime = new Date().getTime();
            var ratio = (currentTime - info_1.startTime) / param.duration;
            var easingPer = self_1.easing(ratio);
            var toPos = self_1.axm.map(prevPos_1, function (pos, options, key) {
              var nextPos = ratio >= 1 ? destPos_1[key] : pos + info_1.delta[key] * (easingPer - prevEasingPer_1); // Subtract distance from distance already moved.
              // Recalculate the remaining distance.
              // Fix the bouncing phenomenon by changing the range.

              var circulatedPos = getCirculatedPos(nextPos, options.range, options.circular);

              if (nextPos !== circulatedPos) {
                // circular
                var rangeOffset = directions_1[key] * (options.range[1] - options.range[0]);
                destPos_1[key] -= rangeOffset;
                prevPos_1[key] -= rangeOffset;
              }

              return circulatedPos;
            });
            var isCanceled = !self_1.em.triggerChange(toPos, false, prevPos_1);
            prevPos_1 = toPos;
            prevTime_1 = currentTime;
            prevEasingPer_1 = easingPer;

            if (easingPer >= 1) {
              destPos_1 = self_1.getFinalPos(destPos_1, originalIntendedPos_1);

              if (!equal(destPos_1, self_1.axm.get(Object.keys(destPos_1)))) {
                self_1.em.triggerChange(destPos_1, true, prevPos_1);
              }

              complete();
              return;
            } else if (isCanceled) {
              self_1.finish(false);
            } else {
              // animationEnd
              self_1._raf = requestAnimationFrame(loop);
            }
          })();
        } else {
          this.em.triggerChange(param.destPos, true);
          complete();
        }
      };
      /**
       * Get estimated final value.
       *
       * If destPos is within the 'error range' of the original intended position, the initial intended position is returned.
       *   - eg. original intended pos: 100, destPos: 100.0000000004 ==> return 100;
       * If dest Pos is outside the 'range of error' compared to the originally intended pos, it is returned rounded based on the originally intended pos.
       *   - eg. original intended pos: 100.123 destPos: 50.12345 => return 50.123
       *
       * @param originalIntendedPos
       * @param destPos
       */


      __proto.getFinalPos = function (destPos, originalIntendedPos) {
        var _this = this; // compare destPos and originalIntendedPos


        var ERROR_LIMIT = 0.000001;
        var finalPos = map(destPos, function (value, key) {
          if (value >= originalIntendedPos[key] - ERROR_LIMIT && value <= originalIntendedPos[key] + ERROR_LIMIT) {
            // In error range, return original intended
            return originalIntendedPos[key];
          } else {
            // Out of error range, return rounded pos.
            var roundUnit = _this.getRoundUnit(value, key);

            var result = roundNumber(value, roundUnit);
            return result;
          }
        });
        return finalPos;
      };

      __proto.getRoundUnit = function (val, key) {
        var roundUnit = this.options.round; // manual mode

        var minRoundUnit = null; // auto mode
        // auto mode

        if (!roundUnit) {
          // Get minimum round unit
          var options = this.axm.getAxisOptions(key);
          minRoundUnit = inversePow(Math.max(getDecimalPlace(options.range[0]), getDecimalPlace(options.range[1]), getDecimalPlace(val)));
        }

        return minRoundUnit || roundUnit;
      };

      __proto.getUserControll = function (param) {
        var userWish = param.setTo();
        userWish.destPos = this.axm.get(userWish.destPos);
        userWish.duration = minMax(userWish.duration, this.options.minimumDuration, this.options.maximumDuration);
        return userWish;
      };

      __proto.animateTo = function (destPos, duration, option) {
        var _this = this;

        var param = this.createAnimationParam(destPos, duration, option);

        var depaPos = __assign$1({}, param.depaPos);

        var retTrigger = this.em.triggerAnimationStart(param); // to control

        var userWish = this.getUserControll(param); // You can't stop the 'animationStart' event when 'circular' is true.

        if (!retTrigger && this.axm.every(userWish.destPos, function (v, opt) {
          return isCircularable(v, opt.range, opt.circular);
        })) {
          console.warn("You can't stop the 'animation' event when 'circular' is true.");
        }

        if (retTrigger && !equal(userWish.destPos, depaPos)) {
          var inputEvent = option && option.event || null;
          this.animateLoop({
            depaPos: depaPos,
            destPos: userWish.destPos,
            duration: userWish.duration,
            delta: this.axm.getDelta(depaPos, userWish.destPos),
            isTrusted: !!inputEvent,
            inputEvent: inputEvent,
            input: option && option.input || null
          }, function () {
            return _this.animationEnd();
          });
        }
      };

      __proto.easing = function (p) {
        return p > 1 ? 1 : this.options.easing(p);
      };

      __proto.setTo = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        var axes = Object.keys(pos);
        this.grab(axes);
        var orgPos = this.axm.get(axes);

        if (equal(pos, orgPos)) {
          return this;
        }

        this.itm.setInterrupt(true);
        var movedPos = filter(pos, function (v, k) {
          return orgPos[k] !== v;
        });

        if (!Object.keys(movedPos).length) {
          return this;
        }

        movedPos = this.axm.map(movedPos, function (v, opt) {
          var range = opt.range,
              circular = opt.circular;

          if (circular && (circular[0] || circular[1])) {
            return v;
          } else {
            return getInsidePosition(v, range, circular);
          }
        });

        if (equal(movedPos, orgPos)) {
          return this;
        }

        if (duration > 0) {
          this.animateTo(movedPos, duration);
        } else {
          this.em.triggerChange(movedPos);
          this.finish(false);
        }

        return this;
      };

      __proto.setBy = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        return this.setTo(map(this.axm.get(Object.keys(pos)), function (v, k) {
          return v + pos[k];
        }), duration);
      };

      return AnimationManager;
    }();

    var EventManager =
    /*#__PURE__*/
    function () {
      function EventManager(axes) {
        this.axes = axes;
      }
      /**
       * This event is fired when a user holds an element on the screen of the device.
       * @ko 사용자가 기기의 화면에 손을 대고 있을 때 발생하는 이벤트
       * @name eg.Axes#hold
       * @event
       * @type {object}
       * @property {Object.<string, number>} pos coordinate <ko>좌표 정보</ko>
       * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
       * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("hold", function(event) {
       *   // event.pos
       *   // event.input
       *   // event.inputEvent
       *   // isTrusted
       * });
       */


      var __proto = EventManager.prototype;

      __proto.triggerHold = function (pos, option) {
        var roundPos = this.getRoundPos(pos).roundPos;
        this.axes.trigger("hold", {
          pos: roundPos,
          input: option.input || null,
          inputEvent: option.event || null,
          isTrusted: true
        });
      };
      /**
       * Specifies the coordinates to move after the 'change' event. It works when the holding value of the change event is true.
       * @ko 'change' 이벤트 이후 이동할 좌표를 지정한다. change이벤트의 holding 값이 true일 경우에 동작한다
       * @name set
      * @function
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("change", function(event) {
       *   event.holding && event.set({x: 10});
       * });
       */

      /** Specifies the animation coordinates to move after the 'release' or 'animationStart' events.
       * @ko 'release' 또는 'animationStart' 이벤트 이후 이동할 좌표를 지정한다.
       * @name setTo
      * @function
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @param {Number} [duration] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("animationStart", function(event) {
       *   event.setTo({x: 10}, 2000);
       * });
       */

      /**
       * This event is fired when a user release an element on the screen of the device.
       * @ko 사용자가 기기의 화면에서 손을 뗐을 때 발생하는 이벤트
       * @name eg.Axes#release
       * @event
       * @type {object}
       * @property {Object.<string, number>} depaPos The coordinates when releasing an element<ko>손을 뗐을 때의 좌표 </ko>
       * @property {Object.<string, number>} destPos The coordinates to move to after releasing an element<ko>손을 뗀 뒤에 이동할 좌표</ko>
       * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
       * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
       * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
       * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("release", function(event) {
       *   // event.depaPos
       *   // event.destPos
       *   // event.delta
       *   // event.input
       *   // event.inputEvent
       *   // event.setTo
       *   // event.isTrusted
       *
       *   // if you want to change the animation coordinates to move after the 'release' event.
       *   event.setTo({x: 10}, 2000);
       * });
       */


      __proto.triggerRelease = function (param) {
        var _a = this.getRoundPos(param.destPos, param.depaPos),
            roundPos = _a.roundPos,
            roundDepa = _a.roundDepa;

        param.destPos = roundPos;
        param.depaPos = roundDepa;
        param.setTo = this.createUserControll(param.destPos, param.duration);
        this.axes.trigger("release", param);
      };
      /**
       * This event is fired when coordinate changes.
       * @ko 좌표가 변경됐을 때 발생하는 이벤트
       * @name eg.Axes#change
       * @event
       * @type {object}
       * @property {Object.<string, number>} pos  The coordinate <ko>좌표</ko>
       * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
       * @property {Boolean} holding Indicates whether a user holds an element on the screen of the device.<ko>사용자가 기기의 화면을 누르고 있는지 여부</ko>
       * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
       * @property {Object} inputEvent The event object received from inputType. If the value is changed by animation, it returns 'null'.<ko>inputType으로 부터 받은 이벤트 객체. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
       * @property {set} set Specifies the coordinates to move after the event. It works when the holding value is true <ko>이벤트 이후 이동할 좌표를 지정한다. holding 값이 true일 경우에 동작한다.</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("change", function(event) {
       *   // event.pos
       *   // event.delta
       *   // event.input
       *   // event.inputEvent
       *   // event.holding
       *   // event.set
       *   // event.isTrusted
       *
       *   // if you want to change the coordinates to move after the 'change' event.
       *   // it works when the holding value of the change event is true.
       *   event.holding && event.set({x: 10});
       * });
       */


      __proto.triggerChange = function (pos, isAccurate, depaPos, option, holding) {
        if (holding === void 0) {
          holding = false;
        }

        var am = this.am;
        var axm = am.axm;
        var eventInfo = am.getEventInfo();

        var _a = this.getRoundPos(pos, depaPos),
            roundPos = _a.roundPos,
            roundDepa = _a.roundDepa;

        var moveTo = axm.moveTo(roundPos, roundDepa);
        var inputEvent = option && option.event || eventInfo && eventInfo.event || null;
        var param = {
          pos: moveTo.pos,
          delta: moveTo.delta,
          holding: holding,
          inputEvent: inputEvent,
          isTrusted: !!inputEvent,
          input: option && option.input || eventInfo && eventInfo.input || null,
          set: inputEvent ? this.createUserControll(moveTo.pos) : function () {}
        };
        var result = this.axes.trigger("change", param);
        inputEvent && axm.set(param.set()["destPos"]);
        return result;
      };
      /**
       * This event is fired when animation starts.
       * @ko 에니메이션이 시작할 때 발생한다.
       * @name eg.Axes#animationStart
       * @event
       * @type {object}
       * @property {Object.<string, number>} depaPos The coordinates when animation starts<ko>애니메이션이 시작 되었을 때의 좌표 </ko>
       * @property {Object.<string, number>} destPos The coordinates to move to. If you change this value, you can run the animation<ko>이동할 좌표. 이값을 변경하여 애니메이션을 동작시킬수 있다</ko>
       * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
       * @property {Number} duration Duration of the animation (unit: ms). If you change this value, you can control the animation duration time.<ko>애니메이션 진행 시간(단위: ms). 이값을 변경하여 애니메이션의 이동시간을 조절할 수 있다.</ko>
       * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
       * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
       * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("release", function(event) {
       *   // event.depaPos
       *   // event.destPos
       *   // event.delta
       *   // event.input
       *   // event.inputEvent
       *   // event.setTo
       *   // event.isTrusted
       *
       *   // if you want to change the animation coordinates to move after the 'animationStart' event.
       *   event.setTo({x: 10}, 2000);
       * });
       */


      __proto.triggerAnimationStart = function (param) {
        var _a = this.getRoundPos(param.destPos, param.depaPos),
            roundPos = _a.roundPos,
            roundDepa = _a.roundDepa;

        param.destPos = roundPos;
        param.depaPos = roundDepa;
        param.setTo = this.createUserControll(param.destPos, param.duration);
        return this.axes.trigger("animationStart", param);
      };
      /**
       * This event is fired when animation ends.
       * @ko 에니메이션이 끝났을 때 발생한다.
       * @name eg.Axes#animationEnd
       * @event
       * @type {object}
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("animationEnd", function(event) {
       *   // event.isTrusted
       * });
       */


      __proto.triggerAnimationEnd = function (isTrusted) {
        if (isTrusted === void 0) {
          isTrusted = false;
        }

        this.axes.trigger("animationEnd", {
          isTrusted: isTrusted
        });
      };
      /**
       * This event is fired when all actions have been completed.
       * @ko 에니메이션이 끝났을 때 발생한다.
       * @name eg.Axes#finish
       * @event
       * @type {object}
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("finish", function(event) {
       *   // event.isTrusted
       * });
       */


      __proto.triggerFinish = function (isTrusted) {
        if (isTrusted === void 0) {
          isTrusted = false;
        }

        this.axes.trigger("finish", {
          isTrusted: isTrusted
        });
      };

      __proto.createUserControll = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        } // to controll


        var userControl = {
          destPos: __assign$1({}, pos),
          duration: duration
        };
        return function (toPos, userDuration) {
          toPos && (userControl.destPos = __assign$1({}, toPos));
          userDuration !== undefined && (userControl.duration = userDuration);
          return userControl;
        };
      };

      __proto.setAnimationManager = function (am) {
        this.am = am;
      };

      __proto.destroy = function () {
        this.axes.off();
      };

      __proto.getRoundPos = function (pos, depaPos) {
        // round value if round exist
        var roundUnit = this.axes.options.round; // if (round == null) {
        // 	return {pos, depaPos}; // undefined, undefined
        // }

        return {
          roundPos: roundNumbers(pos, roundUnit),
          roundDepa: roundNumbers(depaPos, roundUnit)
        };
      };

      return EventManager;
    }();

    var InterruptManager =
    /*#__PURE__*/
    function () {
      function InterruptManager(options) {
        this.options = options;
        this._prevented = false; //  check whether the animation event was prevented
      }

      var __proto = InterruptManager.prototype;

      __proto.isInterrupting = function () {
        // when interruptable is 'true', return value is always 'true'.
        return this.options.interruptable || this._prevented;
      };

      __proto.isInterrupted = function () {
        return !this.options.interruptable && this._prevented;
      };

      __proto.setInterrupt = function (prevented) {
        !this.options.interruptable && (this._prevented = prevented);
      };

      return InterruptManager;
    }();

    var AxisManager =
    /*#__PURE__*/
    function () {
      function AxisManager(axis, options) {
        var _this = this;

        this.axis = axis;
        this.options = options;

        this._complementOptions();

        this._pos = Object.keys(this.axis).reduce(function (acc, v) {
          acc[v] = _this.axis[v].range[0];
          return acc;
        }, {});
      }
      /**
         * set up 'css' expression
         * @private
         */


      var __proto = AxisManager.prototype;

      __proto._complementOptions = function () {
        var _this = this;

        Object.keys(this.axis).forEach(function (axis) {
          _this.axis[axis] = __assign$1({
            range: [0, 100],
            bounce: [0, 0],
            circular: [false, false]
          }, _this.axis[axis]);
          ["bounce", "circular"].forEach(function (v) {
            var axisOption = _this.axis;
            var key = axisOption[axis][v];

            if (/string|number|boolean/.test(typeof key)) {
              axisOption[axis][v] = [key, key];
            }
          });
        });
      };

      __proto.getDelta = function (depaPos, destPos) {
        var fullDepaPos = this.get(depaPos);
        return map(this.get(destPos), function (v, k) {
          return v - fullDepaPos[k];
        });
      };

      __proto.get = function (axes) {
        var _this = this;

        if (axes && Array.isArray(axes)) {
          return axes.reduce(function (acc, v) {
            if (v && v in _this._pos) {
              acc[v] = _this._pos[v];
            }

            return acc;
          }, {});
        } else {
          return __assign$1(__assign$1({}, this._pos), axes || {});
        }
      };

      __proto.moveTo = function (pos, depaPos) {
        if (depaPos === void 0) {
          depaPos = this._pos;
        }

        var delta = map(this._pos, function (v, key) {
          return key in pos && key in depaPos ? pos[key] - depaPos[key] : 0;
        });
        this.set(this.map(pos, function (v, opt) {
          return opt ? getCirculatedPos(v, opt.range, opt.circular) : 0;
        }));
        return {
          pos: __assign$1({}, this._pos),
          delta: delta
        };
      };

      __proto.set = function (pos) {
        for (var k in pos) {
          if (k && k in this._pos) {
            this._pos[k] = pos[k];
          }
        }
      };

      __proto.every = function (pos, callback) {
        var axisOptions = this.axis;
        return every(pos, function (value, key) {
          return callback(value, axisOptions[key], key);
        });
      };

      __proto.filter = function (pos, callback) {
        var axisOptions = this.axis;
        return filter(pos, function (value, key) {
          return callback(value, axisOptions[key], key);
        });
      };

      __proto.map = function (pos, callback) {
        var axisOptions = this.axis;
        return map(pos, function (value, key) {
          return callback(value, axisOptions[key], key);
        });
      };

      __proto.isOutside = function (axes) {
        return !this.every(axes ? this.get(axes) : this._pos, function (v, opt) {
          return !isOutside(v, opt.range);
        });
      };

      __proto.getAxisOptions = function (key) {
        return this.axis[key];
      };

      return AxisManager;
    }();

    var InputObserver =
    /*#__PURE__*/
    function () {
      function InputObserver(_a) {
        var options = _a.options,
            itm = _a.itm,
            em = _a.em,
            axm = _a.axm,
            am = _a.am;
        this.isOutside = false;
        this.moveDistance = null;
        this.isStopped = false;
        this.options = options;
        this.itm = itm;
        this.em = em;
        this.axm = axm;
        this.am = am;
      } // when move pointer is held in outside


      var __proto = InputObserver.prototype;

      __proto.atOutside = function (pos) {
        var _this = this;

        if (this.isOutside) {
          return this.axm.map(pos, function (v, opt) {
            var tn = opt.range[0] - opt.bounce[0];
            var tx = opt.range[1] + opt.bounce[1];
            return v > tx ? tx : v < tn ? tn : v;
          });
        } else {
          // when start pointer is held in inside
          // get a initialization slope value to prevent smooth animation.
          var initSlope_1 = this.am.easing(0.00001) / 0.00001;
          return this.axm.map(pos, function (v, opt) {
            var min = opt.range[0];
            var max = opt.range[1];
            var out = opt.bounce;
            var circular = opt.circular;

            if (circular && (circular[0] || circular[1])) {
              return v;
            } else if (v < min) {
              // left
              return min - _this.am.easing((min - v) / (out[0] * initSlope_1)) * out[0];
            } else if (v > max) {
              // right
              return max + _this.am.easing((v - max) / (out[1] * initSlope_1)) * out[1];
            }

            return v;
          });
        }
      };

      __proto.get = function (input) {
        return this.axm.get(input.axes);
      };

      __proto.hold = function (input, event) {
        if (this.itm.isInterrupted() || !input.axes.length) {
          return;
        }

        var changeOption = {
          input: input,
          event: event
        };
        this.isStopped = false;
        this.itm.setInterrupt(true);
        this.am.grab(input.axes, changeOption);
        !this.moveDistance && this.em.triggerHold(this.axm.get(), changeOption);
        this.isOutside = this.axm.isOutside(input.axes);
        this.moveDistance = this.axm.get(input.axes);
      };

      __proto.change = function (input, event, offset) {
        if (this.isStopped || !this.itm.isInterrupting() || this.axm.every(offset, function (v) {
          return v === 0;
        })) {
          return;
        }

        var depaPos = this.moveDistance || this.axm.get(input.axes);
        var destPos; // for outside logic

        destPos = map(depaPos, function (v, k) {
          return v + (offset[k] || 0);
        });
        this.moveDistance && (this.moveDistance = destPos); // from outside to inside

        if (this.isOutside && this.axm.every(depaPos, function (v, opt) {
          return !isOutside(v, opt.range);
        })) {
          this.isOutside = false;
        }

        depaPos = this.atOutside(depaPos);
        destPos = this.atOutside(destPos);
        var isCanceled = !this.em.triggerChange(destPos, false, depaPos, {
          input: input,
          event: event
        }, true);

        if (isCanceled) {
          this.isStopped = true;
          this.moveDistance = null;
          this.am.finish(false);
        }
      };

      __proto.release = function (input, event, offset, inputDuration) {
        if (this.isStopped || !this.itm.isInterrupting() || !this.moveDistance) {
          return;
        }

        var pos = this.axm.get(input.axes);
        var depaPos = this.axm.get();
        var destPos = this.axm.get(this.axm.map(offset, function (v, opt, k) {
          if (opt.circular && (opt.circular[0] || opt.circular[1])) {
            return pos[k] + v;
          } else {
            return getInsidePosition(pos[k] + v, opt.range, opt.circular, opt.bounce);
          }
        }));
        var duration = this.am.getDuration(destPos, pos, inputDuration);

        if (duration === 0) {
          destPos = __assign$1({}, depaPos);
        } // prepare params


        var param = {
          depaPos: depaPos,
          destPos: destPos,
          duration: duration,
          delta: this.axm.getDelta(depaPos, destPos),
          inputEvent: event,
          input: input,
          isTrusted: true
        };
        this.em.triggerRelease(param);
        this.moveDistance = null; // to contol

        var userWish = this.am.getUserControll(param);
        var isEqual = equal(userWish.destPos, depaPos);
        var changeOption = {
          input: input,
          event: event
        };

        if (isEqual || userWish.duration === 0) {
          !isEqual && this.em.triggerChange(userWish.destPos, false, depaPos, changeOption, true);
          this.itm.setInterrupt(false);

          if (this.axm.isOutside()) {
            this.am.restore(changeOption);
          } else {
            this.em.triggerFinish(true);
          }
        } else {
          this.am.animateTo(userWish.destPos, userWish.duration, changeOption);
        }
      };

      return InputObserver;
    }();

    // export const DIRECTION_NONE = 1;
    var IOS_EDGE_THRESHOLD = 30;
    var IS_IOS_SAFARI = "ontouchstart" in win$1 && agent().browser.name === "safari";
    var TRANSFORM = function () {
      if (typeof document === "undefined") {
        return "";
      }

      var bodyStyle = (document.head || document.getElementsByTagName("head")[0]).style;
      var target = ["transform", "webkitTransform", "msTransform", "mozTransform"];

      for (var i = 0, len = target.length; i < len; i++) {
        if (target[i] in bodyStyle) {
          return target[i];
        }
      }

      return "";
    }();

    /**
     * @typedef {Object} AxisOption The Axis information. The key of the axis specifies the name to use as the logical virtual coordinate system.
     * @ko 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.
     * @property {Number[]} [range] The coordinate of range <ko>좌표 범위</ko>
     * @property {Number} [range.0=0] The coordinate of the minimum <ko>최소 좌표</ko>
     * @property {Number} [range.1=0] The coordinate of the maximum <ko>최대 좌표</ko>
     * @property {Number[]} [bounce] The size of bouncing area. The coordinates can exceed the coordinate area as much as the bouncing area based on user action. If the coordinates does not exceed the bouncing area when an element is dragged, the coordinates where bouncing effects are applied are retuned back into the coordinate area<ko>바운스 영역의 크기. 사용자의 동작에 따라 좌표가 좌표 영역을 넘어 바운스 영역의 크기만큼 더 이동할 수 있다. 사용자가 끌어다 놓는 동작을 했을 때 좌표가 바운스 영역에 있으면, 바운스 효과가 적용된 좌표가 다시 좌표 영역 안으로 들어온다</ko>
     * @property {Number} [bounce.0=0] The size of coordinate of the minimum area <ko>최소 좌표 바운스 영역의 크기</ko>
     * @property {Number} [bounce.1=0] The size of coordinate of the maximum area <ko>최대 좌표 바운스 영역의 크기</ko>
     * @property {Boolean[]} [circular] Indicates whether a circular element is available. If it is set to "true" and an element is dragged outside the coordinate area, the element will appear on the other side.<ko>순환 여부. 'true'로 설정한 방향의 좌표 영역 밖으로 엘리먼트가 이동하면 반대 방향에서 엘리먼트가 나타난다</ko>
     * @property {Boolean} [circular.0=false] Indicates whether to circulate to the coordinate of the minimum <ko>최소 좌표 방향의 순환 여부</ko>
     * @property {Boolean} [circular.1=false] Indicates whether to circulate to the coordinate of the maximum <ko>최대 좌표 방향의 순환 여부</ko>
    **/

    /**
     * @typedef {Object} AxesOption The option object of the eg.Axes module
     * @ko eg.Axes 모듈의 옵션 객체
     * @property {Function} [easing=easing.easeOutCubic] The easing function to apply to an animation <ko>애니메이션에 적용할 easing 함수</ko>
     * @property {Number} [maximumDuration=Infinity] Maximum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최대 좌표 이동 시간</ko>
     * @property {Number} [minimumDuration=0] Minimum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최소 좌표 이동 시간</ko>
     * @property {Number} [deceleration=0.0006] Deceleration of the animation where acceleration is manually enabled by user. A higher value indicates shorter running time. <ko>사용자의 동작으로 가속도가 적용된 애니메이션의 감속도. 값이 높을수록 애니메이션 실행 시간이 짧아진다</ko>
     * @property {Boolean} [interruptable=true] Indicates whether an animation is interruptible.<br>- true: It can be paused or stopped by user action or the API.<br>- false: It cannot be paused or stopped by user action or the API while it is running.<ko>진행 중인 애니메이션 중지 가능 여부.<br>- true: 사용자의 동작이나 API로 애니메이션을 중지할 수 있다.<br>- false: 애니메이션이 진행 중일 때는 사용자의 동작이나 API가 적용되지 않는다</ko>
     * @property {Number} [round = null] Rounding unit. For example, 0.1 rounds to 0.1 decimal point(6.1234 => 6.1), 5 rounds to 5 (93 => 95) <br>[Details](https://github.com/naver/egjs-axes/wiki/round-option)<ko>반올림 단위. 예를 들어 0.1 은 소숫점 0.1 까지 반올림(6.1234 => 6.1), 5 는 5 단위로 반올림(93 => 95).<br>[상세내용](https://github.com/naver/egjs-axes/wiki/round-option)</ko>
    **/

    /**
     * @class eg.Axes
     * @classdesc A module used to change the information of user action entered by various input devices such as touch screen or mouse into the logical virtual coordinates. You can easily create a UI that responds to user actions.
     * @ko 터치 입력 장치나 마우스와 같은 다양한 입력 장치를 통해 전달 받은 사용자의 동작을 논리적인 가상 좌표로 변경하는 모듈이다. 사용자 동작에 반응하는 UI를 손쉽게 만들수 있다.
     * @extends eg.Component
     *
     * @param {Object.<string, AxisOption>} axis Axis information managed by eg.Axes. The key of the axis specifies the name to use as the logical virtual coordinate system.  <ko>eg.Axes가 관리하는 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.</ko>
     * @param {AxesOption} [options] The option object of the eg.Axes module<ko>eg.Axes 모듈의 옵션 객체</ko>
     * @param {Object.<string, number>} [startPos] The coordinates to be moved when creating an instance. not triggering change event.<ko>인스턴스 생성시 이동할 좌표, change 이벤트는 발생하지 않음.</ko>
     *
     * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
     * @example
     *
     * // 1. Initialize eg.Axes
     * const axes = new eg.Axes({
     *	something1: {
     *		range: [0, 150],
     *		bounce: 50
     *	},
     *	something2: {
     *		range: [0, 200],
     *		bounce: 100
     *	},
     *	somethingN: {
     *		range: [1, 10],
     *	}
     * }, {
     *  deceleration : 0.0024
     * });
     *
     * // 2. attach event handler
     * axes.on({
     *	"hold" : function(evt) {
     *	},
     *	"release" : function(evt) {
     *	},
     *	"animationStart" : function(evt) {
     *	},
     *	"animationEnd" : function(evt) {
     *	},
     *	"change" : function(evt) {
     *	}
     * });
     *
     * // 3. Initialize inputTypes
     * const panInputArea = new eg.Axes.PanInput("#area", {
     *	scale: [0.5, 1]
     * });
     * const panInputHmove = new eg.Axes.PanInput("#hmove");
     * const panInputVmove = new eg.Axes.PanInput("#vmove");
     * const pinchInputArea = new eg.Axes.PinchInput("#area", {
     *	scale: 1.5
     * });
     *
     * // 4. Connect eg.Axes and InputTypes
     * // [PanInput] When the mouse or touchscreen is down and moved.
     * // Connect the 'something2' axis to the mouse or touchscreen x position and
     * // connect the 'somethingN' axis to the mouse or touchscreen y position.
     * axes.connect(["something2", "somethingN"], panInputArea); // or axes.connect("something2 somethingN", panInputArea);
     *
     * // Connect only one 'something1' axis to the mouse or touchscreen x position.
     * axes.connect(["something1"], panInputHmove); // or axes.connect("something1", panInputHmove);
     *
     * // Connect only one 'something2' axis to the mouse or touchscreen y position.
     * axes.connect(["", "something2"], panInputVmove); // or axes.connect(" something2", panInputVmove);
     *
     * // [PinchInput] Connect 'something2' axis when two pointers are moving toward (zoom-in) or away from each other (zoom-out).
     * axes.connect("something2", pinchInputArea);
     */

    var Axes =
    /*#__PURE__*/
    function (_super) {
      __extends$1(Axes, _super);

      function Axes(axis, options, startPos) {
        if (axis === void 0) {
          axis = {};
        }

        if (options === void 0) {
          options = {};
        }

        var _this = _super.call(this) || this;

        _this.axis = axis;
        _this._inputs = [];
        _this.options = __assign$1({
          easing: function easeOutCubic(x) {
            return 1 - Math.pow(1 - x, 3);
          },
          interruptable: true,
          maximumDuration: Infinity,
          minimumDuration: 0,
          deceleration: 0.0006,
          round: null
        }, options);
        _this.itm = new InterruptManager(_this.options);
        _this.axm = new AxisManager(_this.axis, _this.options);
        _this.em = new EventManager(_this);
        _this.am = new AnimationManager(_this);
        _this.io = new InputObserver(_this);

        _this.em.setAnimationManager(_this.am);

        startPos && _this.em.triggerChange(startPos);
        return _this;
      }
      /**
       * Connect the axis of eg.Axes to the inputType.
       * @ko eg.Axes의 축과 inputType을 연결한다
       * @method eg.Axes#connect
       * @param {(String[]|String)} axes The name of the axis to associate with inputType <ko>inputType과 연결할 축의 이름</ko>
       * @param {Object} inputType The inputType instance to associate with the axis of eg.Axes <ko>eg.Axes의 축과 연결할 inputType 인스턴스<ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   }
       * });
       *
       * axes.connect("x", new eg.Axes.PanInput("#area1"))
       *    .connect("x xOther", new eg.Axes.PanInput("#area2"))
       *    .connect(" xOther", new eg.Axes.PanInput("#area3"))
       *    .connect(["x"], new eg.Axes.PanInput("#area4"))
       *    .connect(["xOther", "x"], new eg.Axes.PanInput("#area5"))
       *    .connect(["", "xOther"], new eg.Axes.PanInput("#area6"));
       */


      var __proto = Axes.prototype;

      __proto.connect = function (axes, inputType) {
        var mapped;

        if (typeof axes === "string") {
          mapped = axes.split(" ");
        } else {
          mapped = axes.concat();
        } // check same instance


        if (~this._inputs.indexOf(inputType)) {
          this.disconnect(inputType);
        } // check same element in hammer type for share


        if ("hammer" in inputType) {
          var targets = this._inputs.filter(function (v) {
            return v.hammer && v.element === inputType.element;
          });

          if (targets.length) {
            inputType.hammer = targets[0].hammer;
          }
        }

        inputType.mapAxes(mapped);
        inputType.connect(this.io);

        this._inputs.push(inputType);

        return this;
      };
      /**
       * Disconnect the axis of eg.Axes from the inputType.
       * @ko eg.Axes의 축과 inputType의 연결을 끊는다.
       * @method eg.Axes#disconnect
       * @param {Object} [inputType] An inputType instance associated with the axis of eg.Axes <ko>eg.Axes의 축과 연결한 inputType 인스턴스<ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   }
       * });
       *
       * const input1 = new eg.Axes.PanInput("#area1");
       * const input2 = new eg.Axes.PanInput("#area2");
       * const input3 = new eg.Axes.PanInput("#area3");
       *
       * axes.connect("x", input1);
       *    .connect("x xOther", input2)
       *    .connect(["xOther", "x"], input3);
       *
       * axes.disconnect(input1); // disconnects input1
       * axes.disconnect(); // disconnects all of them
       */


      __proto.disconnect = function (inputType) {
        if (inputType) {
          var index = this._inputs.indexOf(inputType);

          if (index >= 0) {
            this._inputs[index].disconnect();

            this._inputs.splice(index, 1);
          }
        } else {
          this._inputs.forEach(function (v) {
            return v.disconnect();
          });

          this._inputs = [];
        }

        return this;
      };
      /**
       * Returns the current position of the coordinates.
       * @ko 좌표의 현재 위치를 반환한다
       * @method eg.Axes#get
       * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
       * @return {Object.<string, number>} Axis coordinate information <ko>축 좌표 정보</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       * 	 "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.get(); // {"x": 0, "xOther": -100, "zoom": 50}
       * axes.get(["x", "zoom"]); // {"x": 0, "zoom": 50}
       */


      __proto.get = function (axes) {
        return this.axm.get(axes);
      };
      /**
       * Moves an axis to specific coordinates.
       * @ko 좌표를 이동한다.
       * @method eg.Axes#setTo
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       * 	 "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.setTo({"x": 30, "zoom": 60});
       * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
       *
       * axes.setTo({"x": 100, "xOther": 60}, 1000); // animatation
       *
       * // after 1000 ms
       * axes.get(); // {"x": 100, "xOther": 60, "zoom": 60}
       */


      __proto.setTo = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        this.am.setTo(pos, duration);
        return this;
      };
      /**
       * Moves an axis from the current coordinates to specific coordinates.
       * @ko 현재 좌표를 기준으로 좌표를 이동한다.
       * @method eg.Axes#setBy
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       * 	 "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.setBy({"x": 30, "zoom": 10});
       * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
       *
       * axes.setBy({"x": 70, "xOther": 60}, 1000); // animatation
       *
       * // after 1000 ms
       * axes.get(); // {"x": 100, "xOther": -40, "zoom": 60}
       */


      __proto.setBy = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        this.am.setBy(pos, duration);
        return this;
      };
      /**
       * Returns whether there is a coordinate in the bounce area of ​​the target axis.
       * @ko 대상 축 중 bounce영역에 좌표가 존재하는지를 반환한다
       * @method eg.Axes#isBounceArea
       * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
       * @return {Boolen} Whether the bounce area exists. <ko>bounce 영역 존재 여부</ko>
       * @example
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       * 	 "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.isBounceArea(["x"]);
       * axes.isBounceArea(["x", "zoom"]);
       * axes.isBounceArea();
       */


      __proto.isBounceArea = function (axes) {
        return this.axm.isOutside(axes);
      };
      /**
      * Destroys properties, and events used in a module and disconnect all connections to inputTypes.
      * @ko 모듈에 사용한 속성, 이벤트를 해제한다. 모든 inputType과의 연결을 끊는다.
      * @method eg.Axes#destroy
      */


      __proto.destroy = function () {
        this.disconnect();
        this.em.destroy();
      };
      /**
       * Version info string
       * @ko 버전정보 문자열
       * @name VERSION
       * @static
       * @type {String}
       * @example
       * eg.Axes.VERSION;  // ex) 3.3.3
       * @memberof eg.Axes
       */


      Axes.VERSION = "2.8.0";
      /**
       * @name eg.Axes.TRANSFORM
       * @desc Returns the transform attribute with CSS vendor prefixes.
       * @ko CSS vendor prefixes를 붙인 transform 속성을 반환한다.
       *
       * @constant
       * @type {String}
       * @example
       * eg.Axes.TRANSFORM; // "transform" or "webkitTransform"
       */

      Axes.TRANSFORM = TRANSFORM;
      /**
       * @name eg.Axes.DIRECTION_NONE
       * @constant
       * @type {Number}
       */

      Axes.DIRECTION_NONE = DIRECTION_NONE;
      /**
       * @name eg.Axes.DIRECTION_LEFT
       * @constant
       * @type {Number}
      */

      Axes.DIRECTION_LEFT = DIRECTION_LEFT;
      /**
       * @name eg.Axes.DIRECTION_RIGHT
       * @constant
       * @type {Number}
      */

      Axes.DIRECTION_RIGHT = DIRECTION_RIGHT;
      /**
       * @name eg.Axes.DIRECTION_UP
       * @constant
       * @type {Number}
      */

      Axes.DIRECTION_UP = DIRECTION_UP;
      /**
       * @name eg.Axes.DIRECTION_DOWN
       * @constant
       * @type {Number}
      */

      Axes.DIRECTION_DOWN = DIRECTION_DOWN;
      /**
       * @name eg.Axes.DIRECTION_HORIZONTAL
       * @constant
       * @type {Number}
      */

      Axes.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
      /**
       * @name eg.Axes.DIRECTION_VERTICAL
       * @constant
       * @type {Number}
      */

      Axes.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
      /**
       * @name eg.Axes.DIRECTION_ALL
       * @constant
       * @type {Number}
      */

      Axes.DIRECTION_ALL = DIRECTION_ALL;
      return Axes;
    }(Component);

    var SUPPORT_POINTER_EVENTS$1 = "PointerEvent" in win$1 || "MSPointerEvent" in win$1;
    var SUPPORT_TOUCH$1 = ("ontouchstart" in win$1);
    var UNIQUEKEY = "_EGJS_AXES_INPUTTYPE_";
    function toAxis(source, offset) {
      return offset.reduce(function (acc, v, i) {
        if (source[i]) {
          acc[source[i]] = v;
        }

        return acc;
      }, {});
    }
    function createHammer(element, options) {
      try {
        // create Hammer
        return new Manager(element, __assign$1({}, options));
      } catch (e) {
        return null;
      }
    }
    function convertInputType(inputType) {
      if (inputType === void 0) {
        inputType = [];
      }

      var hasTouch = false;
      var hasMouse = false;
      var hasPointer = false;
      inputType.forEach(function (v) {
        switch (v) {
          case "mouse":
            hasMouse = true;
            break;

          case "touch":
            hasTouch = SUPPORT_TOUCH$1;
            break;

          case "pointer":
            hasPointer = SUPPORT_POINTER_EVENTS$1;
          // no default
        }
      });

      if (hasPointer) {
        return PointerEventInput;
      } else if (hasTouch && hasMouse) {
        return TouchMouseInput;
      } else if (hasTouch) {
        return TouchInput;
      } else if (hasMouse) {
        return MouseInput;
      }

      return null;
    }

    function getDirectionByAngle(angle, thresholdAngle) {
      if (thresholdAngle < 0 || thresholdAngle > 90) {
        return DIRECTION_NONE;
      }

      var toAngle = Math.abs(angle);
      return toAngle > thresholdAngle && toAngle < 180 - thresholdAngle ? DIRECTION_VERTICAL : DIRECTION_HORIZONTAL;
    }
    function getNextOffset(speeds, deceleration) {
      var normalSpeed = Math.sqrt(speeds[0] * speeds[0] + speeds[1] * speeds[1]);
      var duration = Math.abs(normalSpeed / -deceleration);
      return [speeds[0] / 2 * duration, speeds[1] / 2 * duration];
    }
    function useDirection(checkType, direction, userDirection) {
      if (userDirection) {
        return !!(direction === DIRECTION_ALL || direction & checkType && userDirection & checkType);
      } else {
        return !!(direction & checkType);
      }
    }
    /**
     * @typedef {Object} PanInputOption The option object of the eg.Axes.PanInput module.
     * @ko eg.Axes.PanInput 모듈의 옵션 객체
     * @property {String[]} [inputType=["touch","mouse", "pointer"]] Types of input devices.<br>- touch: Touch screen<br>- mouse: Mouse <ko>입력 장치 종류.<br>- touch: 터치 입력 장치<br>- mouse: 마우스</ko>
     * @property {Number[]} [scale] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
     * @property {Number} [scale.0=1] horizontal axis scale <ko>수평축 배율</ko>
     * @property {Number} [scale.1=1] vertical axis scale <ko>수직축 배율</ko>
     * @property {Number} [thresholdAngle=45] The threshold value that determines whether user action is horizontal or vertical (0~90) <ko>사용자의 동작이 가로 방향인지 세로 방향인지 판단하는 기준 각도(0~90)</ko>
     * @property {Number} [threshold=0] Minimal pan distance required before recognizing <ko>사용자의 Pan 동작을 인식하기 위해산 최소한의 거리</ko>
     * @property {Number} [iOSEdgeSwipeThreshold=30] Area (px) that can go to the next page when swiping the right edge in iOS safari <ko>iOS Safari에서 오른쪽 엣지를 스와이프 하는 경우 다음 페이지로 넘어갈 수 있는 영역(px)</ko>
     * @property {Object} [hammerManagerOptions={cssProps: {userSelect: "none",touchSelect: "none",touchCallout: "none",userDrag: "none"}] Options of Hammer.Manager <ko>Hammer.Manager의 옵션</ko>
    **/

    /**
     * @class eg.Axes.PanInput
     * @classdesc A module that passes the amount of change to eg.Axes when the mouse or touchscreen is down and moved. use less than two axes.
     * @ko 마우스나 터치 스크린을 누르고 움직일때의 변화량을 eg.Axes에 전달하는 모듈. 두개 이하의 축을 사용한다.
     *
     * @example
     * const pan = new eg.Axes.PanInput("#area", {
     * 		inputType: ["touch"],
     * 		scale: [1, 1.3],
     * });
     *
     * // Connect the 'something2' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
     * // Connect the 'somethingN' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
     * axes.connect(["something2", "somethingN"], pan); // or axes.connect("something2 somethingN", pan);
     *
     * // Connect only one 'something1' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
     * axes.connect(["something1"], pan); // or axes.connect("something1", pan);
     *
     * // Connect only one 'something2' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
     * axes.connect(["", "something2"], pan); // or axes.connect(" something2", pan);
     *
     * @param {HTMLElement|String|jQuery} element An element to use the eg.Axes.PanInput module <ko>eg.Axes.PanInput 모듈을 사용할 엘리먼트</ko>
     * @param {PanInputOption} [options] The option object of the eg.Axes.PanInput module<ko>eg.Axes.PanInput 모듈의 옵션 객체</ko>
     */

    var PanInput =
    /*#__PURE__*/
    function () {
      function PanInput(el, options) {
        this.axes = [];
        this.hammer = null;
        this.element = null;
        this.panRecognizer = null;
        this.isRightEdge = false;
        this.rightEdgeTimer = 0;
        this.panFlag = false;
        /**
         * Hammer helps you add support for touch gestures to your page
         *
         * @external Hammer
         * @see {@link http://hammerjs.github.io|Hammer.JS}
         * @see {@link http://hammerjs.github.io/jsdoc/Hammer.html|Hammer.JS API documents}
         * @see Hammer.JS applies specific CSS properties by {@link http://hammerjs.github.io/jsdoc/Hammer.defaults.cssProps.html|default} when creating an instance. The eg.Axes module removes all default CSS properties provided by Hammer.JS
         */

        if (typeof Manager === "undefined") {
          throw new Error("The Hammerjs must be loaded before eg.Axes.PanInput.\nhttp://hammerjs.github.io/");
        }

        this.element = $(el);
        this.options = __assign$1({
          inputType: ["touch", "mouse", "pointer"],
          scale: [1, 1],
          thresholdAngle: 45,
          threshold: 0,
          iOSEdgeSwipeThreshold: IOS_EDGE_THRESHOLD,
          releaseOnScroll: false,
          hammerManagerOptions: {
            // css properties were removed due to usablility issue
            // http://hammerjs.github.io/jsdoc/Hammer.defaults.cssProps.html
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              userDrag: "none"
            }
          }
        }, options);
        this.onHammerInput = this.onHammerInput.bind(this);
        this.onPanmove = this.onPanmove.bind(this);
        this.onPanend = this.onPanend.bind(this);
      }

      var __proto = PanInput.prototype;

      __proto.mapAxes = function (axes) {
        var useHorizontal = !!axes[0];
        var useVertical = !!axes[1];

        if (useHorizontal && useVertical) {
          this._direction = DIRECTION_ALL;
        } else if (useHorizontal) {
          this._direction = DIRECTION_HORIZONTAL;
        } else if (useVertical) {
          this._direction = DIRECTION_VERTICAL;
        } else {
          this._direction = DIRECTION_NONE;
        }

        this.axes = axes;
      };

      __proto.connect = function (observer) {
        var hammerOption = {
          direction: this._direction,
          threshold: this.options.threshold
        };

        if (this.hammer) {
          // for sharing hammer instance.
          // hammer remove previous PanRecognizer.
          this.removeRecognizer();
          this.dettachEvent();
        } else {
          var keyValue = this.element[UNIQUEKEY];

          if (!keyValue) {
            keyValue = String(Math.round(Math.random() * new Date().getTime()));
          }

          var inputClass = convertInputType(this.options.inputType);

          if (!inputClass) {
            throw new Error("Wrong inputType parameter!");
          }

          this.hammer = createHammer(this.element, __assign$1({
            inputClass: inputClass
          }, this.options.hammerManagerOptions));
          this.element[UNIQUEKEY] = keyValue;
        }

        this.panRecognizer = new PanRecognizer(hammerOption);
        this.hammer.add(this.panRecognizer);
        this.attachEvent(observer);
        return this;
      };

      __proto.disconnect = function () {
        this.removeRecognizer();

        if (this.hammer) {
          this.dettachEvent();
        }

        this._direction = DIRECTION_NONE;
        return this;
      };
      /**
      * Destroys elements, properties, and events used in a module.
      * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
      * @method eg.Axes.PanInput#destroy
      */


      __proto.destroy = function () {
        this.disconnect();

        if (this.hammer && this.hammer.recognizers.length === 0) {
          this.hammer.destroy();
        }

        delete this.element[UNIQUEKEY];
        this.element = null;
        this.hammer = null;
      };
      /**
       * Enables input devices
       * @ko 입력 장치를 사용할 수 있게 한다
       * @method eg.Axes.PanInput#enable
       * @return {eg.Axes.PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */


      __proto.enable = function () {
        this.hammer && (this.hammer.get("pan").options.enable = true);
        return this;
      };
      /**
       * Disables input devices
       * @ko 입력 장치를 사용할 수 없게 한다.
       * @method eg.Axes.PanInput#disable
       * @return {eg.Axes.PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */


      __proto.disable = function () {
        this.hammer && (this.hammer.get("pan").options.enable = false);
        return this;
      };
      /**
       * Returns whether to use an input device
       * @ko 입력 장치를 사용 여부를 반환한다.
       * @method eg.Axes.PanInput#isEnable
       * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
       */


      __proto.isEnable = function () {
        return !!(this.hammer && this.hammer.get("pan").options.enable);
      };

      __proto.removeRecognizer = function () {
        if (this.hammer && this.panRecognizer) {
          this.hammer.remove(this.panRecognizer);
          this.panRecognizer = null;
        }
      };

      __proto.onHammerInput = function (event) {
        if (this.isEnable()) {
          if (event.isFirst) {
            this.panFlag = false;

            if (event.srcEvent.cancelable !== false) {
              var edgeThreshold = this.options.iOSEdgeSwipeThreshold;
              this.observer.hold(this, event);
              this.isRightEdge = IS_IOS_SAFARI && event.center.x > window.innerWidth - edgeThreshold;
              this.panFlag = true;
            }
          } else if (event.isFinal) {
            this.onPanend(event);
          }
        }
      };

      __proto.onPanmove = function (event) {
        var _this = this;

        if (!this.panFlag) {
          return;
        }

        var _a = this.options,
            iOSEdgeSwipeThreshold = _a.iOSEdgeSwipeThreshold,
            releaseOnScroll = _a.releaseOnScroll;
        var userDirection = getDirectionByAngle(event.angle, this.options.thresholdAngle); // not support offset properties in Hammerjs - start

        var prevInput = this.hammer.session.prevInput;

        if (releaseOnScroll && !event.srcEvent.cancelable) {
          this.onPanend(__assign$1(__assign$1({}, event), {
            velocityX: 0,
            velocityY: 0,
            offsetX: 0,
            offsetY: 0
          }));
          return;
        }

        if (prevInput && IS_IOS_SAFARI) {
          var swipeLeftToRight = event.center.x < 0;

          if (swipeLeftToRight) {
            // iOS swipe left => right
            this.onPanend(__assign$1(__assign$1({}, prevInput), {
              velocityX: 0,
              velocityY: 0,
              offsetX: 0,
              offsetY: 0
            }));
            return;
          } else if (this.isRightEdge) {
            clearTimeout(this.rightEdgeTimer); // - is right to left

            var swipeRightToLeft = event.deltaX < -iOSEdgeSwipeThreshold;

            if (swipeRightToLeft) {
              this.isRightEdge = false;
            } else {
              // iOS swipe right => left
              this.rightEdgeTimer = window.setTimeout(function () {
                _this.onPanend(__assign$1(__assign$1({}, prevInput), {
                  velocityX: 0,
                  velocityY: 0,
                  offsetX: 0,
                  offsetY: 0
                }));
              }, 100);
            }
          }
        }
        /* eslint-disable no-param-reassign */


        if (prevInput) {
          event.offsetX = event.deltaX - prevInput.deltaX;
          event.offsetY = event.deltaY - prevInput.deltaY;
        } else {
          event.offsetX = 0;
          event.offsetY = 0;
        }

        var offset = this.getOffset([event.offsetX, event.offsetY], [useDirection(DIRECTION_HORIZONTAL, this._direction, userDirection), useDirection(DIRECTION_VERTICAL, this._direction, userDirection)]);
        var prevent = offset.some(function (v) {
          return v !== 0;
        });

        if (prevent) {
          var srcEvent = event.srcEvent;

          if (srcEvent.cancelable !== false) {
            srcEvent.preventDefault();
          }

          srcEvent.stopPropagation();
        }

        event.preventSystemEvent = prevent;
        prevent && this.observer.change(this, event, toAxis(this.axes, offset));
      };

      __proto.onPanend = function (event) {
        if (!this.panFlag) {
          return;
        }

        clearTimeout(this.rightEdgeTimer);
        this.panFlag = false;
        var offset = this.getOffset([Math.abs(event.velocityX) * (event.deltaX < 0 ? -1 : 1), Math.abs(event.velocityY) * (event.deltaY < 0 ? -1 : 1)], [useDirection(DIRECTION_HORIZONTAL, this._direction), useDirection(DIRECTION_VERTICAL, this._direction)]);
        offset = getNextOffset(offset, this.observer.options.deceleration);
        this.observer.release(this, event, toAxis(this.axes, offset));
      };

      __proto.attachEvent = function (observer) {
        this.observer = observer;
        this.hammer.on("hammer.input", this.onHammerInput).on("panstart panmove", this.onPanmove);
      };

      __proto.dettachEvent = function () {
        this.hammer.off("hammer.input", this.onHammerInput).off("panstart panmove", this.onPanmove);
        this.observer = null;
      };

      __proto.getOffset = function (properties, direction) {
        var offset = [0, 0];
        var scale = this.options.scale;

        if (direction[0]) {
          offset[0] = properties[0] * scale[0];
        }

        if (direction[1]) {
          offset[1] = properties[1] * scale[1];
        }

        return offset;
      };

      return PanInput;
    }();

    /*
    Copyright (c) NAVER Corp.
    name: @egjs/component
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-component
    version: 3.0.1
    */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __values$1(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    var isUndefined$1 = function (value) {
      return typeof value === "undefined";
    };

    /**
     * Event class to provide additional properties
     * @ko Component에서 추가적인 프로퍼티를 제공하는 이벤트 클래스
     */

    var ComponentEvent =
    /*#__PURE__*/
    function () {
      /**
       * Create a new instance of ComponentEvent.
       * @ko ComponentEvent의 새로운 인스턴스를 생성한다.
       * @param eventType The name of the event.<ko>이벤트 이름.</ko>
       * @param props An object that contains additional event properties.<ko>추가적인 이벤트 프로퍼티 오브젝트.</ko>
       */
      function ComponentEvent(eventType, props) {
        var e_1, _a;

        this.eventType = eventType;
        this._canceled = false;
        if (!props) return;

        try {
          for (var _b = __values$1(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

            this[key] = props[key];
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      /**
       * Stop the event. {@link ComponentEvent#isCanceled} will return `true` after.
       * @ko 이벤트를 중단한다. 이후 {@link ComponentEvent#isCanceled}가 `true`를 반환한다.
       */


      var __proto = ComponentEvent.prototype;

      __proto.stop = function () {
        this._canceled = true;
      };
      /**
       * Returns a boolean value that indicates whether {@link ComponentEvent#stop} is called before.
       * @ko {@link ComponentEvent#stop}이 호출되었는지 여부를 반환한다.
       * @return {boolean} A boolean value that indicates whether {@link ComponentEvent#stop} is called before.<ko>이전에 {@link ComponentEvent#stop}이 불려졌는지 여부를 반환한다.</ko>
       */


      __proto.isCanceled = function () {
        return this._canceled;
      };

      return ComponentEvent;
    }();

    /**
     * A class used to manage events in a component
     * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
     */

    var Component$1 =
    /*#__PURE__*/
    function () {
      /**
       * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
       */
      function Component() {
        this._eventHandler = {};
      }
      /**
       * Trigger a custom event.
       * @ko 커스텀 이벤트를 발생시킨다
       * @param {string | ComponentEvent} event The name of the custom event to be triggered or an instance of the ComponentEvent<ko>발생할 커스텀 이벤트의 이름 또는 ComponentEvent의 인스턴스</ko>
       * @param {any[]} params Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
       * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   beforeHi: ComponentEvent<{ foo: number; bar: string }>;
       *   hi: { foo: { a: number; b: boolean } };
       *   someEvent: (foo: number, bar: string) => void;
       *   someOtherEvent: void; // When there's no event argument
       * }> {
       *   some(){
       *     if(this.trigger("beforeHi")){ // When event call to stop return false.
       *       this.trigger("hi");// fire hi event.
       *     }
       *   }
       * }
       *
       * const some = new Some();
       * some.on("beforeHi", e => {
       *   if(condition){
       *     e.stop(); // When event call to stop, `hi` event not call.
       *   }
       *   // `currentTarget` is component instance.
       *   console.log(some === e.currentTarget); // true
       *
       *   typeof e.foo; // number
       *   typeof e.bar; // string
       * });
       * some.on("hi", e => {
       *   typeof e.foo.b; // boolean
       * });
       * // If you want to more know event design. You can see article.
       * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
       * ```
       */


      var __proto = Component.prototype;

      __proto.trigger = function (event) {
        var params = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          params[_i - 1] = arguments[_i];
        }

        var eventName = event instanceof ComponentEvent ? event.eventType : event;

        var handlers = __spread(this._eventHandler[eventName] || []);

        if (handlers.length <= 0) {
          return this;
        }

        if (event instanceof ComponentEvent) {
          event.currentTarget = this;
          handlers.forEach(function (handler) {
            handler(event);
          });
        } else {
          handlers.forEach(function (handler) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            handler.apply(void 0, __spread(params));
          });
        }

        return this;
      };
      /**
       * Executed event just one time.
       * @ko 이벤트가 한번만 실행된다.
       * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: ComponentEvent;
       * }> {
       *   hi() {
       *     alert("hi");
       *   }
       *   thing() {
       *     this.once("hi", this.hi);
       *   }
       * }
       *
       * var some = new Some();
       * some.thing();
       * some.trigger(new ComponentEvent("hi"));
       * // fire alert("hi");
       * some.trigger(new ComponentEvent("hi"));
       * // Nothing happens
       * ```
       */


      __proto.once = function (eventName, handlerToAttach) {
        var _this = this;

        if (typeof eventName === "object" && isUndefined$1(handlerToAttach)) {
          var eventHash = eventName;

          for (var key in eventHash) {
            this.once(key, eventHash[key]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var listener_1 = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            } // eslint-disable-next-line @typescript-eslint/no-unsafe-call


            handlerToAttach.apply(void 0, __spread(args));

            _this.off(eventName, listener_1);
          };

          this.on(eventName, listener_1);
        }

        return this;
      };
      /**
       * Checks whether an event has been attached to a component.
       * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
       * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
       * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
       * @example
       * ```ts
       * import Component from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   some() {
       *     this.hasOn("hi");// check hi event.
       *   }
       * }
       * ```
       */


      __proto.hasOn = function (eventName) {
        return !!this._eventHandler[eventName];
      };
      /**
       * Attaches an event to a component.
       * @ko 컴포넌트에 이벤트를 등록한다.
       * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.on("hi",this.hi); //attach event
       *   }
       * }
       * ```
       */


      __proto.on = function (eventName, handlerToAttach) {
        if (typeof eventName === "object" && isUndefined$1(handlerToAttach)) {
          var eventHash = eventName;

          for (var name in eventHash) {
            this.on(name, eventHash[name]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var handlerList = this._eventHandler[eventName];

          if (isUndefined$1(handlerList)) {
            this._eventHandler[eventName] = [];
            handlerList = this._eventHandler[eventName];
          }

          handlerList.push(handlerToAttach);
        }

        return this;
      };
      /**
       * Detaches an event from the component.<br/>If the `eventName` is not given this will detach all event handlers attached.<br/>If the `handlerToDetach` is not given, this will detach all event handlers for `eventName`.
       * @ko 컴포넌트에 등록된 이벤트를 해제한다.<br/>`eventName`이 주어지지 않았을 경우 모든 이벤트 핸들러를 제거한다.<br/>`handlerToAttach`가 주어지지 않았을 경우 `eventName`에 해당하는 모든 이벤트 핸들러를 제거한다.
       * @param {string?} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
       * @param {function?} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.off("hi",this.hi); //detach event
       *   }
       * }
       * ```
       */


      __proto.off = function (eventName, handlerToDetach) {
        var e_1, _a; // Detach all event handlers.


        if (isUndefined$1(eventName)) {
          this._eventHandler = {};
          return this;
        } // Detach all handlers for eventname or detach event handlers by object.


        if (isUndefined$1(handlerToDetach)) {
          if (typeof eventName === "string") {
            delete this._eventHandler[eventName];
            return this;
          } else {
            var eventHash = eventName;

            for (var name in eventHash) {
              this.off(name, eventHash[name]);
            }

            return this;
          }
        } // Detach single event handler


        var handlerList = this._eventHandler[eventName];

        if (handlerList) {
          var idx = 0;

          try {
            for (var handlerList_1 = __values$1(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
              var handlerFunction = handlerList_1_1.value;

              if (handlerFunction === handlerToDetach) {
                handlerList.splice(idx, 1);

                if (handlerList.length <= 0) {
                  delete this._eventHandler[eventName];
                }

                break;
              }

              idx++;
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }

        return this;
      };
      /**
       * Version info string
       * @ko 버전정보 문자열
       * @name VERSION
       * @static
       * @example
       * Component.VERSION;  // ex) 3.0.0
       * @memberof Component
       */


      Component.VERSION = "3.0.1";
      return Component;
    }();

    var OBSERVERS_PATH = "__observers__";

    var Observer = function () {
      function Observer(value) {
        this._emitter = new Component$1();
        this._current = value;
      }

      var __proto = Observer.prototype;
      Object.defineProperty(__proto, "current", {
        get: function () {
          return this._current;
        },
        set: function (value) {
          var isUpdate = value !== this._current;
          this._current = value;

          if (isUpdate) {
            this._emitter.trigger("update", value);
          }
        },
        enumerable: false,
        configurable: true
      });

      __proto.subscribe = function (callback) {
        this._emitter.on("update", callback);
      };

      __proto.unsubscribe = function (callback) {
        this._emitter.off("update", callback);
      };

      return Observer;
    }();

    function keys(obj) {
      return Object.keys(obj);
    }
    function camelize(str) {
      return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
        return letter.toUpperCase();
      });
    }

    function withReactiveMethods(ref, methods) {
      var obj = {};
      methods.forEach(function (name) {
        obj[name] = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var current = ref.current || ref.value;
          return current[name].apply(current, args);
        };
      });
      return obj;
    }
    function getObservers(instance) {
      if (!instance[OBSERVERS_PATH]) {
        instance[OBSERVERS_PATH] = {};
      }

      return instance[OBSERVERS_PATH];
    }
    function getObserver(instance, name, defaultValue) {
      var observers = getObservers(instance);

      if (!observers[name]) {
        observers[name] = new Observer(defaultValue);
      }

      return observers[name];
    }
    function Reactive(name) {
      return function (prototype, memberName) {
        var publicName = name || memberName;
        Object.defineProperty(prototype, memberName, {
          get: function () {
            return getObserver(this, publicName).current;
          },
          set: function (value) {
            getObserver(this, publicName, value).current = value;
          }
        });

        if (publicName !== memberName) {
          Object.defineProperty(prototype, publicName, {
            get: function () {
              return getObserver(this, publicName).current;
            }
          });
        }
      };
    }
    function ReactiveSubscribe(Constructor) {
      var prototype = Constructor.prototype;

      prototype["subscribe"] = function (name, callback) {
        if (!(name in this)) {
          return;
        }

        getObserver(this, name).subscribe(callback);
      };

      prototype["unsubscribe"] = function (name, callback) {
        var _this = this;

        if (!name) {
          keys(getObservers(this)).forEach(function (observerName) {
            _this.unsubscribe(observerName);
          });
          return;
        }

        if (!(name in this)) {
          return;
        }

        getObserver(this, name).unsubscribe(callback);
      };
    }

    function withClassMethods(methods) {
      return function (prototype, memberName) {
        methods.forEach(function (name) {
          if (name in prototype) {
            return;
          }

          prototype[name] = function () {
            var _a;

            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            var result = (_a = this[memberName])[name].apply(_a, args); // fix `this` type to return your own `class` instance to the instance using the decorator.


            if (result === this[memberName]) {
              return this;
            } else {
              return result;
            }
          };
        });
      };
    }

    function isString(val) {
      return typeof val === "string";
    }

    /**
     * Conveyer adds Drag gestures to your Native Scroll.
     * @ko Conveyer는 네이티브 스크롤에 드래그 제스처를 추가합니다.
     * @extends Component
     * @support {"ie": "9+(with polyfill)", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "4.X+"}
     * @example
    ```html
    <div class="items">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <script>
    import Conveyer from "@egjs/conveyer";

    const conveyer = new Conveyer(".items");
    </script>
    ```
     */

    var Conveyer = function (_super) {
      __extends(Conveyer, _super);
      /**
       * @param - A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
       * @param - The option object of the InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 옵션 객체</ko>
       */


      function Conveyer(scrollArea, options) {
        if (options === void 0) {
          options = {};
        }

        var _this = _super.call(this) || this;

        _this.items = [];
        _this.pos = 0;
        _this.size = 0;
        _this.scrollSize = 0;
        _this._scrollTimer = 0;
        _this._isDragScroll = false;
        _this._isAnimation = false;
        /**
         * Whether the scroll has reached the start.
         * @ko 스크롤이 시작에 닿았는지 여부.
         * @name Conveyer#isReachStart
         * @type {boolean}
         * @default false
         * @readonly
         * @example
         * ```js
         * import { Conveyer } from "@egjs/conveyer";
         *
         * const conveyer = new Conveyer(".container");
         *
         * conveyer.isReachStart
         * ```
         */

        _this._isReachStart = false;
        /**
         * Whether the scroll has reached the end.
         * @ko 스크롤이 끝에 닿았는지 여부.
         * @name Conveyer#isReachEnd
         * @type {boolean}
         * @default false
         * @readonly
         * @example
         * ```js
         * import { Conveyer } from "@egjs/conveyer";
         *
         * const conveyer = new Conveyer(".container");
         *
         * conveyer.isReachEnd
         * ```
         */

        _this._isReachEnd = false;
        /**
         * Updating containers and items.
         * @ko 컨테이너와 아이템들을 업데이트 한다.
         * @method
         */

        _this.update = function () {
          _this.updateItems();

          _this.updateContainer();
        };

        _this._onScroll = function (e) {
          if (e) {
            _this._debounceScroll();
          }

          _this._refreshScroll();

          var size = _this.size;
          var scrollSize = _this.scrollSize;
          var pos = _this.pos; // enter start

          if (pos <= 0 && _this.isReachStart !== true) {
            _this._isReachStart = true;
            /**
             * This event is fired when scroll reach start.
             * @ko 스크롤이 앞에 닿으면 발생하는 이벤트이다.
             * @event Conveyer#reachStart
             */

            _this.trigger("reachStart");
          } else if (pos > 0 && _this.isReachStart !== false) {
            _this._isReachStart = false;
            /**
             * This event is fired when scroll leave start.
             * @ko 스크롤이 앞에서 떠나면 발생하는 이벤트이다.
             * @event Conveyer#leaveStart
             */

            _this.trigger("leaveStart");
          } // enter end


          if (pos >= scrollSize - size && _this.isReachEnd !== true) {
            _this._isReachEnd = true;
            /**
             * This event is fired when scroll reach end.
             * @ko 스크롤이 끝에 닿으면 발생하는 이벤트이다.
             * @event Conveyer#reachEnd
             */

            _this.trigger("reachEnd");
          } else if (pos < scrollSize - size && _this.isReachEnd !== false) {
            _this._isReachEnd = false;
            /**
             * This event is fired when scroll leave end.
             * @ko 스크롤이 끝에서 떠나면 발생하는 이벤트이다.
             * @event Conveyer#leaveEnd
             */

            _this.trigger("leaveEnd");
          }
        };

        _this._onPreventClick = function (e) {
          e.stopPropagation();
          e.preventDefault();

          _this._enableClick();
        };

        _this.options = __assign({
          horizontal: true,
          useDrag: true,
          autoInit: true,
          scrollDebounce: 100
        }, options);
        _this._scrollArea = scrollArea;

        if (_this.options.autoInit) {
          _this.init();
        }

        return _this;
      }
      /**
       * Finds an element for that direction.
       * @ko 해당 방향에 대해 엘리먼트를 찾는다.
       * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
       * @param - Options for the `findElement` method. <ko>findElement 메서드의 옵션</ko>
       * @example
       * <h4>target</h4>
       * <p align="center">
       *  <img src="/img/scrollIntoView1.png" height="200" />
       * </p>
       * <p align="center">
       *   <img src="/img/scrollIntoView2.png" height="210" />
       * </p>
       */


      var __proto = Conveyer.prototype;

      __proto.findElement = function (direction, options) {
        var _a;

        if (options === void 0) {
          options = {};
        }

        return ((_a = this.findItem(direction, options)) === null || _a === void 0 ? void 0 : _a.element) || null;
      };
      /**
       * Finds an item for an element or its direction.
       * @ko 엘리먼트 또는 해당 방향에 대해 아이템을 찾는다.
       * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
       * @param - Options for the `findItem` method. <ko>`findItem` 메서드의 옵션</ko>
       * @example
       * <h4>target</h4>
       * <p align="center">
       *  <img src="/img/scrollIntoView1.png" height="200" />
       * </p>
       * <p align="center">
       *   <img src="/img/scrollIntoView2.png" height="210" />
       * </p>
       */


      __proto.findItem = function (target, options) {
        var _a;

        if (options === void 0) {
          options = {};
        }

        var pos = this.pos;
        var scrollSize = this.scrollSize;
        var size = this.size;
        var hitTest = (_a = options === null || options === void 0 ? void 0 : options.hitTest) !== null && _a !== void 0 ? _a : 1;

        var items = __spreadArray(__spreadArray([{
          pos: 0,
          size: 0
        }], this.items), [{
          pos: scrollSize,
          size: 0
        }]);

        var endPos = pos + size;
        var sibling = options.sibling;
        var selectedItem;

        if (target === "start") {
          if (pos <= 0) {
            return null;
          }

          selectedItem = __spreadArray([], items).reverse().filter(function (item) {
            var itemSize = item.size;
            var dist = item.pos - pos;
            var dist2 = dist + itemSize;
            return dist >= 0 || dist2 >= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
          }).reverse()[0];
        } else if (target === "end") {
          if (pos >= scrollSize - size) {
            return null;
          }

          selectedItem = items.filter(function (item) {
            var itemSize = item.size;
            var dist = item.pos + itemSize - endPos;
            var dist2 = dist - itemSize;
            return dist <= 0 || dist2 <= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
          }).reverse()[0];
        } else if (target === "next") {
          selectedItem = items.reverse().filter(function (item) {
            var itemSize = item.size;
            var startDist = item.pos - pos;
            var endDist = item.pos + itemSize - endPos;
            return endDist > 0 && startDist > 0 && (!itemSize || Math.abs(startDist) / itemSize >= 1 - hitTest);
          }).reverse()[0];
        } else if (target === "prev") {
          selectedItem = items.filter(function (item) {
            var itemSize = item.size;
            var startDist = item.pos - pos;
            var endDist = item.pos + itemSize - endPos;
            return startDist < 0 && endDist < 0 && (!itemSize || Math.abs(startDist) / itemSize >= 1 - hitTest);
          }).reverse()[0];
        } else {
          return this._getItem(target);
        }

        if (sibling && selectedItem) {
          var selectedIndex = items.indexOf(selectedItem);
          return items[selectedIndex + sibling] || null;
        }

        return selectedItem || null;
      };
      /**
       * Scrolls an element or an item in that direction into the view.
       * @ko 엘리먼트나 해당 방향에 있는 아이템을 뷰안으로 스크롤을 한다.
       * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
       * @param - Options for the `scrollIntoView` method. <ko>`scrollIntoView` 메서드의 옵션</ko>
       * @example
       * <h4>target</h4>
       * <p align="center">
       *  <img src="/img/scrollIntoView1.png" height="200" />
       * </p>
       * <p align="center">
       *   <img src="/img/scrollIntoView2.png" height="210" />
       * </p>
       */


      __proto.scrollIntoView = function (target, options) {
        if (options === void 0) {
          options = {};
        }

        var item = this.findItem(target, options);

        if (!item) {
          return;
        }

        var duration = options.duration || 0;

        var nextScrollPos = this._getNextScrollPos(item, options);

        if (isString(target) && options.excludeStand && nextScrollPos === this.pos) {
          var selectedIndex = this.items.indexOf(item);

          if (selectedIndex === -1) {
            return;
          }

          var sibling = target === "start" || target === "prev" ? -1 : 1;
          item = this.items[selectedIndex + sibling];

          if (!item) {
            return;
          }

          nextScrollPos = this._getNextScrollPos(item, options);
        }

        this.scrollBy(nextScrollPos - this.pos, duration);
      };
      /**
       * Scrolls by the given position amount.
       * @ko 주어진 위치 양만큼 스크롤한다.
       * @param - Amount of position to scroll by. <ko>스크롤할 위치의 양.</ko>
       * @param - Duration to scroll by that position. <ko>해당 위치만큼 스크롤하는 시간</ko>
       */


      __proto.scrollBy = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        this.axes.setBy({
          scroll: -pos
        }, duration);
      };
      /**
       * Scroll to the given position.
       * @ko 주어진 위치로 스크롤한다.
       * @param - Amount of position to scroll to. <ko>스크롤할 위치의 양.</ko>
       * @param - Duration to scroll to that position. <ko>해당 위치로 스크롤하는 시간</ko>
       */


      __proto.scrollTo = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        this.axes.setBy({
          scroll: this.pos - pos
        }, duration);
      };
      /**
       * Set the items directly to the Conveyer.
       * @ko Conveyer에 아이템들을 직접 설정한다.
       * @param - Items to set on Conveyer <ko>Conveyer에 설정할 아이템들</ko>
       */


      __proto.setItems = function (items) {
        this.items = items;
      };
      /**
       * Update the position and size information of items.
       * @ko 아이템들의 포지션, 사이즈 정보를 업데이트 한다.
       */


      __proto.updateItems = function () {
        var _this = this;

        var scrollAreaElement = this.scrollAreaElement;
        var itemSelector = this.options.itemSelector;
        var itemElements = [].slice.call(itemSelector ? scrollAreaElement.querySelectorAll(itemSelector) : scrollAreaElement.children);
        this.setItems(itemElements.map(function (el) {
          return _this._getItem(el);
        }));
      };
      /**
       * Update container size and scroll size.
       * @ko 컨테이너의 크기, 스크롤 사이즈를 업데이트 한다.
       */


      __proto.updateContainer = function () {
        var scrollAreaElement = this.scrollAreaElement;
        var horizontal = this.options.horizontal;
        this.size = horizontal ? scrollAreaElement.clientWidth : scrollAreaElement.clientHeight;
        this.scrollSize = horizontal ? scrollAreaElement.scrollWidth : scrollAreaElement.scrollHeight;

        this._refreshScroll();

        this._onScroll();
      };
      /**
       * If you use the autoInit option as false, you can initialize it directly through the init method.
       * @ko autoInit 옵션을 false로 사용하는 경우 직접 init 메서드를 통해 초기화 할 수 있다.
       */


      __proto.init = function () {
        var _this = this;

        if (this.axes) {
          return;
        }

        var scrollArea = this._scrollArea;
        var el;

        if (isString(scrollArea)) {
          el = document.querySelector(scrollArea);
        } else if (scrollArea instanceof Element) {
          el = scrollArea;
        } else if ("value" in scrollArea || "current" in scrollArea) {
          el = scrollArea.value || scrollArea.current;
        }

        this.scrollAreaElement = el;
        var isDrag = false;
        var scrollAreaElement = this.scrollAreaElement;
        var axes = new Axes({
          scroll: {
            circular: true,
            range: [-1000, 1000]
          }
        }, {
          deceleration: 0.005,
          round: 1
        });
        var isHold = false;
        axes.on({
          "hold": function (e) {
            isHold = true;
            isDrag = false;
            var inputEvent = e.inputEvent.srcEvent;

            if (!inputEvent) {
              return;
            }

            var options = _this.options;

            if (options.preventDefault) {
              inputEvent.preventDefault();
            }

            if (options.preventClickOnDrag) {
              _this._disableClick();
            }
          },
          "change": function (e) {
            if (e.inputEvent && !isHold) {
              return;
            }

            _this._isDragScroll = !!e.inputEvent;
            _this._isAnimation = !!isHold;
            isDrag = true;
            var scroll = e.delta.scroll;

            if (_this.options.horizontal) {
              scrollAreaElement.scrollLeft -= scroll;
            } else {
              scrollAreaElement.scrollTop -= scroll;
            }
          },
          "release": function (e) {
            if (!isDrag) {
              e.setTo(__assign({}, e.depaPos), 0);

              _this._enableClick();
            }

            isDrag = false;
          }
        });
        this.axes = axes;

        if (this.options.useDrag) {
          axes.connect(this.options.horizontal ? "scroll" : ["", "scroll"], new PanInput(scrollAreaElement, {
            inputType: ["mouse"]
          }));
        }

        scrollAreaElement.addEventListener("scroll", this._onScroll);
        window.addEventListener("resize", this.update);
        this.update();
      };
      /**
       * Releases the instnace and events.
       * @ko 인스턴스와 이벤트를 해제한다.
       */


      __proto.destroy = function () {
        var _a, _b;

        (_a = this.axes) === null || _a === void 0 ? void 0 : _a.destroy();
        this.unsubscribe();
        (_b = this.scrollAreaElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("scroll", this._onScroll);
        window.removeEventListener("resize", this.update);
        this.off();
      };

      __proto._refreshScroll = function () {
        var horizontal = this.options.horizontal;
        var scrollAreaElement = this.scrollAreaElement;
        this.pos = horizontal ? scrollAreaElement.scrollLeft : scrollAreaElement.scrollTop;
      };

      __proto._getItem = function (element) {
        var horizontal = this.options.horizontal;
        return {
          element: element,
          pos: horizontal ? element.offsetLeft : element.offsetTop,
          size: horizontal ? element.offsetWidth : element.offsetHeight
        };
      };

      __proto._getNextScrollPos = function (item, options) {
        var size = this.size;
        var align = options.align || "start";
        var padding = options.offset || 0;
        var itemPos = item.pos;
        var itemSize = item.size;
        var scrollPos = 0;

        if (align === "start") {
          scrollPos = itemPos - padding;
        } else if (align === "end") {
          scrollPos = itemPos + itemSize - size + padding;
        } else if (align === "center") {
          scrollPos = itemPos + itemSize / 2 - size / 2 + padding;
        }

        return scrollPos;
      };

      __proto._enableClick = function () {
        window.removeEventListener("click", this._onPreventClick, true);
      };

      __proto._disableClick = function () {
        window.addEventListener("click", this._onPreventClick, true);
      };

      __proto._debounceScroll = function () {
        var _this = this;

        if (!this._scrollTimer) {
          /**
           * This event is fired when begin scroll.
           * @ko 스크롤이 시작하면 발생하는 이벤트이다.
           * @event Conveyer#beginScroll
           */
          this.trigger("beginScroll");
        }

        window.clearTimeout(this._scrollTimer);
        this._scrollTimer = window.setTimeout(function () {
          _this._scrollTimer = 0;
          /**
           * This event is fired when finish scroll.
           * @ko 스크롤이 끝나면 발생하는 이벤트이다.
           * @event Conveyer#finishScroll
           * @param {OnFinishScroll} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
           */

          _this.trigger("finishScroll", {
            isDragScroll: _this._isDragScroll,
            isTrusted: _this._isDragScroll || !_this._isAnimation
          });

          _this._isDragScroll = false;
          _this._isAnimation = false;
        }, this.options.scrollDebounce);
      };

      __decorate([Reactive("isReachStart")], Conveyer.prototype, "_isReachStart", void 0);

      __decorate([Reactive("isReachEnd")], Conveyer.prototype, "_isReachEnd", void 0);

      Conveyer = __decorate([ReactiveSubscribe], Conveyer);
      return Conveyer;
    }(Component$1);

    var CONVEYER_METHODS = ["update", "scrollBy", "scrollTo", "scrollIntoView", "setItems", "updateContainer", "updateItems", "init"];
    var CONVEYER_EVENTS = ["reachStart", "reachEnd", "leaveStart", "leaveEnd", "beginScroll", "finishScroll"];
    var CONVEYER_REACTIVE_STATE = {
      "isReachStart": false,
      "isReachEnd": false
    };

    var REACTIVE_CONVEYER = {
      state: CONVEYER_REACTIVE_STATE,
      methods: CONVEYER_METHODS,
      events: CONVEYER_EVENTS,
      instance: function (data) {
        return new Conveyer(data.container, __assign(__assign({}, data.props), {
          autoInit: false
        }));
      },
      init: function (instance, data) {
        if (data.props.autoInit !== false) {
          instance.init();
        }
      },
      on: function (instance, name, callback) {
        instance.on(name, callback);
      },
      off: function (instance, name, callback) {
        instance.off(name, callback);
      },
      destroy: function (instance) {
        instance.destroy();
      }
    };



    var modules = {
        __proto__: null,
        'default': Conveyer,
        CONVEYER_METHODS: CONVEYER_METHODS,
        CONVEYER_EVENTS: CONVEYER_EVENTS,
        CONVEYER_REACTIVE_STATE: CONVEYER_REACTIVE_STATE,
        REACTIVE_CONVEYER: REACTIVE_CONVEYER,
        withReactiveMethods: withReactiveMethods,
        getObservers: getObservers,
        getObserver: getObserver,
        Reactive: Reactive,
        ReactiveSubscribe: ReactiveSubscribe,
        Observer: Observer,
        withClassMethods: withClassMethods,
        keys: keys,
        camelize: camelize
    };

    for (var name in modules) {
      Conveyer[name] = modules[name];
    }

    return Conveyer;

})));
//# sourceMappingURL=conveyer.js.map