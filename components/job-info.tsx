import { IJobInfo } from "@/interfaces/job-info.interface";
import formatDate from "@/utils/format-date";
import JobSection from "./job-section";

export default function JobInfo(info: IJobInfo) {
    return  <div>
        <JobSection title="Objectives" items={info.objectives} />
        <JobSection title="Achievements" items={info.achievements} />
        <JobSection title="Reason(s) For Leaving" items={info.reasonForLeaving} />
        <JobSection title="Skills" items={info.skills} />
    </div>
}