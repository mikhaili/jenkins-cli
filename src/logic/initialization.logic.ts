import {Dao} from "../utils/dao.utils";

export declare interface InitConfiguration {
    readonly name?: string,
    readonly password?: string
    readonly jenkins_host?: string
    readonly isValid: boolean
    readonly email?: string
}

const isValidData = (name: string, password: string, jenkins_host: string): boolean => {
    return (name.length > 0 && password.length > 0 && jenkins_host.length > 0)
}

export function create({name, password, email, jenkins_host}: { name: string, password: string, email: string, jenkins_host: string }): InitConfiguration {
    return {
        isValid: isValidData(name, password, jenkins_host),
        password: password,
        name: password,
        email: email,
        jenkins_host: jenkins_host
    }
}

export class InitializationLogic {
    private readonly FILE_NAME = './.config.json';
    private readonly _dao: Dao;

    constructor() {
        this._dao = new Dao({fileName: this.FILE_NAME})
    }

    public loadConfig(): InitConfiguration {
        const data = this._dao.loadData();
        if (!data) {
            return create({name: "", password: "", email: "", jenkins_host: ""});
        }
        return JSON.parse(Buffer.from(data, 'base64').toString('utf-8'));
    }

    public saveConfig(config: InitConfiguration) {
        this._dao.saveData(Buffer.from((JSON.stringify(config))).toString('base64'))
    }
}
