let websocketUrl="ws://localhost"
 

var protocolEndPoint = location.origin + '/config';
protocolEndPoint= "http://localhost/config"


protocolEndPoint= "https://s10.eaglepixelstreaming.com/config"
websocketUrl="wss://s10.eaglepixelstreaming.com"
//import { getServerConfig, getRTCConfiguration } from "../../js/config.js";
//import { getServerConfig, getRTCConfiguration } from "../../js/config.js";

//import {getServers} from "./icesettings.js";
// This code is referenced from webrtc sample.
// https://github.com/webrtc/samples/blob/gh-pages/src/content/peerconnection/trickle-ice/js/main.js


//export 
async function getServerConfig() {

 const createResponse = await fetch(protocolEndPoint);
 return await createResponse.json();
}

//export 
function getRTCConfiguration() {
 let config = {};
 config.sdpSemantics = 'unified-plan';
 config.iceServers = [{ urls: ['stun:stun.l.google.com:19302'] }];
 return config;
}

//import { createDisplayStringArray } from "../../js/stats.js";

/**
* create display string array from RTCStatsReport
* @param {RTCStatsReport} report - current RTCStatsReport
* @param {RTCStatsReport} lastReport - latest RTCStatsReport
* @return {Array<string>} - display string Array
*/
//export 


//import { VideoPlayer } from "../../js/videoplayer.js";
//import { Observer, Sender } from "../module/sender.js";
// import {
 // Mouse,
 // Keyboard,
 // Gamepad,
 // Touchscreen,
 // StateEvent,
 // TextEvent
// } from "./inputdevice.js";


/* import {
 MemoryHelper,
} from "./memoryhelper.js"; */

//export 
class MemoryHelper {
 /**
  * @param {ArrayBuffer} buffer 
  * @param {number} bitOffset
  * @param {boolean} value
  */
 static writeSingleBit(buffer, bitOffset, value) {
   let view = new Uint8Array(buffer);
   const index = Math.floor(bitOffset / 8);
   bitOffset = bitOffset % 8;
   const byte = view[index];
   let newByte = 1 << bitOffset;
   if(value) {
     newByte = newByte | byte;
   }
   else {
     newByte = ~newByte & byte;
   }
   view[index] = newByte;
 }

 /**
  * @return {Number}
  */
 static get sizeOfInt() {
   return 4;
 }
}
//import { CharNumber } from "./charnumber.js";
// KeyboardEvent.charcode is already deprecated.
//
//export 
const CharNumber = {
 "Backspace": 8,
 "Tab": 9,
 "Enter": 13,
 "Shift": 16,
 "Control": 17,
 "Alt": 18,
 "Pause": 19,
 "CapsLock": 20,
 "Escape": 27,
 " ": 32,
 "!": 33,
 "\"": 34,
 "#": 35,
 "$": 36,
 "%": 37,
 "&": 38,
 "'": 39,
 "(": 40,
 ")": 41,
 "*": 42,
 "+": 43,
 ",": 44,
 "-": 45,
 ".": 46,
 "/": 47,
 "0": 48,
 "1": 49,
 "2": 50,
 "3": 51,
 "4": 52,
 "5": 53,
 "6": 54,
 "7": 55,
 "8": 56,
 "9": 57,
 ":": 58,
 ";": 59,
 "<": 60,
 "=": 61,
 ">": 62,
 "?": 63,
 "@": 64,
 "A": 65,
 "B": 66,
 "C": 67,
 "D": 68,
 "E": 69,
 "F": 70,
 "G": 71,
 "H": 72,
 "I": 73,
 "J": 74,
 "K": 75,
 "L": 76,
 "M": 77,
 "N": 78,
 "O": 79,
 "P": 80,
 "Q": 81,
 "R": 82,
 "S": 83,
 "T": 84,
 "U": 85,
 "V": 86,
 "W": 87,
 "X": 88,
 "Y": 89,
 "Z": 90,
 "[": 91,
 "\\": 92,
 "]": 93,
 "^": 94,
 "_": 95,
 "`": 96,
 "a": 97,
 "b": 98,
 "c": 99,
 "d": 100,
 "e": 101,
 "f": 102,
 "g": 103,
 "h": 104,
 "i": 105,
 "j": 106,
 "k": 107,
 "l": 108,
 "m": 109,
 "n": 110,
 "o": 111,
 "p": 112,
 "q": 113,
 "r": 114,
 "s": 115,
 "t": 116,
 "u": 117,
 "v": 118,
 "w": 119,
 "x": 120,
 "y": 121,
 "z": 122,
 "{": 123,
 "|": 124,
 "}": 125,
 "~": 126,
 "Delete": 127
 };

//import { Keymap } from "./keymap.js";
//export 
const Keymap = {
 "Space": 1,
 "Enter": 2,
 "Tab": 3,
 "Backquote": 4,
 "Quote": 5,
 "Semicolon": 6,
 "Comma": 7,
 "Period": 8,
 "Slash": 9,
 "Backslash": 10,
 "BracketLeft": 11,
 "BracketRight": 12,
 "Minus": 13,
 "Equal": 14,
 "KeyA": 15,
 "KeyB": 16,
 "KeyC": 17,
 "KeyD": 18,
 "KeyE": 19,
 "KeyF": 20,
 "KeyG": 21,
 "KeyH": 22,
 "KeyI": 23,
 "KeyJ": 24,
 "KeyK": 25,
 "KeyL": 26,
 "KeyM": 27,
 "KeyN": 28,
 "KeyO": 29,
 "KeyP": 30,
 "KeyQ": 31,
 "KeyR": 32,
 "KeyS": 33,
 "KeyT": 34,
 "KeyU": 35,
 "KeyV": 36,
 "KeyW": 37,
 "KeyX": 38,
 "KeyY": 39,
 "KeyZ": 40,
 "Digit1": 41,
 "Digit2": 42,
 "Digit3": 43,
 "Digit4": 44,
 "Digit5": 45,
 "Digit6": 46,
 "Digit7": 47,
 "Digit8": 48,
 "Digit9": 49,
 "Digit0": 50,
 "ShiftLeft": 51,
 "ShiftRight": 52,
 "AltLeft": 53,
 "AltRight": 54,
 // "AltGr": 54,
 "ControlLeft": 55,
 "ControlRight": 56,
 "MetaLeft": 57,
 "MetaRight": 58,
 // "LeftWindows": 57,
 // "RightWindows": 58,
 // "LeftApple": 57,
 // "RightApple": 58,
 // "LeftCommand": 57,
 // "RightCommand": 58,
 "ContextMenu": 59,
 "Escape": 60,
 "ArrowLeft": 61,
 "ArrowRight": 62,
 "ArrowUp": 63,
 "ArrowDown": 64,
 "Backspace": 65,
 "PageDown": 66,
 "PageUp": 67,
 "Home": 68,
 "End": 69,
 "Insert": 70,
 "Delete": 71,
 "CapsLock": 72,
 "NumLock": 73,
 "PrintScreen": 74,
 "ScrollLock": 75,
 "Pause": 76,
 "NumpadEnter": 77,
 "NumpadDivide": 78,
 "NumpadMultiply": 79,
 "NumpadAdd": 80,
 "NumpadSubtract": 81,
 "NumpadDecimal": 82,
 "NumpadEquals": 83,
 "Numpad0": 84,
 "Numpad1": 85,
 "Numpad2": 86,
 "Numpad3": 87,
 "Numpad4": 88,
 "Numpad5": 89,
 "Numpad6": 90,
 "Numpad7": 91,
 "Numpad8": 92,
 "Numpad9": 93,
 "F1": 94,
 "F2": 95,
 "F3": 96,
 "F4": 97,
 "F5": 98,
 "F6": 99,
 "F7": 100,
 "F8": 101,
 "F9": 102,
 "F10": 103,
 "F11": 104,
 "F12": 105,
 // "OEM1": 106,
 // "OEM2": 107,
 // "OEM3": 108,
 // "OEM4": 109,
 // "OEM5": 110,
 // "IMESelected": 111,
 };
//import { MouseButton } from "./mousebutton.js";
//export 
const MouseButton = {
 Left: 0,
 Right: 1,
 Middle: 2,
 Foaward: 3,
 Back: 4,
};
//import { GamepadButton } from "./gamepadbutton.js";
//export 
const GamepadButton = {
 DpadUp: 0,
 DpadDown: 1,
 DpadLeft: 2,
 DpadRight: 3,
 North: 4,
 East: 5,
 South: 6,
 West: 7,
 LeftStick: 8,
 RightStick: 9,
 LeftShoulder: 10,
 RightShoulder: 11,
 Start: 12,
 Select: 13,
 LeftTrigger: 32,
 RightTrigger: 33,
 X: 7, // West
 Y: 4, // North
 A: 6, // South,
 B: 5, // East,
 Cross: 6, // South,
 Square: 7, // West,
 Triangle: 4, //North,
 Circle: 5 // East,
};
//import { TouchPhase } from "./touchphase.js";
//export 
const TouchPhase = {
   None: 0,
   Began: 1,
   Moved: 2,
   Ended: 3,
   Canceled: 4,
   Stationary: 5
 };

