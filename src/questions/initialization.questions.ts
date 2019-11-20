import inquirer from 'inquirer';

import {InitAnswer} from '../models/choice';

export async function initializationQuestion(): Promise<InitAnswer> {
    const validate = (title: string) => {
        return (val: string) => {
            if (val.length < 1) {
                return 'You must provide user name';
            }

            return true;
        }
    };
    const question = [
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
        }];

    return inquirer.prompt(question);
}
