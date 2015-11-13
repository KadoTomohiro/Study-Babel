'use strict';

// let
// let foo;
// let foo; 二重定義はコンパイルエラー

// function f() {
//   let x;
//   {
//     x = 'foo';
//   }
//
//   x = 'bar';
// }

// const
// function f() {
//   let x;
//   {
//     const x = 'constant';
//     // x = 'var'         // constを変更しようとするとコンパイルエラー
//   }
//
//   x = 'bar';
// }

// class
// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// var Polygon = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// extend
// class mDate extends Date {
//   constructor() {
//     super();
//   }
//
//   getFormatterdDate() {
//     return this.getDate();
//   }
// }
//
// var aDate = new mDate();

// arrow operater
// (v, i) => v + i;

// Set and Map　要 babel polyfil?
// var s = new Set();
// s.add('hello').add('bye');
//
// var m = new WeakMap();
// m.set('hello', 24);
// m.set(s, 32);
// m.get(s) == 34;

// unicode chars?
// '角'.length == 2
// '\u{20BB7}' == '吉' == '\uD842\uFB7';

// iterator
// var m = {
//   [Symbol.iterator]: function*() {
//     var pre = 0,
//       cul = 1;
//     for (;;) {
//       var tmp = pre;
//       pre = cul;
//       cul += tmp;
//       yield cul;
//     }
//   }
// }
//
// for (var n of m) {
//   if (n > 1000) {
//     break;
//   }
//   consol.log(n);
// }

// proxy
var target = {};
var handler = {
  get: function get(reciever, name) {
    return 'Hello, ${name}';
  }
};

var p = new Proxy(target, handler);
p.word === 'Hello, world';