//import { TouchFlags } from "./touchflags.js";
//export 
const TouchFlags =
{
 IndirectTouch: 1 << 0,
 PrimaryTouch: 1 << 4,
 Tap: 1 << 5,
 OrphanedPrimaryTouch: 1 << 6,
};


//export 
class FourCC {
 /**
  * {Number} _code;
  */

 /**
  *
  * @param {String} a
  * @param {String} b
  * @param {String} c
  * @param {String} d
  */
 constructor(a, b, c, d) {
   this._code = (a.charCodeAt() << 24)
   | (b.charCodeAt() << 16)
   | (c.charCodeAt() << 8)
   | d.charCodeAt();
 }

 /**
  * @returns {Number}
  */
 toInt32() {
   return this._code;
 }
}


//export 
class InputDevice {

 /**
  *
  * name;
  * layout;
  * deviceId;
  * usages;
  * description;
  *
  * _inputState;
  */

 /**
  *
  * @param {Number} name
  * @param {String} layout
  * @param {Number} deviceId
  * @param {String[]} usages
  * @param {Object} description
  */
 constructor(name, layout, deviceId, usages, description) {
   this.name = name;
   this.layout = layout;
   this.deviceId = deviceId;
   this.usages = usages;
   this.description = description;

   this._inputState = null;
 }

 /**
  *
  * @param {IInputState} state
  */
 updateState(state) {
   this._inputState = state;
 }

 queueEvent(event) {
   throw new Error(`Please implement this method. event:${event}`);
 }

 /**
  * @returns {IInputState}
  */
 get currentState() {
   return this._inputState;
 }
}

//export 
class Mouse extends InputDevice {
 /**
  * @param {(MouseEvent|WheelEvent)} event
  */
 queueEvent(event) {
   this.updateState(new MouseState(event));
 }
}

//export 
class Keyboard extends InputDevice {
 static get keycount() { return 110; }
 /**
  *
  * @param {KeyboardEvent} event
  */
 queueEvent(event) {
   this.updateState(new KeyboardState(event, this.currentState));
 }
}

//export 
class Touchscreen extends InputDevice {
 /**
  * @param {TouchScreenEvent} event
  */
 queueEvent(event, time) {
   this.updateState(new TouchscreenState(event, this.currentState, time));
 }
}

//export 
class Gamepad extends InputDevice {
 /**
  * @param {GamepadButtonEvent | GamepadAxisEvent} event
  */
 queueEvent(event) {
   this.updateState(new GamepadState(event));
 }
}

//export 
class InputEvent {
 static get invalidEventId() { return 0; }
 static get size() { return 20; }

 /**
  * field offset 0
  * @member {Number} type;
  *
  * field offset 4
  * @member {Number} sizeInBytes;
  *
  * field offset 6
  * @member {Number} deviceId;
  *
  * field offset 8
  * @member {Number} time;
  *
  * field offset 16
  * @member {Number} eventId;
  */

 /**
  *
  * @param {Number} type
  * @param {Number} sizeInBytes
  * @param {Number} deviceId
  * @param {Number} time
  */
 constructor(type, sizeInBytes, deviceId, time) {
   this.type = type;
   this.sizeInBytes = sizeInBytes;
   this.deviceId = deviceId;
   this.time = time;
   this.eventId = InputEvent.invalidEventId;
 }

 /**
  * @returns {ArrayBuffer}
  */
 get buffer() {
   let _buffer = new ArrayBuffer(InputEvent.size);
   let view = new DataView(_buffer);
   view.setInt32(0, this.type, true);
   view.setInt16(4, this.sizeInBytes, true);
   view.setInt16(6, this.deviceId, true);
   view.setFloat64(8, this.time, true);
   view.setInt16(16, this.sizeInBytes, true);
   return _buffer;
 }
}

//export 
class IInputState {
 /**
  * @returns {ArrayBuffer}
  */
 get buffer() {
   throw new Error('Please implement this field');
 }
 /**
  * @returns {Number}
  */
  get format() {
   throw new Error('Please implement this field');
 }
}

//export 
class MouseState extends IInputState {
 static get size() { return 30; }
 static get format() { return new FourCC('M', 'O', 'U', 'S').toInt32(); }

 /**
  * field offset 0
  * @member {Array} position;
  *
  * field offset 8
  * @member {Array} delta;
  *
  * field offset 16
  * @member {Array} scroll;
  *
  * field offset 24
  * @member {ArrayBuffer} buttons;
  *
  * field offset 26
  * @member {Array} displayIndex;
  *
  * field offset 28
  * @member {Array} clickCount;
  */

 /**
  * @param {MouseEvent | WheelEvent} event
  */
 constructor(event) {
   super();

   this.position = [event.clientX, event.clientY];
   this.delta = [event.movementX, -event.movementY];
   this.scroll = [0, 0];
   if(event.type === 'wheel') {
     this.scroll = [event.deltaX, event.deltaY];
   }
   this.buttons = new ArrayBuffer(2);

   const left = event.buttons & 1 << 0;
   const right = event.buttons & 1 << 1;
   const middle = event.buttons & 1 << 2;
   const back = event.buttons & 1 << 3;
   const forward = event.buttons & 1 << 4;

   MemoryHelper.writeSingleBit(this.buttons, MouseButton.Left, left);
   MemoryHelper.writeSingleBit(this.buttons, MouseButton.Right, right);
   MemoryHelper.writeSingleBit(this.buttons, MouseButton.Middle, middle);
   MemoryHelper.writeSingleBit(this.buttons, MouseButton.Forward, forward);
   MemoryHelper.writeSingleBit(this.buttons, MouseButton.Back, back);
 }

 /**
  * @returns {ArrayBuffer}
  */
 get buffer() {
   const size = MouseState.size;
   const buttons = new Uint16Array(this.buttons)[0];
   let _buffer = new ArrayBuffer(size);
   let view = new DataView(_buffer);
   view.setFloat32(0, this.position[0], true);
   view.setFloat32(4, this.position[1], true);
   view.setFloat32(8, this.delta[0], true);
   view.setFloat32(12, this.delta[1], true);
   view.setFloat32(16, this.scroll[0], true);
   view.setFloat32(20, this.scroll[1], true);
   view.setUint16(24, buttons, true);
   view.setUint16(26, this.displayIndex, true);
   view.setUint16(28, this.clickCount, true);
   return _buffer;
 }

 /**
  * @returns {Number}
  */
 get format() {
   return MouseState.format;
 }
}

//export 
class KeyboardState extends IInputState {
 static get sizeInBits() { return Keyboard.keycount; }
 static get sizeInBytes() { return (KeyboardState.sizeInBits + 7) >> 3; }
 static get format() { return new FourCC('K', 'E', 'Y', 'S').toInt32(); }

 /**
  * field offset 0
  * @number {ArrayBuffer} keys;
  */

 /**
  * @param {KeyboardEvent} event
  */
 constructor(event, state) {
   super();
   if (state == null || state.keys == null) {
     this.keys = new ArrayBuffer(KeyboardState.sizeInBytes);
   } else {
     this.keys = state.keys;
   }
   let value = false;
   switch(event.type) {
     case 'keydown':
       value = true;
       break;
     case 'keyup':
       value = false;
       break;
     default:
       throw new Error(`unknown event type ${event.type})`);
   }
   const key = Keymap[event.code];
   MemoryHelper.writeSingleBit(this.keys, key, value);
 }

 /**
  * @returns {ArrayBuffer}
  */
 get buffer() {
   return this.keys;
 }

 /**
  * @returns {Number}
  */
  get format() {
   return KeyboardState.format;
 }
}

//export 
class TouchState {
 static get format() { return new FourCC('T', 'O', 'U', 'C').toInt32(); }
 static get size() { return 56; }
 static incrementTouchId() {
   if(TouchState._currentTouchId === undefined) {
     TouchState._currentTouchId = 0;
   }
   return ++TouchState._currentTouchId;
 }
 static prevTouches() {
   if(TouchState._prevTouches === undefined) {
     // max touch count is 10
     TouchState._prevTouches = new Array(10);
   }
   return TouchState._prevTouches;
 }

 /**
  * field offset 0
  * @number {Number} touchId;
  * field offset 4
  * @number {Number[]} position;
  * field offset 12
  * @number {Number[]} delta;
  * field offset 20
  * @number {Number} pressure;
  * field offset 24
  * @number {Number[]} radius;
  * field offset 32
  * @number {Number} phase;
  * field offset 33
  * @number {Number} tapCount;
  * field offset 34
  * @number {Number} displayIndex;
  * field offset 35
  * @number {Number} flag;
  * field offset 36
  * @number {Number} padding;
  * field offset 40
  * @number {Number} startTime;
  * field offset 48
  * @number {Number[]} startPosition;
  */


