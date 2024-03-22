import { BlexrJob } from "./blexr";
import { FlipdishJob } from "./flipdish";
import { HeliosXJob } from "./heliosx"
import IJob from "@/interfaces/job.interface";

const jobs: Array<IJob> = [
    BlexrJob,
    HeliosXJob,
    FlipdishJob
]

export default jobs;