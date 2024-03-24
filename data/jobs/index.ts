import { BlexrJob } from "./blexr";
import { FlipdishJob } from "./flipdish";
import { HeliosXJob } from "./heliosx"
import IJob from "@/interfaces/job.interface";
import { TruepillJob } from "./truepill";
import { ANDJob } from "./and-digital";
import { KeyedInJob } from "./keyedin-solutions";
import { NorthgateJob } from "./northgate-infomatics";

const jobs: Array<IJob> = [
    BlexrJob,
    HeliosXJob,
    FlipdishJob,
    TruepillJob,
    ANDJob,
    KeyedInJob,
    NorthgateJob
]

export default jobs;