 /**
  * @param {Touch} touchId
  * @param {TouchState} prevState
  * @param {Number[]} position
  * @param {Number} pressure
  * @param {Number[]} radius
  * @param {TouchPhase} phaseId
  * @param {Number} time
  */
 constructor(touchId, prevState, position, pressure, radius, phaseId, time) {
   this.touchId = touchId;
   this.position = position != null ? position.slice() : null;
   if(phaseId == TouchPhase.Moved) {
     this.delta = [this.position[0] - prevState.position[0], this.position[1] - prevState.position[1]];
   } else {
     this.delta = [0, 0];
   }
   this.pressure = pressure;
   this.radius = radius != null ? radius.slice(): null;
   this.phaseId = phaseId;
   this.tapCount = 0;
   this.displayIndex = 0;
   this.flags = 0;
   this.padding = 0;
   if(phaseId == TouchPhase.Began) {
     this.startTime = time;
     this.startPosition = this.position.slice();
   } else {
     this.startTime = prevState != null ? prevState.startTime : null;
     this.startPosition =  prevState != null ? prevState.startPosition.slice() : null;
   }
 }


 copy() {
   let state = new TouchState();
   state.touchId = this.touchId;
   state.position = this.position.slice();
   state.delta = this.delta.slice();
   state.pressure = this.pressure;
   state.radius = this.radius.slice();
   state.phaseId = this.phaseId;
   state.tapCount = this.tapCount;
   state.displayIndex = this.displayIndex;
   state.flags = this.flags;
   state.padding = this.padding;
   state.startTime = this.startTime;
   state.startPosition = this.startPosition.slice();
   return state;
 }

 /**
  * @returns {ArrayBuffer}
  */
  get buffer() {
   const size = TouchState.size; // todo
   let _buffer = new ArrayBuffer(size);
   let view = new DataView(_buffer);

   view.setInt32(0, this.touchId, true);
   view.setFloat32(4, this.position[0], true);
   view.setFloat32(8, this.position[1], true);
   view.setFloat32(12, this.delta[0], true);
   view.setFloat32(16, this.delta[1], true);
   view.setFloat32(20, this.pressure, true);
   view.setFloat32(24, this.radius[0], true);
   view.setFloat32(28, this.radius[1], true);
   view.setInt8(32, this.phaseId, true);
   view.setInt8(33, this.tapCount, true);
   view.setInt8(34, this.displayIndex, true);
   view.setInt8(35, this.flags, true);
   view.setInt32(36, this.padding, true);
   view.setFloat64(40, this.startTime, true);
   view.setFloat32(48, this.startPosition[0], true);
   view.setFloat32(52, this.startPosition[1], true);
   return _buffer;
 }

 /**
  * @returns {Number}
  */
 get format() {
   return TouchState.format;
 }
}

//export 
class TouchscreenState extends IInputState {
 static get maxTouches() { return 10; }
 static get format() { return new FourCC('T', 'S', 'C', 'R').toInt32(); }
 static convertPhaseId(type) {
   let phaseId = TouchPhase.Stationary;
   switch(type) {
     case 'touchstart':
     phaseId = TouchPhase.Began; break;
     case 'touchend':
     phaseId = TouchPhase.Ended; break;
     case 'touchmove':
     phaseId = TouchPhase.Moved; break;
     case 'touchcancel':
     phaseId = TouchPhase.Canceled; break;
   }
   return phaseId;
 }

 /**
  * @param {TouchEvent} event
  * @param {TouchScreenState} state
  * @param {Date} time
  */
 constructor(event, state, time) {
   super();

   switch(event.type) {
     // `click` event is called when releasing mouse button or finger on screen.
     case 'click' : {
       this.touchData = new Array(state.touchData.length);
       for(let i = 0; i < state.touchData.length; i++) {
         this.touchData[i] = state.touchData[i];
         if(this.touchData[i].phaseId == TouchPhase.Ended) {
           this.touchData[i].tapCount = 1;
           this.touchData[i].flags |= TouchFlags.Tap;
         }
       }
       break;
     }
     default: {
       let touches = event.changedTouches;
       this.touchData = new Array(touches.length);
       for(let i = 0; i < touches.length; i++) {
         const touch = touches[i];
         const position = [touch.clientX, touch.clientY];
         const phaseId = TouchscreenState.convertPhaseId(event.type);
         const pressure = touch.force;
         const radius = [touch.radiusX, touch.radiusY];

         // `touchId` in InputSystem must be set uniquely.
         // The numbers of `touch.identifier` in Web API are reused, so these are not unique.
         const touchId = phaseId == TouchPhase.Began ? TouchState.incrementTouchId() : TouchState.prevTouches()[touch.identifier].touchId;
         const prevState = phaseId != TouchPhase.Began ? TouchState.prevTouches()[touch.identifier] : null;
         const touchData = new TouchState(touchId, prevState, position, pressure, radius, phaseId, time);

         // cache state
         TouchState.prevTouches()[touch.identifier] = touchData;
         this.touchData[i] = touchData;
       }
       break;
     }
   }
 }

 /**
  * @returns {ArrayBuffer}
  */
  get buffer() {
   const size = TouchState.size * this.touchData.length;
   let _buffer = new ArrayBuffer(size);
   let view = new Uint8Array(_buffer);
   for(let i = 0; i < this.touchData.length; i++) {
     view.set(new Uint8Array(this.touchData[i].buffer), TouchState.size * i);
   }
   return _buffer;
 }

 /**
  * @returns {Number}
  */
  get format() {
   return TouchscreenState.format;
 }
}

//export 
class GamepadState extends IInputState {
 static get size() { return 28; }
 static get format() { return new FourCC('G', 'P', 'A', 'D').toInt32(); }

 /**
  * field offset 0
  * @member buttons;
  *
  * field offset 4
  * @member leftStick;
  *
  * field offset 12
  * @member rightStick;
  *
  * field offset 20
  * @member leftTrigger;
  *
  * field offset 24
  * @member rightTrigger;
  */

 /**
  *
  * @param {GamepadButtonEvent | GamepadAxisEvent} event
  */
 constructor(event) {
   super();
   const gamepad = event.gamepad;
   const buttons = event.gamepad.buttons;

   this.buttons = new ArrayBuffer(4);
   this.leftStick = [ gamepad.axes[0], -gamepad.axes[1] ];
   this.rightStick = [ gamepad.axes[2], -gamepad.axes[3] ];
   this.leftTrigger = buttons[6].value;
   this.rightTrigger = buttons[7].value;

   // see https://w3c.github.io/gamepad/#remapping
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.A, buttons[0].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.B, buttons[1].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.X, buttons[2].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.Y, buttons[3].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.LeftShoulder, buttons[4].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.RightShoulder, buttons[5].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.LeftTrigger, buttons[6].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.RightTrigger, buttons[7].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.Select, buttons[8].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.Start, buttons[9].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.LeftStick, buttons[10].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.RightStick, buttons[11].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.DpadUp, buttons[12].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.DpadDown, buttons[13].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.DpadLeft, buttons[14].pressed);
   MemoryHelper.writeSingleBit(this.buttons, GamepadButton.DpadRight, buttons[15].pressed);
 }

 /**
  * @returns {ArrayBuffer}
  */
  get buffer() {
   const size = GamepadState.size;
   let _buffer = new ArrayBuffer(size);
   let view = new DataView(_buffer);
   view.setUint32(0, new Uint32Array(this.buttons)[0], true);
   view.setFloat32(4, this.leftStick[0], true);
   view.setFloat32(8, this.leftStick[1], true);
   view.setFloat32(12, this.rightStick[0], true);
   view.setFloat32(16, this.rightStick[1], true);
   view.setFloat32(20, this.leftTrigger, true);
   view.setFloat32(24, this.rightTrigger, true);
   return _buffer;
 }

 /**
  * @returns {Number}
  */
  get format() {
   return GamepadState.format;
 }
}

//export 
class TextEvent {
 static get format() { return new FourCC('T', 'E', 'X', 'T').toInt32(); }

 /**
  * field offset 0
  * @member {InputEvent} baseEvent;
  *
  * field offset 20
  * @member {Number} character;
  */

 /**
  *
  * @param {Number} deviceId
  * @param {KeyboardEvent} event
  * @param {Number} time
  * @returns {TextEvent}

  */
 static create(deviceId, event, time) {
   const eventSize = InputEvent.size + MemoryHelper.sizeOfInt;

   let textEvent = new TextEvent();
   textEvent.baseEvent = new InputEvent(TextEvent.format, eventSize, deviceId, time);
   textEvent.character = CharNumber[event.key];
   return textEvent;
 }

 /**
  * @returns {ArrayBuffer}
  */
 get buffer() {
   const size = InputEvent.size + MemoryHelper.sizeOfInt;
   let _buffer = new ArrayBuffer(size);
   let arrayView = new Uint8Array(_buffer);
   let dataView = new DataView(_buffer);
   arrayView.set(new Uint8Array(this.baseEvent.buffer), 0);
   dataView.setInt32(InputEvent.size, this.character, true);
   return _buffer;
 }
}

//export 
class StateEvent {
 static get format() { return new FourCC('S', 'T', 'A', 'T').toInt32(); }

 /**
  * field offset 0
  * @member {InputEvent} baseEvent;
  *
  * field offset 20
  * @member {Number} stateFormat;
  *
  * field offset 24
  * @member {ArrayBuffer} stateData;
  */

 /**
  *
  * @param {InputDevice} device
  * @param {Number} time
  * @returns {StateEvent}
  */
 static from(device, time) {
   return StateEvent.fromState(device.currentState, device.deviceId, time);
 }

