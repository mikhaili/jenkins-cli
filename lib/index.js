"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var initialization_questions_1 = require("./questions/initialization.questions");
var initialization_logic_1 = require("./logic/initialization.logic");
var route_question_1 = require("./questions/route.question");
var jenkins_api_1 = require("./service/jenkins/jenkins-api");
var jobs_1 = require("./jobs");
var logger_util_1 = require("./utils/logger.util");
var routeTable = {
    'full-cycle-automation': jobs_1.fullCycleWithAuto,
    'full-cycle-no-automation': jobs_1.fullCycleNoAuto
};
var main = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var initializationLogic, configuration, _a, user_name, user_password, user_email, routeAnswer, answer, jenkinsClient;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                initializationLogic = new initialization_logic_1.InitializationLogic();
                configuration = initializationLogic.loadConfig();
                if (!!configuration.isValid) return [3 /*break*/, 2];
                return [4 /*yield*/, initialization_questions_1.initializationQuestion()];
            case 1:
                _a = _b.sent(), user_name = _a.user_name, user_password = _a.user_password, user_email = _a.user_email;
                configuration = initialization_logic_1.create({ name: user_name, password: user_password, email: user_email });
                initializationLogic.saveConfig(configuration);
                _b.label = 2;
            case 2: return [4 /*yield*/, route_question_1.routeQuestion()];
            case 3:
                routeAnswer = _b.sent();
                return [4 /*yield*/, routeTable[routeAnswer.action]()];
            case 4:
                answer = _b.sent();
                jenkinsClient = new jenkins_api_1.JenkinsClient({
                    token: 'yTUC8kMSej3zjFr7C7S2cvIfocVHixjc',
                    user: configuration.name,
                    password: configuration.password,
                    host: process.env.JENKINS_HOST,
                });
                jenkinsClient.logger = new logger_util_1.Logger();
                jenkinsClient.run(answer, function (message) {
                    console.log(message);
                });
                return [2 /*return*/];
        }
    });
}); };
main();
