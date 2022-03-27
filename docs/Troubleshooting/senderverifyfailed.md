# SENDER VERIFY FAILED

If you see this error, let me outline the most likely scenario:

## The Scenario
Let’s say your account with us is on the server Arrow (it could be another, this is just an example). On the Arrow server you’ve added two domains:

    yourfirstdomain.com
    yourseconddomain.com

Now you also have yourfirstdomain.com hosted **at another service**, and **you haven’t moved it here yet**. You did, however, finish moving yourseconddomain.com to our server.

Now **you sent an email from the old email provider** for yourfirstdomain.com, to yourseconddomain.com, and received this error back.

This is because Arrow says “You told me I host this domain. I don’t deliver email from domains that I host without password authentication.” Obviously, your old host isn’t sending a password to Arrow to authenticate as yourfirstdomain.com, so “Sender verify failed.”

## Your Options
**Option 1**: Just don’t use this weird transition period to test your email using that specific scenario. You’re only sending test emails anyway, right? Almost every single person that contacts us about this is just “testing” after moving one of their domains to us. If that’s you, it likely isn’t worth you taking the second choice for a “test” just to have to reverse it later (and forget you did it, leading to yet another common error).

**Option 2**: Disable the inbound email for the domain you were sending FROM (in our example it was yourfirstdomain.com) via DirectAdmin on our server.

**Option 3**: Remove the domain from DirectAdmin. If you don’t intend to host it here, no need to have it on the server.

## The mildly destructive fix
This is the #2 option from above.

**Step 1**: [Login to DirectAdmin](https://mxroute.com/docs/login-to-directadmin/).

**Step 2**: Click E-mail Manager on the left side.

**Step 3**: Click “Email Routing” under that.

**Step 4**: Uncheck “Use this server…”

**Step 5**: Click Save

You need to reverse that checkbox if you move that domain to us later.