 /**
  *
  * @param {IInputState} state
  * @param {Number} deviceId
  * @param {Number} time
  */
 static fromState(state, deviceId, time) {
   const stateData = state.buffer;
   const stateSize = stateData.byteLength;
   const eventSize = InputEvent.size + MemoryHelper.sizeOfInt + stateSize;

   let stateEvent = new StateEvent();
   stateEvent.baseEvent = new InputEvent(StateEvent.format, eventSize, deviceId, time);
   stateEvent.stateFormat = state.format;
   stateEvent.stateData = stateData;
   return stateEvent;
 }

 /**
  * @returns {ArrayBuffer}
  */
 get buffer() {
   const stateSize = this.stateData.byteLength;
   const size = InputEvent.size + MemoryHelper.sizeOfInt + stateSize;
   let _buffer = new ArrayBuffer(size);
   let uint8View = new Uint8Array(_buffer);
   let dataView = new DataView(_buffer);
   uint8View.set(new Uint8Array(this.baseEvent.buffer), 0);
   dataView.setInt32(InputEvent.size, this.stateFormat, true);
   uint8View.set(new Uint8Array(this.stateData), InputEvent.size+MemoryHelper.sizeOfInt);
   return _buffer;
 }
}


//import { LocalInputManager } from "./inputremoting.js";
/* import { 
 StateEvent,
} from "./inputdevice.js";
*/
/* import {
 MemoryHelper
} from "./memoryhelper.js";
*/
class LocalInputManager {
 constructor() {
   this._onevent = new EventTarget();
 }

 /**
  * event type 'event', 'changedeviceusage'
  * @return {Event}
  */
 get onEvent() {
   return this._onevent;
 }

 /**
  * @return {Event}
  */
 get devices() {
   throw new Error(`Please implement this method.`);
 }

 /**
  * @return {Number} time (sec)
  */
 get startTime() {
   return this._startTime;
 }

 /**
  * @return {Number} time (sec)
  */
 get timeSinceStartup() {
   return Date.now()/1000 - this.startTime;
 }

 /**
  * @param {Number} time (sec)
  */
 setStartTime(time) {
   this._startTime = time;
 }
}

const InputDeviceChange = {
 Added: 0,
 Removed: 1,
 Disconnected: 2,
 Reconnected: 3,
 Enabled: 4,
 Disabled: 5,
 UsageChanged: 6,
 ConfigurationChanged: 7,
 Destroyed: 8, 
};

class InputRemoting {
 /**
  * @param {LocalInputManager} manager 
  */
 constructor(manager) {
   this._localManager = manager;
   this._subscribers = new Array();
   this._sending = false;
 }

 startSending() {
   if(this._sending) {
     return;
   }
   this._sending = true;

   const onEvent = e => {
     this._sendEvent(e.detail.event);
   };

   const onDeviceChange = e => {
     this._sendDeviceChange(e.detail.device, e.detail.change);
   };

   this._localManager.setStartTime(Date.now()/1000);
   this._localManager.onEvent.addEventListener("event", onEvent);
   this._localManager.onEvent.addEventListener("changedeviceusage", onDeviceChange);
   this._sendInitialMessages();
 }

 stopSending() {
   if (!this._sending) {
     return;
   }
   this._sending = false;
 }

 /**
  * 
  * @param {Observer} observer 
  */
 subscribe(observer) {
   this._subscribers.push(observer);
 }

 _sendInitialMessages() {
  this._sendAllGeneratedLayouts();
  this._sendAllDevices();
 }

 _sendAllGeneratedLayouts() {
   // todo:
 }

 _sendAllDevices() {
   var devices = this._localManager.devices;
   if(devices == null)
     return;
   for (const device of devices) {
     this._sendDevice(device);
   }
 }

 _sendDevice(device) {
   const newDeviceMessage = NewDeviceMsg.create(device);
   this._send(newDeviceMessage);

   // Send current state. We do this here in this case as the device
   // may have been added some time ago and thus have already received events.

   // todo:
   // const stateEventMessage = NewEventsMsg.createStateEvent(device);
   // this._send(stateEventMessage);
 }

 _sendEvent(event) {
   const message = NewEventsMsg.create(event);
   this._send(message);
 }

 _sendDeviceChange(device, change) {
   if (this._subscribers == null)
     return;

   let msg = null;
   switch (change) {
     case InputDeviceChange.Added:
       msg = NewDeviceMsg.Create(device);
       break;
     case InputDeviceChange.Removed:
       msg = RemoveDeviceMsg.Create(device);
       break;
     case InputDeviceChange.UsageChanged:
       msg = ChangeUsageMsg.Create(device);
       break;
     default:
       return;
   }
   this._send(msg);
 }  

 _send(message) {
   for(let subscriber of this._subscribers) {
     subscriber.onNext(message);
   }
 }
}

const MessageType = {
 Connect: 0,
 Disconnect: 1,
 NewLayout: 2,
 NewDevice: 3,
 NewEvents: 4,
 RemoveDevice: 5,
 RemoveLayout: 6,
 ChangeUsages: 7,
 StartSending: 8,
 StopSending: 9,
};

class Message {
 /**
  * field offset 0
  * {Number} participant_id;
  * 
  * field offset 4
  * {Number} type;
  * 
  * field offset 8
  * {Number} length;
  * 
  * field offset 12
  * {ArrayBuffer} data;
  */

 /**
  * 
  * @param {number} participantId 
  * @param {MessageType} type 
  * @param {ArrayBuffer} data 
  */
 constructor(participantId, type, data) {
   this.participant_id = participantId;
   this.type = type;
   this.length = data.byteLength;
   this.data = data;
 }

 /**
  * 
  * @returns {ArrayBuffer}
  */
 get buffer() {
   const totalSize = 
     MemoryHelper.sizeOfInt + // size of this.participant_id
     MemoryHelper.sizeOfInt + // size of this.type
     MemoryHelper.sizeOfInt + // size of this.length
     this.data.byteLength;    // size of this.data

   let buffer = new ArrayBuffer(totalSize);
   let dataView = new DataView(buffer);
   let uint8view =  new Uint8Array(buffer);
   dataView.setUint32(0, this.participant_id, true);
   dataView.setUint32(4, this.type, true);
   dataView.setUint32(8, this.length, true);
   uint8view.set(new Uint8Array(this.data), 12);
   return buffer;
 }
}

class NewDeviceMsg {
 /**
  * @param {InputDevice} device 
  * @returns {Message}
  */
 static create(device) {
   const data = {
     name: device.name,
     layout: device.layout,
     deviceId: device.deviceId,
     variants: device.variants,
     description: device.description
   };
   const json = JSON.stringify(data);
   let buffer = new ArrayBuffer(json.length*2); // 2 bytes for each char
   let view = new Uint8Array(buffer);
   const length = json.length;
   for (let i = 0; i < length; i++) {
     view[i] = json.charCodeAt(i);
   }
   return new Message(0, MessageType.NewDevice, buffer);
 }
}

class NewEventsMsg {
 /**
  * 
  * @param {InputDevice} device
  * @returns {Message}
  */
 static createStateEvent(device) {
   const events = StateEvent.from(device);
   return NewEventsMsg.create(events);
 }

 /**
  * 
  * @param {StateEvent} event 
  * @returns {Message}
  */
 static create(event) {
     return new Message(0, MessageType.NewEvents, event.buffer);
 }
}

class RemoveDeviceMsg {
 /**
  * 
  * @param {InputDevice} device 
  * @returns {Message}
  */
  static create(device) {
   let buffer = new ArrayBuffer(MemoryHelper.sizeOfInt);
   let view = new DataView(buffer);
   view.setInt32(device.deviceId);
   return new Message(0, MessageType.RemoveDevice, buffer);
 }
}

class ChangeUsageMsg {

 static create(device) {
   // todo:
   throw new Error(`ChangeUsageMsg class is not implemented. device=${device}`);
 }
}


//import { GamepadHandler } from "./gamepadhandler.js";
class GamepadHandler extends EventTarget {
 constructor() {
   super();
   this._controllers = {};
   window.requestAnimationFrame(this._updateStatus.bind(this));
 }

 /**
  * @param {Gamepad} gamepad 
  */
 addGamepad(gamepad) {
   this._controllers[gamepad.index] = gamepad;
 }

 /**
  * @param {Gamepad} gamepad 
  */
 removeGamepad(gamepad) {
   delete this._controllers[gamepad.index];
 }

 _updateStatus() {
   this._scanGamepad();
   for(let i in this._controllers) {
     const controller = this._controllers[i];

     // gamepadupdated event type is own definition
     this.dispatchEvent(new GamepadEvent('gamepadupdated', {
       gamepad: controller
     }));
   }
   window.requestAnimationFrame(this._updateStatus.bind(this));
 }

 _scanGamepad() {
   let gamepads = navigator.getGamepads();
   for (let i = 0; i < gamepads.length; i++) {
     if (gamepads[i] && (gamepads[i].index in this._controllers)) {
       this._controllers[gamepads[i].index] = gamepads[i];
     }
   }
 }    
}


//import { PointerCorrector } from "./pointercorrect.js";
const LetterBoxType = {
 Vertical: 0,
 Horizontal: 1
};

