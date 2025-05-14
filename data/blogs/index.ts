import IBlog from "@/interfaces/blog.interface";
import sampleBlog from "./sample-blog";
import tailwindBlog from "./tailwind-blog";
import reactHooksBlog from "./react-hooks";
import mvpGuideBlog from "./mvp-guide";
import scalingTeamBlog from "./scaling-engineering-team";
import technicalDueDiligenceBlog from "./technical-due-diligence";

// Create array and sort by date (newest first)
const blogs = [
    sampleBlog,
    tailwindBlog,
    reactHooksBlog,
    mvpGuideBlog,
    scalingTeamBlog,
    technicalDueDiligenceBlog
].sort((a, b) => b.date.getTime() - a.date.getTime());

export default blogs; 