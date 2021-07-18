---
title: "Venmo Deeplinking (from mobile or the web)"
date: "2020-07-29"
tags: ["web", "apis", "venmo"]
---

This post discusses the discovery of and details on an undocumented but super useful functionality of Venmo that I discovered while building an [app that enables sharing credit card transactions directly to Venmo and Splitwise](https://reconcile.app).

### TL;DR

Venmo has undocument deep links that work both from mobile _and_ the web.
See the details [here](#the-solution)

## The problem

I built [Reconcile](https://reconcile.app) because I was tired of sifting through my various credit card/bank statements whenever I had a transaction I needed to split with a friend. The data was easily accessible using a service like [Plaid](https://plaid.com), and it never made any sense to me why I had to perform so many manual steps to get data from my credit card statement in Venmo or Splitwise. So...I decided to build a connector of sorts. Splitwise was my first target because I use it religiously with my girlfriend, but at some point I realized that restricting the app to only work on Splitwise was going to seriously limit the target market.

What's the most popular p2p payment app in the US? Venmo of course.

No problem, I'll just head on over to their API documentation...oh wait, they _used_ to have an API but sometime after PayPal bought them they stopped onboarding new customers? That's understandable, Venmo has been ripe for fraud in the past and providing API access to moving money around is probably not the _best_ idea.

Great, I'll just use deep linking to let users send the payment data to Venmo and let the transaction take place within the relative safety of their app...oh wait, there's no public documentation on how deep linking works on Venmo!?

Man they aren't making it easy for me.

After some digging around on the internet I discovered [this blog post](https://blog.alexbeals.com/posts/venmo-deeplinking) detailing how the author (Alex Beals) cracked the mobile Venmo app to find a list of deeplinking strings that would send you into Venmo to perform various takes.

For example, the main one I was looking for was this one: `venmo://paycharge?txn=pay&recipients=Alex-Beals&amount=10&note=Note` which I found in a Venmo sample application.

My problem was that Reconcile was built as a web application and browsers do not recognize deeplinks in the same way native operating systems do.

NOTE: I haven't tested any of them, but you are interested in native deep links check out [Alex's post](https://blog.alexbeals.com/posts/venmo-deeplinking) for more info although in all honesty, using the method I document below is likely easier.

## The Discovery

I had basically written off being able to do any deep linking into Venmo from the web and figured I'd have to port Reconcile to native in order to take advantage of the intel I'd gathered. This wasn't a high priority for me at the time, but it was floating around in the back of my head.

One day, I was scrolling through twitter and I saw this:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://t.co/lDjghRTKW3">http://bailout.nyc</a> is a great project from the OG venmo crew to help NYC businesses -- by <a href="https://twitter.com/kortina?ref_src=twsrc%5Etfw">@kortina</a> <a href="https://twitter.com/iqramband?ref_src=twsrc%5Etfw">@iqramband</a> and others... check it out, donate, clone for your city. <a href="https://t.co/XeQSzVWcMs">https://t.co/XeQSzVWcMs</a></p>&mdash; sam lessin (@lessin) <a href="https://twitter.com/lessin/status/1241560804140302336?ref_src=twsrc%5Etfw">March 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Not thinking too much of it, I clicked through to poke around. bailout.nyc was a platform where small business owners could add their Venmo account and then users of the site could pay them directly to help them during the dark times early in the global coronavirus pandemic. (bailout.nyc has since changed from what it first was and now funnels all payments to a NYC community bail fund - more power to them!). While on the site, I discovered HTML links that when clicked on mobile resulted in the Venmo app being opened along with transaction details filled in. AH HA! this was exactly what I needed. Unsurprising that this site was built by one of the founders of Venmo...

<h2 id="the-solution">The Solution</h2>

All of the links I found on (bailout.nyc)[https://bailout.nyc] followed the form `https://venmo.com/<USER_NAME>?txn=pay&note=from%20bailout.nyc`, but after playing around with the parameters I figured you could sub `charge` for `pay` and then you could not only pay other people, but request money as well (which I needed for Reconcile). I figured out you could pass multiple comma separted usernames and it would still work and initialize the creation of multiple payment requests in app.

This is the deeplink syntax:
`https://venmo.com/<USER_NAME_1>,<USER_NAME_2>...?txn=<charge|pay>&note=<NOTE>&amount=<AMOUNT>`

Even after finding this, one of the problems I ran into was that there's no way to a pull the list of a user's friends from Venmo (no API remember?). After poking around a bit I discovered that you can use this link with either a phone number, or an email address and as long as it's associated with the user account who you'd like to charge/pay Venmo will resolve it to their account once they take control. If you don't know any of those three, you can also use a link with NO username and just attach the username in app once you're able to search for it (like this `https://venmo.com/?txn=charge&note=pizza&amount=9.34`).

#### Caveat

Venmo no longer allows initiating transactions from their website, so what this does it open a link that the Venmo app has registered on mobile and for which it takes over the experience. If you use these links from a non-mobile device the will take you to the Venmo website but _will not_ allow you to create the transaction.

## End note

I kept this discovery secret for a while thinking it would be my competitive advantage, and thinking that Venmo might try to close this loophole at some point. After having several people message me asking about it, I just decided to make it public in hopes that other people can also build cool stuff with it. I've got my fingers crossed that Venmo doesn't make it _even_ harder to build capabilities on top of their platform.

### References

- https://blog.alexbeals.com/posts/venmo-deeplinking - Native deep linking into the Venmo app
- https://www.reddit.com/r/webdev/comments/ecxf7f/apideeplinking_for_p2p_payments/ - Why don't p2p payment services make it easier to build on top of their platform!?
- https://twitter.com/lessin/status/1241560804140302336 - the tweet that sent me on the right path
- https://bailout.nyc/ - where my discovery was made
