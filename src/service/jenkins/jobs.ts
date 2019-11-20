const jenkinsUrl = process.env.JENKINS_HOST
export const supported_jobs = {
    deploy: {
        stage: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                both: {
                    name: 'controller-deploy-staging',
                    params: {'buildNumber': '', 'envName': ''}
                }
            },
            adunit: {
                both: {
                    name: 'adunit-deploy-staging',
                    params: {
                        'envName': "",
                        'branchName': ""
                    }
                }
            }
        },
        prod: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                both: {
                    name: 'controller-staging-users-bucket',
                    params: {'buildNumber': '', 'envName': ''}
                }
            },
            adunit: {
                both: {
                    name: 'adunit-staging-users-bucket',
                    params: {'buildNumber': '', 'envName': ''}
                }
            }
        }
    },
    build: {
        prod: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                both: {
                    name: 'controller-build',
                    params: {
                        'branchName': ""
                    }
                }
            },
            adunit: {
                both: {
                    name: 'adunit-build',
                    params: {
                        'branchName': ""
                    }
                }
            }
        }
    },

    auto: {
        prod: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                android: {
                    name: 'Android-Users-Automation-Production',
                    params: {
                        CONTROLLER_ENV: "",
                        CONTROLLER_VERSION: "",
                        CONTROLLER_BUILD_NUMBER: "",
                        AD_UNIT_VERSION: "",
                        AD_UNIT_BUILD_NUMBER: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                },
                ios: {
                    name: 'IOS-Users-Automation-Production',
                    params: {
                        CONTROLLER_ENV: "",
                        CONTROLLER_VERSION: "",
                        CONTROLLER_BUILD_NUMBER: "",
                        AD_UNIT_VERSION: "",
                        AD_UNIT_BUILD_NUMBER: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                }
            }
        },
        staging: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                android: {
                    name: 'Android-Users-Automation-Staging',
                    params: {
                        CONTROLLER_ENV: "",
                        CONTROLLER_VERSION: "",
                        CONTROLLER_BUILD_NUMBER: "",
                        AD_UNIT_VERSION: "",
                        AD_UNIT_BUILD_NUMBER: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                },
                ios: {
                    name: 'IOS-Users-Automation-Staging',
                    params: {
                        CONTROLLER_ENV: "",
                        CONTROLLER_VERSION: "",
                        CONTROLLER_BUILD_NUMBER: "",
                        AD_UNIT_VERSION: "",
                        AD_UNIT_BUILD_NUMBER: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                }
            }
        },
        develop: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                android: {
                    name: 'Android-Users-Automation-Develop',
                    params: {
                        CONTROLLER_ENV: "",
                        CONTROLLER_VERSION: "",
                        CONTROLLER_BUILD_NUMBER: "",
                        AD_UNIT_VERSION: "",
                        AD_UNIT_BUILD_NUMBER: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                },
                ios: {
                    name: 'IOS-Users-Automation-Develop',
                    params: {
                        CONTROLLER_ENV: "",
                        CONTROLLER_VERSION: "",
                        CONTROLLER_BUILD_NUMBER: "",
                        AD_UNIT_VERSION: "",
                        AD_UNIT_BUILD_NUMBER: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                }
            }
        },
    },
    //sophi nightly dev13 3.0.26 685 2.2.2 UNION Critical_Regression
    nightly: {
        prod: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                both: {
                    name: 'Nightly-Automation-Runner',
                    params: {
                        CONTROLLER_ENV: "",
                        CONTROLLER_VERSION: "",
                        CONTROLLER_BUILD_NUMBER: "",
                        AD_UNIT_VERSION: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                }
            }
        }
    },
    fullcycle: {
        prod: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                both: {
                    name: 'Automation-Full-Cycle',
                    params: {
                        controllerBN: "",
                        controllerBranchName: "",
                        adunitBN: "",
                        branchNameAdUnit: "",
                        envName: "",
                        OS: "",
                        GROUPS_RELATION: "",
                        STF_DEVICE_VERSION: "",
                        Android_Automation_Env: "",
                        IOs_Automation_Env: "",
                        INCLUDE_GROUPS_SLACK: ""
                    }
                }
            }
        }
    },
    fullcycleNoAuto: {
        prod: {
            baseUrl: jenkinsUrl + "job/",
            controller: {
                both: {
                    name: 'Full-Cycle-Without-Automation',
                    params: {
                        controllerBN: "",
                        controllerBranchName: "",
                        adunitBN: "",
                        branchNameAdUnit: "",
                        envName: ""
                    }
                }
            }
        }
    }

};
