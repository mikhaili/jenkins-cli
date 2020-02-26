export interface Answer {
    files: Object;
    userName: string;
    licenses: LicenseValue;
    provider: ProviderValue;
    overwrite: boolean;
}

export interface InitAnswer {
    user_name: string;
    user_password: string;
    user_email: string;
    jenkins_host: string;
}

export interface RouteAnswer {
    action: RouteChoiceValue;
}

export enum RouteChoiceValue {
    FULL_CYCLE_WITH_AUTO = 'full-cycle-automation',
    FULL_CYCLE_NO_AUTO = 'full-cycle-no-automation',
}

export interface Choice {
    name: string;
    value: UniversalChoiceValue |
        GithubChoiceValue |
        GitlabChoiceValue |
        LicenseValue |
        ProviderValue |
        RouteChoiceValue;
}

export enum UniversalChoiceValue {
    ALL = 'ALL',
    LICENSE = 'LICENSE',
    CONTRIBUTING = 'CONTRIBUTING',
    CODE_OF_CONDUCT = 'CODE_OF_CONDUCT',
    TODO = 'TODO',
    README = 'README',
    CHANGELOG = 'CHANGELOG',
}

export enum GithubChoiceValue {
    BUG_REPORT = 'BUG_REPORT',
    FEATURE_REQUEST = 'FEATURE_REQUEST',
    PULL_REQUEST = 'PULL_REQUEST',
    SECURITY = 'SECURITY',
}

export enum GitlabChoiceValue {
    BUG = 'BUG',
    CI = 'CI',
    FEATURE_PROPOSAL = 'FEATURE_PROPOSAL',
    MERGE_REQUEST = 'MERGE_REQUEST',
}

export enum LicenseValue {
    MIT = 'MIT',
    APACHE = 'APACHE',
    ISC = 'ISC',
    BSD2 = 'BSD2',
    GPL3 = 'GPL3',
}

export enum ProviderValue {
    GITHUB = 'Github',
    GITLAB = 'Gitlab',
    BITBUCKET = 'Bitbucket',
}
