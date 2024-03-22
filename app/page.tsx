import Image from "next/image";
import Avatar from '@/assets/Avatar.jpg';

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
        </div>
        <div className="flex-grow-1 p-10 space-y-5">
          <div>
            <p>My name is David Christopher Johnson, and I am a {age} year old technologist, leader, mentor, husband and father. I currently live in Dewsbury, United Kingdom, with My Wife and 2 amazing kids</p>
          </div>
          <div className="space-y-5">
            <h2>Engineering Background</h2>
            <p>
              I started my journey in technology at an early age, taking the family computer to pieces and upgrading components while in high school. It was at this point I knew I wanted to go into the technology industry. From here I went to attend colleage at Wakefield A.C. in West Yorkshire, United Kingdom, where I attained an AVCE in ICT. It is at this tender age that I was first introduced to computer programming in the form of VB6.
            </p>
            <p>
              This spurred me on to look at other programming languages, such as playing about with YABASIC to create a 4 player game of Pong on my PlayStation 2.
            </p>
            <p>
              After College I attended the University of Bradford undertaking a degree in Cybernetics and Virtual Worlds, which involved subjects such as robotics, scientific programming, cybernetics, structured programming, AI and Modelling & Simulation. During my degree I undertook a year in industry as my 3rd year, at Minnie Business Systems, based in London. Here I was exposed to more programming languages,
              such as c# and COBOL, while also gaining experience in network administraion, being askled to set up exchange servers, and source control (Team Foundation Server) implementations.
            </p>
            <p>
              The outcome of university was to graduate with a BSc 2:1 Hons.
            </p>
            <p>
              After graduation I started my first permenant Software Engineering role at Concorde Infomatics (the team Iw as on was later sold to Northgate Public Services) on CARM (Computer Aided Reasource Management). I spent 7 years in this role, working my way up to principal engineer, in addition to being the database and network administrator. This role comprised of creating resource management software for police forces in the UK.
            </p>
            <p>
              After a number of years here I moved to KeyedIn solutions, where I started as a senior engineer, and left as a technical lead, which included hands on coding and line manager responsibilities. I spent a number of years here, working on their SaaS offtering for PPM and PSA product. Eventually I decided to move on from KeyedIn due to not wanting to be pidgeon holed in the industry as only a .Net engineer.
            </p>
            <p>
              At this point I moved onto AND Digital where I tool a step down in role to be a senior engineer. Here I worked on a number of clients including, Lloyds Banking Group, StepChange Debt Charity and Covea Insurance. In addition to client side work I was also heavily involved in teach / mentoring more junior engineers, including providing technical and career guidance.
            </p>
            <p>
              Eventually after providing that I could adapt to different programming languages (after all programming ins a set of patterns, practises and principles), I wanted tpo reprise my role as a leader. Unfortunatley the opportunity was not available at the time at AND digital, so I made the move to TruePill.
            </p>
            <p>
              At TruePill I was the team leader of a team working on the Mark Cuban Cost Plus Drugs company project. There was a spell here where due to requirement, I spend a few months working as team leader for 2 teams (including line manager responsibilities), technical architect and engineering manager (until dedicated people were hired). I really enjoyed my time at TruePill, but unfortunately when the bubble happened in Silicon Valley, the company started to loose confidence in being able to secure funding and as a result, cuts were starting to be made. I decided at this point to move onto another role.
            </p>
            <p>
              My next role was working at Flipdish as an Engineering Manager, looking after the Web and Mobile teams of their flagship products. These teams represented 80% of the companies revenue. Here I was able to further demonstrate and refine my leadership and approach to line manager, under the guidance of Craig Wayman (the then Director of Engineering). Eventuall Flipdish started to struggle with similar financial difficulties, so I decided that the time was to move on to somewhere more stable for a time.
            </p>
            <p>
              At this point I moved to HeliosX. Here I was the engineering manager for the engineer team on the companies flagship products (ZipHealth., MedExpress and RocketRx). Shortly after starting here, I had to pivot to also take on product manager responsibilities, due to a round of redundancies. While doing both roles, I was able to re-prioritise the work the engineers were working on, so that we had a nice mix of delivering measurable value (in revenue) and paying down technical debt. During my brief spell here I was able to increase montly recurring revenue significantly. I decided to leave HeliosX after a very short time due to the financial state of the company, which I was originally told was profitable, but it transpires it was not.
            </p>
            <p>
              My latest role was at Blexr, which has been the best role I have had for a number of years. Here I was the engineering manager for the CasinoReviews.com team, in addition to eventually branching out to also running the Bonuses.com team. When I left the company due to redundancy I was one of the biggest line managers in the company, with 10 direct reports across multiple technologies
            </p>
          </div>
          <div className="space-y-5">
            <h2>Personal Life</h2>
            <p>
              I am a life long technical enthusiast and actually write source code for fun (I know I&apos;m twisted). However outside of technology I do have other interests.
            </p>           
            <p>
              I am a devoute supporter of the greatest football team of all time, Barnsley FC (It&apos;s just like watching Brazil.....or was that Ryhill.....I can never remember). I am a season ticket holder, and go along to the matches with my brother, my wife and my 2 kids.
            </p>
            <p>
              One of the main hobbies is gaming (both board and computer). I have a collection of over 200 board games, which we play with friends in the evenings, or at the Wakefield Board Gaming Group&apos;s weekly meet up (funnily enough in castleford). I also attend the Airecon board gaming convention every year.
            </p>
            <p> 
              In terms of computer games, I am a PlayStation 5 fan, with my favourite games being RPG. (The best one is Final Fantasy 7 in my book). I do also play some other games like Call of Duty and FIFA/Football FC.
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
