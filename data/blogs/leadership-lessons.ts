import IBlog from "@/interfaces/blog.interface";
import setDate from "@/utils/set-date";
import { createBlogImage } from "@/utils/blog-image";

const leadershipLessonsBlog: IBlog = {
    uniqueId: 'leadership-lessons',
    title: "9 Lessons From a Decade in Engineering Leadership",
    description: "My Engineering Leadership Playbook: 9 Lessons from over 10 Years in the Trenches.",
    content: `# 9 Lessons From a Decade in Engineering Leadership

My Engineering Leadership Playbook: 9 Lessons from over 10 Years in the Trenches.

Some things you figure out by doing the job. Some you learn the hard way, after you've burned out a team, missed a deadline or hired someone who wasn't the right fit.

There's no playbook, but here are 9 lessons I keep coming back to.

## 1. Clear is kind. Ambiguous is dangerous
Saying "we'll try" might sound polite or flexible, but to a stakeholder it often reads as "this will be done." That can lead to mismatched expectations, missed deadlines and difficult conversations later on.

You need to be unambiguous about what can and can't be done. Be direct, even if it feels uncomfortable. It's better to say "we can't do that without dropping X" than to commit by implication.

I learned this the hard way on a project in the healthcare space. A deadline was shared early, before we'd locked down the scope. It felt like a win at the time. But the scope grew, expectations weren't reset and eventually, we had to renegotiate the timeline.

That project taught me the importance of managing the magic triangle of cost, time and quality. If a stakeholder wants to change one, something else has to give. Your job is to make that trade-off explicit, get buy-in and confirm what drops.

Don't assume the other side knows the cost of change. Spell it out. Confirm it.

## 2. One-to-ones are where the real work happens
Too often, 1:1s become status updates. You ask how someone's doing and they start telling you about progress on a ticket. I've had managers do the same, using the time to give me updates or talk about business priorities instead of focusing on me.

That's not what a 1:1 is for.

A good 1:1 is a personal interaction. It's time carved out for the individual. A space where feedback can be given safely, concerns can be raised and addressed, and actions can be agreed. It's where goals get set, not imposed. Built in collaboration, not handed down as a target.

Done properly, 1:1s build trust, improve morale and help people feel like they're in control of their own career.

There are a few rules I think both sides should follow, whether you're the manager or the report:

Be present. A former COO I worked with had a saying: no passengers. That means show up and contribute.
Don't get distracted. You can tell straight away when someone's half-focused, answering messages or working in another tab. It sends the wrong signal. That person's time matters. Respect it.
Make it a collaboration. This isn't a one-way meeting. Both sides should be engaged. Set goals together. Talk about development as a shared responsibility. Don't turn it into a tick-box exercise.
Follow through. Too many times I've seen people take actions during a 1:1, then never refer to them again. If you take notes, use them. Make them part of the next session.
Keep each other accountable. It's not just about doing your own actions. Hold the other person to theirs too.
Be genuinely interested. This is how you build stronger working relationships. I'll be honest, I have a hard time remembering faces and names. There's a funny story about me working with someone for a year and not recognising them the first time we met in person, but that's for another time.

That's what a good 1:1 should do. Not just check progress, but show people they matter.

## 3. You SOULDN'T be the smartest person in the room
Ego shows up everywhere in software.

You see it in CEOs who wrote the first version of the product and still think no one else can touch it. You see it in what I call the Old Guard, people who've been at the company a long time, who are protective of the codebase and resistant to change. And you see it in engineers who always think they have the best answer.

Sometimes this behaviour comes from insecurity. People are scared to admit they don't know something. They don't want to look inexperienced or unsure, so they act like they've got it all covered.

Personally, I try to keep ego out of my decisions and how I interact with people. I don't always get it right, but I've picked up a few ways to manage it day to day.

Know you don't know everything. Be open to being taught. I always say this, I'm a married man with two young kids. I don't have unlimited time or energy to keep up with every new tech trend. A graduate or junior dev might have an advantage there, and I'm fine with that. I can learn from them.
Be honest about what you don't know. If you're not strong in a certain area, ask for help. Or make time to learn. Either is fine, as long as you're not pretending.
Let go of ownership when it helps the team. Don't get precious about your ideas. If someone suggests a better approach, run with it. Challenge things constructively, but don't sulk if the team goes a different way.
Act with humility. Give credit to the team. Call out individual contributions. You don't need to claim the win to show leadership. Often, the opposite is true.

Ego gets in the way of growth. It blocks collaboration. And it usually says more about fear than skill.

If you're creating a high performing autonomous team, you SHOULDN'T need to be the smartest in the room. You just need to help the room work better together.

## 4. Servant leadership works, if you're not faking it
As a leader, I think your job is to do whatever you can to help the team succeed. Sometimes that means handling noise from stakeholders. Sometimes it means rolling up your sleeves. It's about figuring out what helps the team be as productive as they can be.

There are times where it's right to challenge the team or give people space to grow into leadership themselves. But that's not about sink or swim. You stay close. You guide.

I joined one team in the healthcare space that was getting a bad reputation for not delivering. The team's actual work was focused on re-architecting the product and clearing a ton of technical debt. They were doing a good job, but the results weren't visible to stakeholders.

I looked ahead at the pipeline and found a few quick wins we could deliver alongside the core work. Within a month, we'd added $4k in recurring revenue and growing, without shifting our focus.

The stakeholders were happy. The team's reputation improved. More importantly, the team felt confident again.

That's the point. Servant leadership isn't soft. It's about removing friction and helping people perform at their best.

## 5. Ownership Thrives on Trust
Ownership and trust go hand in hand. You can't expect people to take the lead if they don't trust the environment they're working in. And you can't build trust if you're not willing to give people real ownership.

It starts with knowing your team. That's what 1:1s are for — not to check up on tickets, but to understand the person. What do they want from their role? Where do they want to grow? You won't always have the answers, but you need to ask the questions.

I like the "Tour of Duty" model, popularised by LinkedIn founder Reid Hoffman. You agree together what someone wants to achieve during this stretch of time, and then you help create the opportunities to make that happen. That might mean leading a project, shaping part of the product, or stepping into more influence.

When someone takes ownership, you stay close. You guide. You give feedback. You don't micromanage, but you don't disappear either.

When I lead a team, I give ownership by default. I follow the leader-leader model from David Marquet's Turn the Ship Around. I don't want people coming to me asking for permission. I want them to come to me with, "This is what I intend to do."

That only works if there's trust. And trust doesn't come from big statements. It comes from consistency. From doing what you said you would. From being honest when something's hard or when you've made a mistake.

Ownership also includes accountability. That means having real conversations — the kind where you ask why something was done a certain way, or give feedback that might be uncomfortable to hear.

When used well, this kind of challenge is healthy. It shows you care. You'll find it in frameworks like Kim Scott's Radical Candour and The Five Dysfunctions of a Team.

But for any of it to work, people need to feel safe. Feedback only helps if it's coming from a place of trust, and if people know it won't be used against them later. That's how accountability becomes a growth tool, not a weapon.

You can't have real ownership without real trust.

That's how you get to the moment where someone says, "This is what I intend to do," instead of asking for permission.

And when you hear that, your job is simple: ask smart questions, offer support if needed, and get out of the way.

## 6. Your team is watching how you handle pressure
When things go wrong, the most important thing is not to panic. And just as important, don't throw the rule book out of the window.

You've built a process that helps your team deliver quality. Stick to it. You might need to tweak it later, but during a crisis is not the time to improvise wildly.

If there's an issue in production, start by understanding the impact. Talk to the product manager and the stakeholders. Work out how this bug or problem compares with the scheduled work. If it's more important, something else gets delayed. Make that trade-off explicit.

If it's a major incident, follow your incident procedure. Bring the right people together and work through it calmly. Follow the steps, assess the situation and focus on returning the system to a safe state.

After that, run a post mortem. Keep it blameless. Stick to facts. The goal isn't to point fingers, it's to learn and stop it happening again.

Throughout all of this, communication is key. Keep everyone in the loop. What went wrong, what the impact is or was, what we're doing about it and what changes we're making to avoid a repeat.

The team is watching how you react. Stay calm. Stick to process. Convey urgency without spreading panic.

It's the same with missed deadlines. You flag the risk early. Not days before, weeks or even months before, if you can. And you don't just raise the problem, you bring options. Can we descope? Can we push back? Can we split the work? Throwing more people at it rarely works, especially late in the game.

When pressure comes from above, meet it with empathy. Understand where it's coming from. Ask what the business needs. Lay out the real options. Don't make promises you can't keep.

Once you've agreed a way forward, be transparent with the team. Explain the situation and the trade-offs. Maybe it's about revenue. Maybe it's reputation. Whatever it is, let them be part of the solution. Keep the communication open and treat them like the professionals they are.

That's what people remember. Not what went wrong, but how you handled it.

## 7. Process Should Be a Tool, Not a Trap
You need a steady balance of process and pragmatism.

I've worked in places where the sign-off process for a change took longer than the change itself. One iGaming company I worked with had such a heavy approval chain that developers found themselves blocked on small, simple improvements. In the end, delivery slowed down, teams got frustrated and quality didn't actually improve. It just led to micromanagement, missed deadlines and pressure to go faster, while everything was stuck.

Perfect is the enemy of good. If you aim for perfection, you'll never ship. But if you agree on what good quality looks like, you can deliver, learn and improve.

On the other end of the spectrum, I worked for a unicorn in the hospitality space where there was no process at all. It was chaos. Everything was urgent. There were constant bugs, rushed features and last-minute pivots. Stakeholders were firefighting and the team spent more time reacting than building. Because leaders felt out of control, they injected themselves into the day-to-day work and micromanaged everything.

Both extremes had the same outcome:

Constant pressure
Teams that couldn't deliver properly
Low morale and high stress

The best advice I can give here is simple. Process should exist to help the team deliver better work. No process is chaos. Too much process is red tape. You have to find the sweet spot in the middle, and keep checking it still works.

Review it regularly. Don't just listen to devs or just to stakeholders. Make it a collaboration. Build process that actually helps people get work done.

That's how you deliver quality at a sustainable pace.

## 8. Tech debt's fine. Denial isn't
Tech debt is like a garden. Leave it untended, and it becomes harder to work in. You get weeds, dead patches and clutter that blocks out the useful parts. That's your messy code, outdated patterns, and old features no one touches anymore.

Tech debt happens. It's not a failure, it's a fact of life in any product. What matters is how you manage it, and whether your organisation makes room for it.

Most teams know they have tech debt. They know what needs pruning, refactoring or rebuilding. The problem is often above them.

I've worked on projects where delivery speed dropped and bugs kept creeping in. The team wasn't any less capable. The issue was trust. Engineers didn't feel safe to push for time to pay down the debt. The roadmap didn't include space for foundational work. Leaders kept asking why things were taking longer, while ignoring the root cause.

That's where engineering leadership has to step up. You need to make the case, clearly and consistently. Not just to your team, but also to your stakeholders.

That means saying things like:

"We can deliver this, but it will take longer if we don't address the debt behind it."
"This part of the system is brittle. Small changes here have high risk."
"We're seeing a rise in bugs and slower onboarding. This is technical debt in action."

You have to name it, explain the impact, and build it into your planning.

Here's how I do it:

Document your code. Make it readable, and include context. What it does, why it exists, how it fits into the system.
Write your tests. They're not just safety nets, they're also communication. They show others that you've thought through the edge cases.
Budget for debt. Add it to your roadmap. Don't bury it or treat it as optional. If you don't plan for it, it won't get done.

Tech debt isn't the enemy. Silence is.

If stakeholders don't see the cost, they'll keep prioritising features over foundations. It's your job to help them see both, and to build a product that lasts.

Tech debt isn't the enemy. Pretending it doesn't exist is.

## 9. A good leader makes themselves less essential
I like the phrase, train your replacement.

That's not about making yourself redundant. It's about building a team that can function and thrive without you needing to be in every meeting, on every thread or making every decision.

There are a few signs I look for when I know I've done this well:

I can delegate more. I trust others with ownership and autonomy. They're growing in their roles and gaining experience they'll use later in their careers.
I get to work on the things I always say I wish I had time for. The kind of work that improves the team long term but usually gets pushed aside because I'm firefighting or keeping process glued together.
I can invest in my own development. Whether that's leadership stretch projects or skills I need for the next level. I have the headspace because I'm not constantly unblocking things.
I can take a proper holiday. If I come back and everything hasn't fallen apart, and I'm not playing catch-up for two weeks, that's a huge win. It means I'm not a bottleneck or a single point of failure.

When people rely on you less, it's not a loss of control. It's a sign that you've built something that lasts. And that's the whole point.

## Summary: Key Takeaways
If you're in engineering leadership, or thinking about stepping into it, here are some key reminders:

Be clear with your stakeholders. Don't leave room for misinterpretation.
Lead by removing blockers, not by holding control.
Process should serve the team, not the other way around.
Build trust by following through, not just talking about it.
Ownership and accountability create stronger, more resilient teams.
Stay calm under pressure and communicate clearly when things go wrong.
Make space for others to lead. You don't need to be the loudest voice in the room.
Use 1:1s to connect, not control.
Manage tech debt intentionally. It won't disappear on its own.
The mark of good leadership is being able to step away without everything falling apart.

Leadership isn't about having all the answers. It's about helping others succeed, setting up systems that last, and building teams that trust each other.

If anything here resonates, or you've got your own lessons to share, I'd love to hear them.`,
    url: '/blog/leadership-lessons',
    image: createBlogImage('leadership-lessons', 'Leadership diagram showing team connection', 'leadership-playbook.jpeg'),
    date: setDate('May 19 2024')
};

export default leadershipLessonsBlog;