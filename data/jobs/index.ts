import { BlexrJob } from "./blexr";
import { FlipdishJob } from "./flipdish";
import { HeliosXJob } from "./heliosx"
import IJob from "@/interfaces/job.interface";
import { TruepillJob } from "./truepill";

const jobs: Array<IJob> = [
    BlexrJob,
    HeliosXJob,
    FlipdishJob,
    TruepillJob
]

export default jobs;