"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var logger_util_1 = require("./logger.util");
var findConfig = tslib_1.__importStar(require("find-config"));
var fs = require("fs");
var Dao = /** @class */ (function () {
    function Dao(props) {
        this._fileName = props.fileName;
        this._dir = props.dir;
        this._logger = new logger_util_1.Logger();
        if (this._dir) {
            this.create(this._dir);
        }
    }
    // Create directory if not exist (function)
    Dao.prototype.create = function (path) {
        // check if dir exist
        fs.stat(path, function (err, stats) {
            if (!stats.isDirectory()) {
                // if the given path is not a directory, create a directory
                fs.mkdirSync(path);
            }
        });
    };
    ;
    Dao.prototype.saveData = function (data) {
        var path = this._fileName;
        // write to a new file named 2pac.txt
        fs.writeFile(path, data, function (err) {
            // throws an error, you could also catch it here
            if (err)
                throw err;
            //            this._logger.showSuccess('Config saved!');
        });
    };
    Dao.prototype.loadData = function () {
        return findConfig.read(this._fileName);
    };
    return Dao;
}());
exports.Dao = Dao;
