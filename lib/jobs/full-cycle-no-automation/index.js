"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var params_question_1 = require("./params.question");
var configuration_job_1 = require("./configuration.job");
function proceed() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var answer, jobConfig;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, params_question_1.paramsQuestion()];
                case 1:
                    answer = _a.sent();
                    jobConfig = configuration_job_1.jobParams;
                    jobConfig.params = tslib_1.__assign(tslib_1.__assign({}, jobConfig.params), answer);
                    return [2 /*return*/, jobConfig];
            }
        });
    });
}
exports.proceed = proceed;