class PointerCorrector {
 /**
  * @param {Number} videoWidth
  * @param {Number} videoHeight
  * @param {HTMLVideoElement} videoElem
  */
 constructor(videoWidth, videoHeight, videoElem) {
   this.reset(videoWidth, videoHeight, videoElem);
 }

 /**
  * @param {Number[]} position MouseEvent.clientX, MouseEvent.clientY
  * @returns {Number[]}
  */
  map(position) {
   var rect = this._videoElem.getBoundingClientRect();
   const _position = new Array(2);

   // (1) set origin point to zero
   _position[0] = position[0] - rect.left;
   _position[1] = position[1] - rect.top;

   // (2) translate Unity coordinate system (reverse y-axis)
   _position[1] = rect.height - _position[1];

   // (3) add offset of letterbox
   _position[0] -= this._contentRect.x;
   _position[1] -= this._contentRect.y;

   // (4) mapping element rectangle to video rectangle
   _position[0] = _position[0] / this._contentRect.width * this._videoWidth;
   _position[1] = _position[1] / this._contentRect.height * this._videoHeight;

   return _position;
 }

 /**
  * @param {Number} videoWidth
  */
  setVideoWidth(videoWidth) {
   this._videoWidth = videoWidth;
   this._reset();
 }

 /**
  * @param {Number} videoHeight
  */
 setVideoHeight(videoHeight) {
   this._videoHeight = videoHeight;
   this._reset();
 }

 /**
  * @param {HTMLVideoElement} videoElem
  */
 setRect(videoElem) {
   this._videoElem = videoElem;
   this._reset();
 }

 /**
  * @param {Number} videoWidth
  * @param {Number} videoHeight
  * @param {HTMLVideoElement} videoElem
  */
 reset(videoWidth, videoHeight, videoElem) {
   this._videoWidth = videoWidth;
   this._videoHeight = videoHeight;
   this._videoElem = videoElem;
   this._reset();
 }

 get letterBoxType() {
   const videoRatio = this._videoHeight / this._videoWidth;
   var rect = this._videoElem.getBoundingClientRect();
   const rectRatio = rect.height / rect.width;
   return videoRatio > rectRatio ? LetterBoxType.Vertical : LetterBoxType.Horizontal;
 }

 get letterBoxSize() {
   var rect = this._videoElem.getBoundingClientRect();
   switch(this.letterBoxType) {
     case LetterBoxType.Horizontal: {
       const ratioWidth = rect.width / this._videoWidth;
       const height = this._videoHeight * ratioWidth;
       return (rect.height - height) * 0.5;
     }
     case LetterBoxType.Vertical: {
       const ratioHeight = rect.height / this._videoHeight;
       const width = this._videoWidth * ratioHeight;
       return (rect.width - width) * 0.5;
     }
   }
   throw 'invalid status';
 }

 /**
  * Returns rectangle for displaying video with the origin at the left-top of the element.
  * Not considered applying CSS like `object-fit`.
  * @returns {Object}
  */
 get contentRect() {
   const letterBoxType = this.letterBoxType;
   const letterBoxSize = this.letterBoxSize;

   var rect = this._videoElem.getBoundingClientRect();

   const x = letterBoxType == LetterBoxType.Vertical ? letterBoxSize : 0;
   const y = letterBoxType == LetterBoxType.Horizontal ? letterBoxSize : 0;
   const width = letterBoxType == LetterBoxType.Vertical ? rect.width - letterBoxSize * 2 : rect.width;
   const height = letterBoxType == LetterBoxType.Horizontal ? rect.height - letterBoxSize * 2 : rect.height;

   return {x: x, y: y, width: width, height: height};
 }

 _reset() {
   this._contentRect = this.contentRect;
 }
}


class Sender extends LocalInputManager {
 constructor(elem) {
   super();
   this._devices = [];
   this._elem = elem;
   this._corrector = new PointerCorrector(
     this._elem.videoWidth,
     this._elem.videoHeight,
     this._elem
     );

   //since line 27 cannot complete resize initialization but can only monitor div dimension changes, line 26 needs to be reserved
   this._elem.addEventListener('resize', this._onResizeEvent.bind(this), false);
   const observer = new ResizeObserver(this._onResizeEvent.bind(this));
   observer.observe(this._elem);
 }

 addMouse() {
   const descriptionMouse = {
     m_InterfaceName: "RawInput",
     m_DeviceClass: "Mouse",
     m_Manufacturer: "",
     m_Product: "",
     m_Serial: "",
     m_Version: "",
     m_Capabilities: ""
   };
   this.mouse = new Mouse("Mouse", "Mouse", 1, null, descriptionMouse);
   this._devices.push(this.mouse);

   this._elem.addEventListener('click', this._onMouseEvent.bind(this), false);
   this._elem.addEventListener('mousedown', this._onMouseEvent.bind(this), false);
   this._elem.addEventListener('mouseup', this._onMouseEvent.bind(this), false);
   this._elem.addEventListener('mousemove', this._onMouseEvent.bind(this), false);
   this._elem.addEventListener('wheel', this._onWheelEvent.bind(this), false);
 }

 addKeyboard() {
   const descriptionKeyboard = {
     m_InterfaceName: "RawInput",
     m_DeviceClass: "Keyboard",
     m_Manufacturer: "",
     m_Product: "",
     m_Serial: "",
     m_Version: "",
     m_Capabilities: ""
   };
   this.keyboard = new Keyboard("Keyboard", "Keyboard", 2, null, descriptionKeyboard);
   this._devices.push(this.keyboard);

   document.addEventListener('keyup', this._onKeyEvent.bind(this), false);
   document.addEventListener('keydown', this._onKeyEvent.bind(this), false);
 }

 addGamepad() {
   const descriptionGamepad = {
     m_InterfaceName: "RawInput",
     m_DeviceClass: "Gamepad",
     m_Manufacturer: "",
     m_Product: "",
     m_Serial: "",
     m_Version: "",
     m_Capabilities: ""
   };
   this.gamepad = new Gamepad("Gamepad", "Gamepad", 3, null, descriptionGamepad);
   this._devices.push(this.gamepad);

   window.addEventListener("gamepadconnected", this._onGamepadEvent.bind(this), false);
   window.addEventListener("gamepaddisconnected", this._onGamepadEvent.bind(this), false);
   this._gamepadHandler = new GamepadHandler();
   this._gamepadHandler.addEventListener("gamepadupdated", this._onGamepadEvent.bind(this), false);
 }

 addTouchscreen() {
   const descriptionTouch = {
     m_InterfaceName: "RawInput",
     m_DeviceClass: "Touch",
     m_Manufacturer: "",
     m_Product: "",
     m_Serial: "",
     m_Version: "",
     m_Capabilities: ""
   };
   this.touchscreen = new Touchscreen("Touchscreen", "Touchscreen", 4, null, descriptionTouch);
   this._devices.push(this.touchscreen);

   this._elem.addEventListener('touchend', this._onTouchEvent.bind(this), false);
   this._elem.addEventListener('touchstart', this._onTouchEvent.bind(this), false);
   this._elem.addEventListener('touchcancel', this._onTouchEvent.bind(this), false);
   this._elem.addEventListener('touchmove', this._onTouchEvent.bind(this), false);
   this._elem.addEventListener('click', this._onTouchEvent.bind(this), false);
 }

 /**
  * @returns {InputDevice[]}
  */
 get devices() {
   return this._devices;
 }

 _onResizeEvent() {
   this._corrector.reset(
     this._elem.videoWidth,
     this._elem.videoHeight,
     this._elem
   );
 }
 _onMouseEvent(event) {
   this.mouse.queueEvent(event);
   this.mouse.currentState.position = this._corrector.map(this.mouse.currentState.position);
   this._queueStateEvent(this.mouse.currentState, this.mouse);
 }
 _onWheelEvent(event) {
   this.mouse.queueEvent(event);
   this._queueStateEvent(this.mouse.currentState, this.mouse);
 }
 _onKeyEvent(event) {
   if(event.type == 'keydown') {
     if(!event.repeat) { // StateEvent
       this.keyboard.queueEvent(event);
       this._queueStateEvent(this.keyboard.currentState, this.keyboard);
     }
     // TextEvent
     this._queueTextEvent(this.keyboard, event);
   }
   else if(event.type == 'keyup') {
     this.keyboard.queueEvent(event);
     this._queueStateEvent(this.keyboard.currentState, this.keyboard);
   }
 }
 _onTouchEvent(event) {
   this.touchscreen.queueEvent(event, this.timeSinceStartup);
   for(let touch of this.touchscreen.currentState.touchData) {
     let clone = touch.copy();
     clone.position = this._corrector.map(clone.position);
     this._queueStateEvent(clone, this.touchscreen);
   }
 }
 _onGamepadEvent(event) {
   switch(event.type) {
     case 'gamepadconnected': {
       this._gamepadHandler.addGamepad(event.gamepad);
       break;
     }
     case 'gamepaddisconnected': {
       this._gamepadHandler.removeGamepad(event.gamepad);
       break;
     }
     case 'gamepadupdated': {
       this.gamepad.queueEvent(event);
       this._queueStateEvent(this.gamepad.currentState, this.gamepad);
       break;
     }
   }
 }

