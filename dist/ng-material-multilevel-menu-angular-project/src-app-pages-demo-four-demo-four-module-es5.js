(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-demo-four-demo-four-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/demo-four/demo-four.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/demo-four/demo-four.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  demo-four works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/demo-four/demo-four-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/demo-four/demo-four-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DemoFourRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFourRoutingModule", function() { return DemoFourRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_four_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-four.component */ "./src/app/pages/demo-four/demo-four.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _demo_four_component__WEBPACK_IMPORTED_MODULE_2__["DemoFourComponent"]
    }];
var DemoFourRoutingModule = /** @class */ (function () {
    function DemoFourRoutingModule() {
    }
    DemoFourRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DemoFourRoutingModule);
    return DemoFourRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/demo-four/demo-four.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/demo-four/demo-four.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW8tZm91ci9kZW1vLWZvdXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/demo-four/demo-four.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/demo-four/demo-four.component.ts ***!
  \********************************************************/
/*! exports provided: DemoFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFourComponent", function() { return DemoFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoFourComponent = /** @class */ (function () {
    function DemoFourComponent() {
    }
    DemoFourComponent.prototype.ngOnInit = function () {
    };
    DemoFourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-four',
            template: __webpack_require__(/*! raw-loader!./demo-four.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/demo-four/demo-four.component.html"),
            styles: [__webpack_require__(/*! ./demo-four.component.css */ "./src/app/pages/demo-four/demo-four.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoFourComponent);
    return DemoFourComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo-four/demo-four.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/demo-four/demo-four.module.ts ***!
  \*****************************************************/
/*! exports provided: DemoFourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFourModule", function() { return DemoFourModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_four_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-four-routing.module */ "./src/app/pages/demo-four/demo-four-routing.module.ts");
/* harmony import */ var _demo_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-four.component */ "./src/app/pages/demo-four/demo-four.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DemoFourModule = /** @class */ (function () {
    function DemoFourModule() {
    }
    DemoFourModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _demo_four_routing_module__WEBPACK_IMPORTED_MODULE_2__["DemoFourRoutingModule"]
            ],
            declarations: [_demo_four_component__WEBPACK_IMPORTED_MODULE_3__["DemoFourComponent"]]
        })
    ], DemoFourModule);
    return DemoFourModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-pages-demo-four-demo-four-module-es5.js.map