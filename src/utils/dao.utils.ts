import {Stats} from "fs";
import {Logger} from "./logger.util";
import * as findConfig from "find-config"

const fs = require("fs");

export declare interface Configuration {
    readonly filename: string;
}

export class Dao {
    private readonly _fileName: string;
    private readonly _dir?: string;
    private _logger: Logger;

    constructor(props: {
        dir?: string;
        fileName: string
    }) {
        this._fileName = props.fileName;
        this._dir = props.dir;
        this._logger = new Logger();
        if (this._dir) {
            this.create(this._dir);
        }
    }

// Create directory if not exist (function)
    public create(path: string) {
        // check if dir exist
        fs.stat(path, (err: NodeJS.ErrnoException | null, stats: Stats) => {
            if (!stats.isDirectory()) {
                // if the given path is not a directory, create a directory
                fs.mkdirSync(path);
            }
        });
    };

    public saveData(data: string) {
        const path = this._fileName;
        // write to a new file named 2pac.txt
        fs.writeFile(path, data, (err: any) => {
            if (err) throw err;

//            this._logger.showSuccess('Config saved!');
        });
    }

    public loadData(): string | null {
        return findConfig.read(this._fileName);
    }
}
