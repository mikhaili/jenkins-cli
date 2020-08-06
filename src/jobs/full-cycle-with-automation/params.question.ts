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
            validate: function (value: any) {
                return !isNaN(parseFloat(value)) || 'Please enter a number';
            },
        },
        {
            type: 'input',
            name: 'controllerBranchName',
            message: 'Controller branch name',
            when: (answer: any) => {
                return answer.controllerBN === -1
            },

        },
        {
            type: 'input',
            name: 'adunitBN',
            message: 'Adunit build number',
            default: () => {
                return -1
            },
            validate: function (value: any) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            }
        },
        {
            type: 'input',
            name: 'branchNameAdUnit',
            message: 'Adunit branch name',
            when: (answer: any) => {
                return answer.adunitBN === -1
            },

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
