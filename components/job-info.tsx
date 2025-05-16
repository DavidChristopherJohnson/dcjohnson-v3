import { IJobInfo } from "@/interfaces/job-info.interface";
import formatDate from "@/utils/format-date";
import JobSection from "./job-section";
import PillList from "./pill-list";

export default function JobInfo(info: IJobInfo) {
    return (
        <div className="space-y-6">
            {info.objectives && info.objectives.length > 0 && (
                <JobSection title="Responsibilities" items={info.objectives} />
            )}
            
            {info.achievements && info.achievements.length > 0 && (
                <JobSection title="Key Achievements" items={info.achievements} />
            )}
            
            {info.reasonForLeaving && info.reasonForLeaving.length > 0 && (
                <JobSection title="Reason For Leaving" items={info.reasonForLeaving} />
            )}
            
            {info.skills && info.skills.length > 0 && (
                <PillList title="Skills" values={info.skills} />
            )}
        </div>
    );
}