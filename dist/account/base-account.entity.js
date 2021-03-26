"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAccount = void 0;
var BaseAccount = /** @class */ (function () {
    function BaseAccount(accountNumber, owner) {
        this._number = accountNumber;
        this._owner = owner;
    }
    BaseAccount.prototype.getDescription = function () {
        return "Account Number is: " + this._number + " Owned by: " + this._owner;
    };
    return BaseAccount;
}());
exports.BaseAccount = BaseAccount;
