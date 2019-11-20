// curl -X POST http://jenkins../job/{job-name}/buildWithParameters \
//     --user user:password \
//   --data token={token} \
//    --data-urlencode json='{"parameter": [{{"name":"branch_name", "value":"develop"}}, {"name":"dev_name", "value":"dev1"}]}'

import {Response} from "request";
import {Logger} from "../../utils/logger.util";

let request = require('request');
const queryString = require('query-string');

export interface JenkinsConfig {
    user: string,
    password: string,
    token: string
    host: string
}

export class JenkinsClient {
    private readonly _user: string;
    private readonly _password: string;
    private readonly _token: string;
    private readonly _jenkinsHost?: string;
    private _logger?: Logger;

    set logger(logger: Logger) {
        this._logger = logger
    }

    get logger(): Logger {
        return this._logger!!;
    }

    constructor(configuration: JenkinsConfig) {
        this._token = configuration.token;
        this._user = configuration.user;
        this._password = configuration.password;
        this._jenkinsHost = configuration.host;
    }

    public run(jobConfiguration: any, callback: Function): void {
        console.log("job: " + JSON.stringify(jobConfiguration));

        if (jobConfiguration.params === undefined) {
            return callback(`No params ${jobConfiguration.action} ${jobConfiguration.product}`);
        }
        const qString = queryString.stringify(jobConfiguration.params);
        let url = `${this._jenkinsHost}/${jobConfiguration.baseUrl}${jobConfiguration.name}/buildWithParameters?${qString}`;

        console.log('jenkins | run | url | ' + url);

        let options = {
            url: url,
            method: 'POST',
            body: `token=${this._token}`,
            auth: {
                'user': this._user,
                'pass': this._password
            }
        };

        request(options, (error: any, response: Response, body: any) => {
            if (error) return callback(error);

            if (response.statusCode > 300) return callback('Expected status 200 but got ' + response.statusCode);

            return callback(null, "Working on it");
        });
    };

}


