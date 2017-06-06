"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by admin on 01/06/2017.
 */
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var LoginService = LoginService_1 = (function () {
    function LoginService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    LoginService.prototype.login = function (username, password) {
        return this.http.post(LoginService_1.EVENTSPATH, { 'username': username, 'password': password }, this.options).subscribe(function (response) { return localStorage.setItem('token', response.json().token); });
    };
    LoginService.prototype.logout = function () {
        return this.http.delete(LoginService_1.EVENTSPATH + "/" + localStorage.getItem('token'), this.options).subscribe(function (response) { return response; });
    };
    return LoginService;
}());
LoginService.EVENTSPATH = 'http://localhost/users/accesstoken';
LoginService = LoginService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
var LoginService_1;
//# sourceMappingURL=login.service.js.map