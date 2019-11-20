"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var kleur_1 = require("kleur");
var figlet = tslib_1.__importStar(require("figlet"));
var console_message_1 = require("../models/console-message");
// @ts-ignore
//@injectable()
var Logger = /** @class */ (function () {
    function Logger() {
        this.newLine = '\n';
    }
    Logger.prototype.showTitleAndBanner = function () {
        console.log(kleur_1.cyan(figlet.textSync(console_message_1.ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
        console.info(kleur_1.cyan(console_message_1.ConsoleMessage.BANNER));
    };
    Logger.prototype.showError = function (message) {
        console.error(kleur_1.red(console_message_1.ConsoleMessage.ERROR) + message);
    };
    Logger.prototype.showSuccess = function (message) {
        console.log(kleur_1.green(console_message_1.ConsoleMessage.SUCCESS) + message + this.newLine);
    };
    Logger.prototype.showInfo = function (message) {
        console.info(kleur_1.cyan(console_message_1.ConsoleMessage.INFO) + message + this.newLine);
    };
    Logger.prototype.showGenerate = function (fileName) {
        console.log(kleur_1.cyan(console_message_1.ConsoleMessage.GENERATE) + (fileName + "..."));
    };
    Logger.prototype.showCreate = function (fileName, filePath) {
        filePath
            ? console.log(kleur_1.green(console_message_1.ConsoleMessage.CREATE) + (fileName + " in " + filePath))
            : console.log(kleur_1.green(console_message_1.ConsoleMessage.CREATE) + ("" + fileName));
    };
    Logger.prototype.showUpdate = function (fileName, filePath) {
        filePath
            ? console.log(kleur_1.green(console_message_1.ConsoleMessage.UPDATE) + (fileName + " in " + filePath))
            : console.log(kleur_1.green(console_message_1.ConsoleMessage.UPDATE) + ("" + fileName));
    };
    return Logger;
}());
exports.Logger = Logger;
