"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inquirer_1 = tslib_1.__importDefault(require("inquirer"));
function paramsQuestion() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var listOfQuestions;
        return tslib_1.__generator(this, function (_a) {
            listOfQuestions = [
                {
                    type: 'input',
                    name: 'controllerBN',
                    message: 'Controller build number',
                    default: function () {
                        return -1;
                    },
                    validate: function (value) {
                        var valid = !isNaN(parseFloat(value));
                        return valid || 'Please enter a number';
                    },
                },
                {
                    type: 'input',
                    name: 'controllerBranchName',
                    message: 'Controller branch name',
                },
                {
                    type: 'input',
                    name: 'adunitBN',
                    message: 'Adunit build number',
                    default: function () {
                        return -1;
                    },
                    validate: function (value) {
                        return !isNaN(parseFloat(value)) || 'Please enter a number';
                    }
                },
                {
                    type: 'input',
                    name: 'branchNameAdUnit',
                    message: 'Adunit branch name',
                },
                {
                    type: 'input',
                    name: 'envName',
                    message: "What environment?",
                    validate: function (val) {
                        if (val.length < 1) {
                            return 'You must choose environment devN or qaN';
                        }
                        return true;
                    }
                }
            ];
            return [2 /*return*/, inquirer_1.default.prompt(listOfQuestions)];
        });
    });
}
exports.paramsQuestion = paramsQuestion;