 _queueStateEvent(state, device) {
   const stateEvent =
     StateEvent.fromState(state, device.deviceId, this.timeSinceStartup);
   const e = new CustomEvent(
     'event', {detail: { event: stateEvent, device: device}});
   super.onEvent.dispatchEvent(e);
 }
 _queueTextEvent(device, event) {
   const textEvent = TextEvent.create(device.deviceId, event, this.timeSinceStartup);
   const e = new CustomEvent(
     'event', {detail: { event: textEvent, device: device}});
   super.onEvent.dispatchEvent(e);
 }
 _queueDeviceChange(device, usage) {
   const e = new CustomEvent(
     'changedeviceusage', {detail: { device: device, usage: usage }});
   super.onEvent.dispatchEvent(e);
 }
}

class Observer {
 /**
  *
  * @param {RTCDataChannel} channel
  */
 constructor(channel) {
   this.channel = channel;
 }
 /**
  *
  * @param {Message} message
  */
 onNext(message) {
   if(this.channel == null || this.channel.readyState != 'open') {
     return;
   }
   this.channel.send(message.buffer);
 }
}

//import { InputRemoting } from "../module/inputremoting.js";

//export 
class VideoPlayer {
 constructor() {
   this.playerElement = null;
   this.videoElement = document.getElementById('Video');;
   this.fullScreenButtonElement = null;
   this.inputRemoting = null;
   this.sender = null;
   this.inputSenderChannel = null;
 }

 /**

*/
 createPlayer() {
 
   this.videoElement.style.display = 'block';
   this.videoElement.srcObject = new MediaStream();
   this.videoElement.addEventListener('loadedmetadata', this._onLoadedVideo.bind(this), true);


 }

 _onLoadedVideo() {
   this.videoElement.play();
   this.resizeVideo();
 }


 _mouseMove(event) {
   // Forward mouseMove event of fullscreen player directly to sender
   // This is required, as the regular mousemove event doesn't fire when in fullscreen mode
   this.sender._onMouseEvent(event);
 }



 /**
  * @param {MediaStreamTrack} track 
  */
 addTrack(track) {
   if (!this.videoElement.srcObject) {
     return;
   }

   this.videoElement.srcObject.addTrack(track);
 }

 resizeVideo() {
   if (!this.videoElement) {
     return;
   }

   const clientRect = this.videoElement.getBoundingClientRect();
   const videoRatio = this.videoWidth / this.videoHeight;
   const clientRatio = clientRect.width / clientRect.height;

   this._videoScale = videoRatio > clientRatio ? clientRect.width / this.videoWidth : clientRect.height / this.videoHeight;
   const videoOffsetX = videoRatio > clientRatio ? 0 : (clientRect.width - this.videoWidth * this._videoScale) * 0.5;
   const videoOffsetY = videoRatio > clientRatio ? (clientRect.height - this.videoHeight * this._videoScale) * 0.5 : 0;
   this._videoOriginX = clientRect.left + videoOffsetX;
   this._videoOriginY = clientRect.top + videoOffsetY;
 }

 get videoWidth() {
   return this.videoElement.videoWidth;
 }

 get videoHeight() {
   return this.videoElement.videoHeight;
 }

 get videoOriginX() {
   return this._videoOriginX;
 }

 get videoOriginY() {
   return this._videoOriginY;
 }

 get videoScale() {
   return this._videoScale;
 }

 deletePlayer() {
   if (this.inputRemoting) {
     this.inputRemoting.stopSending();
   }
   this.inputRemoting = null;
   this.sender = null;
   this.inputSenderChannel = null;

   while (this.playerElement.firstChild) {
     this.playerElement.removeChild(this.playerElement.firstChild);
   }

   this.playerElement = null;
 }

 _isTouchDevice() {
   return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
 }

 /**
  * setup datachannel for player input (muouse/keyboard/touch/gamepad)
  * @param {RTCDataChannel} channel 
  */
 setupInput(channel) {
   this.sender = new Sender(this.videoElement);
   this.sender.addMouse();
   this.sender.addKeyboard();
   if (this._isTouchDevice()) {
     this.sender.addTouchscreen();
   }
   this.sender.addGamepad();
   this.inputRemoting = new InputRemoting(this.sender);

   this.inputSenderChannel = channel;
   this.inputSenderChannel.onopen = this._onOpenInputSenderChannel.bind(this);
   this.inputRemoting.subscribe(new Observer(this.inputSenderChannel));
 }

 async _onOpenInputSenderChannel() {
   await new Promise(resolve => setTimeout(resolve, 100));
   this.inputRemoting.startSending();
 }
}
//import { RenderStreaming } from "../../module/renderstreaming.js";
//import Peer from "./peer.js";
//import * as Logger from "./logger.js";
let isDebug = true;

function enable() {
 isDebug = true;
}

function disable() {
 isDebug = false;
}

function debug(msg) {
 isDebug && console.debug(msg);
}

function info(msg) {
 isDebug && console.info(msg);
}

function log(msg) {
 isDebug && console.log(msg);
}

function warn(msg) {
 isDebug && console.warn(msg);
}

function error(msg) {
 isDebug && console.error(msg);
}

//default 
class Peer extends EventTarget {
 constructor(connectionId, polite, config, resendIntervalMsec = 5000) {
   super();
   const _this = this;
   this.connectionId = connectionId;
   this.polite = polite;
   this.config = config;
   this.pc = new RTCPeerConnection(this.config);
   this.makingOffer = false;
   this.waitingAnswer = false;
   this.ignoreOffer = false;
   this.srdAnswerPending = false;
   this.log = str => void log(`[${_this.polite ? 'POLITE' : 'IMPOLITE'}] ${str}`);
   this.warn = str => void warn(`[${_this.polite ? 'POLITE' : 'IMPOLITE'}] ${str}`);
   this.assert_equals = window.assert_equals ? window.assert_equals : (a, b, msg) => { if (a === b) { return; } throw new Error(`${msg} expected ${b} but got ${a}`); };
   this.interval = resendIntervalMsec;
   this.sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

   this.pc.ontrack = e => {
     _this.log(`ontrack:${e}`);
     _this.dispatchEvent(new CustomEvent('trackevent', { detail: e }));
   };
   this.pc.ondatachannel = e => {
     _this.log(`ondatachannel:${e}`);
     _this.dispatchEvent(new CustomEvent('adddatachannel', { detail: e }));
   };
   this.pc.onicecandidate = ({ candidate }) => {
     _this.log(`send candidate:${candidate}`);
     if (candidate == null) {
       return;
     }
     _this.dispatchEvent(new CustomEvent('sendcandidate', { detail: { connectionId: _this.connectionId, candidate: candidate.candidate, sdpMLineIndex: candidate.sdpMLineIndex, sdpMid: candidate.sdpMid } }));
   };

   this.pc.onnegotiationneeded = this._onNegotiation.bind(this);

   this.pc.onsignalingstatechange = () => {
     _this.log(`signalingState changed:${_this.pc.signalingState}`);
   };

   this.pc.oniceconnectionstatechange = () => {
     _this.log(`iceConnectionState changed:${_this.pc.iceConnectionState}`);
     if (_this.pc.iceConnectionState === 'disconnected') {
       this.dispatchEvent(new Event('disconnect'));
     }
   };

   this.pc.onicegatheringstatechange = () => {
     _this.log(`iceGatheringState changed:${_this.pc.iceGatheringState}'`);
   };

   this.loopResendOffer();
 }

 async _onNegotiation() {
   try {
     this.log(`SLD due to negotiationneeded`);
     this.assert_equals(this.pc.signalingState, 'stable', 'negotiationneeded always fires in stable state');
     this.assert_equals(this.makingOffer, false, 'negotiationneeded not already in progress');
     this.makingOffer = true;
     await this.pc.setLocalDescription();
     this.assert_equals(this.pc.signalingState, 'have-local-offer', 'negotiationneeded not racing with onmessage');
     this.assert_equals(this.pc.localDescription.type, 'offer', 'negotiationneeded SLD worked');
     this.waitingAnswer = true;
     this.dispatchEvent(new CustomEvent('sendoffer', { detail: { connectionId: this.connectionId, sdp: this.pc.localDescription.sdp } }));
   } catch (e) {
     this.log(e);
   } finally {
     this.makingOffer = false;
   }
 }

 async loopResendOffer() {
   while (this.connectionId) {
     if (this.pc && this.waitingAnswer) {
       this.dispatchEvent(new CustomEvent('sendoffer', { detail: { connectionId: this.connectionId, sdp: this.pc.localDescription.sdp } }));
     }
     await this.sleep(this.interval);
   }
 }

 close() {
   this.connectionId = null;
   if (this.pc) {
     this.pc.close();
     this.pc = null;
   }
 }

 getTransceivers(connectionId) {
   if (this.connectionId != connectionId) {
     return null;
   }

   return this.pc.getTransceivers();
 }

 addTrack(connectionId, track) {
   if (this.connectionId != connectionId) {
     return null;
   }

   return this.pc.addTrack(track);
 }

 addTransceiver(connectionId, trackOrKind, init) {
   if (this.connectionId != connectionId) {
     return null;
   }

   return this.pc.addTransceiver(trackOrKind, init);
 }

