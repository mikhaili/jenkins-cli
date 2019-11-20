import inquirer from 'inquirer';

import {Answer} from '../../models/choice';

export async function paramsQuestion(): Promise<Answer> {
    const listOfQuestions = [
        {
            type: 'input',
            name: 'controllerBN',
            message: 'Controller build number',
            default: () => {
                return -1
            },
            validate: function(value: any) {
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
            default: () => {
                return -1
            },
            validate: function(value: any) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
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
            validate: function (val: any) {
                if (val.length < 1) {
                    return 'You must choose environment devN or qaN';
                }

                return true;
            }
        }
    ];

    return inquirer.prompt(listOfQuestions);
}
