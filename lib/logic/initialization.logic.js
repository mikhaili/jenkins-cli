"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_utils_1 = require("../utils/dao.utils");
var isValidData = function (name, password) {
    return (name.length > 0 && password.length > 0);
};
function create(_a) {
    var name = _a.name, password = _a.password, email = _a.email;
    return { isValid: isValidData(name, password), password: password, name: password, email: email };
}
exports.create = create;
var InitializationLogic = /** @class */ (function () {
    function InitializationLogic() {
        this.FILE_NAME = './.config.json';
        this._dao = new dao_utils_1.Dao({ fileName: this.FILE_NAME });
    }
    InitializationLogic.prototype.loadConfig = function () {
        var data = this._dao.loadData();
        if (!data) {
            return create({ name: "", password: "", email: "" });
        }
        return JSON.parse(Buffer.from(data, 'base64').toString('utf-8'));
    };
    InitializationLogic.prototype.saveConfig = function (config) {
        this._dao.saveData(Buffer.from((JSON.stringify(config))).toString('base64'));
    };
    return InitializationLogic;
}());
exports.InitializationLogic = InitializationLogic;
