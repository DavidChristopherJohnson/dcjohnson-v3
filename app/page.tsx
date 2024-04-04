import Image from "next/image";
import Avatar from '@/assets/Avatar.jpg';
import Pill from "@/components/pill";
import Link from "next/link";
import CvDownloadButton from "@/components/cv-download-button";

const dobYear = 1985;
const dobMonth = 4;
const dobDay = 11;

const today = new Date();
let age = today.getFullYear() - dobYear;

if (today.getMonth() < dobMonth || (today.getMonth() === dobMonth && today.getDate() < dobDay)) {
  age--;
}

export default function Home() {
  return (
    <>
      <h1>About Me</h1>
      <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-col" >
        <div className="sm:min-w-80  max-sm:max-w-60 max-sm:self-center">
          <Image src={Avatar} alt="David Johnson sat in a red chair looking at the camera" />
          <Link href='/cv' className="text-center"><Pill text="View CV"/></Link>
          <CvDownloadButton />
        </div>
        <div className="flex-grow-1 p-10 space-y-5">
          <div>
            <p>My name is David Christopher Johnson. I am a {age}-year-old technologist, leader, mentor, husband and father. I currently live in Dewsbury, United Kingdom, with my wife and two amazing kids</p>
          </div>
          <div className="space-y-5">
            <h2>Life Long Goal</h2>
            <p>
              My number one goal in life is to one day own my own business that generates enough profits so that I can use the money to do some good in the world. By sharing the wealth I want to give people opportunities where they would normally have none, rebalance the gender pay gap within the industry, 
              as well as contribute to larger issues such as the environment, world hunger, homelessness, etc.
            </p>                       
            <p>
              It would also be nice to be rich and to semi-retire early at the age of 50. It was originally my aim to retire at 40 but I&apos;m a bit too close to that now.
            </p>
          </div>
          <div className="space-y-5">
            <h2>Engineering Background</h2>
            <p>
              I started my journey in technology at an early age, taking the family computer to pieces and upgrading components while in high school. It was at this point I knew I wanted to go into technology in some form. 
              From here I attended Wakefield A. C. where I attained an AVCE in ICT. Whilst here I was first introduced to, and fell in love with, computer programming. This came in the form of Visual Basic 6.
            </p>
            <p>
              This spurred me on to look at other programming languages, such as YABASIC which I used to create a four-player game of Pong on my PlayStation 2.
            </p>
            <p>
              After college, I attended the University of Bradford undertaking a degree in Cybernetics and Virtual Worlds. This involved subjects such as robotics, scientific programming, cybernetics, structured programming, 
              AI and Modelling & Simulation. During my degree, I spent my 3rd year working in the industry at Minnie Business Systems, based in London. Here I was exposed to more programming languages,
              such as C# and COBOL, while also gaining experience in network administration, setting up exchange servers and source control (Team Foundation Server) server implementations. I graduated from university in 2009 with a BSc with Hons.
            </p>
            <p>
              After graduation, I started my first permanent Software Engineering role at Concorde Infomatics (the team I was on was later sold to Northgate Public Services) on CARM (Computer Aided Resource Management). 
              I spent 7 years in this role, working my way up to principal engineer, in addition to being the defacto database and network administrator. This role comprised of creating resource management software for police forces in the UK. 
              Initially, this was in VB.NET restricted to 32-bit architecture. When I left I had led initiatives to evolve this into a service-orientated architecture built in C#, suitable for running on 64-bit architectures, resolving massive issues with resource availability. 
              This software was used by some of the biggest police forces in the UK.
            </p>
            <p>
              After several years here I moved to KeyedIn Solutions, where I took a role as Senior Software Engineer, and left as a Technical Lead (which included hands-on coding and line manager responsibilities). 
              Here, I worked on a SaaS offering for Project Portfolio Management (PPM) and Professional Services Automation (PSA) product. Eventually, I decided to move on from KeyedIn as I wanted to exhibit my diversity as a software engineer, 
              and not get &quot;typecast&quot; as only being able to work in .Net.
            </p>
            <p>
              To show my diversity of skills, I joined AND Digital where I took a step down in my role to become a Senior Software Engineer again. Here I worked on several clients including, Lloyds Banking Group, StepChange Debt Charity and Covea Insurance. 
              In addition to client work, I was also heavily involved in teaching/mentoring junior engineers and providing technical and career guidance.
            </p>
            <p>
              Eventually, after proving that I could adapt to different programming languages, I wanted to reprise my role as a leader. Unfortunately, the opportunity was not available at that time with AND Digital, so I decided to take a role at TruePill.
            </p>
            <p>
              At TruePill I was the team leader of 5 engineers, on the Mark Cuban Cost Plus Drugs company project. There was a spell here where due to requirement (i.e. lack of personnel), 
              I spent a few months working as team leader for two teams (including line manager responsibilities), technical architect and engineering manager, until dedicated people were hired. 
              I enjoyed my time at TruePill, but unfortunately, when the bubble happened in Silicon Valley, the company started to lose confidence in being able to secure funding and as a result, budget cuts and redundancies were being made. I decided at this point to move on to another role.
            </p>
            <p>
              My next role was working at Flipdish as an Engineering Manager, looking after the Web, Mobile iOS and Mobile Android teams of their flagship products. These teams represented 80% of the company&apos;s revenue. 
              Here I was able to further demonstrate and refine my leadership and line management approaches, under the guidance of Craig Wayman (the then Director of Engineering). Eventually, Flipdish started to struggle with similar financial difficulties, 
              so I decided that the time was to move on to somewhere more stable for a time.
            </p>
            <p>
              At this point, I moved to HeliosX. I spent a brief spell here as Engineering Manager on the company&apos;s flagship products (ZipHealth., MedExpress and RocketRx). Shortly after starting here, I had to pivot to also take on product manager responsibilities, 
              due to a round of redundancies. While doing both roles, I was able to re-prioritise the work the engineers were working on, so that we had a nice mix of delivering measurable value (in revenue) and paying down technical debt. 
              During my brief spell here I was able to increase monthly recurring revenue significantly. I decided to leave HeliosX after a very short time due to the financial state of the company which introduced redundancies shortly after I started.
            </p>
            <p>
              My latest role was at Blexr, which has been the best role I have had for many years. Here I was the Engineering Manager for the CasinoReviews.com team, in addition to eventually branching out to take on the Bonuses.com team. 
              Over the nine months at Blexr, I have seen a huge amount of growth in myself, thanks largely to my line manager (and VP of Engineering) Jarrad Kabral. When I left the company due to redundancy I was one of the biggest line managers in the company, 
              with 10 direct reports across multiple teams and technologies
            </p>
          </div>
          <div className="space-y-5">
            <h2>Personal Life</h2>
            <p>
              First and foremost I am a father of two amazing kids (my son who&apos;s 4 and my daughter who is 3), and husband to one amazing wife (I don&apos;t think I could handle more). They are what drive me forward in both my career and in life. We all live happily in our home in Dewsbury, 
              UK, with occasional jaunts to the east coast of England, where we love to spend our time.
            </p>         
            <p>
              I am a life-long technical enthusiast and write source code for fun (I know I&apos;m twisted). However, outside of technology, I do have other interests.
            </p>           
            <p>
              I am a devout supporter of the greatest football team of all time, Barnsley FC (It&apos;s just like watching Brazil.....or was that Ryhill.....I can never remember). I am a season ticket holder and go along to the matches with my brother, my wife and my two kids (who take great joy in shouting &quot;YOU REDS&quot;).
            </p>
            <p>
              One of my main hobbies is gaming (both board and computer). I have a collection of over 200 board games, which my wife and I play with friends in the evenings, 
              or at the <a className='underline font-bold hover:bg-gray-300' href='https://www.facebook.com/groups/wakefieldboardgamegroup' rel='nofollow no-referrer'>Wakefield Board Gaming Group&apos;s</a> weekly meet-up 
              (funnily enough, hosted in Castleford...there is a story here). I also attend the Airecon board gaming convention every year in Harrogate; Not to mention the new local board gaming convention <b>TessaCon</b> which is hosted by the Wakefield gaming group.
            </p>
            <p> 
              In terms of computer games, I am a PlayStation 5 fan, with my favourite genre being RPG. My favourite of which is Final Fantasy 7. I also play other games occasionally, such as Call of Duty and FIFA/Football FC (which I am sad to say I have bought what seems to be the same game for the last 15 years).
            </p>
            <p>
              I am also a big reader of both fiction books and professional books. My favourite author is Terry Pratchett, however, I am currently very invested in the forgotten realms, Legend of Drizzt books.
            </p>
            <p>
              I am an animal lover and have two cats and (almost) two rabbits (one of the rabbits is sadly missing a foot).
            </p>
          </div>
        </div>
      </div >
    </>
  );
}
