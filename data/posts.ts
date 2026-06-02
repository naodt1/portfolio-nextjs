export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "bystander-effect-llm-agents",
    title: "Do AI Agents Freeze in a Crowd?",
    date: "2026-05-17",
    summary:
      "A 1968 experiment, a murdered woman, 38 witnesses who did nothing, and a myth that shaped psychology for 50 years. Now we're asking the same question about AI — and the answer might expose something uncomfortable about how we build multi-agent systems.",
    tags: ["AI", "Research", "Social Psychology", "LLMs"],
    content: `On March 13, 1964, a young woman named [Kitty Genovese](https://en.wikipedia.org/wiki/Murder_of_Kitty_Genovese) was attacked and killed outside her apartment building in New York City. A newspaper report claimed 38 neighbours witnessed the attack from their windows. Not one called the police. Not one intervened.

The story spread everywhere. Psychologists [John Darley and Bibb Latané](https://en.wikipedia.org/wiki/Bystander_effect#History) used it to anchor one of social psychology's most famous findings: the [bystander effect](https://en.wikipedia.org/wiki/Bystander_effect). The more people present during an emergency, the less likely any individual is to help. [Diffusion of responsibility](https://en.wikipedia.org/wiki/Diffusion_of_responsibility). [Pluralistic ignorance](https://en.wikipedia.org/wiki/Pluralistic_ignorance). [Evaluation apprehension](https://en.wikipedia.org/wiki/Evaluation_apprehension). These became textbook concepts, taught in university courses for decades.

There is just one problem. The story was largely a myth.

![38 witnesses, reportedly](https://i.kym-cdn.com/photos/images/newsfeed/001/401/347/312.jpg)
38 witnesses. Nobody called. Except — that's not really what happened.

# The 38 Witnesses Who Never Were

In 2007, researchers went back to the original case documents. The number 38 came from a newspaper editor, not a police report. The attack happened at 3:30am. Most windows were dark. Several neighbours did shout. Someone did call the police. The clean narrative that launched a thousand psychology lectures was, at its core, a journalistic invention.

Then in 2020, a large-scale study analysed CCTV footage from 219 real public conflict situations across Lancaster, Amsterdam, and Cape Town. The result directly contradicted the lab findings: in 90.4% of cases, bystanders intervened. And the more witnesses were present, the more likely intervention became.

So which is it? Does the crowd paralyse us or mobilise us?

# Context Changes Everything

A 2011 meta-analysis of 105 studies over 40 years offered a more nuanced answer. The bystander effect is real, but it is highly context-dependent. In ambiguous situations — someone sitting oddly on a bench, papers scattered on the floor — people look to each other for cues, see no one acting, and conclude nothing is wrong. Classic [diffusion of responsibility](https://en.wikipedia.org/wiki/Diffusion_of_responsibility) kicks in.

In clearly dangerous situations — a fire, a physical attack, someone collapsing — the effect sharply weakens or disappears entirely. The crowd becomes an asset, not a liability. The same group dynamics that can cause paralysis in uncertainty seem to accelerate action when the threat is obvious.

This matters, because it changes the question we should be asking about AI.

# The Question We Are Actually Asking

[Large language models](https://en.wikipedia.org/wiki/Large_language_model) are trained on enormous corpora of human-generated text — everything from news articles to forum threads to literary fiction. In doing so, they absorb patterns of human social behaviour, including our hesitations, our deference to others, our tendency to read a room before acting.

So here is the question we are investigating: if you put a group of LLM-based agents into a simulated emergency, do they behave like humans? Do they show the bystander effect?

This is not a trivial question. [Multi-agent AI systems](https://en.wikipedia.org/wiki/Multi-agent_system) are increasingly being deployed in high-stakes contexts — collaborative medical diagnosis, emergency response coordination, content moderation at scale. If these systems silently inherit the same social dynamics that cause humans to freeze in crowds, that is a serious design vulnerability. And until now, nobody has directly tested it.

# What We Already Know (And Why It Is Not Enough)

A study published this year found something striking. When researchers ran 22,500 simulated reasoning tasks across LLM swarms, they found that as the group size grew, individual reasoning accuracy collapsed. They called it [cognitive loafing](https://en.wikipedia.org/wiki/Social_loafing) — agents deferring to the group rather than committing to their own internally correct answer.

They introduced the term Sovereignty Gap to describe the moment when an agent knows the right answer but suppresses it to appease the simulated consensus. The first agent to speak — the Lead Anchor — disproportionately shapes what every other agent does. One confident wrong voice, and the whole swarm follows.

That is eerily close to [pluralistic ignorance](https://en.wikipedia.org/wiki/Pluralistic_ignorance). But it was tested on abstract reasoning tasks: logic problems, code debugging. Nobody has tested it on emergency intervention scenarios — the kind that directly mirror the original Darley and Latané experiments.

That gap is exactly what our research is designed to fill.

![AI agents learning from humans](https://i.kym-cdn.com/photos/images/newsfeed/001/240/075/90f.jpg)
Turns out training on human data means inheriting human problems too.

# What We Are Building

I am working on this with a collaborator at [Bauhaus-Universität Weimar](https://en.wikipedia.org/wiki/Bauhaus-Universit%C3%A4t_Weimar). Together we are building an [agent-based simulation](https://en.wikipedia.org/wiki/Agent-based_model) where LLM agents are placed into emergency scenarios of varying severity. One agent plays the victim. The rest are bystanders — each generating internal thoughts and external responses, visible to the user.

We are systematically varying the conditions that matter: group size, danger level, gender composition of the agent profiles, and whether agents have professional qualifications like medical training. We want to know whether the classic bystander mechanisms show up in the agents' internal reasoning — whether we can observe an agent literally thinking something like "someone else will handle it" or "I don't want to make a mistake in front of the others."

The interface will visualise this spatially. Agents close to intervening move toward the victim. Agents hesitating drift away. Users can inspect each agent's internal monologue in real time.

# Why Either Answer Is Interesting

If LLMs do show the bystander effect, it tells us something important: that social dynamics encoded in training data can reproduce psychological phenomena even without biological drives, peer pressure, or anything resembling genuine emotion. That human biases are not just human — they are in the text we used to build these systems.

If they do not show the effect, that is equally significant. It would suggest the bystander effect is deeply rooted in specifically human psychology — in embodiment, in fear, in the social cost of being wrong in front of others — and that AI agents are fundamentally different kinds of actors, not merely digital humans.

Either outcome reshapes how we think about deploying AI in groups. And it raises a question we probably should have asked much earlier: when we design systems where multiple AI agents share responsibility for a decision, have we accidentally baked in the same failure modes that cause humans to watch and do nothing?

We are trying to find out.`,
  },
  {
    slug: "why-i-chose-flutter",
    title: "Why I Chose Flutter for Mobile Development",
    date: "2024-03-15",
    summary:
      "Flutter changed how I build apps. Here's why I picked it over React Native and native development — and haven't looked back.",
    tags: ["Flutter", "Mobile", "Opinion"],
    content: `After spending time exploring [React Native](https://en.wikipedia.org/wiki/React_Native) and native Android development, I landed on [Flutter](https://en.wikipedia.org/wiki/Flutter_(software)) — and it's been the right call for everything I've built since.

# The Cross-Platform Promise (That Actually Works)

Most cross-platform tools promise write-once, run-anywhere but deliver a compromised experience on both platforms. Flutter is different. It renders its own widgets directly to a canvas using [Skia](https://en.wikipedia.org/wiki/Skia_Graphics_Engine) (now [Impeller](https://docs.flutter.dev/perf/impeller)), so the UI is pixel-perfect and identical on iOS and Android. No native component wrappers, no platform inconsistencies.

When I built Debbol, having a single codebase that ran identically on both platforms cut my development time roughly in half compared to what a native approach would have taken.

![why not both](https://i.kym-cdn.com/photos/images/newsfeed/000/993/394/ca6.gif)
iOS and Android. At the same time. From one codebase.

# Dart Is Underrated

I was skeptical about [Dart](https://en.wikipedia.org/wiki/Dart_(programming_language)) at first. It felt like an unnecessary detour when JavaScript already exists. But after a few weeks with it, I genuinely enjoy it. It's typed by default, has excellent [null safety](https://dart.dev/null-safety), and compiles to native ARM code. The syntax is clean and familiar if you know Java or TypeScript.

The tooling is also excellent — dart analyze catches errors before I even run the app.

# Hot Reload Is a Superpower

This sounds minor but it changes everything. With Flutter's [hot reload](https://docs.flutter.dev/tools/hot-reload), I can tweak a widget, adjust padding, or change a color and see the result in under a second without losing app state. For UI-heavy work like building Keepr's password entry screens, this made iteration dramatically faster.

# When I'd Choose Something Else

Flutter isn't always the right tool. If a project needs deep platform-specific APIs, a heavy web presence, or a tiny binary size, the calculus changes. And for pure web apps, React is still my go-to.

But for a solo developer shipping mobile apps? Flutter is the most productive environment I've found.`,
  },
  {
    slug: "building-fixmasters",
    title: "Building FixMasters: Lessons from a Two-Sided Marketplace",
    date: "2024-01-22",
    summary:
      "Building an app that connects users with handymen taught me more about product design than any tutorial. Here's what I learned.",
    tags: ["Flutter", "Firebase", "Product"],
    content: `FixMasters started as a straightforward idea: connect users to local handymen. The execution turned out to be anything but straightforward.

# Two Users, Two Apps in One

The hardest part of building a [two-sided marketplace](https://en.wikipedia.org/wiki/Two-sided_market) isn't the code — it's designing for two completely different user types in the same product. Users want simplicity: find someone, book them, done. Handymen want control: manage their gigs, set availability, track bookings.

I ended up building effectively two apps that share a backend — a user-facing app and a handyman dashboard. Keeping the UX coherent across both while serving different mental models was the biggest design challenge I've faced.

![users vs handymen](https://i.kym-cdn.com/photos/images/newsfeed/001/240/075/90f.jpg)
Two completely different users. One app. What could go wrong.

# Firebase Was the Right Backend Call

For the scope of FixMasters, Firebase was the right choice. [Firestore's](https://firebase.google.com/docs/firestore) real-time listeners made the chat feature straightforward to build — messages appear instantly without polling. [Firebase Auth](https://firebase.google.com/docs/auth) handled the multi-role user system cleanly.

The tradeoff is cost predictability at scale. Firestore's read-based pricing can get expensive fast with a busy chat feature. For a larger production app, I'd evaluate a [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) backend more seriously.

# Real-Time Chat Is Deceptively Hard

Chat looks simple from the outside. Under the hood, you're dealing with message ordering, delivery receipts, push notifications, and offline queuing. The Convo project I built separately helped me understand these patterns before I had to implement them in FixMasters.

The key insight: model messages as immutable events, not mutable records. [Append-only data structures](https://en.wikipedia.org/wiki/Persistent_data_structure) make conflict resolution trivial.

# Location Matching Without Maps

The "nearest handyman" feature doesn't actually use a map UI — it's a background calculation comparing [geohashes](https://en.wikipedia.org/wiki/Geohash) stored in Firestore. Geohash-based proximity queries are a clever trick that lets you find nearby documents without a dedicated geospatial database. The Mapbox experience from Debbol informed this approach.

# What I'd Do Differently

I'd invest more in onboarding for handymen. Getting supply-side users to complete their profile, add their services, and stay engaged is harder than getting demand-side users to place a booking. Onboarding friction kills marketplaces.`,
  },
];
