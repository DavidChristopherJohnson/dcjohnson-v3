import Image from "next/image";
import Avatar from '@/assets/Avatar.jpg';
import Pill from "@/components/pill";
import Link from "next/link";

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
          <Link href='/cv' className="text-center"><Pill text="Click here for my CV"/></Link>
        </div>
        <div className="flex-grow-1 p-10 space-y-5">
          <div>
            <p>My name is David Christopher Johnson, and I am a {age} year old technologist, leader, mentor, husband and father. I currently live in Dewsbury, United Kingdom, with my wife and two amazing kids</p>
          </div>
          <div className="space-y-5">
            <h2>Life Long Goal</h2>
            <p>
              My number one goal in life is to one day own my own business that generates enough profits so that I can use the money to do some good in the world. By sharing the wealth I want to give people opportunities where they would normally none, rebalance the gender pay gap within the industry, as well as contribute to larger issues such as the environment, world hunger, homelessness, etc.
            </p>                       
            <p>
              It would also be nice to be rich and semi-retire early at say 50 years old (used to be at 40 but I&quot;m a bit too close to that now), with my only goal to help people.
            </p>
          </div>
          <div className="space-y-5">
            <h2>Engineering Background</h2>
            <p>
              I started my journey in technology at an early age, taking the family computer to pieces and upgrading components while in high school. It was at this point I knew I wanted to go into technology in some form. From here I attended at Wakefield Aceademic College in West Yorkshire, United Kingdom, where I attained an AVCE in ICT. It is at this tender age that I was first introduced to computer programming in the form of Visual Basic 6.
            </p>
            <p>
              This spurred me on to look at other programming languages, such as YABASIC which I used to create a four player game of Pong on my PlayStation 2.
            </p>
            <p>
              After college I attended the University of Bradford undertaking a degree in Cybernetics and Virtual Worlds. This involved subjects such as robotics, scientific programming, cybernetics, structured programming, AI and Modelling & Simulation. During my degree I spent my 3rd year working in the industry at Minnie Business Systems, based in London. Here I was exposed to more programming languages,
              such as C# and COBOL, while also gaining experience in network administraion, setting up exchange servers and source control (Team Foundation Server) server implementations.
            </p>
            <p>
              I graduated from university in 2009 with a BSc with Hons.
            </p>
            <p>
              After graduation I started my first permenant Software Engineering role at Concorde Infomatics (the team I as on was later sold to Northgate Public Services) on CARM (Computer Aided Reasource Management). I spent 7 years in this role, working my way up to principal engineer, in addition to being the defacto database and network administrator. This role comprised of creating resource management software for police forces in the UK. Initially this was in VB.NET restricted to 32bit architecture. When I left I had led initiatives to evolve this into a service orientated architecture built in C#, suitable for running on 64 bit architectures, resolving massive issues with resource availability. This software was used by soem of the biggest police forces in the UK.
            </p>
            <p>
              After a number of years here I moved to KeyedIn Solutions, where I took a role as Senior Software Engineer, and left as a Technical Lead (which included hands on coding and line manager responsibilities). I spent a number of years here, working on their SaaS offtering for Project Portfolio Management (PPM) and Professional Services Automation (PSA) product. Eventually I decided to move on from KeyedIn as I wanted to exhibit my diversity as a software engineer, and not get &quot;typecast&quot; as only being able to work in .Net.
            </p>
            <p>
              In order to show my diversity of skills, I joined AND Digital where I tool a step down in role to become a Senior Software Engineer again. Here I worked on a number of clients including, Lloyds Banking Group, StepChange Debt Charity and Covea Insurance. In addition to client side work I was also heavily involved in teach / mentoring junior engineers, including providing technical and career guidance.
            </p>
            <p>
              Eventually after proving that I could adapt to different programming languages (after all programming is a set of patterns, practises and principles; and not about knowing a lot of code by heart), I wanted to reprise my role as a leader. Unfortunatley the opportunity was not available at that time with AND digital, so I made the decision to take a role at TruePill.
            </p>
            <p>
              At TruePill I was the team leader of 5 engineers, on the Mark Cuban Cost Plus Drugs company project. There was a spell here where due to requirement (i.e. lack of personnel), I spent a few months working as team leader for two teams (including line manager responsibilities), technical architect and engineering manager (until dedicated people were hired). I really enjoyed my time at TruePill, but unfortunately when the bubble happened in Silicon Valley, the company started to loose confidence in being able to secure funding and as a result, cuts were starting to be made. I decided at this point to move onto another role.
            </p>
            <p>
              My next role was working at Flipdish as an Engineering Manager, looking after the Web, Mobile iOS and Mobile Android teams of their flagship products. These teams represented 80% of the companies revenue. Here I was able to further demonstrate and refine my leadership and line management approaches, under the guidance of Craig Wayman (the then Director of Engineering). Eventually Flipdish started to struggle with similar financial difficulties, so I decided that the time was to move on to somewhere more stable for a time.
            </p>
            <p>
              At this point I moved to HeliosX. I spent a brief spell here as Engineering Manager on the companies flagship products (ZipHealth., MedExpress and RocketRx). Shortly after starting here, I had to pivot to also take on product manager responsibilities, due to a round of redundancies. While doing both roles, I was able to re-prioritise the work the engineers were working on, so that we had a nice mix of delivering measurable value (in revenue) and paying down technical debt. During my brief spell here I was able to increase montly recurring revenue significantly. I decided to leave HeliosX after a very short time due to the financial state of the company which introduced redundancies shortly after I started.
            </p>
            <p>
              My latest role was at Blexr, which has been the best role I have had for a number of years. Here I was the Engineering Manager for the CasinoReviews.com team, in addition to eventually branching out to also running the Bonuses.com team. Over the nine months at Blexr, I have seen a huge amount of growth in myself, thanks by and large to my then line manager (and VP of Engineering) Jarrad Kabral. When I left the company due to redundancy I was one of the biggest line managers in the company, with 10 direct reports across multiple teams and technologies
            </p>
          </div>
          <div className="space-y-5">
            <h2>Personal Life</h2>
            <p>
              I am a life long technical enthusiast and actually write source code for fun (I know I&apos;m twisted). However outside of technology I do have other interests.
            </p>           
            <p>
              I am a devout supporter of the greatest football team of all time, Barnsley FC (It&apos;s just like watching Brazil.....or was that Ryhill.....I can never remember). I am a season ticket holder, and go along to the matches with my brother, my wife and my two kids (who relish in shouting &quot;YOU REDS&quot;).
            </p>
            <p>
              One of my main hobbies is gaming (both board and computer). I have a collection of over 200 board games, which my wife and I play with friends in the evenings, or at the <a className='underline font-bold' href='https://www.facebook.com/groups/wakefieldboardgamegroup' rel='nofollow noreferrer'>Wakefield Board Gaming Group&apos;s</a> weekly meet up (funnily enough hosted in castleford...there is a story here). I also attend the Airecon board gaming convention every year in harrogate; Not to mention to new local board gaming convention TessaCon which is hosted by the Wakefield gaming group.
            </p>
            <p> 
              In terms of computer games, I am a PlayStation 5 fan, with my favourite games being RPG. My favourite is Final Fantasy 7. I do also play some other games like Call of Duty and FIFA/Football FC (which I am sad to say I have bought what seems to be the same game for the last 15 years).
            </p>
            <p>
              I am an animal lover and at home we have 2 cats and almost 2 rabbits (one of the rabbits is sadly missing a foot).
            </p>
          </div>
        </div>
      </div >
    </>
  );
}
