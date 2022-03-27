# Do you block inbound emails? Can you not?

Every few weeks a customer will approach us with the realization that we block some inbound email, and will appear to be amazed by the understanding that we would be so bold as to block emails before they have a chance to review the emails, or without them having the ability to disable it. It is usually followed by a request that we completely opt them out of any filtering, and that we leave them 100% in the driver's seat. In short, they want 100% of email that is addressed to them and anything less is offensive, unprecedented, and unacceptable. This is based on a few things, and at least part of it is based on faulty logic.

Every single email service that exists blocks some email that you do not ask them to, at a level that sits above your ability to control by adjusting your user level spam filters. Any exception can only be assumed to be run by amateurs. Sure, we all have different criteria, but that's normal and expected. So let's go ahead and build a FAQ here around this.

## Google doesn't reject this email, why do you?
The inverse is probably true as well. We probably accept emails that Google rejects. If you wanted Google I assume you'd be their customer and not ours. We build our own systems based on our own data, and our own solutions based on our unique problems. We do not steal intellectual property from Google. Their filters are theirs, ours are ours.

## It's unreasonable to reject email and not let me review what you rejected.
You're welcome to have the opinion and it might inform future product development, but it's not weird, and it's not changing today. Do you know what emails Gmail rejected to your account today? Don't pretend they didn't, they rejected 1,608 emails from our customers in the 24 hours leading up to the writing of this article, and none of that related to our IP reputation (it related purely to the content of the emails, either because the customer sent junk or forwarded junk email that made it past our filters). Where are these Gmail users throwing their hands up in disgust at this totalitarian idea that emails would be rejected without their express consent? Exactly. Just because you didn't know it was happening EVERYWHERE, doesn't mean we should be the ONLY email service that isn't rejecting email.

## It doesn't hurt you, it's my problem. Just let me get every single email addressed to me!
See that's where you're wrong, and that's exactly why every single email service rejects emails. Because you can't be expected to know what it takes to run a stable email service. If you could, why aren't you doing it? You came here because we're the experts and we know how to keep things under control. You haven't seen the exponential growth of inbound mail due to unfiltered catchall addresses that resulted in inode counts that caused delayed read/writes on an array and therefore damaged performance for every neighboring user. Why would you have? Well we have. You know those shared hosting companies that always start out amazing and then, after a few years, always seem to go to shit? It's exactly because they listen demands like this and slowly chip away at their server performance over time, never seeing the big picture until it's too late.

## I didn't agree to this.
Then what exactly did you agree to? If it wasn't to let someone else manage a very complicated service model for you, what exactly was your reason for signing up at all? Anyone can run a mail server, but not just anyone can do the work it takes to balance cost, performance, deliverability, and security. You came here because you trusted us to run a service. If your assumption was that we would let it idle and never maintain it, you made a very incorrect assumption.

## If all of these other companies are doing it, why aren't they talking about it?
Now there's the right question. All too often transparency at MXroute is mistaken for involving things that are unique and not happening elsewhere, because the others aren't talking about the same problems. Don't mistake our transparency for being the only ones doing this. A lack of transparency is merely that and nothing else, a lack of transparency.

## Well, I still need to receive 100% of all emails addressed to me. Nice story, but I don't accept it.
The only option you have is to run your own mail server. Just because we reject EmailA and another service doesn't, that isn't evidence that they're not doing it too. It is only evidence that, like us, their filters are uniquely built for them. If we all built the same filters that would be kind of redundant, and if we all used the same filters then spammers would know how to penetrate every email service all of the time. Spammers are humans, you know, they're capable of intelligent thought. That filters are not 100% standardized is actually a good thing.

## Can you make an exception for a particular email?
Quite possibly. You'll be happy to know that unlike most of the other services we're referring to, you can actually influence our filters. For one, they're [open source](https://github.com/mxroute/rspamd_rules). Also, just open a ticket and tell us the sender, recipient, and if possible the email subject and error they received from our servers.


