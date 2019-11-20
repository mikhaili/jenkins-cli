"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inquirer_1 = tslib_1.__importDefault(require("inquirer"));
var choice_1 = require("../models/choice");
function routeQuestion() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var listOfFiles;
        return tslib_1.__generator(this, function (_a) {
            listOfFiles = [
                { name: 'full cycle with automation', value: choice_1.RouteChoiceValue.FULL_CYCLE_WITH_AUTO },
                { name: 'full cycle no automation', value: choice_1.RouteChoiceValue.FULL_CYCLE_NO_AUTO },
            ];
            return [2 /*return*/, inquirer_1.default.prompt([{
                        name: 'action',
                        type: 'list',
                        message: 'Which Jenkins job do you want to run?',
                        choices: listOfFiles
                    }])];
        });
    });
}
exports.routeQuestion = routeQuestion;
