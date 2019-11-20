"use strict";
// curl -X POST http://jenkins../job/{job-name}/buildWithParameters \
//     --user user:password \
//   --data token={token} \
//    --data-urlencode json='{"parameter": [{{"name":"branch_name", "value":"develop"}}, {"name":"dev_name", "value":"dev1"}]}'
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('request');
var queryString = require('query-string');
var JenkinsClient = /** @class */ (function () {
    function JenkinsClient(configuration) {
        this._token = configuration.token;
        this._user = configuration.user;
        this._password = configuration.password;
        this._jenkinsHost = configuration.host;
    }
    Object.defineProperty(JenkinsClient.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        set: function (logger) {
            this._logger = logger;
        },
        enumerable: true,
        configurable: true
    });
    JenkinsClient.prototype.run = function (jobConfiguration, callback) {
        console.log("job: " + JSON.stringify(jobConfiguration));
        if (jobConfiguration.params === undefined) {
            return callback("No params " + jobConfiguration.action + " " + jobConfiguration.product);
        }
        var qString = queryString.stringify(jobConfiguration.params);
        var url = this._jenkinsHost + "/" + jobConfiguration.baseUrl + jobConfiguration.name + "/buildWithParameters?" + qString;
        console.log('jenkins | run | url | ' + url);
        var options = {
            url: url,
            method: 'POST',
            body: "token=" + this._token,
            auth: {
                'user': this._user,
                'pass': this._password
            }
        };
        request(options, function (error, response, body) {
            if (error)
                return callback(error);
            if (response.statusCode > 300)
                return callback('Expected status 200 but got ' + response.statusCode);
            return callback(null, "Working on it");
        });
    };
    ;
    return JenkinsClient;
}());
exports.JenkinsClient = JenkinsClient;