 createDataChannel(connectionId, label) {
   if (this.connectionId != connectionId) {
     return null;
   }

   return this.pc.createDataChannel(label);
 }

 async getStats(connectionId) {
   if (this.connectionId != connectionId) {
     return null;
   }

   return await this.pc.getStats();
 }

 async onGotDescription(connectionId, description) {
   if (this.connectionId != connectionId) {
     return;
   }

   const _this = this;
   const isStable =
     this.pc.signalingState == 'stable' ||
     (this.pc.signalingState == 'have-local-offer' && this.srdAnswerPending);
   this.ignoreOffer =
     description.type == 'offer' && !this.polite && (this.makingOffer || !isStable);

   if (this.ignoreOffer) {
     _this.log(`glare - ignoring offer`);
     return;
   }

   this.waitingAnswer = false;
   this.srdAnswerPending = description.type == 'answer';
   _this.log(`SRD(${description.type})`);
   await this.pc.setRemoteDescription(description);
   this.srdAnswerPending = false;

   if (description.type == 'offer') {
     _this.dispatchEvent(new CustomEvent('ongotoffer', { detail: { connectionId: _this.connectionId } }));

     _this.assert_equals(this.pc.signalingState, 'have-remote-offer', 'Remote offer');
     _this.assert_equals(this.pc.remoteDescription.type, 'offer', 'SRD worked');
     _this.log('SLD to get back to stable');
     await this.pc.setLocalDescription();
     _this.assert_equals(this.pc.signalingState, 'stable', 'onmessage not racing with negotiationneeded');
     _this.assert_equals(this.pc.localDescription.type, 'answer', 'onmessage SLD worked');
     _this.dispatchEvent(new CustomEvent('sendanswer', { detail: { connectionId: _this.connectionId, sdp: _this.pc.localDescription.sdp } }));

   } else {
     _this.dispatchEvent(new CustomEvent('ongotanswer', { detail: { connectionId: _this.connectionId } }));

     _this.assert_equals(this.pc.remoteDescription.type, 'answer', 'Answer was set');
     _this.assert_equals(this.pc.signalingState, 'stable', 'answered');
     this.pc.dispatchEvent(new Event('negotiated'));
   }
 }

 async onGotCandidate(connectionId, candidate) {
   if (this.connectionId != connectionId) {
     return;
   }

   try {
     await this.pc.addIceCandidate(candidate);
   } catch (e) {
     if (this.pc && !this.ignoreOffer)
       this.warn(`${this.pc} this candidate can't accept current signaling state ${this.pc.signalingState}.`);
   }
 }
}

//import * as Logger from "./logger.js";

function uuid4() {
 var temp_url = URL.createObjectURL(new Blob());
 var uuid = temp_url.toString();
 URL.revokeObjectURL(temp_url);
 var fsgsg="page_"+uuid.split(/[:/]/g).pop().toLowerCase();
 return  fsgsg// remove prefixes
}

class RenderStreaming {
 /**
  * @param signaling signaling class
  * @param {RTCConfiguration} config
  */
 constructor(signaling, config) {
   this._peer = null;
   this._connectionId = null;
   this.onConnect = function (connectionId) { log(`Connect peer on ${connectionId}.`); };
   this.onDisconnect = function (connectionId) { log(`Disconnect peer on ${connectionId}.`); };
   this.onGotOffer = function (connectionId) { log(`On got Offer on ${connectionId}.`); };
   this.onGotAnswer = function (connectionId) { log(`On got Answer on ${connectionId}.`); };
   this.onTrackEvent = function (data) { log(`OnTrack event peer with data:${data}`); };
   this.onAddChannel = function (data) { log(`onAddChannel event peer with data:${data}`); };

   this._config = config;
   this._signaling = signaling;
   this._signaling.addEventListener('connect', this._onConnect.bind(this));
   this._signaling.addEventListener('disconnect', this._onDisconnect.bind(this));
   this._signaling.addEventListener('offer', this._onOffer.bind(this));
   this._signaling.addEventListener('answer', this._onAnswer.bind(this));
   this._signaling.addEventListener('candidate', this._onIceCandidate.bind(this));
 }

 async _onConnect(e) {
   const data = e.detail;
   if (this._connectionId == data.connectionId) {
     this._preparePeerConnection(this._connectionId, data.polite);
     this.onConnect(data.connectionId);
   }
 }

 async _onDisconnect(e) {
   const data = e.detail;
   if (this._connectionId == data.connectionId) {
     this.onDisconnect(data.connectionId);
     if (this._peer) {
       this._peer.close();
       this._peer = null;
     }
   }
 }

 async _onOffer(e) {
   const offer = e.detail;
   if (!this._peer) {
     this._preparePeerConnection(offer.connectionId, offer.polite);
   }
   const desc = new RTCSessionDescription({ sdp: offer.sdp, type: "offer" });
   try {
     await this._peer.onGotDescription(offer.connectionId, desc);
   } catch (error) {
     warn(`Error happen on GotDescription that description.\n Message: ${error}\n RTCSdpType:${desc.type}\n sdp:${desc.sdp}`);
     return;
   }
 }

 async _onAnswer(e) {
   const answer = e.detail;
   const desc = new RTCSessionDescription({ sdp: answer.sdp, type: "answer" });
   if (this._peer) {
     try {
       await this._peer.onGotDescription(answer.connectionId, desc);
     } catch (error) {
       warn(`Error happen on GotDescription that description.\n Message: ${error}\n RTCSdpType:${desc.type}\n sdp:${desc.sdp}`);
       return;
     }
   }
 }

 async _onIceCandidate(e) {
   const candidate = e.detail;
   const iceCandidate = new RTCIceCandidate({ candidate: candidate.candidate, sdpMid: candidate.sdpMid, sdpMLineIndex: candidate.sdpMLineIndex });
   if (this._peer) {
     await this._peer.onGotCandidate(candidate.connectionId, iceCandidate);
   }
 }

 /**
  * if not set argument, a generated uuid is used.
  * @param {string | null} connectionId
  */
 async createConnection(connectionId) {
   this._connectionId = connectionId ? connectionId : uuid4();
   await this._signaling.createConnection(this._connectionId);
 }

 async deleteConnection() {
   await this._signaling.deleteConnection(this._connectionId);
 }

 _preparePeerConnection(connectionId, polite) {
   if (this._peer) {
     log('Close current PeerConnection');
     this._peer.close();
     this._peer = null;
   }

   // Create peerConnection with proxy server and set up handlers
   this._peer = new Peer(connectionId, polite, this._config);
   this._peer.addEventListener('disconnect', () => {
     this.onDisconnect(`Receive disconnect message from peer. connectionId:${connectionId}`);
   });
   this._peer.addEventListener('trackevent', (e) => {
     const data = e.detail;
     this.onTrackEvent(data);
   });
   this._peer.addEventListener('adddatachannel', (e) => {
     const data = e.detail;
     this.onAddChannel(data);
   });
   this._peer.addEventListener('ongotoffer', (e) => {
     const id = e.detail.connectionId;
     this.onGotOffer(id);
   });
   this._peer.addEventListener('ongotanswer', (e) => {
     const id = e.detail.connectionId;
     this.onGotAnswer(id);
   });
   this._peer.addEventListener('sendoffer', (e) => {
     const offer = e.detail;
     this._signaling.sendOffer(offer.connectionId, offer.sdp);
   });
   this._peer.addEventListener('sendanswer', (e) => {
     const answer = e.detail;
     this._signaling.sendAnswer(answer.connectionId, answer.sdp);
   });
   this._peer.addEventListener('sendcandidate', (e) => {
     const candidate = e.detail;
     this._signaling.sendCandidate(candidate.connectionId, candidate.candidate, candidate.sdpMid, candidate.sdpMLineIndex);
   });
   return this._peer;
 }

 /**
  * @returns {Promise<RTCStatsReport> | null}
  */
 async getStats() {
   return await this._peer.getStats(this._connectionId);
 }

 /**
  * @param {string} label
  * @returns {RTCDataChannel | null}
  */
 createDataChannel(label) {
   return this._peer.createDataChannel(this._connectionId, label);
 }

 /**
  * @param {MediaStreamTrack} track
  * @returns {RTCRtpSender | null}
  */
 addTrack(track) {
   return this._peer.addTrack(this._connectionId, track);
 }

 /**
  * @param {MediaStreamTrack | string} trackOrKind
  * @param {RTCRtpTransceiverInit | null} init
  * @returns {RTCRtpTransceiver | null}
  */
 addTransceiver(trackOrKind, init) {
   return this._peer.addTransceiver(this._connectionId, trackOrKind, init);
 }


 /**
  * @returns {RTCRtpTransceiver[] | null}
  */
 getTransceivers() {
   return this._peer.getTransceivers(this._connectionId);
 }

 async start() {
   await this._signaling.start();
 }

 async stop() {
   if (this._peer) {
     this._peer.close();
     this._peer = null;
   }

   if (this._signaling) {
     await this._signaling.stop();
     this._signaling = null;
   }
 }
}

//import { Signaling, WebSocketSignaling } from "../../module/signaling.js";
//import * as Logger from "./logger.js";


class Signaling extends EventTarget {

