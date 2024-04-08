import IArticle from "@/interfaces/article.interface";
import ProfilePic from "@/assets/Avatar.jpg";
import setDate from "@/utils/set-date";


const testArticle: IArticle = {
    uniqueId: 'profile-pic',
    title: "Test article",
    description: `Multi-line description
    some more text here`,
    url: 'http://dcjohnson.co.uk',
    image: {
        src: ProfilePic,
        alt: "Me sat in a red chair"
    },
    date: setDate('Apr 04 2024')
}

export default testArticle;