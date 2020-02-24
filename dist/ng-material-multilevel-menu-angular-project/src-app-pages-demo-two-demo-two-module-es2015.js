(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-demo-two-demo-two-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo-two/demo-two.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo-two/demo-two.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  demo-two works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/demo-two/demo-two-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/demo-two/demo-two-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DemoTwoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTwoRoutingModule", function() { return DemoTwoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demo_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-two.component */ "./src/app/pages/demo-two/demo-two.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [{
        path: '',
        component: _demo_two_component__WEBPACK_IMPORTED_MODULE_2__["DemoTwoComponent"]
    }];
let DemoTwoRoutingModule = class DemoTwoRoutingModule {
};
DemoTwoRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], DemoTwoRoutingModule);



/***/ }),

/***/ "./src/app/pages/demo-two/demo-two.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/demo-two/demo-two.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW8tdHdvL2RlbW8tdHdvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/demo-two/demo-two.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/demo-two/demo-two.component.ts ***!
  \******************************************************/
/*! exports provided: DemoTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTwoComponent", function() { return DemoTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DemoTwoComponent = class DemoTwoComponent {
    constructor() { }
    ngOnInit() {
    }
};
DemoTwoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-demo-two',
        template: __webpack_require__(/*! raw-loader!./demo-two.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo-two/demo-two.component.html"),
        styles: [__webpack_require__(/*! ./demo-two.component.css */ "./src/app/pages/demo-two/demo-two.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DemoTwoComponent);



/***/ }),

/***/ "./src/app/pages/demo-two/demo-two.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/demo-two/demo-two.module.ts ***!
  \***************************************************/
/*! exports provided: DemoTwoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTwoModule", function() { return DemoTwoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _demo_two_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-two-routing.module */ "./src/app/pages/demo-two/demo-two-routing.module.ts");
/* harmony import */ var _demo_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-two.component */ "./src/app/pages/demo-two/demo-two.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let DemoTwoModule = class DemoTwoModule {
};
DemoTwoModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _demo_two_routing_module__WEBPACK_IMPORTED_MODULE_2__["DemoTwoRoutingModule"]
        ],
        declarations: [_demo_two_component__WEBPACK_IMPORTED_MODULE_3__["DemoTwoComponent"]]
    })
], DemoTwoModule);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-demo-two-demo-two-module-es2015.js.map