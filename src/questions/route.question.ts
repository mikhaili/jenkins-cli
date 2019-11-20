import inquirer from 'inquirer';

import {Choice, RouteAnswer, RouteChoiceValue} from '../models/choice';

export async function routeQuestion(): Promise<RouteAnswer> {
    const listOfFiles: Choice[] = [
        {name: 'full cycle with automation', value: RouteChoiceValue.FULL_CYCLE_WITH_AUTO},
        {name: 'full cycle no automation', value: RouteChoiceValue.FULL_CYCLE_NO_AUTO},
    ];

    return inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: 'Which Jenkins job do you want to run?',
        choices: listOfFiles
    }]);
}
