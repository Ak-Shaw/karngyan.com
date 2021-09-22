---
id: 2
title: Hacking away this HacktoberFest 2020
# image field is not mandatory
# you can skip it to keep the size of blog cards small
# image: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80
createdAt: "2020-11-17 5:00:00"
tags:
  - hacktoberfest
  - opensource
  - medium
category: hacktoberfest
author:
  name: ayush
  twitter: akshawz
  image: /images/my-first-perfect-selfie.jpg
---

<span style="font-family: 'Courier New', monospace;">
Digital Ocean's initiative to introduce open source to the world is a festival just like any festival we people celebrate. Well now I do have 2 things to look forward to each October now. 😁

Let's see, how on my first ever HacktoberFest I ended up as both a contributor as well as a maintainer!! 🤯

<!--more-->

![Hacktoberfest banner — Digital Ocean](/images/hacktoberfest-banner-2.png)

> *Software has always mesmerized everyone, and it’ll keep doing so until we have rockstar-level-enthusiastic developers around. Bill Gates once said, “Software is the magic thing whose importance only goes up over time.” Robert M. Pirsig further stated in his book ‘Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values’ that “The test of the machine is the satisfaction it gives you. There isn’t any other test. If the machine produces tranquility it’s right. If it disturbs you it’s wrong until either the machine or your mind is changed.”*

That being said, recently *Digital Ocean’s OSS festive season*, the one and only, ***Hacktoberfest***, lurked away last month.

But wait! Do you have the faintest clue what’s Hacktoberfest?

Well, first question — *what’s this **OSS***?
**OSS** stands for *Open Source Software*. Open Source Software is free software for which the source code is open to all, and anyone is free to propose their adjustments to someone else’s code, or use the code and make adjustments to it for self-use.

<span style="font-family:Papyrus; font-size:4em;">H</span>acktoberfest is a month-long celebration of *Open Source*, hosted by *Digital Ocean*, partnered with *GitHub* and *DEV.to*. It is an initiative by Digital Ocean to promote open source to the masses and specifically targeting the noobs, who’re new to the open-source culture, I know I was, since this was my first Hacktoberfest, that too *as both a contributor, as well as a maintainer*. We’ll soon come to that.

According to the challenge, one was required to make *4 valid pull requests* on a GitHub repository that participated in Hacktoberfest(I’ll leave the *‘What’s a pull request?’* question and other questions of the same nature for the curious cats).

![Abigail Colina on Dev.to](/images/dev-stickers.png)

At first, I thought that I’ll start working on my pull requests on the 1st of October starting at 00:00 since that’s when the event started. I was pumped up, ’cause only the first 70,000 people who complete the challenge get the goodies, i.e., a limited-edition T-shirt and stickers, etc. Nevertheless, even though I started a little late on the same day, I managed to pull off my first 4 pull requests the very first day, since I kept slamming my keyboard straight until I was done with at least 4 PRs. But after that, I continued my activity, since it was a load of fun.

![Acknowledgement from Digital Ocean on completing the challenge](/images/hacktoberfest-completion.png)

Soon, after the 14 day review period was over, I received the mail from Digital Ocean that I’ve successfully completed the challenge. That sure was one *blissful* day of my life! *I really can’t express it in words, my bad*.

But soon, something unexpected happened. A startup named Crio.Do, which acts as an E-learning platform for software developers, came into the picture. I’ve done a couple of programs on the beloved platform this year. They approached me to be one of their maintainers for the new GitHub organization they were setting up and inaugurating this *Hacktoberfest*. I was in awe that I just started in open source, and I’m already getting a chance to work as a maintainer. Well, Crio.Do did train me well to face real-world problems that software developers face in their day-to-day lives.

![Crio.Do — I Believe in Doing](/images/crio-ibd-banner.png)

Crio.Do has recently adopted a new trend of doing community-centered events, and calls them *#IBelieveInDoing* challenges. What I’m talking about is their *#IBelieveInDoing Hacktoberfest edition challenge*. Generally when Crio.Do does these events, they are well-coordinated and backed up by the Crio Team, but this October edition of the **IBD** challenge was quite *different*. Different in the sense that the entrepreneurial minds behind Crio.Do thought to take a risk to involve like-minded enthusiastic individuals, like me, to take the wheel of the entire event this time! In other words, this October edition of the IBD, the Crio Team had the least involvement in, and they wanted to play an experiment, whether we can have a community program, which is technically being hosted by the community! The truth being said, most community programs are this way, for there’s a reason why volunteering exists. *It turned out to be a great success, and did exceed way past expectations.*

Nevertheless, I had a real dose of fun and learnings from my experience. I acted as a lead in the PR management team, a team of a total of five, with two acting as the lead. Crio’s version of Hacktoberfest started on the 17th of October till the end of the month. The main idea behind Crio’s Hacktoberfest was to let the community create learning content for software developers, contents which are pieces of digestible bytes, called MicroBytes. Basically speaking, it comprised of content that can be covered in roughly 1–2 hours of strict attention.

Let’s now discuss some of the significant days of the event.

***17th — Day 1***

![](/images/crio-animated-2d-guy-with-glasses.png)

We had our kickoff call with Kiran Suresh, a lead product engineer at Crio.Do, and a guest, Ashish Jha, Conversation Design Engineer at Vixen Labs, Alexa Pioneer & a GSoC Mentor. (Again, a question for curious cats, ‘What’s GSoC?’).
The initial, bare minimum, setup of the repositories was taken care of. But, there was quite some lack in the current workflow, ’cause there was barely any. During the evening we had a discussion in our Slack workspace regarding the same, which led to a couple of ideas, for which I had to work overnight so that the new workflows can get into place. The new workflows involved proper CONTRIBUTING.md, issue and PR templates, and proper instructions for the review procedure.

***18th***
All the earlier proposed workflows were set in motion. Furthermore, I created a video walkthrough for the same, so that even beginners could find their way.

***19th***
The announcement for the new workflows for the organization was made. As a result, the participants quickly started to adapt to the workflow, and we started getting proper quality traffic in terms of pull requests. I also did the integration testing for our first, and currently only, bot. The task of this bot was to acknowledge the contributors to a repository.

Then it was followed by days of constant unending reviewing of pull requests and requesting changes in the same, along with having late-night meetings to resolve randomly arising issues. We soon realized that people can be bugs too! For we faced our share of problematic participants during the fest.

***30th*** and ***31st*** were the most pressurized days for us, for we encountered the most PRs on these last two days. The time when people generally slack off, we were getting huge traffic! Moreover, the last submission was made at exactly ***00:00*** on the *1st of November*. ***Talk about timing!***

After the *Hacktoberfest* ended, we had our debrief call, about 2 weeks later, and the way the participants shared there +ve reviews with the experience regarding the event organizing, and active interactions on GitHub and Slack, all of the PR team members were surely satisfied that all of our late night meetings bore their fruit.

More than satisfaction, *contentment* is what is desired by the heart of any individual, and that is what all the PR team members received from the community on the day of the debrief call. It was the same for the Crio team as well.

After all, *opensource is for the community by the community.*

> *“Empowerment of individuals is a key part of what makes open source work, since in the end, innovations tend to come from small groups, not from large, structured efforts.” — Tim O’Reilly*

</span>

<span style="font-family:'Brush Script MT', cursive; font-size:2em">
Pour some 💞 to this blog right <a href="https://medium.com/@ayushshawz/hacking-away-this-hacktoberfest-2020-b2dd8b61334c">here</a>!
</span>