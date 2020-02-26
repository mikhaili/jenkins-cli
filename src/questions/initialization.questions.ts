import {InitAnswer} from '../models/choice';
import inquirer from "inquirer";

export async function initializationQuestion(): Promise<InitAnswer> {
    const validate = (title: string) => {
        return (val: string) => {
            if (val.length < 1) {
                return `Please provide ${title}`;
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
        }, {
            type: 'input',
            name: 'jenkins_host',
            message: "What's your jenkins host name http://jenkins-ip:port",
            validate: validate('jenkins host')
        }];

    return inquirer.prompt(question);
}
