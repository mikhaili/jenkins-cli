import {initializationQuestion} from "./questions/initialization.questions";
import {create, InitConfiguration, InitializationLogic} from "./logic/initialization.logic";
import {routeQuestion} from "./questions/route.question";
import {RouteChoiceValue} from "./models/choice";

import {JenkinsClient} from './service/jenkins/jenkins-api';
import {fullCycleNoAuto, fullCycleWithAuto} from './jobs'
import {Logger} from "./utils/logger.util";

const routeTable: Record<RouteChoiceValue, Function> = {
    'full-cycle-automation': fullCycleWithAuto,
    'full-cycle-no-automation': fullCycleNoAuto
};

const main = async () => {
    const initializationLogic = new InitializationLogic();
    let configuration: InitConfiguration = initializationLogic.loadConfig();
    if (!configuration.isValid) {
        const {user_name, user_password, user_email} = await initializationQuestion();
        configuration = create({name: user_name, password: user_password, email: user_email});
        initializationLogic.saveConfig(configuration)
    }

    let routeAnswer = await routeQuestion();
    let answer = await routeTable[routeAnswer.action]();

    const jenkinsClient = new JenkinsClient({
        token: 'yTUC8kMSej3zjFr7C7S2cvIfocVHixjc',
        user: configuration.name!!,
        password: configuration.password!!,
        host: process.env.JENKINS_HOST!!,
    });
    jenkinsClient.logger = new Logger();
    jenkinsClient.run(answer, (message: string) => {
        console.log(message);
    });
};

main();
