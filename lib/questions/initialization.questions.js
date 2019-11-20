"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inquirer_1 = tslib_1.__importDefault(require("inquirer"));
function initializationQuestion() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var validate, question;
        return tslib_1.__generator(this, function (_a) {
            validate = function (title) {
                return function (val) {
                    if (val.length < 1) {
                        return 'You must provide user name';
                    }
                    return true;
                };
            };
            question = [
                {
                    type: 'input',
                    name: 'user_name',
                    message: "What's your jenkins user name",
                    validate: validate('user name')
                },
                {
                    type: 'input',
                    name: 'user_password',
                    message: "What's your jenkins password",
                    validate: validate('password')
                }
            ];
            return [2 /*return*/, inquirer_1.default.prompt(question)];
        });
    });
}
exports.initializationQuestion = initializationQuestion;
