"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouteChoiceValue;
(function (RouteChoiceValue) {
    RouteChoiceValue["FULL_CYCLE_WITH_AUTO"] = "full-cycle-automation";
    RouteChoiceValue["FULL_CYCLE_NO_AUTO"] = "full-cycle-no-automation";
})(RouteChoiceValue = exports.RouteChoiceValue || (exports.RouteChoiceValue = {}));
var UniversalChoiceValue;
(function (UniversalChoiceValue) {
    UniversalChoiceValue["ALL"] = "ALL";
    UniversalChoiceValue["LICENSE"] = "LICENSE";
    UniversalChoiceValue["CONTRIBUTING"] = "CONTRIBUTING";
    UniversalChoiceValue["CODE_OF_CONDUCT"] = "CODE_OF_CONDUCT";
    UniversalChoiceValue["TODO"] = "TODO";
    UniversalChoiceValue["README"] = "README";
    UniversalChoiceValue["CHANGELOG"] = "CHANGELOG";
})(UniversalChoiceValue = exports.UniversalChoiceValue || (exports.UniversalChoiceValue = {}));
var GithubChoiceValue;
(function (GithubChoiceValue) {
    GithubChoiceValue["BUG_REPORT"] = "BUG_REPORT";
    GithubChoiceValue["FEATURE_REQUEST"] = "FEATURE_REQUEST";
    GithubChoiceValue["PULL_REQUEST"] = "PULL_REQUEST";
    GithubChoiceValue["SECURITY"] = "SECURITY";
})(GithubChoiceValue = exports.GithubChoiceValue || (exports.GithubChoiceValue = {}));
var GitlabChoiceValue;
(function (GitlabChoiceValue) {
    GitlabChoiceValue["BUG"] = "BUG";
    GitlabChoiceValue["CI"] = "CI";
    GitlabChoiceValue["FEATURE_PROPOSAL"] = "FEATURE_PROPOSAL";
    GitlabChoiceValue["MERGE_REQUEST"] = "MERGE_REQUEST";
})(GitlabChoiceValue = exports.GitlabChoiceValue || (exports.GitlabChoiceValue = {}));
var LicenseValue;
(function (LicenseValue) {
    LicenseValue["MIT"] = "MIT";
    LicenseValue["APACHE"] = "APACHE";
    LicenseValue["ISC"] = "ISC";
    LicenseValue["BSD2"] = "BSD2";
    LicenseValue["GPL3"] = "GPL3";
})(LicenseValue = exports.LicenseValue || (exports.LicenseValue = {}));
var ProviderValue;
(function (ProviderValue) {
    ProviderValue["GITHUB"] = "Github";
    ProviderValue["GITLAB"] = "Gitlab";
    ProviderValue["BITBUCKET"] = "Bitbucket";
})(ProviderValue = exports.ProviderValue || (exports.ProviderValue = {}));
