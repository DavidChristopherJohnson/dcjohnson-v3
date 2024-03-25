import { IJobInfo } from "@/interfaces/job-info.interface";
import formatDate from "@/utils/format-date";
import JobSection from "./job-section";
import PillList from "./pill-list";

export default function JobInfo(info: IJobInfo) {
    return <div>
        <JobSection title="Responsibilities" items={info.objectives} />
        <JobSection title="Key Achievements" items={info.achievements} />
        <JobSection title="Reason For Leaving" items={info.reasonForLeaving} />
        <PillList title="Skills" values={info.skills} />
    </div>
}