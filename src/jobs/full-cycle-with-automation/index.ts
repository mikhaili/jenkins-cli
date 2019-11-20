import {paramsQuestion} from './params.question';
import {jobParams} from "./configuration.job";

export async function proceed() {
    const answer = await paramsQuestion();

    const jobConfig = jobParams;
    jobConfig.params = {...jobConfig.params, ...answer};

    return jobConfig;
}