 constructor(interval = 1000) {
   super();
   this.running = false;
   this.interval = interval;
   this.sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
 }

 headers() {
   if (this.sessionId !== undefined) {
     return { 'Content-Type': 'application/json', 'Session-Id': this.sessionId };
   }
   else {
     return { 'Content-Type': 'application/json' };
   }
 }

 url(method, parameter='') {
   let ret = location.origin + '/signaling';
   if(method)
     ret += '/' + method;
   if(parameter)
     ret += '?' + parameter;
   return ret;
 }

 async start() {
   if(this.running) {
     return;
   }

   this.running = true;
   while (!this.sessionId) {
     const createResponse = await fetch(this.url(''), { method: 'PUT', headers: this.headers() });
     const session = await createResponse.json();
     this.sessionId = session.sessionId;

     if (!this.sessionId) {
       await this.sleep(this.interval);
     }
   }

   this.loopGetAll();
 }

 async loopGetAll() {
   let lastTimeRequest = Date.now() - 30000;
   while (this.running) {
     const res = await this.getAll(lastTimeRequest);
     const data = await res.json();
     lastTimeRequest = data.datetime ? data.datetime : Date.now();

     const messages = data.messages;

     for(const msg of messages) {
       switch (msg.type) {
         case "connect":
           break;
         case "disconnect":
           this.dispatchEvent(new CustomEvent('disconnect', { detail: msg }));
           break;
         case "offer":
           this.dispatchEvent(new CustomEvent('offer', { detail: msg } ));
           break;
         case "answer":
           this.dispatchEvent(new CustomEvent('answer', { detail: msg } ));
           break;
         case "candidate":
           this.dispatchEvent(new CustomEvent('candidate', { detail: msg }));
           break;
         default:
           break;
       }
     }
     await this.sleep(this.interval);
   }
 }

 async stop() {
   this.running = false;
   await fetch(this.url(''), { method: 'DELETE', headers: this.headers() });
   this.sessionId = null;
 }

 async createConnection(connectionId) {
   const data = { 'connectionId': connectionId };
   const res = await fetch(this.url('connection'), { method: 'PUT', headers: this.headers(), body: JSON.stringify(data) });
   const json = await res.json();
   log(`Signaling: HTTP create connection, connectionId: ${json.connectionId}, polite:${json.polite}`);

   this.dispatchEvent(new CustomEvent('connect', { detail: json }));
   return json;
 }

 async deleteConnection(connectionId) {
   const data = { 'connectionId': connectionId };
   const res = await fetch(this.url('connection'), { method: 'DELETE', headers: this.headers(), body: JSON.stringify(data) });
   const json = await res.json();
   this.dispatchEvent(new CustomEvent('disconnect', { detail: json }));
   return json;
 }

 async sendOffer(connectionId, sdp) {
   const data = { 'sdp': sdp, 'connectionId': connectionId };
   log('sendOffer:' + data);
   await fetch(this.url('offer'), { method: 'POST', headers: this.headers(), body: JSON.stringify(data) });
 }

 async sendAnswer(connectionId, sdp) {
   const data = { 'sdp': sdp, 'connectionId': connectionId };
   log('sendAnswer:' + data);
   await fetch(this.url('answer'), { method: 'POST', headers: this.headers(), body: JSON.stringify(data) });
 }

 async sendCandidate(connectionId, candidate, sdpMid, sdpMLineIndex) {
   const data = {
     'candidate': candidate,
     'sdpMLineIndex': sdpMLineIndex,
     'sdpMid': sdpMid,
     'connectionId': connectionId
   };
   log('sendCandidate:' + data);
   await fetch(this.url('candidate'), { method: 'POST', headers: this.headers(), body: JSON.stringify(data) });
 }

 async getAll(fromTime = 0) {
   return await fetch(this.url(``, `fromtime=${fromTime}`), { method: 'GET', headers: this.headers() });
 }
}

class WebSocketSignaling extends EventTarget {

 constructor(interval = 1000) {
   super();
   this.interval = interval;
   this.sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

  
  /*  if (location.protocol === "https:") {
     websocketUrl = "wss://" + location.host;
   } else {
     websocketUrl = "ws://" + location.host;
   } */
 
   this.websocket = new WebSocket(websocketUrl);
   this.connectionId = null;

   this.websocket.onopen = () => {
     this.isWsOpen = true;
   };

   this.websocket.onclose = () => {
     this.isWsOpen = false;
   };

   this.websocket.onmessage = (event) => {
     const msg = JSON.parse(event.data);
     if (!msg || !this) {
       return;
     }

     log(msg);

     switch (msg.type) {
       case "connect":
         this.dispatchEvent(new CustomEvent('connect', { detail: msg }));
         break;
       case "disconnect":
         this.dispatchEvent(new CustomEvent('disconnect', { detail: msg }));
         break;
       case "offer":
         this.dispatchEvent(new CustomEvent('offer', { detail: { connectionId: msg.from, sdp: msg.data.sdp, polite: msg.data.polite } }));
         break;
       case "answer":
         this.dispatchEvent(new CustomEvent('answer', { detail: { connectionId: msg.from, sdp: msg.data.sdp } }));
         break;
       case "candidate":
         this.dispatchEvent(new CustomEvent('candidate', { detail: { connectionId: msg.from, candidate: msg.data.candidate, sdpMLineIndex: msg.data.sdpMLineIndex, sdpMid: msg.data.sdpMid } }));
         break;
       default:
         break;
     }
   };
 }

 async start() {
   while (!this.isWsOpen) {
     await this.sleep(100);
   }
 }

 async stop() {
   this.websocket.close();
   while (this.isWsOpen) {
     await this.sleep(100);
   }
 }

 createConnection(connectionId) {
   const sendJson = JSON.stringify({ type: "connect", connectionId: connectionId });
   log(sendJson);
   this.websocket.send(sendJson);
 }

 deleteConnection(connectionId) {
   const sendJson = JSON.stringify({ type: "disconnect", connectionId: connectionId });
   log(sendJson);
   this.websocket.send(sendJson);
 }

 sendOffer(connectionId, sdp) {
   const data = { 'sdp': sdp, 'connectionId': connectionId };
   const sendJson = JSON.stringify({ type: "offer", from: connectionId, data: data });
   log(sendJson);
   this.websocket.send(sendJson);
 }

 sendAnswer(connectionId, sdp) {
   const data = { 'sdp': sdp, 'connectionId': connectionId };
   const sendJson = JSON.stringify({ type: "answer", from: connectionId, data: data });
   log(sendJson);
   this.websocket.send(sendJson);
 }

 sendCandidate(connectionId, candidate, sdpMLineIndex, sdpMid) {
   const data = {
     'candidate': candidate,
     'sdpMLineIndex': sdpMLineIndex,
     'sdpMid': sdpMid,
     'connectionId': connectionId
   };
   const sendJson = JSON.stringify({ type: "candidate", from: connectionId, data: data });
   log(sendJson);
   this.websocket.send(sendJson);
 }
}


/** @type {Element} */
let playButton = document.getElementById('playButton');
/** @type {RenderStreaming} */
let renderstreaming;
/** @type {boolean} */
let useWebSocket;

const supportsSetCodecPreferences = window.RTCRtpTransceiver &&
 'setCodecPreferences' in window.RTCRtpTransceiver.prototype;

const playerDiv = document.getElementById('player');
const videoPlayer = new VideoPlayer();

setup();



window.addEventListener('resize', function () {
 videoPlayer.resizeVideo();
}, true);

window.addEventListener('beforeunload', async () => {
 if(!renderstreaming)
   return;
 await renderstreaming.stop();
}, true);

async function setup() {
 const res = await getServerConfig();
 useWebSocket = res.useWebSocket;
 showPlayButton();
}

function showPlayButton() {
 if (!document.getElementById('playButton')) {
   const elementPlayButton = document.createElement('img');
   elementPlayButton.id = 'playButton';
   elementPlayButton.src = './images/Play.png';
   elementPlayButton.alt = 'Start Streaming';
   playButton = document.getElementById('player').appendChild(elementPlayButton);
 }
   
 document.getElementById('playButton').addEventListener('click', onClickPlayButton);

}

function onClickPlayButton() {
 playButton.style.display = 'none';

 // add video player
 videoPlayer.createPlayer(playerDiv);
 setupRenderStreaming();
}

async function setupRenderStreaming() {
 const signaling = useWebSocket ? new WebSocketSignaling() : new Signaling();
 const config = getRTCConfiguration();
 renderstreaming = new RenderStreaming(signaling, config);
 renderstreaming.onConnect = onConnect;
 renderstreaming.onDisconnect = onDisconnect;
 renderstreaming.onTrackEvent = (data) => videoPlayer.addTrack(data.track);
 await renderstreaming.start();
 await renderstreaming.createConnection();
}

function onConnect() {
 const channel = renderstreaming.createDataChannel("input");
 videoPlayer.setupInput(channel);

}

async function onDisconnect(connectionId) {
 

 await renderstreaming.stop();
 renderstreaming = null;
 videoPlayer.deletePlayer();
 showPlayButton();
}



/** @type {RTCStatsReport} */
let lastStats;
/** @type {number} */
let intervalId;

